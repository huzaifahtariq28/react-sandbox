import Alert from './components/Alert';
import Button from './components/Button';
import Like from './components/Like';
import ListGroup from './components/ListGroup';

function App() {
  return (
    <div>
      <Alert onClick={() => console.log('Alert Closed!')}>Test Alert!</Alert>
      <ListGroup
        items={['Lahore', 'Islamabad', 'Faisalabad']}
        heading={'Cities'}
        onSelectItem={(item) => console.log('Item clicked:', item)}
      />
      <Like onClick={() => console.log('Like Clicked!')} />
      <Button onClick={() => console.log('Button Clicked!')}>
        Test Button
      </Button>
    </div>
  );
}

export default App;
