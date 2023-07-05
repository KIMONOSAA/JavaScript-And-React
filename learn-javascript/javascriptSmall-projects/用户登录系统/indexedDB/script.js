const indexedDB = 
    window.indexedDB ||
    window.mozIndexdDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;


const request = indexedDB.open("CarsDatabase",1);

request.onerror = function(event){
    console.error("HAHA ERROR IN IndexedDB");
    console.error(event);

};

request.onupgradeneeded = function(){ //创建对象储存仓库
    const db = request.result;
    const store = db.createObjectStore("cars",{keyPath:'id'});   //这些相当于数据库中的字段
    store.createIndex("cars_colour",["colour"],{unique:false});
    store.createIndex("colour_and_make",["colour","make"],{
        unique:false,
    });
};

request.onsuccess = function(){ //创建一个事务
    const db = request.result;
    const transaction = db.transaction("cars","readwrite");

    const store = transaction.objectStore("cars");
    const colourIndex = store.index("cars_colour");
    const colourMakeIndex = store.index("colour_and_make");

    store.put({ id: 1, colour: 'Red', make: "Toyota" });
    store.put({ id: 2, colour: 'Red', make: "Kia" });
    store.put({ id: 3, colour: 'Blue', make: "Honda" });
    store.put({ id: 4, colour: 'Silver', make: "Subaru" });
    store.put({ id: 5, colour: 'Green', make: "Kimo" });


    const idQuery = store.get(4);
    const colourQuery = colourIndex.getAll(["Red"]);
    const colourMakeQuery = colourMakeIndex.get(['Green','Kimo']);

    idQuery.onsuccess = function(){
        console.log("idQuery",idQuery.result);
    };

    colourQuery.onsuccess = function(){
        console.log("colourQuery",colourQuery.result);
    };

    colourMakeQuery.onsuccess = function(){
        console.log("colourMakeQuery",colourMakeQuery.result);
    };
    transaction.oncomplete = function(){
        db.close();
    };

};