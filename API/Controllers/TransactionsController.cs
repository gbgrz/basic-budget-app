using System.Collections.Generic;
using System.Threading.Tasks;
using Application;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionsController : ControllerBase
    {
        private readonly ITransactionService _transactionService;
        public TransactionsController(ITransactionService transactionService)
        {
            this._transactionService = transactionService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Transaction>>> GetAll()
        {
            return await this._transactionService.GetAll();
        }
        [HttpPost]
        public async Task<ActionResult<Transaction>> Create(Transaction transaction)
        {
            return await this._transactionService.CreateTransaction(transaction);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id) 
        {
            await this._transactionService.Delete(id);

            return Ok();
        }
    }
}