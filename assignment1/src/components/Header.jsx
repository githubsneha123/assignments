import React from 'react';

const Header = ({ companies, selectedCompany, handleCompanyChange, selectedAccount, handleAccountChange }) => {
  return (
    <header className="d-flex justify-content-between align-items-center bg-white p-3 border-bottom shadow-sm">
      <div className="d-flex gap-2">
        <select
          className="form-select form-select-sm"
          style={{ width: '200px' }}
          value={selectedCompany?.id || ''}
          onChange={(e) => handleCompanyChange(e.target.value)}
        >
          {companies.map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>

        <select
          className="form-select form-select-sm"
          style={{ width: '180px' }}
          value={selectedAccount?.id || ''}
          onChange={(e) => handleAccountChange(e.target.value)}
          disabled={!selectedCompany}
        >
          {selectedCompany?.accounts.map(acc => (
            <option key={acc.id} value={acc.id}>{acc.name}</option>
          ))}
        </select>
      </div>

      <div className="fw-semibold text-muted">
        👤 demo@domain.com
      </div>
    </header>
  );
};

export default Header;
