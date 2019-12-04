import React, { Component } from 'react'
import {Grid} from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextFieldPru from '../GeneralTextField/Textfields'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import HealthData from '../HealhData'
import Reference from '../Reference'
import { RouteComponentProps } from 'react-router'
import {FichaModel} from '../../models/FichaModel'
import {FichaActions} from '../../actions'
import {Dispatch, bindActionCreators} from 'redux'
import {FichaState} from '../../reducer/state'
import {omit, confirmDialog} from 'app/utils'
import {connect} from 'react-redux'


 
/*
const styles = (theme: { spacing: { unit: any; }; }) => {
  return ({
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
  });
}*/
export namespace AddFicha {

  export interface Props extends RouteComponentProps <void>  {
    fichas:FichaModel[];
    actions:FichaActions;
    isFetching:boolean;
    errorMessage:string;
    searchText:string;
  }

  export interface State {
    numAccount:string,
    RNE:string,
    nombre: string,
    apellido:string,
    lugarDeNacimiento:string,
    genero:string,
    nacionalidad:string,
    direccion:string,
    telefono:string,
    tipoSangre:string,
    fechaNacimiento: Date
  }

class AddFicha extends Component<AddFicha.Props> {
    state: AddFicha.State
    constructor(props: AddFicha.Props, context? : any) {
      super(props, context);
  
    
      
      this.state = {
        numAccount: '0',
        RNE: '0',
        nombre: '',
        apellido: '',
        lugarDeNacimiento: '',
        genero: '',
        nacionalidad: '',
        direccion: '',
        telefono: '',
        tipoSangre: '',
        fechaNacimiento: new Date()
      }
    }

    clearFields = () => {
      this.setState( {
        numAccount: '0',
        RNE: '0',
        nombre: '',
        apellido: '',
        lugarDeNacimiento: '',
        genero: '',
        nacionalidad: '',
        direccion: '',
        telefono: '',
        tipoSangre: '',
        fechaNacimiento :new Date
      })
    }

    handleChangeNC (event: any) {
      const { target: { name, value } } = event;
      console.log(name,  value)
      this.setState({numAccount:value});
    } 


    render () {
      let {RNE, nacionalidad, nombre, apellido, direccion , telefono, genero, tipoSangre, lugarDeNacimiento, fechaNacimiento} = this.state;
      return (
        <Card>
          <CardContent>
            <Typography variant='h4'>Ficha</Typography>
            <Grid container>
              <TextFieldPru
                value={RNE}
                label='numero de cuenta'
                onChange={this.handleChangeNC}
              />
              <TextFieldPru value={RNE} label='Identidad' onChange={this.handleChangeRNE} />
              <TextFieldPru value={nombre} label='nombre' onChange={this.handleChangeNombre} />
              <TextFieldPru value={apellido} label='apellido' onChange={this.handleChangeApellido} />
              <TextFieldPru value={lugarDeNacimiento} label='lugar de nacimiento'  onChange={this.handleLugarDeNacimiento}/>
              <TextFieldPru
                value={fechaNacimiento}
                type='date'
                label='fecha de nacimiento'
                onChange={this.handleChangeFechaDeNacimiento}
              />
              <TextFieldPru value={nacionalidad} onChange={this.handleChangeNacionalidad} label='nacionalidad' />
              <TextFieldPru value={direccion} onChange={this.handleChangeDireccion} label='direccion' />
              <TextFieldPru value={telefono} onChange={this.handleChangeTelefono} label='telefono' />
              <TextFieldPru value={genero} onChange={this.handleChangeGenero} label='genero' />
              <TextFieldPru value={tipoSangre} onChange={this.handleChangeTipoDeSangre} label='tipoSangre' />
            </Grid>
          </CardContent>
          <HealthData/>
          <Reference/>
          <Button>Guardar</Button>
        </Card>
       
      )
  
    }
}
}

function mapStateToProps(state: FichaState): Partial<AddFicha.Props> {
  return {
    fichas: state.fichas,
    isFetching: state.isFetching,
    errorMessage: state.errorMessage,
  };
}
 
function mapActionsToProps(
  dispatch: Dispatch,
): Pick<AddFicha.Props, 'actions'> {
  return {
    actions: bindActionCreators(omit(FichaActions, 'Type'), dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(AddFicha as any);
