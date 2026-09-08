//overview section
let balanceD = document.querySelector(".dbalance");
let incomeD = document.querySelector(".dincome");
let expenseD = document.querySelector(".dexpense");
let expenseA = document.querySelector(".aexpense");
let balanceA = document.querySelector(".abalance");
let transactions = document.querySelector(".atransactions");
//form
let form = document.querySelector("#transaction-form");
let description = document.querySelector("#description");
let amount = document.querySelector("#amount");
let category = document.querySelector("#category");
let date = document.querySelector("#date");
let select = document.querySelector("#genus");
//transaction list
let trancastionList = document.querySelector(".transactions-list");
let trancastionItem = document.querySelector(".transaction-item");
let resultDesc = document.querySelector(".tx-desc");
let resultCat = document.querySelector(".tx-cat");
let resultDate = document.querySelector(".tx-date");
let resultAmount = document.querySelector(".tx-amount");
let btnTrans = document.querySelector(".btn");
// khus sy let kye
let expensesTotal;
let incomeTotal;
let arr = JSON.parse(localStorage.getItem("array")) || [];
///Search
let filterSelect = document.querySelector(".filter-select");
///select logic
filterSelect.addEventListener("change", () => {
  if (filterSelect.value == "") {
    render();
  } else if (filterSelect.value == "income") {
    let newarr = arr.filter((ele, idx) => {
      return ele.type == filterSelect.value;
    });

    render(newarr);
  } else if (filterSelect.value == "expense") {
    let newarr = arr.filter((ele, idx) => {
      return ele.type == filterSelect.value;
    });
    render(newarr);
  }
});
/// after refresh data remain there
render();
total();
/// form submisiion logic
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (editingIndex !== null) {
    arr[editingIndex].description = description.value;
    arr[editingIndex].category = category.value;
    arr[editingIndex].date = date.value;
    arr[editingIndex].amount = amount.value;
    localStorage.setItem("array", JSON.stringify(arr));
    editingIndex = null;
    render();
    total();
    btnTrans.textContent = "submit";
  } else {
    arr.push({
      description: description.value,
      category: category.value,
      date: date.value,
      amount: Number(amount.value),
      type: select.value,
    });
    render();
    total();
    localStorage.setItem("array", JSON.stringify(arr));
  }
});
function total() {
  expensesTotal = arr.reduce((acc, ele, idx) => {
    let value = ele.type == "expense" ? ele.amount : 0;
    return acc + value;
  }, 0);

  incomeTotal = arr.reduce((acc, ele, idx) => {
    let value = ele.type == "income" ? ele.amount : 0;
    return acc + value;
  }, 0);
  incomeD.textContent = incomeTotal;
  expenseA.textContent = expensesTotal;
  expenseD.textContent = expensesTotal;
  balanceA.textContent = incomeTotal - expensesTotal;
  balanceD.textContent = incomeTotal - expensesTotal;
  transactions.textContent = arr.length;
}
//use of default params
function render(Array = arr) {
  trancastionList.innerHTML = "";

  Array.forEach((ele, idx) => {
    trancastionList.innerHTML += `
    <div class="transaction-item">
   <div class="tx-info">
   <span class="tx-desc">description:${ele.description}</span>
   <span class="tx-cat"> Category:${ele.category}</span>
   <span class="tx-date">Date:${ele.date}</span>
   </div>
   <div class="tx-right">
   <span class="tx-amount ${ele.type}">Amount:${ele.amount}</span>
   
                </div>
                </div>
   <button onclick="Delete(${idx})" class="delete-btn">×</button>
        <button onclick="Edit(${idx})"class="edit">Edit</button>
    </div>
          
                `;
    description.value = "";
    category.value = "";
    date.value = "";
    amount.value = "";
  });
}
let editingIndex = null;
function Edit(edit) {
  let idxedit = arr.find((ele, idx) => {
    return idx == edit;
  });
  description.value = idxedit.description;
  category.value = idxedit.category;
  date.value = idxedit.date;
  amount.value = idxedit.amount;

  btnTrans.textContent = "UPDATE";
  editingIndex = edit;
}
function Delete(delindx) {
  arr = arr.filter((ele, idx) => {
    return idx !== delindx;
  });
  localStorage.setItem("array", JSON.stringify(arr));
  render();
  total();
}
