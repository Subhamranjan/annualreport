// import React from 'react'
import React ,{useState}from 'react';
import './App.css';

function  Post() {

// Question

const [Q1, setQ1] = useState(null);
const [QQ1, setQQ1] = useState(false);

const [Q2, setQ2] = useState(null);
const [QQ2, setQQ2] = useState(false);

const [Q3, setQ3] = useState(null);
const [QQ3, setQQ3] = useState(false);

const [Q4, setQ4] = useState(null);
const [QQ4, setQQ4] = useState(false);

const [Q5, setQ5] = useState(null);
const [QQ5, setQQ5] = useState(false);

const [Q6, setQ6] = useState(null);
const [QQ6, setQQ6] = useState(false);

const [Q7, setQ7] = useState(null);
const [QQ7, setQQ7] = useState(false);

const [Q8, setQ8] = useState(null);
const [QQ8, setQQ8] = useState(false);

const [Q9, setQ9] = useState(null);
const [QQ9, setQQ9] = useState(false);

const [Q10, setQ10] = useState(null);
const [QQ10, setQQ10] = useState(false);

const [Q11, setQ11] = useState(null);
const [QQ11, setQQ11] = useState(false);

const [Q12, setQ12] = useState(null);
const [QQ12, setQQ12] = useState(false);

const [Q13, setQ13] = useState(null);
const [QQ13, setQQ13] = useState(false);

const [Q14, setQ14] = useState(null);
const [QQ14, setQQ14] = useState(false);

const [Q15, setQ15] = useState(null);
const [QQ15, setQQ15] = useState(false);

const [Q16, setQ16] = useState(null);
const [QQ16, setQQ16] = useState(false);

const [Q17, setQ17] = useState(null);
const [QQ17, setQQ17] = useState(false);

const [Q18, setQ18] = useState(null);
const [QQ18, setQQ18] = useState(false);

//profit loss statement  
const [SOP, setSOP] = useState("");
const [OOR, setOOR] = useState("");
const [SOS, setSOS] = useState("");
const [OP1, setOP1] = useState(SOS + SOP + OOR);

const [TR1, setTR1] = useState("");
const [TOE1, setTOE1] = useState("");
const [IEI1, setIEI1] = useState("");
const [PBT1, setPBT1] = useState(TR1 - TOE1 -IEI1 );

const [PBT2, setPBT2] = useState("");
const [TE1, setTE1] = useState("");
const [PAT1, setPAT1] = useState(PBT2 - TE1);

const [PATs, setPATs] = useState("");
const [OOS, setOOS] = useState("");
const [EPS, setEPS] = useState(PATs / OOS);
const [value, setvalue] = useState('');

// Balance sheet 
const [ASS1, setASS1] = useState("");
const [LIA1, setLIA1] = useState("");
const [SHE1, setSHE1] = useState(ASS1 - LIA1);

const [FV1, setFV1] = useState("");
const [NOS1, setNOS1] = useState("");
const [SC1, setSC1] = useState(FV1 * NOS1 );

const [SC2, setSC2] = useState("");
const [FV2, setFV2] = useState("");
const [NOS2, setNOS2] = useState(SC2 / FV2);

const [SHF1, setSHF1] = useState("");
const [NCL1, setNCL1] = useState("");
const [CL1, setCL1] = useState("");
const [TL1, setTL1] = useState(SHF1 + NCL1 + CL1);

const [SC3, setSC3] = useState("");
const [R1, setR1] = useState("");
const [S1, setS1] = useState("");
const [SHE2, setSHE2] = useState(SC3 + R1 + S1);

const [PYDB1, setPYDB1] = useState("");
const [ADY1, setADY1] = useState("");
const [DDY1, setDDY1] = useState("");
const [GB1, setGB1] = useState(PYDB1 + ADY1 - DDY1 );

const [PYDV1, setPYDV1] = useState("");
const [CYD1, setCYD1] = useState("");
const [DDY2, setDDY2] = useState("");
const [TD1, setTD1] = useState(PYDV1 - CYD1 - DDY2 );

const [GB2, setGB2] = useState("");
const [TD2, setTD2] = useState("");
const [NB1, setNB1] = useState(GB2 - TD2);

const [FA1, setFA1] = useState("");
const [CA1, setCA1] = useState("");
const [TA1, setTA1] = useState(FA1 + CA1);

const [SHF2, setSHF2] = useState("");
const [LIA2, setLIA2] = useState("");
const [ASS2, setASS2] = useState(SHF2 + LIA2);

//Cash flow
const [NCOA1, setNCOA1] = useState("");
const [NCIA1, setNCIA1] = useState("");
const [NCFA1, setNCFA1] = useState("");
const [CF1, setCF1] = useState(NCOA1 + NCIA1 + NCFA1);

// Profitability ratius
const [OR1, setOR1] = useState("");
const [OE1, setOE1] = useState("");
const [EBIT1, setEBIT1] = useState(OR1 - OE1 );

const [TR2, setTR2] = useState("");
const [OI1, setOI1] = useState("");
const [OR2, setOR2] = useState(TR2 - OI1);

const [TE2, setTE2] = useState("");
const [FC1, setFC1] = useState("");
const [DA1, setDA1] = useState("");
const [OE2, setOE2] = useState(TE2 - FC1 - DA1);

const [EBIT2, setEBIT2] = useState("");
const [OR3, setOR3] = useState("");
const [EBIT3, setEBIT3] = useState(EBIT2 / OR3);

const [PAT2, setPAT2] = useState("");
const [TR3, setTR3] = useState("");
const [PATM1, setPATM1] = useState(PAT2 / TR3 );


const [NP1, setNP1] = useState("");
const [SHE3, setSHE3] = useState("");
const [ROE1, setROE1] = useState( NP1 / SHE3 *100);

const [NP2, setNP2] = useState("");
const [NS1, setNS1] = useState("");
const [NPM1, setNPM1] = useState(NP2 / NS1 *100);

const [NS2, setNS2] = useState("");
const [ATA1, setATA1] = useState("");
const [AT1, setAT1] = useState(NS2 / ATA1);

const [ATA2, setATA2] = useState("");
const [SHE4, setSHE4] = useState("");
const [FL1, setFL1] = useState(ATA2 / SHE4);

const [NI1, setNI1] = useState("");
const [I1, setI1] = useState("");
const [TR4, setTR4] = useState("");
const [TAA1, setTAA1] = useState("");
const [ROA1, setROA1] = useState(NI1 + I1 *(1 - TR4) / TAA1);

const [LAA1, setLAA1] = useState("");
const [RAA1, setRAA1] = useState("");
const [TAA2, setTAA2] = useState(LAA1 + RAA1 /2);

const [PBIT1, setPBIT1] = useState("");
const [OCE1, setOCE1] = useState("");
const [ROCE1, setROCE1] = useState(PBIT1 * OCE1 );

const [STD1, setSTD1] = useState("");
const [LTD1, setLTD1] = useState("");
const [E1, setE1] = useState("");
const [OCE2, setOCE2] = useState(STD1 + LTD1 + E1);

// Leverage ratius
const [EBIT4, setEBIT4] = useState("");
const [FA2, setFA2] = useState("");
const [ICR1, setICR1] = useState(EBIT4 / FA2);

const [EBITDA1, setEBITDA1] = useState("");
const [DA2, setDA2] = useState("");
const [EBIT5, setEBIT5] = useState(EBITDA1 - DA2);

const [R2, setR2] = useState("");
const [E2, setE2] = useState("");
const [FC2, setFC2] = useState("");
const [D1, setD1] = useState("");
const [EBITDA2, setEBITDA2] = useState(R2 - E2 -(FC2 - D1));

const [TD3, setTD3] = useState("");
const [TE3, setTE3] = useState("");
const [DTER1, setDTER1] = useState(TD3 / TE3);

const [LTB1, setLTB1] = useState("");
const [STB1, setSTB1] = useState("");
const [TD4, setTD4] = useState(LTB1 + STB1);

const [TD5, setTD5] = useState("");
const [TA2, setTA2] = useState("");
const [DTAR1, setDTAR1] = useState(TD5 / TA2);

const [LA1, setLA1] = useState("");
const [RA1, setRA1] = useState("");
const [ATA7, setATA7] = useState(LA1 + RA1 /2);

const [LATA1, setLATA1] = useState("");
const [RATA1, setRATA1] = useState("");
const [ATA3, setATA3] = useState(LATA1 + RATA1 /2);

const [LATE1, setLATE1] = useState("");
const [RATE1, setRATE1] = useState("");
const [ATE1, setATE1] = useState(LATE1 + RATE1 /2);

const [ATA4, setATA4] = useState("");
const [ATE, setATE] = useState("");
const [FLR1, setFLR1] = useState(ATA4 + ATE);

//Valuation Ratio
const [CSP1, setCSP1] = useState("");
const [SPS1, setSPS1] = useState("");
const [PSR1, setPSR1] = useState(CSP1 / SPS1);

const [TR5, setTR5] = useState("");
const [NOS3, setNOS3] = useState("");
const [SPS6, setSPS6] = useState(TR5 / NOS3 );

const [SC4, setSC4] = useState("");
const [R3, setR3] = useState("");
const [RR1, setRR1] = useState("");
const [TOS1, setTOS1] = useState("");
const [BV1, setBV1] = useState(SC4 + R3 - RR1 / TOS1);

const [CSP2, setCSP2] = useState("");
const [BV2, setBV2] = useState("");
const [PBV1, setPBV1] = useState(CSP2 / BV2 );

const [PAT3, setPAT3] = useState("");
const [TOS2, setTOS2] = useState("");
const [EPS3, setEPS3] = useState(PAT3 / TOS2);

const [CSP3, setCSP3] = useState("");
const [EPS4, setEPS4] = useState("");
const [PER1, setPER1] = useState(CSP3 / EPS4 );


// OPerating ratius
const [OR4, setOR4] = useState("");
const [TAT1, setTAT1] = useState("");
const [FAT1, setFAT1] = useState(OR4 - TAT1);

const [LATA2, setLATA2] = useState("");
const [RATA2, setRATA2] = useState("");
const [TAT2, setTAT2] = useState(LATA2 + RATA2 /2);

const [LCA2, setLCA2] = useState("");
const [LCL2, setLCL2] = useState("");
const [LWC, setLWC] = useState(LCA2 + LCL2);

const [RCA2, setRCA2] = useState("");
const [RCL2, setRCL2] = useState("");
const [RWC, setRWC] = useState(RCA2 + RCL2);

const [LWC1, setLWC1] = useState("");
const [RWC1, setRWC1] = useState("");
const [AWC1, setAWC1] = useState(LWC1 + RWC1 /2);

const [R5, setR5] = useState("");
const [AWC2, setAWC2] = useState("");
const [WCT1, setWCT1] = useState(R5 / AWC2 );

const [LATA3, setLATA3] = useState("");
const [RATA3, setRATA3] = useState("");
const [ATA6, setATA6] = useState(LATA3 + RATA3 /2);

const [OR5, setOR5] = useState("");
const [ATA5, setATA5] = useState("");
const [TAT3, setTAT3] = useState(OR5 / ATA5);

const [COGS1, setCOGS1] = useState("");
const [AI1, setAI1] = useState("");
const [IT1, setIT1] = useState(COGS1 / AI1 );

const [LAT1, setLAT1] = useState("");
const [RAT1, setRAT1] = useState("");
const [AI2, setAI2] = useState( LAT1 + RAT1 /2);

const [COMC1, setCOMC1] = useState("");
const [POST1, setPOST1] = useState("");
const [SSC1, setSSC1] = useState("");
const [PF1, setPF1] = useState("");
const [COGS2, setCOGS2] = useState(COMC1 + POST1 + SSC1 + PF1);

const [IT2, setIT2] = useState("");
const [IND1, setIND1] = useState( 365 / IT2 );

const [R4, setR4] = useState("");
const [AR1, setAR1] = useState("");
const [RTR1, setRTR1] = useState(R4 / AR1);

const [LAR, setLAR] = useState("");
const [RAR, setRAR] = useState("");
const [AR2, setAR2] = useState(LAR + RAR /2);

const [RTR2, setRTR2] = useState("");
const [DSO1, setDSO1] = useState( 365 / RTR2);


//EXTRA 
const [GP1, setGP1] = useState("");
const [NS3, setNS3] = useState("");
const [GPM1, setGPM1] = useState(GP1 * NS3 );

const [NS4, setNS4] = useState("");
const [COGS3, setCOGS3] = useState("");
const [GP2, setGP2] = useState(NS4 - COGS3);

const [A1, setA1] = useState("");
const [OCR1, setOCR1] = useState("");
const [NOY1, setNOY1] = useState("");
const [FV3, setFV3] = useState(A1 *(+ OCR1)^ NOY1);

const [A2, setA2] = useState("");
const [DR1, setDR1] = useState("");
const [NOY2, setNOY2] = useState("");
const [PV1, setPV1] = useState(A2 *(+ DR1)^ NOY2);

const [COA1, setCOA1] = useState("");
const [CE1, setCE1] = useState("");
const [FCF1, setFCF1] = useState(COA1 - CE1);

const [PV2, setPV2] = useState("");
const [GR1, setGR1] = useState("");
const [FCF3, setFCF3] = useState(PV2 * (1 + GR1));

const [FCF2, setFCF2] = useState("");
const [TGR1, setTGR1] = useState("");
const [DR2, setDR2] = useState("");
const [TV1, setTV1] = useState(FCF2 *(1+ TGR1)/ (DR2 - TGR1 ));

const [TV2, setTV2] = useState("");
const [DR3, setDR3] = useState("");
const [NOY3, setNOY3] = useState("");
const [NPV, setNPV] = useState(TV2/ ( 1 + DR3)^NOY3);

const [CTD1, setCTD1] = useState("");
const [CC1, setCC1] = useState("");
const [ND1, setND1] = useState(CTD1 - CC1);

const [PCF1, setPCF1] = useState("");
const [ND2, setND2] = useState("");
const [TPFCF1 , setTPFCF1] = useState(PCF1 - ND2);

const [TPV1, setTPV1] = useState("");
const [NOS4, setNOS4] = useState("");
const [SP1, setSP1] = useState(TPV1 /NOS4);

function qq1(val){

    setQ1(val.target.value);
  }
function qq2(val){

  setQ2(val.target.value);
}
function qq3(val){

  setQ3(val.target.value);
}
function qq4(val){

  setQ4(val.target.value);
}
function qq5(val){

  setQ5(val.target.value);
}
function qq6(val){

  setQ6(val.target.value);
}
function qq7(val){

  setQ7(val.target.value);
}
function qq8(val){

  setQ8(val.target.value);
}
function qq9(val){

  setQ9(val.target.value);
}
function qq10(val){

  setQ10(val.target.value);
}
function qq11(val){

  setQ11(val.target.value);
}
function qq12(val){

  setQ12(val.target.value);
}
function qq13(val){

  setQ13(val.target.value);
}
function qq14(val){

  setQ14(val.target.value);
}
function qq15(val){

  setQ15(val.target.value);
}
function qq16(val){

  setQ16(val.target.value);
}
function qq17(val){

  setQ17(val.target.value);
}
function qq18(val){

  setQ18(Q18);
}

// Profit loss
function op1(){

    setOP1(SOS + SOP + OOR);
}

function pbt1(){

  setPBT1(SOS + SOP + OOR);
}

function pat1(){

setPAT1(PATs / OOS);
}

function eps(){

  setEPS(PATs / OOS);
}

//Balance sheet

function she1(){

  setSHE1(ASS1 - LIA1);
}
function sc1(){

setSC1(FV1 * NOS1);
}
function nos1(){

setNOS2(SC2 / FV2);
}

function tl1(){

setTL1(SHF1 + NCL1 + CL1);
}


function she2(){

  setSHE2(SC3 + R1 + S1);
}

function gb1(){

setGB1(PYDB1 + ADY1 - DDY1);
}

function td1(){

setTD1(PYDV1 - CYD1 - DDY2 );
}

function nb1(){

setNB1(GB2 - TD2);
}


function ta1(){

  setTA1(FA1 + CA1);
}

function ass2(){

setASS2(SHF2 + LIA2);
}
//Cash flow 
function cf1(){

setCF1(NCOA1 + NCIA1 + NCFA1);
}

//Profitability
function ebit1(){

setEBIT1(OR1 - OE1);
}


function or2(){

  setOR2(TR2 - OI1);
}

function oe2(){

setOE2(TE2 - FC1 - DA1);
}

function ebit3(){

setEBIT3(EBIT2 / OR3);
}

function patm1(){

setPATM1(PAT2 / TR3);
}


function roe1(){

  setROE1(NP1 / SHE3 *100);
}

function npm1(){

  setNPM1(NP2 / NS1 *100);
}

function at1(){

  setAT1(NS2 / ATA1);
}

function fl1(){

  setFL1(ATA2 / SHE4);
}

function roa1(){

  setROA1(NI1 + I1 *(1 - TR4) / TAA1);
}

function taa2(){

  setTAA2(LAA1 + RAA1 /2);
}

function roce1(){

  setROCE1(PBIT1 * OCE1);
}

function oce2(){

  setOCE2(STD1 + LTD1 + E1);
}

// Leverage ratius
function icr1(){

  setICR1(EBIT4 / FA2);
}

function ebit5(){

  setEBIT5(EBITDA1 - DA2);
}

function ebitda2(){

  setEBITDA2(R2 - E2 -(FC2 - D1));
}

function dter1(){

  setDTER1(TD3 / TE3);
}

function td4(){

  setTD4(LTB1 + STB1);
}


function dtar1(){

  setDTAR1(TD5 / TA2);
}


function ata7(){

  ATA7(LA1 + RA1 /2);
}

function ata3(){

  setATA3(LATA1 + RATA1 /2);
}


function ate1(){

setATE1(LATE1 + RATE1 /2);
}

function flr1(){

  setFLR1(ATA4 + ATE );
}

//Valuation Ratio
function psr1(){

  setPSR1(CSP1 / SPS1);
}

function sps6(){

  setSPS6(TR5 / NOS3);
}

function bv1(){

  setBV1(SC4 + R3 - RR1 / TOS1);
}

function pbv1(){

  setPBV1(CSP2 / BV2);
}

function eps3(){

  setEPS3(PAT3 / TOS2);
}
  
function per1(){
  
  setPER1(CSP3 / EPS4 );
  }
  
// OPerating ratius
  function fat1(){
  
    setFAT1(OR4 - TAT1);
  }
  
  function tat2(){
  
    setTAT2(LATA2 + RATA2 /2);
  }
  
  function lwc(){
  
    setLWC(LCA2 + LCL2 /2);
  }
  
  function rwc(){
  
    setRWC(RCA2 + RCL2 /2);
  }
  
  
  function awc1(){
  
    setAWC1(LWC1 + RWC1 /2);
  }
  
  function wct1(){
  
    setWCT1(R5 / AWC2);
  }

  function ata6(){
  
    setATA6(LATA3 + RATA3 /2);
  }
  
  function tat3(){
  
    setTAT3(OR5 / ATA5);
  }
  
  function it1(){
  
    setIT1(COGS1 / AI1);
  }
  
  function ai2(){

    setAI2(LAT1 + RAT1 /2);
  }
  
  function cogs2(){
  
    setCOGS2(COMC1 + POST1 + SSC1 + PF1);
  }
  
  function ind1(){
  
    setIND1(365 / IT2);
  }
  
  function rtr1(){
  
    setRTR1(R4 / AR1);
  }
  
  function ar2(){
  
    setAR2(LAR + RAR /2);
  }
  
  function dso1(){
  
    setDSO1(365 / RTR2);
  }
  

  //Extra
  function gpm1(){
  
    setGPM1(GP1 * NS3);
  }
  
  function gp2(){
  
    setGP2(NS4 - COGS3);
  }
  
  
  function fv3(){
  
    setFV3(A1 *(+ OCR1)^ NOY1);
  }
  
  function pv1(){
  
    setPV1(A2 /(+ DR1)^ NOY2);
  }
  
  
  function fcf1(){
  
    setFCF1(COA1 - CE1);
  }
  


  function fcf3(){
  
    setFCF3(PV2 * (1 + GR1));
  }
  

  function tv1(){
  
    setTV1(FCF2 *(1+ TGR1)/ (DR2 - TGR1 ));
  }

  function npv(){
  
    setNPV(TV2/ ( 1 + DR3)^NOY3);
  }
  
  function nd1(){
  
    setND1(CTD1 - CC1);
  }
  
  function tpfcf1(){
  
    setTPFCF1(PCF1 - ND2);
  }

  function sp1(){
  
    setSP1(TPV1 /NOS4);
  }
const handleSubmit = (e) => {
  e.preventDefault();
//   setdata(value);
  setvalue("");
}
return (
    <div className="App">
        <div className="number-input">
        <h1>Don't reload the page otherwise the output will be erase 
            <a href={require("./report.pdf")} download="AnnualReport">PDF</a></h1>
        <div className="row">
        <div className="column">
                <lable>What does the Company do?</lable>
                <textarea type="text" onChange={qq1}/>
                <button onClick={() =>setQQ1(true)}>Submit</button>
                {QQ1?<textarea>{Q1}</textarea>:null}
        </div>
        <div className="column">
                <lable>Who are its promoter? What are their background?</lable>
                <textarea type="text" onChange={qq2}/>
                <button onClick={() =>setQQ2(true)}>Submit</button>
                {QQ2?<textarea>{Q2}</textarea>:null}
        </div>

        <div className="column">
                <lable>What do they manufacture (in case it is a manufacturing Company)</lable>
                <textarea type="text" onChange={qq3}/>
                <button onClick={() =>setQQ3(true)}>Submit</button>
                {QQ3?<textarea>{Q3}</textarea>:null}
        </div>

        <div className="column">
                <lable>How many plant do they have and Where are they located?</lable>
                <textarea type="text" onChange={qq4}/>
                <button onClick={() =>setQQ4(true)}>Submit</button>
                {QQ4?<textarea>{Q4}</textarea>:null}
        </div>
        </div>

<div className="row">
        <div className="column">
                <lable>Are they running the plant in full Capacity?</lable>
                <textarea type="text" onChange={qq5}/>
                <button onClick={() =>setQQ5(true)}>Submit</button>
                {QQ5?<textarea>{Q5}</textarea>:null}
        </div>

        <div className="column">
                <lable>What Kind of raw material is required?</lable>
                <textarea type="text" onChange={qq6}/>
                <button onClick={() =>setQQ6(true)}>Submit</button>
                {QQ6?<textarea>{Q6}</textarea>:null}
        </div>

        <div className="column">
                <lable>Who are the Company client or end users?</lable>
                <textarea type="text" onChange={qq7}/>
                <button onClick={() =>setQQ7(true)}>Submit</button>
                {QQ7?<textarea>{Q7}</textarea>:null}
        </div>

        <div className="column">
                <lable>Who are the Competitors? </lable>
                <textarea type="text" onChange={qq8}/>
                <button onClick={() =>setQQ8(true)}>Submit</button>
                {QQ8?<textarea>{Q8}</textarea>:null}
        </div>
        </div>

        <div className="row">
        <div className="column">
                <lable>Who are the major shareHolder of the Company?</lable>
                <textarea type="text" onChange={qq9}/>
                <button onClick={() =>setQQ9(true)}>Submit</button>
                {QQ9?<textarea>{Q9}</textarea>:null}
        </div>

        <div className="column">
                <lable>Do they plan to lanch any new products?</lable>
                <textarea type="text" onChange={qq10}/>
                <button onClick={() =>setQQ10(true)}>Submit</button>
                {QQ10?<textarea>{Q10}</textarea>:null}
        </div>

        <div className="column">
                <lable>Do they plan to expand to different Countries?</lable>
                <textarea type="text" onChange={qq11}/>
                <button onClick={() =>setQQ11(true)}>Submit</button>
                {QQ11?<textarea>{Q11}</textarea>:null}
        </div>

        <div className="column">
                <lable>What is the revenue mix? which product sell the mast?</lable>
                <textarea type="text" onChange={qq12}/>
                <button onClick={() =>setQQ12(true)}>Submit</button>
                {QQ12?<textarea>{Q12}</textarea>:null}
        </div>
        </div>

        <div className="row">
        <div className="column">
                <lable>Do they operate under a heavy regultory environment?</lable>
                <textarea type="text" onChange={qq13}/>
                <button onClick={() =>setQQ13(true)}>Submit</button>
                {QQ13?<textarea>{Q13}</textarea>:null}
        </div>

        <div className="column">
                <lable>Who are their bank auditor?</lable>
                <textarea type="text" onChange={qq14}/>
                <button onClick={() =>setQQ14(true)}>Submit</button>
                {QQ14?<textarea>{Q14}</textarea>:null}
        </div>

        <div className="column">
                <lable>How many employee do they have? Does the Company have labor issue?</lable>
                <textarea type="text" onChange={qq15}/>
                <button onClick={() =>setQQ15(true)}>Submit</button>
                {QQ15?<textarea>{Q15}</textarea>:null}
        </div>

        <div className="column">
                <lable>What are the entry barrier for new participants to enter the industry?</lable>
                <textarea type="text" onChange={qq16}/>
                <button onClick={() =>setQQ16(true)}>Submit</button>
                {QQ16?<textarea>{Q16}</textarea>:null}
        </div>
        </div>

        <div className="row">
        <div className="column">
                <lable>Is the Company manufacturing product that can be easily replicated in a country with cheap Labor?</lable>
                <textarea type="text" onChange={qq17}/>
                <button onClick={() =>setQQ17(true)}>Submit</button>
                {QQ17?<textarea>{Q17}</textarea>:null}
        </div>

        <div className="column">
                <lable>Does the Computer have too many subsidiaries?</lable>
                <textarea type="text" onChange={qq18}/>
                <button onClick={() =>setQQ18(true)}>Submit</button>
                {QQ18?<textarea>{Q18}</textarea>:null}
        </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>The sales of services</lable>
                <input type="number" placeholder="0" value={SOS}
                onChange={e=> setSOS(+e.target.value)}
                />

                <lable>The sale of products</lable>
                <input type="number" placeholder="0" value={SOP} 
                onChange={e=> setSOP(+e.target.value)}
                />
                
                <lable>Other Operating revenue</lable>
                <input type="number" placeholder="0" value={OOR}
                onChange={e=> setOOR(+e.target.value)}
                />

                <lable>Operating revenue</lable>
                <button onClick={op1}>Submit</button>
                <h4>{OP1}</h4>

                
            </form>
          </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Total revenue</lable>
                <input type="number" placeholder="0" value={TR1}
                onChange={e=> setTR1(+e.target.value)}
                />

                <lable>Total operating Expenses</lable>
                <input type="number" placeholder="0" value={TOE1} 
                onChange={e=> setTOE1(+e.target.value)}
                />
                
                <lable>If Extraordinary items</lable>
                <input type="number" placeholder="0" value={IEI1}
                onChange={e=> setIEI1(+e.target.value)}
                />

                <lable>Profit before tax</lable>
                <button onClick={pbt1}>Submit</button>
                <h4>{PBT1}</h4>

            </form>
          </div>
        </div>
        {/* profit loss */}

        <div className="row">
        <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Profit before tax</lable>
                <input type="number" placeholder="0" value={PBT2} 
                onChange={e=> setPBT2(+e.target.value)}
                />
                <lable>Tax Expenses</lable>
                <input type="number" placeholder="0" value={TE1}
                onChange={e=> setTE1(+e.target.value)}
                />
                
            <lable>Profit after tax</lable>
            <button onClick={pat1}>Submit</button>
            <h4>{PAT1}</h4>

            </form>
          </div>

          <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Profit After tax</lable>
                <input type="number" placeholder="0" value={PATs} 
                onChange={e=> setPATs(+e.target.value)}
                />
                <lable>Total no of outstanding ordinary shares</lable>
                <input type="number" placeholder="0" value={OOS}
                onChange={e=> setOOS(+e.target.value)}
                />
                
            <lable>Earning per share</lable>
            <button onClick={eps}>Submit</button>
            <h4>{EPS}</h4>

            </form>
          </div>
          
          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Assets</lable>
                <input type="number" placeholder="0" value={ASS1}
                onChange={e=> setASS1(+e.target.value)}
                />

                <lable>Libraries</lable>
                <input type="number" placeholder="0" value={LIA1} 
                onChange={e=> setLIA1(+e.target.value)}
                />

                <lable>ShareHolder equity</lable>
                <button onClick={she1}>Submit</button>
                <h4>{SHE1}</h4>
            </form>
          </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Face value</lable>
                <input type="number" placeholder="0" value={FV1}
                onChange={e=> setFV1(+e.target.value)}
                />

                <lable>Number of shares</lable>
                <input type="number" placeholder="0" value={NOS1} 
                onChange={e=> setNOS1(+e.target.value)}
                />
            

                <lable>Share Capital</lable>
                <button onClick={sc1}>Submit</button>
                <h4>{SC1}</h4>

            </form>
          </div>
        </div>

 {/* Balance sheet */}
      
        <div className="row">
        <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Share Capital</lable>
                <input type="number" placeholder="0" value={SC2} 
                onChange={e=> setSC2(+e.target.value)}
                />
                <lable>Face value</lable>
                <input type="number" placeholder="0" value={FV2}
                onChange={e=> setFV2(+e.target.value)}
                />
                
            <lable>Number of shares</lable>
            <button onClick={nos1}>Submit</button>
            <h4>{NOS2}</h4>

            </form>
          </div>

          <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>ShareHolder funds</lable>
                <input type="number" placeholder="0" value={SHF1} 
                onChange={e=> setSHF1(+e.target.value)}
                />
                <lable>Non-Current Libraries</lable>
                <input type="number" placeholder="0" value={NCL1}
                onChange={e=> setNCL1(+e.target.value)}
                />
                <lable>Current Libraries</lable>
                <input type="number" placeholder="0" value={CL1}
                onChange={e=> setCL1(+e.target.value)}
                />

            <lable>Total Libraries</lable>
            <button onClick={tl1}>Submit</button>
            <h4>{TL1}</h4>

            </form>
          </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Share Capital</lable>
                <input type="number" placeholder="0" value={SC3}
                onChange={e=> setSC3(+e.target.value)}
                />

                <lable>Reserve</lable>
                <input type="number" placeholder="0" value={R1} 
                onChange={e=> setR1(+e.target.value)}
                />
                
                <lable>Surplus</lable>
                <input type="number" placeholder="0" value={S1}
                onChange={e=> setS1(+e.target.value)}
                />

                <lable>ShareHolder equity</lable>
                <button onClick={she2}>Submit</button>
                <h4>{SHE2}</h4>

                
            </form>
          </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Pervious year value of Building</lable>
                <input type="number" placeholder="0" value={PYDB1}
                onChange={e=> setPYDB1(+e.target.value)}
                />

                <lable>Addition during this year</lable>
                <input type="number" placeholder="0" value={ADY1} 
                onChange={e=> setADY1(+e.target.value)}
                />
                
                <lable>deduction during the year</lable>
                <input type="number" placeholder="0" value={DDY1}
                onChange={e=> setDDY1(+e.target.value)}
                />

                <lable>Gross blocks</lable>
                <button onClick={gb1}>Submit</button>
                <h4>{GB1}</h4>
                
            </form>
          </div>
        </div>
        
        <div className="row">
        <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Pervious year depreciations value</lable>
                <input type="number" placeholder="0" value={PYDV1} 
                onChange={e=> setPYDV1(+e.target.value)}
                />
                <lable>Current year depreciations</lable>
                <input type="number" placeholder="0" value={CYD1}
                onChange={e=> setCYD1(+e.target.value)}
                />
                <lable>deduction for the year</lable>
                <input type="number" placeholder="0" value={DDY2}
                onChange={e=> setDDY2(+e.target.value)}
                />

            <lable>Total depreciations</lable>
            <button onClick={td1}>Submit</button>
            <h4>{TD1}</h4>

            </form>
          </div>

          <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Gross block</lable>
                <input type="number" placeholder={GB2} value={GB2} 
                onChange={e=> setGB2(+e.target.value)}
                />
                <lable>Total depreciations</lable>
                <input type="number" placeholder="0" value={TD2}
                onChange={e=> setTD2(+e.target.value)}
                />
                
            <lable>Earning per share</lable>
            <button onClick={nb1}>Submit</button>
            <h4>{NB1}</h4>

            </form>
          </div>
          
          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Fixed Assets</lable>
                <input type="number" placeholder="0" value={FA1}
                onChange={e=> setFA1(+e.target.value)}
                />

                <lable>Current Assets</lable>
                <input type="number" placeholder="0" value={CA1} 
                onChange={e=> setCA1(+e.target.value)}
                />

                <lable>Total Assets</lable>
                <button onClick={ta1}>Submit</button>
                <h4>{TA1}</h4>
            </form>
          </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>ShareHolder funds</lable>
                <input type="number" placeholder="0" value={SHF2}
                onChange={e=> setSHF2(+e.target.value)}
                />

                <lable>Libraries</lable>
                <input type="number" placeholder="0" value={LIA2} 
                onChange={e=> setLIA2(+e.target.value)}
                />

                <lable>Assets</lable>
                <button onClick={ass2}>Submit</button>
                <h4>{ASS2}</h4>
            </form>
          </div>
        </div>
        
         {/* cash flow */}

        <div className="row">
        <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Net Cash Flow from OA</lable>
                <input type="number" placeholder="0" value={NCOA1} 
                onChange={e=> setNCOA1(+e.target.value)}
                />
                <lable>Net Cash Flow from IA </lable>
                <input type="number" placeholder="0" value={NCIA1}
                onChange={e=> setNCIA1(+e.target.value)}
                />
                <lable>Net Cash Flow from FA</lable>
                <input type="number" placeholder="0" value={NCFA1}
                onChange={e=> setNCFA1(+e.target.value)}
                />

            <lable>Cash Flow</lable>
            <button onClick={cf1}>Submit</button>
            <h4>{CF1}</h4>

            </form>
          </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Total revenue</lable>
                <input type="number" placeholder="0" value={TR2}
                onChange={e=> setTR2(+e.target.value)}
                />

                <lable>Other income</lable>
                <input type="number" placeholder="0" value={OI1} 
                onChange={e=> setOI1(+e.target.value)}
                />
                

                <lable>Operating revenue</lable>
                <button onClick={or2}>Submit</button>
                <h4>{OR2}</h4>
            </form>
          </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Total Expenses</lable>
                <input type="number" placeholder="0" value={TE2}
                onChange={e=> setTE2(+e.target.value)}
                />
                <lable>Finance Cost</lable>
                <input type="number" placeholder="0" value={FC1} 
                onChange={e=> setFC1(+e.target.value)}
                />
                <lable>Depreciation & Amortization</lable>
                <input type="number" placeholder="0" value={DA1} 
                onChange={e=> setDA1(+e.target.value)}
                />

                <lable>Operating Expenses</lable>
                <button onClick={oe2}>Submit</button>
                <h4>{OE2}</h4>

            </form>
          </div>
          
          <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Operating revenue</lable>
                <input type="number" placeholder="0" value={OR1} 
                onChange={e=> setOR1(+e.target.value)}
                />
                <lable>Operating Expenses</lable>
                <input type="number" placeholder="0" value={OE1}
                onChange={e=> setOE1(+e.target.value)}
                />

            <lable>Ebitda</lable>
            <button onClick={ebit1}>Submit</button>
            <h4>{EBIT1}</h4>

            </form>
          </div>
        </div> 

        {/* Profitability ratius */}

        <div className="row">
        <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>EBITDA</lable>
                <input type="number" placeholder="0" value={EBIT2} 
                onChange={e=> setEBIT2(+e.target.value)}
                />
                <lable>Operating revenue</lable>
                <input type="number" placeholder={OR3} value={OR3}
                onChange={e=> setOR3(+e.target.value)}
                />
                
            <lable>Number of shares</lable>
            <button onClick={ebit3}>Submit</button>
            <h4>{EBIT3}</h4>

            </form>
          </div>

          <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Profit After tax</lable>
                <input type="number" placeholder="0" value={PAT2} 
                onChange={e=> setPAT2(+e.target.value)}
                />
                <lable>Total Revenue</lable>
                <input type="number" placeholder="0" value={TR3}
                onChange={e=> setTR3(+e.target.value)}
                />

            <lable>Profit After tax Margin</lable>
            <button onClick={patm1}>Submit</button>
            <h4>{PATM1}</h4>

            </form>
          </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Net Profit</lable>
                <input type="number" placeholder="0" value={NP1}
                onChange={e=> setNP1(+e.target.value)}
                />

                <lable>ShareHolder equity</lable>
                <input type="number" placeholder="0" value={SHE3} 
                onChange={e=> setSHE3(+e.target.value)}
                />

                <lable>Return on equity</lable>
                <button onClick={roe1}>Submit</button>
                <h4>{ROE1}</h4>

                
            </form>
          </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Net Profit</lable>
                <input type="number" placeholder="0" value={NP2}
                onChange={e=> setNP2(+e.target.value)}
                />

                <lable>Net Sales</lable>
                <input type="number" placeholder="0" value={NS1} 
                onChange={e=> setNS1(+e.target.value)}
                />

                <lable>Net Profit Margin</lable>
                <button onClick={npm1}>Submit</button>
                <h4>{NPM1}</h4>

                
            </form>
          </div>
        </div>
        
        <div className="row">
        <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Net Sales</lable>
                <input type="number" placeholder="0" value={NS2} 
                onChange={e=> setNS2(+e.target.value)}
                />
                <lable>Average Total assets</lable>
                <input type="number" placeholder="0" value={ATA1}
                onChange={e=> setATA1(+e.target.value)}
                />
                
            <lable>Assets Turnover</lable>
            <button onClick={at1}>Submit</button>
            <h4>{AT1}</h4>

            </form>
          </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Left total asset</lable>
                <input type="number" placeholder="0" value={LATA1}
                onChange={e=> setLATA1(+e.target.value)}
                />

                <lable>Right total assets</lable>
                <input type="number" placeholder="0" value={RATA1} 
                onChange={e=> setRATA1(+e.target.value)}
                />
                <lable>Average total assets</lable>
                <button onClick={ata3}>Submit</button>
                <h4>{ATA3}</h4>

            </form>
          </div>

          <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Average Total Assets</lable>
                <input type="number" placeholder="0" value={ATA2} 
                onChange={e=> setATA2(+e.target.value)}
                />
                <lable>ShareHolder equity</lable>
                <input type="number" placeholder="0" value={SHE4}
                onChange={e=> setSHE4(+e.target.value)}
                />
                
            <lable>Financial Leverage</lable>
            <button onClick={fl1}>Submit</button>
            <h4>{FL1}</h4>

            </form>
          </div>
          
          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>left Average assert</lable>
                <input type="number" placeholder="0" value={LAA1}
                onChange={e=> setLAA1(+e.target.value)}
                />

                <lable>Right Average assert</lable>
                <input type="number" placeholder="0" value={RAA1} 
                onChange={e=> setRAA1(+e.target.value)}
                />

                <lable>Total Average assert</lable>
                <button onClick={taa2}>Submit</button>
                <h4>{TAA2}</h4>

            </form>
          </div>
        </div>
        
        <div className="row">
        <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Net income</lable>
                <input type="number" placeholder="0" value={NI1}
                onChange={e=> setNI1(+e.target.value)}
                />

                <lable>interest</lable>
                <input type="number" placeholder="0" value={I1} 
                onChange={e=> setI1(+e.target.value)}
                />
                
                <lable>tax rate</lable>
                <input type="number" placeholder="0" value={TR4}
                onChange={e=> setTR4(+e.target.value)}
                />

                <lable>Total Average assert</lable>
                <input type="number" placeholder="0" value={TAA1} 
                onChange={e=> setTAA1(+e.target.value)}
                />

                <lable>Return on assert</lable>
                <button onClick={roa1}>Submit</button>
                <h4>{ROA1}</h4>
            </form>
          </div>

          
          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Profit before interest & tax</lable>
                <input type="number" placeholder="0" value={PBIT1}
                onChange={e=> setPBIT1(+e.target.value)}
                />

                <lable>Overall Capital Employed</lable>
                <input type="number" placeholder="0" value={OCE1} 
                onChange={e=> setOCE1(+e.target.value)}
                />

                <lable>ROCE</lable>
                <button onClick={roce1}>Submit</button>
                <h4>{ROCE1}</h4>

            </form>
          </div>
          
          <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Short term Debt</lable>
                <input type="number" placeholder="0" value={STD1} 
                onChange={e=> setSTD1(+e.target.value)}
                />
                <lable>Long term debt</lable>
                <input type="number" placeholder="0" value={LTD1}
                onChange={e=> setLTD1(+e.target.value)}
                />
                <lable>Equity</lable>
                <input type="number" placeholder="0" value={E1}
                onChange={e=> setE1(+e.target.value)}
                />

            <lable>Number of shares</lable>
            <button onClick={oce2}>Submit</button>
            <h4>{OCE2}</h4>

            </form>
          </div>


          <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Earning before interest & tax</lable>
                <input type="number" placeholder="0" value={EBIT4} 
                onChange={e=> setEBIT4(+e.target.value)}
                />
                <lable>Finance Cost</lable>
                <input type="number" placeholder="0" value={FA2}
                onChange={e=> setFA2(+e.target.value)}
                />

            <lable>Interest Coverage Ratio</lable>
            <button onClick={icr1}>Submit</button>
            <h4>{ICR1}</h4>

            </form>
          </div>

        </div>
        
        <div className="row">
        <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>EBITDA</lable>
                <input type="number" placeholder="0" value={EBITDA1}
                onChange={e=> setEBITDA1(+e.target.value)}
                />
                <lable>Depreciation & Amoritization</lable>
                <input type="number" placeholder="0" value={DA2} 
                onChange={e=> setDA2(+e.target.value)}
                />

                <lable>EBIT</lable>
                <button onClick={ebit5}>Submit</button>
                <h4>{EBIT5}</h4>
            </form>
          </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Revenue</lable>
                <input type="number" placeholder="0" value={R2}
                onChange={e=> setR2(+e.target.value)}
                />
                <lable>Expenses</lable>
                <input type="number" placeholder="0" value={E2} 
                onChange={e=> setE2(+e.target.value)}
                />
                <lable>Finance Cost</lable>
                <input type="number" placeholder="0" value={FC2} 
                onChange={e=> setFC2(+e.target.value)}
                />
                <lable>depreciations</lable>
                <input type="number" placeholder="0" value={D1} 
                onChange={e=> setD1(+e.target.value)}
                />

                <lable>Share Capital</lable>
                <button onClick={ebitda2}>Submit</button>
                <h4>{EBITDA2}</h4>

            </form>
          </div>
          
          <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Long term Borrowing</lable>
                <input type="number" placeholder="0" value={LTB1} 
                onChange={e=> setLTB1(+e.target.value)}
                />
                <lable>Short term Borrowing</lable>
                <input type="number" placeholder="0" value={STB1}
                onChange={e=> setSTB1(+e.target.value)}
                />

            <lable>Total Debt</lable>
            <button onClick={td4}>Submit</button>
            <h4>{TD4}</h4>

            </form>
          </div>

          <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Total Debt</lable>
                <input type="number" placeholder="0" value={TD3} 
                onChange={e=> setTD3(+e.target.value)}
                />
                <lable>Total Equity</lable>
                <input type="number" placeholder="0" value={TE3}
                onChange={e=> setTE3(+e.target.value)}
                />
                
            <lable>Debt to equity ratio</lable>
            <button onClick={dter1}>Submit</button>
            <h4>{DTER1}</h4>

            </form>
          </div>
        </div>        

         {/* Leverage ratius */}
        <div className="row">
        <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Left asset</lable>
                <input type="number" placeholder="0" value={LA1}
                onChange={e=> setLA1(+e.target.value)}
                />

                <lable>Right asset</lable>
                <input type="number" placeholder="0" value={RA1} 
                onChange={e=> setRA1(+e.target.value)}
                />

                <lable>total asset</lable>
                <button onClick={ata7}>Submit</button>
                <h4>{ATA7}</h4>
            </form>
          </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Total Debt</lable>
                <input type="number" placeholder="0" value={TD5}
                onChange={e=> setTD5(+e.target.value)}
                />

                <lable>Total Assets</lable>
                <input type="number" placeholder="0" value={TA2} 
                onChange={e=> setTA2(+e.target.value)}
                />

                <lable>Debt to asset ratio</lable>
                <button onClick={dtar1}>Submit</button>
                <h4>{DTAR1}</h4>
            </form>
          </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Left total asset</lable>
                <input type="number" placeholder="0" value={LATA1}
                onChange={e=> setLATA1(+e.target.value)}
                />

                <lable>Right total assets</lable>
                <input type="number" placeholder="0" value={RATA1} 
                onChange={e=> setRATA1(+e.target.value)}
                />
                <lable>Average total assets</lable>
                <button onClick={ata3}>Submit</button>
                <h4>{ATA3}</h4>

            </form>
          </div>

          <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Left total equity</lable>
                <input type="number" placeholder="0" value={LATE1} 
                onChange={e=> setLATE1(+e.target.value)}
                />
                <lable>Right total equity</lable>
                <input type="number" placeholder="0" value={RATE1}
                onChange={e=> setRATE1(+e.target.value)}
                />
                
            <lable>Average total equity</lable>
            <button onClick={ate1}>Submit</button>
            <h4>{ATE1}</h4>

            </form>
          </div>

        </div>
        
        <div className="row">
        <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Average Total Assets</lable>
                <input type="number" placeholder="0" value={ATA4} 
                onChange={e=> setATA4(+e.target.value)}
                />
                <lable>Average Total Equity</lable>
                <input type="number" placeholder="0" value={ATE}
                onChange={e=> setATE(+e.target.value)}
                />
                
            <lable>Earning per share</lable>
            <button onClick={flr1}>Submit</button>
            <h4>{FLR1}</h4>

            </form>
          </div>


          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Total Revenue</lable>
                <input type="number" placeholder="0" value={TR5}
                onChange={e=> setTR5(+e.target.value)}
                />

                <lable>total Number of shares</lable>
                <input type="number" placeholder="0" value={NOS3} 
                onChange={e=> setNOS3(+e.target.value)}
                />

                <lable>Sales per share</lable>
                <button onClick={sps6}>Submit</button>
                <h4>{SPS6}</h4>

            </form>
          </div>
          
        
          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Current share price</lable>
                <input type="number" placeholder="0" value={CSP1}
                onChange={e=> setCSP1(+e.target.value)}
                />

                <lable>Sales per share</lable>
                <input type="number" placeholder="0" value={SPS1} 
                onChange={e=> setSPS1(+e.target.value)}
                />

                <lable>Price to Sales ratio</lable>
                <button onClick={psr1}>Submit</button>
                <h4>{PSR1}</h4>
            </form>
          </div>

          <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Share Capital</lable>
                <input type="number" placeholder="0" value={SC4} 
                onChange={e=> setSC4(+e.target.value)}
                />
                <lable>Reserve</lable>
                <input type="number" placeholder="0" value={R3}
                onChange={e=> setR3(+e.target.value)}
                />
                <lable>Revalution reserve </lable>
                <input type="number" placeholder="0" value={RR1} 
                onChange={e=> setRR1(+e.target.value)}
                />
                <lable>Total no of shares</lable>
                <input type="number" placeholder="0" value={TOS1}
                onChange={e=> setTOS1(+e.target.value)}
                />
            <lable>Book value</lable>
            <button onClick={bv1}>Submit</button>
            <h4>{BV1}</h4>

            </form>
          </div>
        </div>
        {/* Valuation Ratio */}
        <div className="row">
        <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Current Share price</lable>
                <input type="number" placeholder="0" value={CSP2} 
                onChange={e=> setCSP2(+e.target.value)}
                />
                <lable>Book value</lable>
                <input type="number" placeholder="0" value={BV2}
                onChange={e=> setBV2(+e.target.value)}
                />

            <lable>price to Book value</lable>
            <button onClick={pbv1}>Submit</button>
            <h4>{PBV1}</h4>

            </form>
          </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Profit After tax</lable>
                <input type="number" placeholder="0" value={PAT3}
                onChange={e=> setPAT3(+e.target.value)}
                />

                <lable>Total no of shares </lable>
                <input type="number" placeholder="0" value={TOS2} 
                onChange={e=> setTOS2(+e.target.value)}
                />

                <lable>Earning per share</lable>
                <button onClick={eps3}>Submit</button>
                <h4>{EPS3}</h4>
            </form>
          </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Current Share price</lable>
                <input type="number" placeholder="0" value={CSP3}
                onChange={e=> setCSP3(+e.target.value)}
                />

                <lable>Earning per share</lable>
                <input type="number" placeholder="0" value={EPS4} 
                onChange={e=> setEPS4(+e.target.value)}
                />

                <lable>Price to Earning ratio</lable>
                <button onClick={per1}>Submit</button>
                <h4>{PER1}</h4>
            </form>
          </div>
        
          <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Left Total Assets</lable>
                <input type="number" placeholder="0" value={LATA2} 
                onChange={e=> setLATA2(+e.target.value)}
                />
                <lable>Right Total Assets</lable>
                <input type="number" placeholder="0" value={RATA2}
                onChange={e=> setRATA2(+e.target.value)}
                />

            <lable>Total Average assert</lable>
            <button onClick={tat2}>Submit</button>
            <h4>{TAT2}</h4>

            </form>
          </div>

        </div>
        {/* Operating ratius */}

        <div className="row">
        <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Operating revenue</lable>
                <input type="number" placeholder="0" value={OR4} 
                onChange={e=> setOR4(+e.target.value)}
                />
                <lable>Total Average assert</lable>
                <input type="number" placeholder="0" value={TAT1}
                onChange={e=> setTAT1(+e.target.value)}
                />
                
            <lable>Fixed Assets Turnover</lable>
            <button onClick={fat1}>Submit</button>
            <h4>{FAT1}</h4>

            </form>
          </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Left Current asset</lable>
                <input type="number" placeholder="0" value={LCA2}
                onChange={e=> setLCA2(+e.target.value)}
                />

                <lable>Left Current liabilites</lable>
                <input type="number" placeholder="0" value={LCL2} 
                onChange={e=> setLCL2(+e.target.value)}
                />

                <lable>Left Working Capital</lable>
                <button onClick={lwc}>Submit</button>
                <h4>{LWC}</h4>

                
            </form>
          </div>
          
          <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Right Current asset</lable>
                <input type="number" placeholder="0" value={RCA2} 
                onChange={e=> setRCA2(+e.target.value)}
                />
                <lable>Right Current liabilites</lable>
                <input type="number" placeholder="0" value={RCL2}
                onChange={e=> setRCL2(+e.target.value)}
                />
                
            <lable>Right Working Capital</lable>
            <button onClick={rwc}>Submit</button>
            <h4>{RWC}</h4>

            </form>
          </div>

          <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Left Working Capital</lable>
                <input type="number" placeholder="0" value={LWC1} 
                onChange={e=> setLWC1(+e.target.value)}
                />
                <lable>Right Working Capital</lable>
                <input type="number" placeholder="0" value={RWC1}
                onChange={e=> setRWC1(+e.target.value)}
                />
                
            <lable>Average Working Capital</lable>
            <button onClick={awc1}>Submit</button>
            <h4>{AWC1}</h4>

            </form>
          </div>
        </div>
        
        <div className="row">
        <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Revenue</lable>
                <input type="number" placeholder="0" value={R5} 
                onChange={e=> setR5(+e.target.value)}
                />
                <lable>Average Working Capital</lable>
                <input type="number" placeholder="0" value={AWC2}
                onChange={e=> setAWC2(+e.target.value)}
                />
                
            <lable>Working Capital Turnover</lable>
            <button onClick={wct1}>Submit</button>
            <h4>{WCT1}</h4>

            </form>
          </div>


          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>left total assets</lable>
                <input type="number" placeholder="0" value={LATA3}
                onChange={e=> setLATA3(+e.target.value)}
                />

                <lable>right total assets</lable>
                <input type="number" placeholder="0" value={RATA3} 
                onChange={e=> setRATA3(+e.target.value)}
                />

                <lable>Average Total assert</lable>
                <button onClick={ata6}>Submit</button>
                <h4>{ATA6}</h4>
            </form>
          </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Operating revenue</lable>
                <input type="number" placeholder="0" value={OR5}
                onChange={e=> setOR5(+e.target.value)}
                />

                <lable>Avgerage Total Assets</lable>
                <input type="number" placeholder="0" value={ATA5} 
                onChange={e=> setATA5(+e.target.value)}
                />
            

                <lable>Total assets Turnover</lable>
                <button onClick={tat3}>Submit</button>
                <h4>{TAT3}</h4>

            </form>
          </div>
          
          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Cost of Material Consumed</lable>
                <input type="number" placeholder="0" value={COMC1}
                onChange={e=> setCOMC1(+e.target.value)}
                />

                <lable>Purchased of stock in trade</lable>
                <input type="number" placeholder="0" value={POST1} 
                onChange={e=> setPOST1(+e.target.value)}
                />
                
                <lable>store & space consumed</lable>
                <input type="number" placeholder="0" value={SSC1}
                onChange={e=> setSSC1(+e.target.value)}
                />

                <lable>Power & Fuel</lable>
                <input type="number" placeholder="0" value={PF1} 
                onChange={e=> setPF1(+e.target.value)}
                />
                <lable>Cost of Good Sold</lable>
                <button onClick={cogs2}>Submit</button>
                <h4>{COGS2}</h4>
            </form>
          </div>

        </div>
        
        <div className="row">
        <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Left Inventory</lable>
                <input type="number" placeholder="0" value={LAT1} 
                onChange={e=> setLAT1(+e.target.value)}
                />
                <lable>Right Inventory</lable>
                <input type="number" placeholder="0" value={RAT1}
                onChange={e=> setRAT1(+e.target.value)}
                />

            <lable>Average Inventory</lable>
            <button onClick={ai2}>Submit</button>
            <h4>{AI2}</h4>

            </form>
          </div>

          <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Cost of Good Sold</lable>
                <input type="number" placeholder="0" 
                value={COGS1} 
                onChange={e=> setCOGS1(+e.target.value)}
                />
                <lable>Avgerage Inventory</lable>
                <input type="number" placeholder="0" value={AI1}
                onChange={e=> setAI1(+e.target.value)}
                />
                
            <lable>Inventory Turnover</lable>
            <button onClick={it1}>Submit</button>
            <h4>{IT1}</h4>

            </form>
          </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Inventory Turnover</lable>
                <input type="number" placeholder="0" value={IT2}
                onChange={e=> setIT2(+e.target.value)}
                />

                <lable>Inventory No of days</lable>
                <button onClick={ind1}>Submit</button>
                <h4>{IND1}</h4>

            </form>
          </div>
          
          <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Left Average Receivable</lable>
                <input type="number" placeholder="0" value={LAR} 
                onChange={e=> setLAR(+e.target.value)}
                />
                <lable>Right Average Receivable</lable>
                <input type="number" placeholder="0" value={RAR}
                onChange={e=> setRAR(+e.target.value)}
                />

            <lable>Average Receivable</lable>
            <button onClick={ar2}>Submit</button>
            <h4>{AR2}</h4>

            </form>
          </div>
        </div>
        
        <div className="row">
        <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Revenue</lable>
                <input type="number" placeholder="0" value={R4} 
                onChange={e=> setR4(+e.target.value)}
                />
                <lable>Average Receivable</lable>
                <input type="number" placeholder="0" value={AR1}
                onChange={e=> setAR1(+e.target.value)}
                />
                
            <lable>Receivable Turnover ratio</lable>
            <button onClick={rtr1}>Submit</button>
            <h4>{RTR1}</h4>

            </form>
          </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Receivable Turnover ratio</lable>
                <input type="number" placeholder="0" value={RTR2}
                onChange={e=> setRTR2(+e.target.value)}
                />

                <lable>Day sales outstanding</lable>
                <button onClick={dso1}>Submit</button>
                <h4>{DSO1}</h4>
  
            </form>
          </div>



          <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Net Sales</lable>
                <input type="number" placeholder="0" value={NS4} 
                onChange={e=> setNS4(+e.target.value)}
                />
                <lable>Cost of Good Sold</lable>
                <input type="number" placeholder="0" value={COGS3}
                onChange={e=> setCOGS3(+e.target.value)}
                />
                
            <lable>Gross profit</lable>
            <button onClick={gp2}>Submit</button>
            <h4>{GP2}</h4>

            </form>
          </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Gross profit</lable>
                <input type="number" placeholder="0" value={GP1}
                onChange={e=> setGP1(+e.target.value)}
                />

                <lable>Net Sales</lable>
                <input type="number" placeholder="0" value={NS3} 
                onChange={e=> setNS3(+e.target.value)}
                />

                <lable>Gross Profit Margins</lable>
                <button onClick={gpm1}>Submit</button>
                <h4>{GPM1}</h4>

                
            </form>
          </div>
        </div> 
        {/* EXTRA  */}
        <div className="row">
        <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Amount</lable>
                <input type="number" placeholder="0" value={A1} 
                onChange={e=> setA1(+e.target.value)}
                />
                <lable>Opportunity</lable>
                <input type="number" placeholder="0" value={OCR1}
                onChange={e=> setOCR1(+e.target.value)}
                />
                <lable>No of year</lable>
                <input type="number" placeholder="0" value={NOY1}
                onChange={e=> setNOY1(+e.target.value)}
                />

            <lable>Future value</lable>
            <button onClick={fv3}>Submit</button>
            <h4>{FV3}</h4>

            </form>
          </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Amount</lable>
                <input type="number" placeholder="0" value={A2}
                onChange={e=> setA2(+e.target.value)}
                />

                <lable>Discount rate</lable>
                <input type="number" placeholder="0" value={DR1} 
                onChange={e=> setDR1(+e.target.value)}
                />

                <lable>No of year</lable>
                <input type="number" placeholder="0" value={NOY2} 
                onChange={e=> setNOY2(+e.target.value)}
                />

                <lable>present value</lable>
                <button onClick={pv1}>Submit</button>
                <h4>{PV1}</h4>
            </form>
          </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Cash from Operating Activites</lable>
                <input type="number" placeholder="0" value={COA1}
                onChange={e=> setCOA1(+e.target.value)}
                />

                <lable>Pervious year fixed asstes</lable>
                <input type="number" placeholder="0" value={CE1} 
                onChange={e=> setCE1(+e.target.value)}
                />

                <lable>Future cash flow</lable>
                <button onClick={fcf1}>Submit</button>
                <h4>{FCF1}</h4>

            </form>
          </div>
          
          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Present Value</lable>
                <input type="number" placeholder="0" value={PV2}
                onChange={e=> setPV2(+e.target.value)}
                />

                <lable>Growth rate</lable>
                <input type="number" placeholder="0" value={GR1} 
                onChange={e=> setGR1(+e.target.value)}
                />

                <lable>Future cash flow</lable>
                <button onClick={fcf3}>Submit</button>
                <h4>{FCF3}</h4>

            </form>
          </div>
        </div>
        
        <div className="row">
        <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Future cash flow</lable>
                <input type="number" placeholder="0" value={FCF2} 
                onChange={e=> setFCF2(+e.target.value)}
                />
                <lable>Terminal Growth rate</lable>
                <input type="number" placeholder="0" value={TGR1}
                onChange={e=> setTGR1(+e.target.value)}
                />
                <lable>Discount rate</lable>
                <input type="number" placeholder="0" value={DR2}
                onChange={e=> setDR2(+e.target.value)}
                />

            <lable>Terminal Value</lable>
            <button onClick={tv1}>Submit</button>
            <h4>{TV1}</h4>

            </form>
          </div>

          <div className="column">
          <form onSubmit={handleSubmit}>
                <lable>Terminal value</lable>
                <input type="number" placeholder="0" value={TV2} 
                onChange={e=> setTV2(+e.target.value)}
                />
                <lable>Discount rate</lable>
                <input type="number" placeholder="0" value={DR3}
                onChange={e=> setDR3(+e.target.value)}
                />
                <lable>No of years</lable>
                <input type="number" placeholder="0" value={NOY3}
                onChange={e=> setNOY3(+e.target.value)}
                />

            <lable>NPV</lable>
            <button onClick={npv}>Submit</button>
            <h4>{NPV}</h4>

            </form>
          </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Current year total debt</lable>
                <input type="number" placeholder="0" value={CTD1}
                onChange={e=> setCTD1(+e.target.value)}
                />
                <lable>Cash & Cash balance</lable>
                <input type="number" placeholder="0" value={CC1} 
                onChange={e=> setCC1(+e.target.value)}
                />

                <lable>Net Debt</lable>
                <button onClick={nd1}>Submit</button>
                <h4>{ND1}</h4>
            </form>
          </div>

          <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>PV of Cash flow</lable>
                <input type="number" placeholder="0" value={PCF1}
                onChange={e=> setPCF1(+e.target.value)}
                />
                <lable>Net debt</lable>
                <input type="number" placeholder="0" value={ND2} 
                onChange={e=> setND2(+e.target.value)}
                />

                <lable>Total PV of FCF</lable>
                <button onClick={tpfcf1}>Submit</button>
                <h4>{TPFCF1}</h4>

            </form>
          </div>
        </div>
        
        <div className="row">
        <div className="column">
             <form onSubmit={handleSubmit}>
                <lable>Total pv of FCF</lable>
                <input type="number" placeholder="0" value={TPV1}
                onChange={e=> setTPV1(+e.target.value)}
                />
                <lable>total number of shares</lable>
                <input type="number" placeholder="0" value={NOS4} 
                onChange={e=> setNOS4(+e.target.value)}
                />

                <lable>Share price</lable>
                <button onClick={sp1}>Submit</button>
                <h4>{SP1}</h4>

            </form>
          </div>
        </div>
        
        </div>

        <div>
              <h3>Output</h3>
              {/* Question */}
              <>
              <h4>What does the Company do? :- {Q1}</h4>
              <h4>Who are its promoter? What are their background? :- {Q2}</h4>
              <h4>What do they manufacture (in case it is a manufacturing Company) :- {Q3}</h4>
              <h4>How many plant do they have and Where are they located? :- {Q4}</h4>
              <h4>Are they running the plant in full Capacity? :- {Q5}</h4>
              <h4>What Kind of raw material is required? :- {Q6}</h4>
              <h4>Who are the Company client or end users? :- {Q7}</h4>
              <h4>Who are the Competitors? :- {Q8}</h4>
              <h4>Who are the major shareHolder of the Company? :- {Q9}</h4>
              <h4>Do they plan to lanch any new products? :- {Q10}</h4>
              <h4>Do they plan to expand to different Countries? :- {Q11}</h4>
              <h4>What is the revenue mix? which product sell the mast? :- {Q12}</h4>
              <h4>Do they operate under a heavy regultory environment? :- {Q13}</h4>
              <h4>Who are their bank auditor? :- {Q14}</h4>
              <h4>How many employee do they have? Does the Company have labor issue? :- {Q15}</h4>
              <h4>What are the entry barrier for new participants to enter the industry? :- {Q16}</h4>
              <h4>Is the Company manufacturing product that can be easily replicated in a country with cheap Labor? :- {Q17}</h4>
              <h4>Does the Computer have too many subsidiaries? :- {Q18}</h4>
              {/* profit loss */}
              <h4>Operating revenue :- {OP1}</h4>
              <h4>Profit before tax :- {PBT1}</h4>
              <h4>Profit after tax :- {PAT1}</h4>
              <h4>Earning per share :- {EPS}</h4>
              {/* Balance sheet */}
              <h4>ShareHolder equity :- {SHE1}</h4>
              <h4>Share Capital :- {SC1}</h4>
              <h4>Number of shares :- {NOS2}</h4>
              <h4>Total Libraries :- {TL1}</h4>
              <h4>ShareHolder equity :- {SHE2}</h4>
              <h4>Gross blocks :- {GB1}</h4>
              <h4>Total depreciations :- {TD1}</h4>
              <h4>Earning per share :- {NB1}</h4>
              <h4>Total Assets :- {TA1}</h4>
              <h4>Assets :- {ASS2}</h4>
              {/* cash flow */}
              <h4>Cash Flow :- {CF1}</h4>
              {/* Profitability ratius  */}
              <h4>Operating revenue :- {OR2}</h4>
              <h4>Operating Expenses :- {OE2}</h4>
              <h4>Ebitda :- {EBIT1}</h4>
              <h4>Number of shares :- {EBIT3}</h4>
              <h4>Profit After tax Margin :- {PATM1}</h4>
              <h4>Return on equity :- {ROE1}</h4>
              <h4>Net Profit Margin :- {NPM1}</h4>
              <h4>Assets Turnover :- {AT1}</h4>
              <h4>Average total assets :- {ATA3}</h4>
              <h4>Financial Leverage :- {FL1}</h4>
              <h4>Total Average assert :- {TAA2}</h4>
              <h4>Return on assert :- {ROA1}</h4>
              <h4>ROCE :- {ROCE1}</h4>
              <h4>Number of shares :- {OCE2}</h4>
              {/* Leverage ratius */}
              <h4>Interest Coverage Ratio :- {ICR1}</h4>
              <h4>EBIT :- {EBIT5}</h4>
              <h4>Share Capital :- {EBITDA2}</h4>
              <h4>Total Debt :- {TD4}</h4>
              <h4>Number of shares :- {DTER1}</h4>
              <h4>total asset :- {ATA7}</h4>
              <h4>Debt to asset ratio :- {DTAR1}</h4>
              <h4>Average total assets :- {ATA3}</h4>
              <h4>Average total equity :- {ATE1}</h4>
              <h4>Earning per share :- {FLR1}</h4>
              {/* Valuation Ratio */}
              <h4>Sales per share :- {SPS6}</h4>
              <h4>Price to Sales ratio :- {PSR1}</h4>
              <h4>Book value :- {BV1}</h4>
              <h4>price to Book value :- {PBV1}</h4>
              <h4>Earning per share :- {EPS3}</h4>
              <h4>Price to Earning ratio :- {PER1}</h4>
              {/* Operating ratius  */}
              <h4>Total Average assert :- {TAT2}</h4>
              <h4>Fixed Assets Turnover :- {FAT1}</h4>
              <h4>Left Working Capital :- {LWC}</h4>
              <h4>Right Working Capital :- {RWC}</h4>
              <h4>Average Working Capital :- {AWC1}</h4>
              <h4>Working Capital Turnover :- {WCT1}</h4>
              <h4>Average Total assert :- {ATA6}</h4>
              <h4>Total assets Turnover :- {TAT3}</h4>
              <h4>Cost of Good Sold :- {COGS2}</h4>
              <h4>Average Inventory :- {AI2}</h4>
              <h4>Inventory Turnover :- {IT1}</h4>
              <h4>Inventory No of days :- {IND1}</h4>
              <h4>Average Receivable :- {AR2}</h4>
              <h4>Receivable Turnover ratio :- {RTR1}</h4>
              <h4>Day sales outstanding :- {DSO1}</h4>
              {/* EXTRA */}
              <h4>Gross profit :- {GP2}</h4>
              <h4>Gross Profit Margins :- {GPM1}</h4>
              <h4>Future value :- {FV3}</h4>
              <h4>present value :- {PV1}</h4>
              <h4>Future cash flow :- {FCF1}</h4>
              <h4>Future cash flow :- {FCF3}</h4>
              <h4>Terminal Value :- {TV1}</h4>
              <h4>NPV :- {NPV}</h4>
              <h4>Net Debt :- {ND1}</h4>
              <h4>Total PV of FCF :- {TPFCF1}</h4>
              <h4>Share price :- {SP1}</h4>
              </>
              
              
            </div>
    </div>
        
);
}


export default Post;
