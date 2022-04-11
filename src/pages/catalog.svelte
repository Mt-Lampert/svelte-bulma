<script>
  // firestore hooks importieren
  // funktioniert ohne probleme, weil das firebase SDK
  // schon "weiter oben" initialisiert wurde.
  import { getFirestore, collection, getDocs } from "firebase/firestore";

  /**
   * fetches and localizes the articles snapshot from Firestore as async
   *
   * @param the Firestore connector
   * @returns the payload of localized articles for a new Promise
   */
  async function getArticles(fbArticlesConn) {
    const theArticles = [];
    // Artikel-Snapshot aus Firestore downloaden;
    // der Snapshot ist wie eine Zip-Datei, die wir erst entpacken muessen,
    // um weiter mit den Daten arbeiten zu koennen.
    // Diese Aktion ist ASYNCHRON!, deshalb brauchen wir hier 'await'
    const dbSnapshot = await getDocs(fbArticlesConn);
    dbSnapshot.docs.forEach((doc) => {
      theArticles.push({ id: doc.id, ...doc.data() });
    });
    return theArticles;
  }

  // firestore-Connector initialisiern.
  // damit haben wir die Verbindung zu unserer Firestore-Datenbank
  // im Firbase-"boom kid store"-Projekt.
  const db = getFirestore();
  // Connector zur "articles"-Collection erstellen
  const fbArticles = collection(db, "articles");

  let myArticles = getArticles(fbArticles);
</script>

{#await myArticles}
  <!-- 
    Blauer Info-Kasten. Wird solange angezeigt,
    bis 'myArticles' angekommen und umgewandelt sind.
  -->
  <div class="notification is-info">Waiting for Firebase ...</div>
{:then myArticles}
  <!-- Jetzt sind die Daten angekommen ... -->
  <ul>
    {#each myArticles as article (article.id)}
      <h2>{article.title} (ID: {article.id})</h2>
      <p>Beschreibung: {article.desc}</p>
      <p>Preis: {article.price}</p>
      <br /><br />
    {/each}
  </ul>
{:catch error}
  <!-- Wird angezeigt, wenn etwas schiefgegangen ist -->
  <div class="notification is-danger">
    Uh oh! {error.message}
  </div>
{/await}
