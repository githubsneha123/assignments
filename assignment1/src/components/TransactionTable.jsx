import React from "react";

const TransactionTable = ({ transactions }) => {
  return (
    <div className="card shadow-sm border-0 rounded-4">
      <div className="card-body">
        <h6 className="fw-semibold mb-3">Latest Loads</h6>
        <div className="table-responsive">
          <table className="table table-borderless align-middle mb-0">
            <thead className="text-muted small border-bottom">
              <tr>
                <th>Date & Time</th>
                <th>Credit</th>
                <th>Account Balance</th>
                <th>UTR/RRN</th>
                <th>A/c No / UPI</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t, idx) => (
                <tr key={idx}>
                  <td className="text-muted small nowrap">
                    {t.date} {t.time}
                  </td>
                  <td className="text-success fw-semibold nowrap">
                    ₹ {t.credit.toLocaleString("en-IN")}
                  </td>
                  <td className="nowrap">₹ {t.balance.toLocaleString("en-IN")}</td>
                  <td className="text-muted small nowrap">{t.utr}</td>
                  <td className="text-muted small nowrap">{t.acc_or_upi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
