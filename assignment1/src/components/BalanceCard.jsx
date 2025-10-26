import React from "react";

const BalanceCard = ({ account }) => {
  return (
    <div className="card shadow-sm border-0 rounded-4 h-100">
      <div className="card-body text-center d-flex flex-column justify-content-center">
        <div className="fs-1 mb-2">💰</div>
        <h6 className="text-muted mb-1">Available Balance</h6>
        <h3 className="fw-bold text-success mb-2">
          ₹ {account.balance.toLocaleString("en-IN")}
        </h3>
        <p className="text-secondary small mb-0">{account.name}</p>
      </div>
    </div>
  );
};

export default BalanceCard;
