$wnd.hal.runAsyncCallback37("function h$h(){g$h()}\nfunction i0h(){h0h()}\nfunction l0h(){k0h()}\nfunction o0h(){n0h()}\nfunction h0h(){h0h=w8c}\nfunction k0h(){k0h=w8c}\nfunction n0h(){n0h=w8c}\nfunction g$h(){g$h=w8c}\nfunction v$h(){v$h=w8c}\nfunction y$h(){y$h=w8c}\nfunction B$h(){B$h=w8c}\nfunction E$h(){E$h=w8c}\nfunction H$h(){H$h=w8c}\nfunction K$h(){K$h=w8c}\nfunction N$h(){N$h=w8c}\nfunction YZh(){YZh=w8c;Ljf()}\nfunction b0h(){b0h=w8c;bhf()}\nfunction k$h(){k$h=w8c;wb();DIm()}\nfunction F$h(a){E$h();this.a=a}\nfunction I$h(a){H$h();this.a=a}\nfunction w$h(a,b){v$h();this.b=a;this.a=b}\nfunction C$h(a,b,c){B$h();this.a=a;this.b=b;this.c=c}\nfunction O$h(a,b,c,d){N$h();this.b=a;this.d=b;this.c=c;this.a=d}\nfunction z$h(a,b,c,d,e){y$h();this.c=a;this.d=b;this.e=c;this.a=d;this.b=e}\nfunction L$h(a,b,c,d,e){K$h();this.e=a;this.b=b;this.c=c;this.d=d;this.a=e}\nfunction m$h(a,b,c,d){k$h();this.a=a;this.c=b;this.b=c;this.d=d;Db.call(this);this.wLb()}\nfunction UZh(a){RZh();pCf.call(this,a);this.qLb()}\nfunction c$h(a,b){YZh();return new d0h(b,a)}\nfunction e0h(a){b0h();return new NJm(dQd('smtp')+' '+'Socket Binding',a.rLb('smtp'))}\nfunction f0h(a){b0h();return new NJm(dQd('imap')+' '+'Socket Binding',a.rLb('imap'))}\nfunction g0h(a){b0h();return new NJm(dQd('pop3')+' '+'Socket Binding',a.rLb('pop3'))}\nfunction f$h(a,b,c,d,e){YZh();{Suo(a,ruo(b.kCd().pqd('Mail Session',c)));d.L5(Iao(c))}}\nfunction d$h(a,b){YZh();var c;{c=Pcb(b.get('mail-session').lab().Ad().UP(new h$h).NP(hje()),21);a.Wl(c)}}\nfunction _Zh(a,b,c,d){YZh();var e,f;{e=(QZh(),MZh).resolve(a);f=(new $zn(e,'read-resource')).Cad('recursive',true).build();b._ad(f,new I$h(d))}}\nfunction e$h(a,b,c,d,e,f,g){YZh();var h,i;{if(rdb(g)){h=(QZh(),LZh).resolve(a,f);i=(new $zn(h,'add')).Aad('mail-session',f).payload(g).build();b._ad(i,new O$h(c,d,f,e))}}}\nfunction a$h(a,b,c,d,e,f){YZh();var g,h;{h=a.Zdd((QZh(),LZh));g=new CPm('mail-session-form',b.kCd().qqd('Mail Session'),h,gYd(obb(abb(hqb,1),{3:1,1:1,4:1,6:1},2,6,['jndi-name','from','debug'])),new L$h(c,d,e,b,f));g.sB()}}\nfunction d0h(a,b){b0h();var c;ghf.call(this,a.name,a.sLb().isEmpty()?b.iCd().omd():b.kCd()._qd(gh(', ').nd(a.sLb())).ow());this.PLb();c=new iJm(a);c.GZc('jndi-name');if(a.tLb('smtp')){c.IZc(new i0h)}if(a.tLb('imap')){c.IZc(new l0h)}if(a.tLb('pop3')){c.IZc(new o0h)}this.w4().hR(c)}\nfunction $Zh(a,b,c,d,e,f,g,h,i){YZh();Njf.call(this,(new xDm(a,'mail-session','Mail Session')).SXc().IXc(i.kCd().Xtd()).RXc());this.uLb();this.X5(new w$h(f,e));this.d5(b.BWc('mail-session-add','Mail Session',(QZh(),LZh),new z$h(g,i,f,e,d)));this.d5(b.EWc('mail-session-refresh'));this.U5(new C$h(this,c,h));this.Z5(new F$h(i))}\nu8c(1088,13,{1:1,14:1,13:1},UZh);_.rLb=function VZh(a){var b;b=syn(this,'server'+'/'+a+'/'+'outbound-socket-binding-ref');return b.defined?b.asString():'n/a'};_.sLb=function WZh(){var a;a=new zXd;if(this.tLb('smtp')){a.add(dQd('smtp'))}if(this.tLb('imap')){a.add(dQd('imap'))}if(this.tLb('pop3')){a.add(dQd('pop3'))}return a};_.tLb=function XZh(a){return this.hasDefined('server')&&this.get('server').hasDefined(a)};u8c(4865,32,{1:1,7:1,8:1,32:1},$Zh);_.uLb=function ZZh(){};_.vLb=function b$h(a,b,c){YZh();return new m$h(this,c,a,b)};var Y1b=lLd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn',4865,GQc);u8c(4866,1,{1:1},h$h);_.qh=function i$h(a){return Bfe(this,a)};_.hd=function j$h(a){return new UZh(Pcb(a,45))};var P1b=lLd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/0methodref$ctor$Type',4866,_pb);u8c(4872,1,{1:1,7:1},m$h);_.wLb=function l$h(){};_.q6=function q$h(){return HIm(this)};_.r6=function t$h(){return JIm(this)};_.v6=function u$h(){return KIm(this)};_.h0=function n$h(){var a;a=new zXd;a.add(this.b.xZc(this.d.$3c('mail-session').gI('name',this.c.name).dI()));a.add(this.b.tZc('Mail Session',this.c.name,(QZh(),LZh),this.a));return a};_.MQ=function o$h(){if(!this.c.sLb().isEmpty()){return LIm(this.c.name,gh(', ').nd(this.c.sLb()))}return null};_.p6=function p$h(){var a;a=new zXd;a.add(this.c.name);a.addAll(this.c.sLb());return FPd(' ',a)};_.ao=function r$h(){return Iao(this.c.name)};_.bo=function s$h(){return this.c.name};var Q1b=lLd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/1',4872,_pb);u8c(4868,1,{1:1},w$h);_.I6=function x$h(a,b){_Zh(this.b,this.a,a,b)};var R1b=lLd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$0$Type',4868,_pb);u8c(4871,1,{1:1},z$h);_.K6=function A$h(a){a$h(this.c,this.d,this.e,this.a,this.b,a)};var S1b=lLd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$1$Type',4871,_pb);u8c(4873,1,{1:1},C$h);_.J6=function D$h(a){return this.a.vLb(this.b,this.c,a)};var T1b=lLd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$2$Type',4873,_pb);u8c(4874,1,{1:1},F$h);_.H6=function G$h(a){return c$h(this.a,a)};var U1b=lLd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$3$Type',4874,_pb);u8c(4867,1,{1:1,10:1},I$h);_.oi=function J$h(a){d$h(this.a,a)};var V1b=lLd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$4$Type',4867,_pb);u8c(4870,1,{1:1},L$h);_.R7=function M$h(a,b){e$h(this.e,this.b,this.c,this.d,this.a,a,b)};var W1b=lLd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$5$Type',4870,_pb);u8c(4869,1,{1:1,10:1},O$h);_.oi=function P$h(a){f$h(this.b,this.d,this.c,this.a,a)};var X1b=lLd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$6$Type',4869,_pb);u8c(5881,29,{1:1,8:1,29:1},d0h);_.PLb=function c0h(){};var p2b=lLd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionPreview',5881,zRc);u8c(5882,1,{1:1,88:1},i0h);_.Vdb=function j0h(a){return e0h(a)};var m2b=lLd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionPreview/lambda$0$Type',5882,_pb);u8c(5883,1,{1:1,88:1},l0h);_.Vdb=function m0h(a){return f0h(a)};var n2b=lLd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionPreview/lambda$1$Type',5883,_pb);u8c(5884,1,{1:1,88:1},o0h);_.Vdb=function p0h(a){return g0h(a)};var o2b=lLd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionPreview/lambda$2$Type',5884,_pb);u8c(1940,1,{1:1});_.eMb=function A1h(){var a;a=this.nMb(this.a.DD().h$c(),this.a.DD().f$c(),this.a.DD().j$c(),this.a.mC().ez(),this.a.ND().Ybd(),this.a.QD().ted(),this.a.QD().sed(),this.a.HD().c4c(),this.a.WD().xCd());this.jMb(a);return a};_.jMb=function G1h(a){};_.nMb=function K1h(a,b,c,d,e,f,g,h,i){return new $Zh(a,b,c,d,e,f,g,h,i)};u8c(1944,1,{42:1,1:1});_.um=function c2h(){this.b.Wl(this.a.a.eMb())};u8c(145,1,{1:1,150:1});_.omd=function U5n(){return 'No configured mail servers found.'};u8c(215,1,{1:1,229:1});_._qd=function Kco(a){return (new _bd).ww('Configured mail servers: ').vw(a).xw()};_.Xtd=function Hfo(){return 'Filter by: session name or session type'};sWo(FQ)(37);\n//# sourceURL=hal-37.js\n")