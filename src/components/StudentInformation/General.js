import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'


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
       

        <Card className={classes.card}>
        <CardContent>
            <Typography variant="h4" >Fichas</Typography>
            <Grid container>
                <TextFieldPru value={numAccount} onChange={this.handleChange2('hola', dataTotal[0].label)} label={dataTotal[0].label} />
                <TextFieldPru value={RNE} onChange={this.handleChange2('hola', dataTotal[1].label)} label={dataTotal[1].label} />
                <TextFieldPru value={nombre} onChange={this.handleChange2('hola', dataTotal[2].label)} label={dataTotal[2].label} />
                <TextFieldPru value={apellido} onChange={this.handleChange2('hola', dataTotal[3].label)} label={dataTotal[3].label} />
                <TextFieldPru value={lugarNacimiento} onChange={this.handleChange2('hola', dataTotal[4].label)} label={dataTotal[4].label} />
                <TextFieldPru value={fechaNacimiento} type="date" onChange={this.handleChange2('hola', dataTotal[5].label)} label={dataTotal[5].label} />
                <Grid item xs={3}>
                    <InputsCB ids={dataTotal[6].ids} label={dataTotal[6].label} value={edad} onChange={this.handleChange2('menu', dataTotal[6].label)} fun={this.handleChange2} name="edad" arrayRen={this.state.edadIn.data} />
                </Grid>
                <Grid item xs={3}>
                    <InputsCB ids={dataTotal[7].ids} label={dataTotal[7].label} value={genero} onChange={this.handleChange2('menu', dataTotal[7].label)} fun={this.handleChange2} name="genero" arrayRen={this.state.generos.data} />
                </Grid>
                <TextFieldPru value={nacionalidad} onChange={this.handleChange2('hola', dataTotal[8].label)} label={dataTotal[8].label} />
                <TextFieldPru value={direccion} onChange={this.handleChange2('hola', dataTotal[9].label)} label={dataTotal[9].label} />
                <TextFieldPru value={telefono} onChange={this.handleChange2('hola', dataTotal[10].label)} label={dataTotal[10].label} />
                <Grid item xs={3}>
                    <InputsCB ids={dataTotal[11].ids} label={dataTotal[11].label} value={tipoSangre} onChange={this.handleChange2('menu', dataTotal[11].label)} fun={this.handleChange2} name="nacionalidad" arrayRen={this.state.sangre.data} />
                </Grid>
            </Grid>
        </CardContent>
    </Card>
        
    )
    }
}


export default General;