const customerData = [
    { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
    { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
  ];
const dbName = "the_name";

let request = indexedDB.open(dbName,2);

request.onerror = function(event){
    //错误处理
}

request.onupgradeneeded = function(event){
    let db = event.target.result;


     // 建立一个对象仓库来存储我们客户的相关信息，我们选择 ssn 作为键路径（key path）
  // 因为 ssn 可以保证是不重复的
    let objectStore = db.createObjectStore('customers',{keyPath:'id'});

    // 建立一个索引来通过姓名来搜索客户。名字可能会重复，所以我们不能使用 unique 索引
    objectStore.createIndex('name','name',{unique:false});

    // 使用邮箱建立索引，我们向确保客户的邮箱不会重复，所以我们使用 unique 索引
  objectStore.createIndex("email", "email", { unique: true });

  objectStore.transaction.oncomplete = function(event){
    let customersObjectStore = db.transaction('customers','readwrite').objectStore('customers');
    customerData.forEach(function(customer){
        customersObjectStore.add(customer);
    });
  };
};