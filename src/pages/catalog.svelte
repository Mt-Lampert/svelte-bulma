<script>
  import { 
    getFirestore,
    collection,
    getDocs
  } from "firebase/firestore"

  let myArticles = []

    // firestore-Connector initialisiern.
  // damit haben wir die Verbindung zu unserer Firestore-Datenbank
  // im Firbase-"boom kid store"-Projekt.
  const db = getFirestore();
  // Connector zur "articles"-Collection erstellen
  const fbArticles = collection(db, "articles");
  // Artikel-Snapshot aus Firestore downloaden;
  // der Snapshot ist wie eine Zip-Datei, die wir erst entpacken muessen,
  // um weiter mit den Daten arbeiten zu koennen.
  // Diese Aktion ist ASYNCHRON!, deshalb muessen wir hier mit Promises 
  // weiterarbeiten.
  getDocs(fbArticles)
    .then((snapshot) => {
      // console.log("bin im Promise!")
      const theArticles = []
      snapshot.docs.forEach((doc) => {
        theArticles.push({ id: doc.id, ...doc.data()});
      })
      myArticles = theArticles
      // console.log(theArticles)
    })
    .catch(e => console.error(e.message))
</script>

  <ul>
    {#each myArticles as article (article.id)}
      <h2>{article.title} (ID: {article.id})</h2>
      <p>Beschreibung: {article.desc}</p>
      <p>Preis: {article.price}</p>
      <br><br>
    {/each}
  </ul>
  

