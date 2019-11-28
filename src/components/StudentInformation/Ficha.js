import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import TextFieldPru from './GeneralTextField/Textfields'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({
	card: {
		margin: '1em auto',
	},
	media: {
		height: 140,
		width: '100%',
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
	},
	dense: {
		marginTop: 16,
	},
	menu: {
		width: 200,
	},
})

class General extends React.Component {

    state = {
        numAccount:0,
        RNE:0,
        nombre : '',
        apellido : '',
        lugarDeNacimiento : '',
        edad : '',
        genero : '',
        nacionalidad : '',
        direccion : '',
        telefono : '',
        tipoSangre : ''
    };
                
    render () {
      
        const { numAccount, RNE, nombre, apellido, lugarNacimiento,fechaNacimiento, edad, genero, nacionalidad, direccion, telefono,
             tipoSangre } =  this.state;
    return (
       

        <Card style={styles.card}>
        <CardContent>
            <Typography variant="h4" >Fichas</Typography>
            <Grid container>
                <TextFieldPru value={numAccount} label='numero de cuenta' />
                <TextFieldPru value={RNE}  label='Identidad' />
                <TextFieldPru value={nombre} label= 'nombre' />
                <TextFieldPru value={apellido}  label='apellido' />
                <TextFieldPru value={lugarNacimiento}  label= 'lugar de nacimiento' />
                <TextFieldPru value={fechaNacimiento} type="date"  label='fecha de nacimiento' />
                <TextFieldPru value={nacionalidad} />
                <TextFieldPru value={direccion}  />
                <TextFieldPru value={telefono} />          
            </Grid>
        </CardContent>
    </Card>
        
    )
    }
}


export default General;