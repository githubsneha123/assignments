import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import BalanceCard from "../components/BalanceCard";
import TransactionTable from "../components/TransactionTable";

const Dashboard = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedAccount, setSelectedAccount] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/companies")
      .then((res) => res.json())
      .then((data) => {
        setCompanies(data);
        if (data.length > 0) {
          setSelectedCompany(data[0]);
          setSelectedAccount(data[0].accounts[0]);
        }
      });
  }, []);

  const handleCompanyChange = (id) => {
    const company = companies.find((c) => c.id === id);
    setSelectedCompany(company);
    setSelectedAccount(company?.accounts[0] || null);
  };

  const handleAccountChange = (id) => {
    const account = selectedCompany.accounts.find((a) => a.id === id);
    setSelectedAccount(account);
  };

  return (
    <div className="d-flex w-100" style={{ minHeight: "100vh", overflow: "hidden" }}>
      <Sidebar />
      <div className="flex-fill bg-light d-flex flex-column" style={{ overflowX: "hidden" }}>
        <Header
          companies={companies}
          selectedCompany={selectedCompany}
          handleCompanyChange={handleCompanyChange}
          selectedAccount={selectedAccount}
          handleAccountChange={handleAccountChange}
        />
        <div className="flex-fill container-fluid py-4 px-4">
          {selectedAccount ? (
            <div className="row g-4 align-items-start">
              <div className="col-md-4 col-lg-3">
                <BalanceCard account={selectedAccount} />
              </div>
              <div className="col-md-8 col-lg-9">
                <TransactionTable transactions={selectedAccount.transactions} />
              </div>
            </div>
          ) : (
            <div className="text-center text-muted mt-5">Select a company/account</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
