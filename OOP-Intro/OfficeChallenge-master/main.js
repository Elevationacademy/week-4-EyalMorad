//write your code here to make the tests pass
class Document{
    constructor(EmployeeName){
        this.EmployeeName = EmployeeName
    }
}




class Employee{
    constructor(name){
        this.name = name
    }
    work(doc){
        let i
        for(i=0;i<10;i++){
            doc.documents.push(new Document(this.name))
        }
    }
}





class Manager{
    constructor(name){
        this.name=name
        this.employees=[]
    }
    hireEmployee(name){
        const eN = new Employee(name) // can also ----> this.employees.push(new Employee(name))
        this.employees.push(eN)
        
    }
    askEmployeesToWork(name){
        for(let eN of this.employees)
        eN.work(name)
    }
}




class Cleaner{
    constructor(name){
        this.name = name
    }
    clean(){
        console.log("Clean")
    }
}




class Office{
    constructor(){
        this.documents = []
        this.managers = []
        this.cleaners = []
    }
    hireManager(name){
        const nManager = new Manager (name)
        this.managers.push(nManager)
    }
    hireCleaner(name){
        const nCleaner = new Cleaner (name)
        this.cleaners.push(nCleaner)

    }
    startWorkDay(){
        let manager
        for(manager of this.managers){
            manager.askEmployeesToWork(this)}
        let cleaner
        for(cleaner of this.cleaners){
        cleaner.clean()}
    }
    

    }
    

