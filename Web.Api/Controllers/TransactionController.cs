using Microsoft.AspNetCore.Mvc;
using Vyvoj.Service;
using Vyvoj.ViewModel;

namespace Vyvoj.Controllers;

[ApiController]
[Route("api/transaction")]
public class TransactionController : ControllerBase
{
    private readonly ILogger<TransactionController> _logger;
    private readonly ITransactionService _transactionService;

    public TransactionController(ILogger<TransactionController> logger, ITransactionService transactionService)
    {
        _logger = logger;
        _transactionService = transactionService;
    }

    [HttpGet(Name = "GetAll")]
    public List<TransactionViewModel> GetAll()
    {
        var transactions = _transactionService.GetAllTransactions();

        return transactions;
    }

    [HttpGet("{id}", Name = "GetById")]
    public TransactionViewModel? GetById(int id)
    {
        var transaction = _transactionService.GetTransactionById(id);

        return transaction;
    }
}