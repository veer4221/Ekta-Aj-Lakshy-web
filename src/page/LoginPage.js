import React from 'react'
import Grid from "@material-ui/core/Grid";
import { Button, Card } from '@material-ui/core';
import { useNavigate } from 'react-router';

const LoginPage = () => {
    const navigate =useNavigate()
    return (
        <>
            <div class="container-fluid Rg-bg" style={{height:"100vh",width:"100%" }}>
                <div class="login_name_wrapperL">
                    <div class="d-flex justify-content-center rojghar-text ">Login Page</div>
                </div>
                <div class="d-flex justify-content-center h-50" >
                    <div class="user_cardL">
                        <div class="d-flex justify-content-center">
                            <div class="login_logo_containerL"> <img src={`assets/images/logo512.png`} class="login_logo" alt="Logo" /> </div>
                            </div>
                            <div class="d-flex justify-content-center form_containerL">
                                <form style={{width: "320px"}}>
                                    <div id="msgcont" class="d-flex justify-content-center" style={{display:"none!important"}}>
                                        <div id="msg" class="alert alert-danger py-1 px-2" role="alert"></div>
                                    </div>
                                    <div class="input-group mb-3">
                                        <div class="input-group-append"> <span class="input-group-text"><i class="fas fa-user"></i></span> </div>
                                        <input id="email" type="text" name="" class="form-control input_userL" placeholder="info@crezzur.com" required />
                                    </div>
                                    <div class="input-group mb-4">
                                        <div class="input-group-append"> <span class="input-group-text"><i class="fas fa-key"></i></span> </div>
                                        <input id="pass" type="password" name="" class="form-control input_passL" placeholder="*********" required />
                                    </div>

                                    <div class="d-flex justify-content-center mt-3 login_containerL ourBtn">
                                        <button type="button" name="button" class="btn login_btnL" onClick={()=>{
                                            navigate(`/Rojgharmain/findJob`)
                                        }}>Login</button>
                                    </div>
                                </form>
                            </div>
                            
                            <div class=" m-3 ourBtn">
                            <hr style={{color:"red"}}></hr>
                               <table width="100%" style={{textAlign:"center"}}>
                                   <tr >
                                       <td width="33%" className="ourBtn"><Button style={{width:"90%"}}>Back</Button></td>
                                       <td width="33%" className="ourBtn"><Button style={{width:"90%"}}>JoinUs</Button></td>
                                       <td width="33%" className="ourBtn"><Button style={{width:"90%"}}>DoneteUs</Button></td>
                                   </tr>
                               </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Grid container spacing={3} className="page">
                <Grid item xs={12} sm={12} md={12}>
                    <h1 style={{ color: "red", textAlign: "center" }}>Ekta Ej Laksh Login</h1>

                </Grid>
                <Grid item xs={12} sm={12} md={12} style={{display:"flex",justifyContent:"center"}}>
                <Card style={{width:"60vh",height:"60vh"}}> 
                    <label>Icard Id</label>
                    <input type="text" placeholder="Icard Id"/>
                    <label>password</label>
                    <input type="text" placeholder="Icard Id"/>
                </Card>
                </Grid>
            </Grid> */}
        </>
    )
}

export default LoginPage
