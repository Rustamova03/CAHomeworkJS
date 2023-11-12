let arr = [
    {
      name: 'test',
      key: 1
    },
    {
      name: 'task',
      key: 2
    },
    {
      name: 'tanqo',
      key: 3
    },
    {
      name: 'like',
      key: 4
    },
    {
      name: 'task',
      key: 5
    },
    {
      name: 'trust',
      key: 6
    },
    {
      name: 'test',
      key: 7
    },
    {
      name: 'last',
      key: 8
    },
    {
      name: 'tanqo',
      key: 9
    },
    {
      name: 'elephant',
      key: 10
    },
    {
      name: 'love',
      key: 11
    },
    {
      name: 'small',
      key: 12
    },
    {
      name: 'little',
      key: 13
    },
  ]
  
  // 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)
  // let names = arr.filter((item) => {
  //   return (
  //     item.name[0].toLocaleLowerCase() === "t" 
  //   );
  // });
  
  // console.log(names);
  
  // 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)
  // let Each=0;
  // arr.forEach( (i) =>{
  //   if(i.name[0].toLocaleLowerCase()==="t" && i.name[i.name.length-1].toLocaleLowerCase()==="t"){
  //     Each++;
  //   }
  // })
  // console.log(Each);
  
  // 3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
      // let sum=0;
      // arr.forEach( (item)=>{
      //   if(item.name[0].toLocaleLowerCase()==="t" && item.name[item.name.length-1].toLocaleLowerCase()==="t") {
      //     sum+=item.key;
      //   }
      // }
      // );
      // console.log(sum);
 
  
  // 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
  //  arr.forEach( (i) =>{
  //     if(i.name[i.name.length-1].toLocaleLowerCase()==="e"){
  //       i.name="SuperDev";
  //     }
  //   });
  //   console.log(arr);
  
  // 5) "name"-i en uzun olan obyekti tapin
  // let max=arr[0].name.length;
  // let maxObject=0;
  // for(let i=1;i<arr.length;i++){
  //   if(arr[i].name.length>max){
  //     max=arr[i].name.length;
  //     maxObject=arr[i];
  //   }
  // }
  // console.log(maxObject);
  
  // 6) "name"-i en uzun olan obyektin key'ni tapin.
  //  let max=arr[0].name.length;
  // let maxObjectkey=0;
  // for(let i=1;i<arr.length;i++){
  //   if(arr[i].name.length>max){
  //     max=arr[i].name.length;
  //     maxObjectkey=arr[i].key;
  //   }
  // }
  // console.log(maxObjectkey);
     
  
  // 7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin.
  //  let max=arr[0].name.length;
  // let maxIndexsquare=0;
  // for(let i=1;i<arr.length;i++){
  //   if(arr[i].name.length>max){
  //     max=arr[i].name.length;
  //     maxIndexsquare=i**2;
  //   }
  // }
  // console.log(maxIndexsquare);
  
  // 8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)
  // let nameslength=arr.filter( (item)=>item.name.length ===4);
  // console.log(nameslength); 
  // 9)  en boyuk "key" - i olan obyektin "name"-i ni tapin.
  // let max=arr[0].key;
  // let maxKeyname=0;
  // for(let i=1;i<arr.length;i++){
  //   if(arr[i].key>max){
  //     max=arr[i].key;
  //     maxKeyname=arr[i].name;
  //   }
  // }
  // console.log(maxKeyname);
  
  // 10) terkibinde 2 'l' (el) herfi olan obyekt(ler)in index(ler)ini tapin.
    

  
  // 11) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.


  
  // 12) key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq.
  // let names = arr.filter((item) => {
  //   return (
  //     item.name[0].toLocaleLowerCase() === "l" && item.key>10 
  //   );
  // });
  
  // console.log(names);