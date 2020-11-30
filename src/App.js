
import './Components/Css/style.css';
import './App.css';
import Header from  './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Body from './Components/Body/Body';
import Dialog from './Components/Dialog/Dialog';
function App() {
  return (
    <div className="App">
      <div>
        <Dialog>
        </Dialog>
        <Header>
        </Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default App;
