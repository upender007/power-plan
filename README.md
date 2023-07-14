# About mocks

# api names
/api/plans
/api/username/:name
Name that already exits
    'johndoe' 
    'karanseth'
    'rajneeshaws'
/api/country-codes



# sample way to use
     useEffect(()=>{
         fetch('/api/username',{
             method: 'POST',
             headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
             },
             body: JSON.stringify({name: 'johndoe'})
           }).then((response)=>response.json()).then((json) => console.log(json));
     },[])

     useEffect(()=>{
         fetch('/api/plans').then((response)=>response.json()).then((json) => console.log(json));
     },[])
