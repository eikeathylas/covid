(function(window, document) {
    'use strict'
    const supports = !!document.querySelector

    const defaults = {
        baseURLG: 'https://coronavirus-19-api.herokuapp.com/all',
        baseURL: 'https://coronavirus-19-api.herokuapp.com/countries/',

        baseURLBR: 'https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-cities.csv',

        eleMain: document.getElementById('info'),

        eleNav: '#nav',
        eleToggler: '#trigger',
        eleSvg: '#trigger svg',
        eleNavlink: '#nav a',
        eleMenu: '#nav ul',

        eleOP: '#op',

        eleInfcG: '#infcG',
        eleCurG: '#curG',
        eleKillG: '#killG',

        eleCtG: '#ctG',
        eleCaG: '#caG',
        eleCsG: '#csG',
        eleKG: '#kG',
        eleCG: '#cG',
        eleCnG: '#cnG',
        eleKnG: '#knG',




        eleAC: '#AC',
        eleACB: '#ACB',
        eleACMB: '#ACMB',
        eleACPB: '#ACPB',

        eleAL: '#AL',
        eleALB: '#ALB',
        eleALMB: '#ALMB',
        eleALPB: '#ALPB',

        eleAP: '#AP',
        eleAPB: '#APB',
        eleAPMB: '#APMB',
        eleAPPB: '#APPB',

        eleAM: '#AM',
        eleAMB: '#AMB',
        eleAMMB: '#AMMB',
        eleAMPB: '#AMPB',

        eleBA: '#BA',
        eleBAB: '#BAB',
        eleBAMB: '#BAMB',
        eleBAPB: '#BAPB',

        eleCE: '#CE',
        eleCEB: '#CEB',
        eleCEMB: '#CEMB',
        eleCEPB: '#CEPB',

        eleDF: '#DF',
        eleDFB: '#DFB',
        eleDFMB: '#DFMB',
        eleDFPB: '#DFPB',

        eleES: '#ES',
        eleESB: '#ESB',
        eleESMB: '#ESMB',
        eleESPB: '#ESPB',

        eleGO: '#GO',
        eleGOB: '#GOB',
        eleGOMB: '#GOMB',
        eleGOPB: '#GOPB',

        eleMA: '#MA',
        eleMAB: '#MAB',
        eleMAMB: '#MAMB',
        eleMAPB: '#MAPB',

        eleMT: '#MT',
        eleMTB: '#MTB',
        eleMTMB: '#MTMB',
        eleMTPB: '#MTPB',

        eleMS: '#MS',
        eleMSB: '#MSB',
        eleMSMB: '#MSMB',
        eleMSPB: '#MSPB',

        eleMG: '#MG',
        eleMGB: '#MGB',
        eleMGMB: '#MGMB',
        eleMGPB: '#MGPB',

        elePA: '#PA',
        elePAB: '#PAB',
        elePAMB: '#PAMB',
        elePRPB: '#PRPB',

        elePB: '#PB',
        elePBB: '#PBB',
        elePBMB: '#PBMB',
        elePBPB: '#PBPB',

        elePR: '#PR',
        elePRB: '#PRB',
        elePRMB: '#PRMB',
        elePAPB: '#PAPB',

        elePE: '#PE',
        elePEB: '#PEB',
        elePEMB: '#PEMB',
        elePEPB: '#PEPB',

        elePI: '#PI', 
        elePIB: '#PIB', 
        elePIMB: '#PIMB',
        elePIPB: '#PIPB',

        eleRN: '#RN',
        eleRNB: '#RNB',
        eleRNMB: '#RNMB',
        eleRNPB: '#RNPB',

        eleRS: '#RS',
        eleRSB: '#RSB',
        eleRSMB: '#RSMB',
        eleRSPB: '#RSPB',

        eleRJ: '#RJ',
        eleRJB: '#RJB',
        eleRJMB: '#RJMB',
        eleRJPB: '#RJPB',

        eleRO: '#RO',
        eleROB: '#ROB',
        eleROMB: '#ROMB',
        eleROPB: '#ROPB',

        eleRR: '#RR',
        eleRRB: '#RRB',
        eleRRMB: '#RRMB',
        eleRRPB: '#RRPB',

        eleSC: '#SC',
        eleSCB: '#SCB',
        eleSCMB: '#SCMB',
        eleSCPB: '#SCPB',

        eleSE: '#SE',
        eleSEB: '#SEB',
        eleSEMB: '#SEMB',
        eleSEPB: '#SEPB',

        eleSP: '#SP',
        eleSPB: '#SPB',
        eleSPMB: '#SPMB',
        eleSPPB: '#SPPB',

        eleTO: '#TO',
        eleTOB: '#TOB',
        eleTOMB: '#TOMB',
        eleTOPB: '#TOPB',
    }

    const settings = {}

    const main = (event) => {

        if (event.type == 'load') {
            const mundo = conectDbg()
            const pais = conectDbp(defaults.baseURL + 'Brazil')
            const brasil = conectDbbr(defaults.baseURLBR)

            
            var j = 0

            var acpb = 0
            var alpb = 0
            var appb = 0
            var ampb = 0
            var bapb = 0
            var cepb = 0
            var dfpb = 0
            var espb = 0
            var gopb = 0
            var mapb = 0
            var mtpb = 0
            var mspb = 0
            var mgpb = 0
            var prpb = 0
            var pbpb = 0
            var papb = 0
            var pepb = 0
            var pipb = 0
            var rnpb = 0
            var rspb = 0
            var rjpb = 0
            var ropb = 0
            var rrpb = 0
            var scpb = 0
            var sepb = 0
            var sppb = 0
            var topb = 0
            var aca = 0
            var aco = 0
            var ala = 0
            var alo = 0
            var apa = 0
            var apo = 0
            var ama = 0
            var amo = 0
            var baa = 0
            var bao = 0
            var cea = 0
            var ceo = 0
            var dfa = 0
            var dfo = 0
            var esa = 0
            var eso = 0
            var goa = 0
            var goo = 0
            var maa = 0
            var mao = 0
            var mta = 0
            var mto = 0
            var msa = 0
            var mso = 0
            var mga = 0
            var mgo = 0
            var pra = 0
            var pro = 0
            var pba = 0
            var pbo = 0
            var paa = 0
            var pao = 0
            var pea = 0
            var peo = 0
            var pia = 0
            var pio = 0
            var rna = 0
            var rno = 0
            var rsa = 0
            var rso = 0
            var rja = 0
            var rjo = 0
            var roa = 0
            var roo = 0
            var rra = 0
            var rro = 0
            var sca = 0
            var sco = 0
            var sea = 0
            var seo = 0
            var spa = 0
            var spo = 0
            var toa = 0
            var too = 0


            for (j = 0; j <= brasil.length - 1; j++) {

                if (brasil[j].split(',')[1] == 'AC') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.eleAC.appendChild(p)
                    aca += parseInt(brasil[j].split(',')[7])
                    aco += parseInt(brasil[j].split(',')[6])
                    acpb += 1
                    settings.eleACB.innerHTML = fN(aca)
                    settings.eleACMB.innerHTML = fN(aco)
                    settings.eleACPB.innerHTML = fN(acpb)
                }

                if (brasil[j].split(',')[1] == 'AL') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.eleAL.appendChild(p)
                    ala += parseInt(brasil[j].split(',')[7])
                    alo += parseInt(brasil[j].split(',')[6])
                    alpb += 1
                    settings.eleALB.innerHTML = fN(ala)
                    settings.eleALMB.innerHTML = fN(alo)
                    settings.eleALPB.innerHTML = fN(alpb)
                }

                if (brasil[j].split(',')[1] == 'AP') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.eleAP.appendChild(p)
                    apa += parseInt(brasil[j].split(',')[7])
                    apo += parseInt(brasil[j].split(',')[6])
                    appb += 1
                    settings.eleAPB.innerHTML = fN(apa)
                    settings.eleAPMB.innerHTML = fN(apo)
                    settings.eleAPPB.innerHTML = fN(appb)
                }

                if (brasil[j].split(',')[1] == 'AM') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.eleAM.appendChild(p)
                    ama += parseInt(brasil[j].split(',')[7])
                    amo += parseInt(brasil[j].split(',')[6])
                    ampb += 1
                    settings.eleAMB.innerHTML = fN(ama)
                    settings.eleAMMB.innerHTML = fN(amo)
                    settings.eleAMPB.innerHTML = fN(ampb)
                }

                if (brasil[j].split(',')[1] == 'BA') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.eleBA.appendChild(p)
                    baa += parseInt(brasil[j].split(',')[7])
                    bao += parseInt(brasil[j].split(',')[6])
                    bapb += 1
                    settings.eleBAB.innerHTML = fN(baa)
                    settings.eleBAMB.innerHTML = fN(bao)
                    settings.eleBAPB.innerHTML = fN(bapb)
                }

                if (brasil[j].split(',')[1] == 'CE') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.eleCE.appendChild(p)
                    cea += parseInt(brasil[j].split(',')[7])
                    ceo += parseInt(brasil[j].split(',')[6])
                    cepb += 1
                    settings.eleCEB.innerHTML = fN(cea)
                    settings.eleCEMB.innerHTML = fN(ceo)
                    settings.eleCEPB.innerHTML = fN(cepb)
                }

                if (brasil[j].split(',')[1] == 'DF') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.eleDF.appendChild(p)
                    dfa += parseInt(brasil[j].split(',')[7])
                    dfo += parseInt(brasil[j].split(',')[6])
                    dfpb += 1
                    settings.eleDFB.innerHTML = fN(dfa)
                    settings.eleDFMB.innerHTML = fN(dfo)
                    settings.eleDFPB.innerHTML = fN(dfpb)
                }

                if (brasil[j].split(',')[1] == 'ES') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.eleES.appendChild(p)
                    esa += parseInt(brasil[j].split(',')[7])
                    eso += parseInt(brasil[j].split(',')[6])
                    espb += 1
                    settings.eleESB.innerHTML = fN(esa)
                    settings.eleESMB.innerHTML = fN(eso)
                    settings.eleESPB.innerHTML = fN(espb)
                }


                if (brasil[j].split(',')[1] == 'GO') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.eleGO.appendChild(p)
                    goa += parseInt(brasil[j].split(',')[7])
                    goo += parseInt(brasil[j].split(',')[6])
                    gopb += 1
                    settings.eleGOB.innerHTML = fN(goa)
                    settings.eleGOMB.innerHTML = fN(goo)
                    settings.eleGOPB.innerHTML = fN(gopb)
                }

                if (brasil[j].split(',')[1] == 'MA') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.eleMA.appendChild(p)
                    maa += parseInt(brasil[j].split(',')[7])
                    mao += parseInt(brasil[j].split(',')[6])
                    mapb += 1
                    settings.eleMAB.innerHTML = fN(maa)
                    settings.eleMAMB.innerHTML = fN(mao)
                    settings.eleMAPB.innerHTML = fN(mapb)
                }

                if (brasil[j].split(',')[1] == 'MT') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.eleMT.appendChild(p)
                    mta += parseInt(brasil[j].split(',')[7])
                    mto += parseInt(brasil[j].split(',')[6])
                    mtpb += 1
                    settings.eleMTB.innerHTML = fN(mta)
                    settings.eleMTMB.innerHTML = fN(mto)
                    settings.eleMTPB.innerHTML = fN(mtpb)
                }

                if (brasil[j].split(',')[1] == 'MS') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.eleMS.appendChild(p)
                    msa += parseInt(brasil[j].split(',')[7])
                    mso += parseInt(brasil[j].split(',')[6])
                    mspb += 1
                    settings.eleMSB.innerHTML = fN(msa)
                    settings.eleMSMB.innerHTML = fN(mso)
                    settings.eleMSPB.innerHTML = fN(mspb)
                }

                if (brasil[j].split(',')[1] == 'MG') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.eleMG.appendChild(p)
                    mga += parseInt(brasil[j].split(',')[7])
                    mgo += parseInt(brasil[j].split(',')[6])
                    mgpb += 1
                    settings.eleMGB.innerHTML = fN(mga)
                    settings.eleMGMB.innerHTML = fN(mgo)
                    settings.eleMGPB.innerHTML = fN(mgpb)
                }

                if (brasil[j].split(',')[1] == 'PR') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.elePR.appendChild(p)
                    pra += parseInt(brasil[j].split(',')[7])
                    pro += parseInt(brasil[j].split(',')[6])
                    prpb += 1
                    settings.elePRB.innerHTML = fN(pra)
                    settings.elePRMB.innerHTML = fN(pro)
                    settings.elePRPB.innerHTML = fN(prpb)
                }

                if (brasil[j].split(',')[1] == 'PB') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.elePB.appendChild(p)
                    pba += parseInt(brasil[j].split(',')[7])
                    pbo += parseInt(brasil[j].split(',')[6])
                    pbpb += 1
                    settings.elePBB.innerHTML = fN(pba)
                    settings.elePBMB.innerHTML = fN(pbo)
                    settings.elePBPB.innerHTML = fN(pbpb)
                }

                if (brasil[j].split(',')[1] == 'PA') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.elePA.appendChild(p)
                    paa += parseInt(brasil[j].split(',')[7])
                    pao += parseInt(brasil[j].split(',')[6])
                    papb += 1
                    settings.elePAB.innerHTML = fN(paa)
                    settings.elePAMB.innerHTML = fN(pao)
                    settings.elePAPB.innerHTML = fN(papb)
                }

                if (brasil[j].split(',')[1] == 'PE') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.elePE.appendChild(p)
                    pea += parseInt(brasil[j].split(',')[7])
                    peo += parseInt(brasil[j].split(',')[6])
                    pepb += 1
                    settings.elePEB.innerHTML = fN(pea)
                    settings.elePEMB.innerHTML = fN(peo)
                    settings.elePEPB.innerHTML = fN(pepb)
                }

                if (brasil[j].split(',')[1] == 'PI') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.elePI.appendChild(p)
                    pia += parseInt(brasil[j].split(',')[7])
                    pio += parseInt(brasil[j].split(',')[6])
                    pipb += 1
                    settings.elePIB.innerHTML = fN(pia)
                    settings.elePIMB.innerHTML = fN(pio)
                    settings.elePIPB.innerHTML = fN(pipb)
                }

                if (brasil[j].split(',')[1] == 'RN') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.eleRN.appendChild(p)
                    rna += parseInt(brasil[j].split(',')[7])
                    rno += parseInt(brasil[j].split(',')[6])
                    rnpb += 1
                    settings.eleRNB.innerHTML = fN(rna)
                    settings.eleRNMB.innerHTML = fN(rno)
                    settings.eleRNPB.innerHTML = fN(rnpb)
                }

                if (brasil[j].split(',')[1] == 'RS') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.eleRS.appendChild(p)
                    rsa += parseInt(brasil[j].split(',')[7])
                    rso += parseInt(brasil[j].split(',')[6])
                    rspb += 1
                    settings.eleRSB.innerHTML = fN(rsa)
                    settings.eleRSMB.innerHTML = fN(rso)
                    settings.eleRSPB.innerHTML = fN(rspb)
                }


                if (brasil[j].split(',')[1] == 'RJ') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.eleRJ.appendChild(p)
                    rja += parseInt(brasil[j].split(',')[7])
                    rjo += parseInt(brasil[j].split(',')[6])
                    rjpb += 1
                    settings.eleRJB.innerHTML = fN(rja)
                    settings.eleRJMB.innerHTML = fN(rjo)
                    settings.eleRJPB.innerHTML = fN(rjpb)
                }

                if (brasil[j].split(',')[1] == 'RO') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.eleRO.appendChild(p)
                    roa += parseInt(brasil[j].split(',')[7])
                    roo += parseInt(brasil[j].split(',')[6])
                    ropb += 1
                    settings.eleROB.innerHTML = fN(roa)
                    settings.eleROMB.innerHTML = fN(roo)
                    settings.eleROPB.innerHTML = fN(ropb)
                }

                if (brasil[j].split(',')[1] == 'RR') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.eleRR.appendChild(p)
                    rra += parseInt(brasil[j].split(',')[7])
                    rro += parseInt(brasil[j].split(',')[6])
                    rrpb += 1
                    settings.eleRRB.innerHTML = fN(rra)
                    settings.eleRRMB.innerHTML = fN(rro)
                    settings.eleRRPB.innerHTML = fN(rrpb)
                }

                if (brasil[j].split(',')[1] == 'SC') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.eleSC.appendChild(p)
                    sca += parseInt(brasil[j].split(',')[7])
                    sco += parseInt(brasil[j].split(',')[6])
                    scpb += 1
                    settings.eleSCB.innerHTML = fN(sca)
                    settings.eleSCMB.innerHTML = fN(sco)
                    settings.eleSCPB.innerHTML = fN(scpb)
                }

                if (brasil[j].split(',')[1] == 'SE') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.eleSE.appendChild(p)
                    sea += parseInt(brasil[j].split(',')[7])
                    seo += parseInt(brasil[j].split(',')[6])
                    sepb += 1
                    settings.eleSEB.innerHTML = fN(sea)
                    settings.eleSEMB.innerHTML = fN(seo)
                    settings.eleSEPB.innerHTML = fN(sepb)
                }

                if (brasil[j].split(',')[1] == 'SP') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.eleSP.appendChild(p)
                    spa += parseInt(brasil[j].split(',')[7])
                    spo += parseInt(brasil[j].split(',')[6])
                    sppb += 1
                    settings.eleSPB.innerHTML = fN(spa)
                    settings.eleSPMB.innerHTML = fN(spo)
                    settings.eleSPPB.innerHTML = fN(sppb)
                }

                if (brasil[j].split(',')[1] == 'TO') {

                    var p = document.createElement('p')
                    var span = document.createElement('span')
                    var span2 = document.createElement('span')
                    var span3 = document.createElement('span')
                    p.className = 'text-info font-weight-bold'
                    p.innerHTML = brasil[j].split(',')[2]
                    span.className = 'float-right text-secondary'
                    span.innerHTML = fN(brasil[j].split(',')[6])
                    span2.className = 'float-right text-danger'
                    span2.innerHTML = fN(brasil[j].split(',')[7])
                    span3.className = 'float-right'
                    span3.innerHTML = ' - '
                    p.appendChild(span)
                    p.appendChild(span3)
                    p.appendChild(span2)
                    settings.eleTO.appendChild(p)
                    toa += parseInt(brasil[j].split(',')[7])
                    too += parseInt(brasil[j].split(',')[6])
                    topb += 1
                    settings.eleTOB.innerHTML = fN(toa)
                    settings.eleTOMB.innerHTML = fN(too)
                    settings.eleTOPB.innerHTML = fN(topb)
                }


            }


            settings.eleInfcG.innerHTML = fN(mundo.cases)
            settings.eleKillG.innerHTML = fN(mundo.deaths)
            settings.eleCurG.innerHTML = fN(mundo.recovered)

            viewG((mundo.cases - mundo.deaths) - mundo.recovered, mundo.deaths, mundo.recovered)
            viewB(pais.active, pais.deaths, pais.recovered)

            settings.eleCtG.innerHTML = fN(pais.cases)
            settings.eleCaG.innerHTML = fN(pais.active)
            settings.eleCsG.innerHTML = fN(pais.critical)
            settings.eleKG.innerHTML = fN(pais.deaths)
            settings.eleCG.innerHTML = fN(pais.recovered)
            settings.eleCnG.innerHTML = fN(pais.todayCases)
            settings.eleKnG.innerHTML = fN(pais.todayDeaths)
        } else if (event.type == 'change') {
            const pais = conectDbp(defaults.baseURL + event.target.value)

            settings.eleCtG.innerHTML = fN(pais.cases)
            settings.eleCaG.innerHTML = fN(pais.active)
            settings.eleCsG.innerHTML = fN(pais.critical)
            settings.eleKG.innerHTML = fN(pais.deaths)
            settings.eleCG.innerHTML = fN(pais.recovered)
            settings.eleCnG.innerHTML = fN(pais.todayCases)
            settings.eleKnG.innerHTML = fN(pais.todayDeaths)
        } else if (event.type == 'scroll') {
            // const scroll = event.target.scrollingElement.scrollTop
            // settings.eleNav.classList.toggle("fixe", scroll > 6)

        } else {
            
        }
    }


    const menu = function() {
        settings.eleToggler.classList.toggle('active')
        settings.eleSvg.classList.toggle('active')
        settings.eleMenu.classList.toggle('open')
    }
    const link = function() {
        if (settings.eleMenu.classList.contains('open')) {
            settings.eleToggler.click()
        }
    }

    const fN = function(value) {
        var n = value.toString()
        var r = ''
        var x = 0

        for (var i = n.length; i > 0; i--) {
            r += n.substr(i - 1, 1) + (x == 2 && i != 1 ? '.' : '')
            x = x == 2 ? 0 : x + 1
        }

        return r.split('').reverse().join('')
    }

    const conectDbg = function() {
        var Dados = new XMLHttpRequest()
        Dados.open("GET", settings.urlG, false)
        Dados.send()
        return JSON.parse(Dados.responseText)
    }

    const conectDbp = function(url) {
        var Geral = new XMLHttpRequest()
        Geral.open("GET", url, false)
        Geral.send()
        return JSON.parse(Geral.responseText)
    }

    const conectDbbr = function(url) {
        var Geral = new XMLHttpRequest()
        Geral.open("GET", url, false)
        Geral.send()
        return Geral.responseText.split('\n')

    }

    const viewG = function(i, k, c) {
        var pieGb = document.getElementById("pieGb")
        var pieGlobal = new Chart(pieGb, {
            type: 'doughnut',
            data: {
                labels: ["Casos ativos", "Mortos", "Curados"],
                datasets: [{
                    data: [i, k, c],
                    backgroundColor: ['#e74a3b', '#858796', '#1cc88a'],
                    hoverBackgroundColor: ['#CE2A1B', '#63656F', '#139E6B'],
                }],
            },
            options: {
                maintainAspectRatio: false,
                tooltips: {
                    bodyFontColor: "#858796",
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
                },
                legend: {
                    display: false
                },
                cutoutPercentage: 80,
            },
        })
    }
    const viewB = function(i, k, c) {
        var pieBr = document.getElementById("pieBR")
        var pieBrasil = new Chart(pieBr, {
            type: 'doughnut',
            data: {
                labels: ["Casos ativos", "Mortos", "Curados"],
                datasets: [{
                    data: [i, k, c],
                    backgroundColor: ['#e74a3b', '#858796', '#1cc88a'],
                    hoverBackgroundColor: ['#CE2A1B', '#63656F', '#139E6B'],
                }],
            },
            options: {
                maintainAspectRatio: false,
                tooltips: {
                    bodyFontColor: "#858796",
                    borderColor: '#dddfeb',
                    borderWidth: 1,
                    xPadding: 15,
                    yPadding: 15,
                    displayColors: false,
                    caretPadding: 10,
                },
                legend: {
                    display: false
                },
                cutoutPercentage: 80,
            },
        })
    }

    const setUp = function() {
        settings.urlG = defaults.baseURLG

        settings.eleOP = defaults.eleMain.querySelector(defaults.eleOP)

        settings.eleInfcG = defaults.eleMain.querySelector(defaults.eleInfcG)
        settings.eleCurG = defaults.eleMain.querySelector(defaults.eleCurG)
        settings.eleKillG = defaults.eleMain.querySelector(defaults.eleKillG)

        settings.eleNav = defaults.eleMain.querySelector(defaults.eleNav)
        settings.eleToggler = defaults.eleMain.querySelector(defaults.eleToggler)
        settings.eleSvg = defaults.eleMain.querySelector(defaults.eleSvg)
        settings.eleNavlink = defaults.eleMain.querySelectorAll(defaults.eleNavlink)
        settings.eleMenu = defaults.eleMain.querySelector(defaults.eleMenu)

        settings.eleCtG = defaults.eleMain.querySelector(defaults.eleCtG)
        settings.eleCaG = defaults.eleMain.querySelector(defaults.eleCaG)
        settings.eleCsG = defaults.eleMain.querySelector(defaults.eleCsG)
        settings.eleKG = defaults.eleMain.querySelector(defaults.eleKG)
        settings.eleCG = defaults.eleMain.querySelector(defaults.eleCG)
        settings.eleCnG = defaults.eleMain.querySelector(defaults.eleCnG)
        settings.eleKnG = defaults.eleMain.querySelector(defaults.eleKnG)



        settings.eleAC = defaults.eleMain.querySelector(defaults.eleAC)
        settings.eleACB = defaults.eleMain.querySelector(defaults.eleACB)
        settings.eleACMB = defaults.eleMain.querySelector(defaults.eleACMB)
        settings.eleACPB = defaults.eleMain.querySelector(defaults.eleACPB)

        settings.eleAL = defaults.eleMain.querySelector(defaults.eleAL)
        settings.eleALB = defaults.eleMain.querySelector(defaults.eleALB)
        settings.eleALMB = defaults.eleMain.querySelector(defaults.eleALMB)
        settings.eleALPB = defaults.eleMain.querySelector(defaults.eleALPB)

        settings.eleAP = defaults.eleMain.querySelector(defaults.eleAP)
        settings.eleAPB = defaults.eleMain.querySelector(defaults.eleAPB)
        settings.eleAPMB = defaults.eleMain.querySelector(defaults.eleAPMB)
        settings.eleAPPB = defaults.eleMain.querySelector(defaults.eleAPPB)

        settings.eleAM = defaults.eleMain.querySelector(defaults.eleAM)
        settings.eleAMB = defaults.eleMain.querySelector(defaults.eleAMB)
        settings.eleAMMB = defaults.eleMain.querySelector(defaults.eleAMMB)
        settings.eleAMPB = defaults.eleMain.querySelector(defaults.eleAMPB)

        settings.eleBA = defaults.eleMain.querySelector(defaults.eleBA)
        settings.eleBAB = defaults.eleMain.querySelector(defaults.eleBAB)
        settings.eleBAMB = defaults.eleMain.querySelector(defaults.eleBAMB)
        settings.eleBAPB = defaults.eleMain.querySelector(defaults.eleBAPB)

        settings.eleCE = defaults.eleMain.querySelector(defaults.eleCE)
        settings.eleCEB = defaults.eleMain.querySelector(defaults.eleCEB)
        settings.eleCEMB = defaults.eleMain.querySelector(defaults.eleCEMB)
        settings.eleCEPB = defaults.eleMain.querySelector(defaults.eleCEPB)

        settings.eleDF = defaults.eleMain.querySelector(defaults.eleDF)
        settings.eleDFB = defaults.eleMain.querySelector(defaults.eleDFB)
        settings.eleDFMB = defaults.eleMain.querySelector(defaults.eleDFMB)
        settings.eleDFPB = defaults.eleMain.querySelector(defaults.eleDFPB)

        settings.eleES = defaults.eleMain.querySelector(defaults.eleES)
        settings.eleESB = defaults.eleMain.querySelector(defaults.eleESB)
        settings.eleESMB = defaults.eleMain.querySelector(defaults.eleESMB)
        settings.eleESPB = defaults.eleMain.querySelector(defaults.eleESPB)

        settings.eleGO = defaults.eleMain.querySelector(defaults.eleGO)
        settings.eleGOB = defaults.eleMain.querySelector(defaults.eleGOB)
        settings.eleGOMB = defaults.eleMain.querySelector(defaults.eleGOMB)
        settings.eleGOPB = defaults.eleMain.querySelector(defaults.eleGOPB)

        settings.eleMA = defaults.eleMain.querySelector(defaults.eleMA)
        settings.eleMAB = defaults.eleMain.querySelector(defaults.eleMAB)
        settings.eleMAMB = defaults.eleMain.querySelector(defaults.eleMAMB)
        settings.eleMAPB = defaults.eleMain.querySelector(defaults.eleMAPB)

        settings.eleMT = defaults.eleMain.querySelector(defaults.eleMT)
        settings.eleMTB = defaults.eleMain.querySelector(defaults.eleMTB)
        settings.eleMTMB = defaults.eleMain.querySelector(defaults.eleMTMB)
        settings.eleMTPB = defaults.eleMain.querySelector(defaults.eleMTPB)

        settings.eleMS = defaults.eleMain.querySelector(defaults.eleMS)
        settings.eleMSB = defaults.eleMain.querySelector(defaults.eleMSB)
        settings.eleMSMB = defaults.eleMain.querySelector(defaults.eleMSMB)
        settings.eleMSPB = defaults.eleMain.querySelector(defaults.eleMSPB)

        settings.eleMG = defaults.eleMain.querySelector(defaults.eleMG)
        settings.eleMGB = defaults.eleMain.querySelector(defaults.eleMGB)
        settings.eleMGMB = defaults.eleMain.querySelector(defaults.eleMGMB)
        settings.eleMGPB = defaults.eleMain.querySelector(defaults.eleMGPB)

        settings.elePR = defaults.eleMain.querySelector(defaults.elePR)
        settings.elePRB = defaults.eleMain.querySelector(defaults.elePRB)
        settings.elePRMB = defaults.eleMain.querySelector(defaults.elePRMB)
        settings.elePRPB = defaults.eleMain.querySelector(defaults.elePRPB)

        settings.elePB = defaults.eleMain.querySelector(defaults.elePB)
        settings.elePBB = defaults.eleMain.querySelector(defaults.elePBB)
        settings.elePBMB = defaults.eleMain.querySelector(defaults.elePBMB)
        settings.elePBPB = defaults.eleMain.querySelector(defaults.elePBPB)

        settings.elePA = defaults.eleMain.querySelector(defaults.elePA)
        settings.elePAB = defaults.eleMain.querySelector(defaults.elePAB)
        settings.elePAMB = defaults.eleMain.querySelector(defaults.elePAMB)
        settings.elePAPB = defaults.eleMain.querySelector(defaults.elePAPB)

        settings.elePE = defaults.eleMain.querySelector(defaults.elePE)
        settings.elePEB = defaults.eleMain.querySelector(defaults.elePEB)
        settings.elePEMB = defaults.eleMain.querySelector(defaults.elePEMB)
        settings.elePEPB = defaults.eleMain.querySelector(defaults.elePEPB)

        settings.elePI = defaults.eleMain.querySelector(defaults.elePI)
        settings.elePIB = defaults.eleMain.querySelector(defaults.elePIB)
        settings.elePIMB = defaults.eleMain.querySelector(defaults.elePIMB)
        settings.elePIPB = defaults.eleMain.querySelector(defaults.elePIPB)

        settings.eleRN = defaults.eleMain.querySelector(defaults.eleRN)
        settings.eleRNB = defaults.eleMain.querySelector(defaults.eleRNB)
        settings.eleRNMB = defaults.eleMain.querySelector(defaults.eleRNMB)
        settings.eleRNPB = defaults.eleMain.querySelector(defaults.eleRNPB)

        settings.eleRS = defaults.eleMain.querySelector(defaults.eleRS)
        settings.eleRSB = defaults.eleMain.querySelector(defaults.eleRSB)
        settings.eleRSMB = defaults.eleMain.querySelector(defaults.eleRSMB)
        settings.eleRSPB = defaults.eleMain.querySelector(defaults.eleRSPB)

        settings.eleRJ = defaults.eleMain.querySelector(defaults.eleRJ)
        settings.eleRJB = defaults.eleMain.querySelector(defaults.eleRJB)
        settings.eleRJMB = defaults.eleMain.querySelector(defaults.eleRJMB)
        settings.eleRJPB = defaults.eleMain.querySelector(defaults.eleRJPB)

        settings.eleRO = defaults.eleMain.querySelector(defaults.eleRO)
        settings.eleROB = defaults.eleMain.querySelector(defaults.eleROB)
        settings.eleROMB = defaults.eleMain.querySelector(defaults.eleROMB)
        settings.eleROPB = defaults.eleMain.querySelector(defaults.eleROPB)

        settings.eleRR = defaults.eleMain.querySelector(defaults.eleRR)
        settings.eleRRB = defaults.eleMain.querySelector(defaults.eleRRB)
        settings.eleRRMB = defaults.eleMain.querySelector(defaults.eleRRMB)
        settings.eleRRPB = defaults.eleMain.querySelector(defaults.eleRRPB)

        settings.eleSC = defaults.eleMain.querySelector(defaults.eleSC)
        settings.eleSCB = defaults.eleMain.querySelector(defaults.eleSCB)
        settings.eleSCMB = defaults.eleMain.querySelector(defaults.eleSCMB)
        settings.eleSCPB = defaults.eleMain.querySelector(defaults.eleSCPB)

        settings.eleSE = defaults.eleMain.querySelector(defaults.eleSE)
        settings.eleSEB = defaults.eleMain.querySelector(defaults.eleSEB)
        settings.eleSEMB = defaults.eleMain.querySelector(defaults.eleSEMB)
        settings.eleSEPB = defaults.eleMain.querySelector(defaults.eleSEPB)

        settings.eleSP = defaults.eleMain.querySelector(defaults.eleSP)
        settings.eleSPB = defaults.eleMain.querySelector(defaults.eleSPB)
        settings.eleSPMB = defaults.eleMain.querySelector(defaults.eleSPMB)
        settings.eleSPPB = defaults.eleMain.querySelector(defaults.eleSPPB)

        settings.eleTO = defaults.eleMain.querySelector(defaults.eleTO)
        settings.eleTOB = defaults.eleMain.querySelector(defaults.eleTOB)
        settings.eleTOMB = defaults.eleMain.querySelector(defaults.eleTOMB)
        settings.eleTOPB = defaults.eleMain.querySelector(defaults.eleTOPB)
    }

    const events = function() {
        window.addEventListener('load', main)
        window.addEventListener('scroll', main)
        settings.eleOP.addEventListener('change', main)
        settings.eleToggler.addEventListener('click', menu)
        settings.eleNavlink.forEach(elem => elem.addEventListener('click', link))
    }

    const init = function(options) {
        if (!supports) return
        setUp()
        events()
    }

    init()
}(window, document))