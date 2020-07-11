using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;

namespace Application
{
    public interface ITransactionService
    {
        Task<List<Transaction>> Get(DateTime budgetMonth);
        Task<Transaction> CreateTransaction(Transaction newTransaction); 
        Task Delete(string id);
    }
}