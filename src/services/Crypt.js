
function Asc(String){
	return String.charCodeAt(0);
}
 
function Chr(AsciiNum){
	return String.fromCharCode(AsciiNum)
}

let key = 'assbdFbdpdPdpfPdAAdpeoseslsQQEcDDldiVVkadiedkdkLLnm';

export function Encrypt(dados){
		let mensx="";
		let l;
		let i;
		let j=0;
		let ch = key;	
		for (i=0;i<dados.length; i++){
			j++;
			l=(Asc(dados.substr(i,1))+(Asc(ch.substr(j,1))));
			if (j==50){
				j=1;
			}
			if (l>255){
				l-=256;
			}
			mensx+=(Chr(l));
		}
	return mensx;
}

export function Decrypt(dados){
	let mensx="";
	let l;
	let i;
	let j=0;
	let ch = key;	
	for (i=0; i<dados.length;i++){
		j++;
		l=(Asc(dados.substr(i,1))-(Asc(ch.substr(j,1))));
		if (j==50){
			j=1;
		}
		if (l<0){
			l+=256;
		}
		mensx+=(Chr(l));
	}	
	return mensx;
}