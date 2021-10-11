
// Hlavní fundamentální je ten, že k identifikaci by nemělo nikdy docházet na klientovi, tj. ty souřadnice kurzoru a pozice selectu se můžou velmi snadno rozbít a tím se rozbije celá identifikace ... někde bude nějaký whitespace, který se označí a aby to uživatel odoznačil bude muset vzít i ten whitespace apod. 

// ![Screenshot - 2021-10-12T202202 016](https://user-images.githubusercontent.com/48393610/137077767-5df71848-29db-4ec2-9dfe-bafe845dc07a.png)

// ![Screenshot - 2021-10-12T202135 845](https://user-images.githubusercontent.com/48393610/137077779-ed02ff2e-f481-4e83-be5b-8868de80dcb4.png)

// Běžný pateren by byl ten, že server pošle na klienta třeba něco takového:

// ```json
// {
//   "data": [
//     {
//       "paragraph": 0,
//       "words": [
//         {
//           "id": 0,
//           "content": "Lorem",
//           "groups": ["a", "b", "c"],
//           "color": "#ffff"
//         },
//         {
//           "id": 1,
//           "content": "ipsum",
//           "groups": ["a", "b"],
//           "color": "#bfbfbf"
//         }
//       ]
//     }
//   ]
// }
// ```

// Klient si vyřeší vizualizaci podle sebe a jaké ids byly změněné pošle na server (opět v json formátu), ten to zpracuje a pošle zpět upravený JSON, který klient pak opět zrendruje. 

// ```html
// <p><span id="w1" data-value="group1">Lorem</span><span id="w2" data-value="group1">ipsum</span><span id="w3" data-value="group1">dolor</span> <p/>
// ```

// To by znamelano, že by každé slovo bylo nejspíše wrapnuté do spanu aby mu mohlo být přidané `id`, které lícuje s tím, které je v jsonu.

// Jako pravda je ta, že by se to dalo dělat i bez toho JSONu, kdy by identifikace proběhla už v tom HTML. 

// Netuším jaký performance impact bude mít pokud je každé slovo wrapnuté do svého spanu. Drawbak je ten, že to limituje selekci na úrovni slova...  
