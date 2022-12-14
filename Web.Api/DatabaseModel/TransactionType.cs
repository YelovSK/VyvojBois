﻿using System;
using System.Collections.Generic;

namespace Vyvoj.DatabaseModel;

public partial class TransactionType
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<Transaction> Transactions { get; } = new List<Transaction>();
}
