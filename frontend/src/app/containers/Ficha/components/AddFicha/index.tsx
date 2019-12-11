import React, { Component } from 'react'
import {Grid} from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextFieldPru from '../GeneralTextField/Textfields'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import HealthData from '../HealhData'
import Reference from '../Reference'
import {FichaModel} from '../../models/FichaModel'
import {Dispatch, bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { RootState } from 'app/reducers/state'
import { thunkCreateFicha } from '../../store/thunk'


 
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
// export namespace AddFicha {

   interface StateProps {
    ficha:FichaModel;
    isFetching:boolean;
    errorMessage:string;
  }

   interface ActionsProps {
   // actions:FichaActions;
     createFicha:typeof thunkCreateFicha
   }

   export interface Props extends StateProps, ActionsProps {

   }



  
  class AddFicha extends Component<Props> {
    // constructor(props: AddFicha.Props, context? : any) {
    //   super(props, context);
   
    // }


    render () {
      let {RNE, nacionalidad, nombre, apellido, direccion , telefono, genero, tipoSangre, lugarDeNacimiento, fechaNacimiento} = this.props.ficha;
      return (
        <Card>
          <CardContent>
            <Typography variant='h4'>Ficha</Typography>
            <Grid container>
              <TextFieldPru
                value={RNE}
                label='numero de cuenta'
              />
              <TextFieldPru value={RNE} label='Identidad'  />
              <TextFieldPru value={nombre} label='nombre' />
              <TextFieldPru value={apellido} label='apellido'  />
              <TextFieldPru value={lugarDeNacimiento} label='lugar de nacimiento' />
              <TextFieldPru
                value={fechaNacimiento}
                type='date'
                label='fecha de nacimiento'
             
              />
              <TextFieldPru value={nacionalidad}  label='nacionalidad' />
              <TextFieldPru value={direccion} label='direccion' />
              <TextFieldPru value={telefono}  label='telefono' />
              <TextFieldPru value={genero}  label='genero' />
              <TextFieldPru value={tipoSangre} label='tipoSangre' />
            </Grid>
          </CardContent>
          <HealthData/>
          <Reference/>
          <Button>Guardar</Button>
        </Card>
       
      )
  
    }
}


function mapStateToProps(state: RootState): StateProps {
debugger
  return {
    ficha: state.ficha.ficha,
    isFetching: state.ficha.isFetching,
    errorMessage: state.ficha.errorMessage,
  };
}
 
function mapActionsToProps(
  dispatch: Dispatch,
): ActionsProps {
  return {
    createFicha: bindActionCreators(thunkCreateFicha, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(AddFicha as any);
