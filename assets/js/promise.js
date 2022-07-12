let cl = console.log;

// promise = it is a javascript object ,it gives somevalue in future.
// it is used handle asyncronous operations

// promise has four steps 
//1 pending
//2 fullfilled
//3 rejected
//4 settled

// benefits of promise
// 1 imprive code readability
// 2 better handling of asyncronous operations.
// 3 better error handling
// 4 better flow of control defination

let promise1 = new Promise((resolve, reject)=>{
    let error = true;
    if(!error){
        resolve('data is loaded !!!')// if there is no error resolve mrthod will get called
    }else{
        reject('something went wrong !!!')// if there is error reject method is called
    }
});

promise1
        .then((res)=>{
            cl(res)
        })
        .catch((err)=>{
            cl(err)
        })


let blogs =[
{ title:"Blog one", info:"this is Blog one on javascript"},
{ title:"Blog two", info:"this is Blog two on javascript"},
]
//cl(blogs)

let myinfo = document.getElementById('myinfo');

function fetchBlogs(arr){
    setTimeout(()=>{
        let result ='<ul class="list-group">';
        arr.forEach(ele => {
            result +=`
                <li class="list-group-item">
                    <h4>${ele.title}</h4>
                    <p>${ele.info}</p>
                </li>
            `;
        });
        result += '</ul>'
        myinfo.innerHTML = result;

    },1000);
};

function createBlogs(blog){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            blogs.push(blog);
            let error = false;
            if(!error){
                resolve(blogs);
            }else{
                reject('something went wrong')
            }
        },2000);
    });
    return promise;
}
 createBlogs({title:'Blog three',info:'this is a blog three on javascript'})
                                                            .then(res=>{
                                                                fetchBlogs(res);
                                                            })
                                                            .catch(err =>{
                                                                cl(err)
                                                            })