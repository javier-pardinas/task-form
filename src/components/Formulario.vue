<template>
    <b-form>
    <b-title>FORMULARIO</b-title>
    <!--ORDEN-->
        <b-form-group id="orden" label="Orden" label-for="orden">
            <b-form-input>
            </b-form-input>
            <b-form-invalid-feedback>
            This field is required
            </b-form-invalid-feedback>
        </b-form-group>
    <!--FECHA ULTIMA REVISIÓN-->
        <b-form-group id="fechaUltimaRevision" label="Fecha última Revisión" label-for="fechaUltimaRevision">
            <b-form-input>
            </b-form-input>
            <b-form-invalid-feedback>
            This field is required
            </b-form-invalid-feedback>
        </b-form-group>
    <!--RESUMEN-->
        <b-form-group id="resumen" label="Resumen" label-for="resumen">
            <b-form-input>
            </b-form-input>
            <b-form-invalid-feedback>
            This field is required
            </b-form-invalid-feedback>
        </b-form-group>
    </b-form>
</template>

<script>

import axios from 'axios';

export default{
    name: 'Formulario',

    data(){
        return{
            all: null,
            title: null,
            order: null,
            date: null,
            resume: null,
            text: null,
        }
    },

    mounted(){
        this.getNew();
    },

    methods: {
        getNew(){
            axios.get("https://externo-smartlex-api-contenidos.iberley.es/api/doc?access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6InRlc3QifQ.eyJ1c2VybmFtZSI6Im1jYXJiYWxsb0BpYmVybGV5LmVzIiwiaWQiOiI3MCIsImV4cCI6MTYxODk4NjI4NywiaWF0IjoxNjE4ODI0Mjg3LCJyb2xlcyI6WyJST0xFX1BSRU1JVU0iXSwibWF0IjoiUEUsQ0ksTUUsQURNLEZJLExBIiwiY29sIjoiQ0MsU1VCLExFLENWIiwiZ2MiOiIyIn0.mZ2TlHcpOTlmcsAnINTGJVTextxnWZm9nDk1bVWLWm5jfH0uHuC-uLMN9ruP9N-W0pg6hBY4CQ8iQZ01OXxragYqH-L0WP3M2f_LbVrcG-Bu0TPckU1Wi-ONw-PCU9XXnZzEt-YLHFTNGekPp60crvF5Jb-e3ramqCsrLV0m8l9VUU9tl-vR450x0YcNrJT44o67pvs0-fYBYlfgPWaVZg-pLhWsGrDKi0AVPgUx2g_2NdzavNEHc6wWhzZ90fN13Y2vH6UeQFx49PH237CfbZuBbGt50FxZjTKYBs4xyvYfuPY1ZbsiSciDCrkWZG-4gLRly9WY0CB2BGtJLwV4-FalxISonr9Y4Q286Bwj5MY3mFE6VYi13HffEnUXe47OcfbHnqGjf5VmMsAHBBM3eG5n7AZVbSKOX2esjTftDOgy4fCoPqdEzgElZtna57e5rNGMx8AKj65qX0inpQ949NbeJJD9k7e4MlHFEB1VyxRUZg1RafbESktYdk8S03GIKPLuch1cBjAlABP_BSryuK7ZfkvRpRyVMrzK4ELJbm6vLAcaLKIOVt8iW3DVSK6zJihuTCP_BmfX2kOXn1fLs94FKdW_d8haCIpP6AmNWNCDikAmJwXdNVhK96_JinBYUulaJj41DOf03trzA-LYAP92H-JDqs3sm94E2NCiDTY")
            .then (response =>{
                this.all = response.data,
                console.log(this.all),
                this.title = response.data.title,
                console.log(this.title),
                this.date = response.data.date
                console.log(this.date),
                this.resume = response.data.resume
                console.log(this.resume),
                this.text = response.data.text,
                console.log(this.text)
            })
            .catch(e => console.log(e))
        }
    }
}

</script>
