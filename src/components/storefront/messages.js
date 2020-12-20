// A <Products> component
// Displays a list of products associated with the selected category
import React from 'react';
import {useEffect}from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import {responsiveFontSizes, createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as actions from '../../actions';

//I don't think this is doing anything... probablywired up incorrectly.
let theme = createMuiTheme({
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'none',
      fontSize: 28,
    },
  },
});


function Products() {
  theme = responsiveFontSizes(theme);

  const apiItems = useSelector ( (state) => state.apiItems)
  
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch (actions.get());
    console.log('GOT IT:', apiItems)
  }, []);

    return(
      <ThemeProvider> 
        <Container maxWidth="md" >
          <span>
            {apiItems.map((item, i) =>(
              <>
              <h3 key={Math.random()}>{item.date}</h3>
              <div>{item.text}</div>
              <img src={`https://source.unsplash.com/100x100?${item.text}`} />
              </>
            ))}
          </span>
        </Container>
      </ThemeProvider> 
    )
}

export default Products;

// State should be a list of all products
// Each product should have a category association, name, 
//description, price, inventory count
// Create an action that will trigger when the active category 
//is changed
// HINT: Multiple reducers can respond to the same actions
// Create a reducer that will filter the products 
//list based on the active category