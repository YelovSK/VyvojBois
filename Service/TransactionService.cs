using Vyvoj.DatabaseModel;
using Vyvoj.Repository;
using Vyvoj.ViewModel;

namespace Vyvoj.Service;

public class TransactionService : ITransactionService
{
    private readonly ITransactionRepository _transactionRepository;

    public TransactionService(ITransactionRepository transactionRepository)
    {
        _transactionRepository = transactionRepository;
    }

    public List<TransactionViewModel> GetAllTransactions()
    {
        var transactions = _transactionRepository.GetAllTransactions();

        return transactions.Select(transaction => new TransactionViewModel
            {
                TransactionId = transaction.Id,
                AccountNumber = transaction.AccountNumber,
                Amount = transaction.Amount,
                BankCode = transaction.BankCode,
                FullName = transaction.User.Name,
                IssueDate = transaction.IssueDate,
                TransactionType = transaction.TransactionType.Name,
            })
            .ToList();
    }

    public TransactionViewModel? GetTransactionById(int id)
    {
        var transaction = _transactionRepository.GetTransaction(id);

        if (transaction == null)
        {
            return null;
        }

        return new TransactionViewModel
        {
            AccountNumber = transaction.AccountNumber,
            Amount = transaction.Amount,
            BankCode = transaction.BankCode,
            FullName = transaction.User.Name,
            IssueDate = transaction.IssueDate,
            TransactionType = transaction.TransactionType.Name
        };
    }
}