using System;
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

        [HttpGet("{budgetMonth}")]
        public async Task<ActionResult<List<Transaction>>> Get(DateTime budgetMonth)
        {
            return await this._transactionService.Get(budgetMonth);
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