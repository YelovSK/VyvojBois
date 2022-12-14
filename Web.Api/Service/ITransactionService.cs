using Vyvoj.ViewModel;

namespace Vyvoj.Service;

public interface ITransactionService
{
    public List<TransactionViewModel> GetAllTransactions();

    public TransactionViewModel? GetTransactionById(int id);
}