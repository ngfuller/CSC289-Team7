import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';

const barcode = '00014100085782';
const food = 'Folgers Coffee';

function is_not_barcode(barcode_or_itemname: string) {
  const re = /\d+/;
  return !re.test(barcode_or_itemname);
}

const TestComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (is_not_barcode(food)) {
      fetch(
        'https://www.brocade.io/api/items?' +
          new URLSearchParams({query: food}),
      )
        .then(r => r.json())
        .then(r => {
          console.log('not barcode' + r[0].gtin14);
          console.log(get_image_url(r[0].gtin14));
        });
    }

    // fetch('https://www.brocade.io/api/items/' + barcode)
    //   .then(r => r.json())
    //   .then(r => {
    //     console.log(r);
    //     setData(r);
    //   });
  }, []);

  if (data == null) {
    return <Text>Loading...</Text>;
  }
  return <Text>Data Received</Text>;
};

//https://www.brocade.io/api/items?query=peanut+butter

function get_image_url(barcode) {
  return 'https://www.kroger.com/product/images/thumbnail/front/' + barcode;
}


const App = () => {
  return (
    <SafeAreaView>
      <TestComponent />
    </SafeAreaView>
  );
};

export default App;