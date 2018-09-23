/*
This function is obsolete once redux is used.
*/
import axios from 'axios';

export default class TodoService
{
    all(callback)
    {
        axios.get('/todo')
        .then((response) => 
        {
            callback(response.data)
        })
        .catch(function (error)
        {
            console.log(error);
            callback(null);
        });
    }

    get(id, callback)
    {
        axios.get('/todo/'+id)
        .then((response) => 
        {
            callback(response.data);
        })
        .catch(function(error)
        {
            console.log(error);
            callback(null);
        });
    }


    add(data,callback)
    {
        //alert('Inside frontend add function ==>' + data);
        axios.post('/todo/add/',{desc:data})
        .then(function(response)
        {
            console.log(response);
            callback();
        })
        .catch(function(error)
        {
            console.log(error);
            callback();
        });
    }

/*
   add(contentData,callback)
   {
        alert('Inside frontend add function ==> '+ contentData);
        axios('http://localhost:6020/todo/add/', {
            method: 'POST',
            headers: {
            'content-type': 'application/json',
            },
            data: contentData
        })
        .then(function(response)
        {
            console.log(response);
            callback();
        })
        .catch(function(error)
        {
            console.log(error);
            callback();
        });
   }
*/


    update(data,id,callback)
    {
        
        axios.post('/todo/update/'+id,{desc:data})
        .then(function(respose)
        {
            console.log('Item: ' + id +' updated');
            callback();
        })
        .catch(function(error)
        {
            console.log(error);
            callback();
        });
    }

    delete(id, callback)
    {
        //console.log("inside frontend delete route")
        axios.get('/todo/delete/'+id)
        .then((response) => 
        {
            console.log("Item: " + id + " deleted")
            callback();
        })
        .catch(function(error)
        {
            console.log(error);
            callback(null);
        });
    }
}