using Microsoft.EntityFrameworkCore;
using Vyvoj.DatabaseModel;

namespace Vyvoj.Repository;

public class TransactionRepository : ITransactionRepository
{
    private readonly Whiyes5oContext _context;
    
    public TransactionRepository(Whiyes5oContext context)
    {
        _context = context;
    }

    public IEnumerable<Transaction> GetAllTransactions()
    {
        return _context.Transactions
            .Include(i => i.User)
            .Include(i => i.TransactionType)
            .ToList();
    }

    public Transaction? GetTransaction(int id)
    {
        return _context.Transactions
            .Include(i => i.User)
            .Include(i => i.TransactionType)
            .FirstOrDefault(i => i.Id == id);
    }
}