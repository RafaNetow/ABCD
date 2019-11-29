import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextFieldPru from './GeneralTextField/Textfields'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


const styles = theme => ({
  card: {
    margin: '1em auto'
  },
  media: {
    height: 140,
    width: '100%'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
})

class HealhData extends React.Component {
  constructor () {
    super() 
    this.state = {
      enfermedadesPadecidas: '',
      todasLasVacunas: Boolean,
      EnfermadesActuales: ''
    }
    this.handleChangeEnfermedadesPadecidas = this.handleChangeEnfermedadesPadecidas.bind(this)
    this.handleChangetTodasLasVacunas = this.handleChangetTodasLasVacunas.bind(this)
    this.handlerChangeEnfermedadesActuales= this.handlerChangeEnfermedadesActuales.bind(this)
  }
  
  handleChangeEnfermedadesPadecidas(event) {
    const { target: { name, value } } = event;
    console.log(name,  value)
    this.setState({enfermedadesPadecidas:value});
  }
  
  handleChangetTodasLasVacunas(event) {
    const { target: { name, value } } = event;
    console.log(name,  value)
    this.setState({todasLasVacunas:value});
  }
  handlerChangeEnfermedadesActuales(event) {
    const { target: { name, value } } = event;
    console.log(name,  value)
    this.setState({EnfermadesActuales:value});
  }
  
  
  render () {
    const {
        enfermedadesPadecidas,
        todasLasVacunas,
        EnfermadesActuales
    } = this.state
    return (
      <Card style={styles.card}>
        <CardContent>
          <Typography variant='h4'>Informacion de salud</Typography>
          <Grid container>
            <TextFieldPru value={enfermedadesPadecidas} label='enfermeaddes padecidas' onChange={this.handleChangeEnfermedadesPadecidas} />
            <TextFieldPru value={todasLasVacunas} label='vacunas' onChange={this.handleChangetTodasLasVacunas} />
            <TextFieldPru value={EnfermadesActuales} label='enfermedades actuales' onChange={this.handlerChangeEnfermedadesActuales} />
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

export default HealhData
