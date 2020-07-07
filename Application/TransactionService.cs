using Application.Errors;
using Domain;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

namespace Application
{
    public class TransactionService : ITransactionService
    {
        private readonly DataContext _context;
        public TransactionService(DataContext context)
        {
            this._context = context;
        }

        public async Task<Transaction> CreateTransaction(Transaction newTransaction)
        {
            if (newTransaction.Id == null)
            {
                newTransaction.Id = Guid.NewGuid();
            }

            this._context.Transactions.Add(newTransaction);

            var success = await this._context.SaveChangesAsync() > 0;

            if (!success)
            {
                throw new Exception("Problem saving data.");
            }

            return newTransaction;
        }

        public async Task Delete(string id)
        {
            Guid guidId; 
            if (!Guid.TryParse(id, out guidId))
            {
                throw new RestException(HttpStatusCode.BadRequest, new { transaction = "Invalid id" });
            }

            var transaction = await this._context.Transactions.FindAsync(guidId);

            if (transaction == null)
            {
                throw new RestException(HttpStatusCode.BadRequest, new { transaction =  "Transaction does not exist." });
            }

            this._context.Transactions.Remove(transaction);

            var success = await this._context.SaveChangesAsync() > 0;

            if (!success)
            {
                throw new Exception("Problem saving data.");
            }
        }

        public async Task<List<Transaction>> GetAll()
        {
            return await this._context.Transactions.ToListAsync();
        }
    }
}