using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;

namespace Application
{
    public interface ITransactionService
    {
        Task<List<Transaction>> GetAll();
        Task<Transaction> CreateTransaction(Transaction newTransaction); 
        Task Delete(string id);
    }
}