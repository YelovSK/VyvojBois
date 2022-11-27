using Transaction = Vyvoj.DatabaseModel.Transaction;

namespace Vyvoj.Repository;

public interface ITransactionRepository
{
    IEnumerable<Transaction> GetAllTransactions();
    
    Transaction? GetTransaction(int id);
}