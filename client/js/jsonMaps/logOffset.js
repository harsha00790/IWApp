offsetMap =
{
	"LOG": {
		"LOGPORTADDRESS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PORTADDRESSENUM"
		},
		"MESSAGEID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "MESSAGEIDTYPE"
		},
		"TRIGGER": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "LOGTRIGGERENUM"
		},
		"ONTIME": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"OFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"HOLD": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "HOLDENUM"
		}
	},
	"BREAK": {
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		}
	},
	"INTERFACEMODE": {
		"PORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		},
		"RECEIVEINTERFACEMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "INTERFACEMODEENUM"
		},
		"TRANSMITINTERFACEMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "INTERFACEMODEENUM"
		},
		"RESPONSES": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ONOFFENUM"
		}
	},
	"COM": {
		"PORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		},
		"ULMYBAUDRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"EMYPARITY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "OEM4_PARITYENUM"
		},
		"ULMYDATABITS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYSTOPBITS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"EMYHANDSHAKING": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "HANDSHAKEENUM"
		},
		"EMYECHO": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ONOFFENUM"
		},
		"EMYBREAKS": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ONOFFENUM"
		},
		"CABO": ["4"],
		"CAAO": ["32"]
	},
	"LOGLIST": {
		"LOGLIST": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"LOGPORTADDRESS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "PORTADDRESSENUM"
		},
		"MESSAGEID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "MESSAGEIDTYPE"
		},
		"TRIGGER": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "LOGTRIGGERENUM"
		},
		"ONTIME": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"OFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"HOLD": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "HOLDENUM"
		}
	},
	"RTCAOBS": {
		"NOVATELDESIGNATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "UCHAR"
		},
		"SUBTYPEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "UCHAR"
		},
		"MINIMUMPSEUDORANGE": {
			"NOOFBYTES": "8",
			"OFFSET": "2",
			"DATATYPE": "DOUBLE"
		},
		"SECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "10",
			"DATATYPE": "FLOAT"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "53",
			"DATATYPE": "UCHAR"
		},
		"TRANSMITTERDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "CLASSARRAY"
		},
		"TRANSMITTERID": {
			"NOOFBYTES": "1",
			"OFFSET": "22",
			"DATATYPE": "UCHAR"
		},
		"L1LOCKFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "23",
			"DATATYPE": "UCHAR"
		},
		"L2LOCKFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "UCHAR"
		},
		"L1PSEUDORANGEOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "25",
			"DATATYPE": "DOUBLE"
		},
		"L2PSEUDORANGEOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "33",
			"DATATYPE": "DOUBLE"
		},
		"L1ADROFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "41",
			"DATATYPE": "FLOAT"
		},
		"L2ADROFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "45",
			"DATATYPE": "FLOAT"
		},
		"L2NOTENCRYPTED": {
			"NOOFBYTES": "4",
			"OFFSET": "49",
			"DATATYPE": "BOOL"
		},
		"CABO": ["22"],
		"CAAO": ["32"]
	},
	"GPSEPHEM": {
		"ULMYSATELLITEID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYTOW": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"ULMYHEALTH6": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYIODE1": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYIODE2": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYWN": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYZWN": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"DMYTOE": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYA": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAN": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"DMYM0": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		},
		"DMYECC": {
			"NOOFBYTES": "8",
			"OFFSET": "64",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA": {
			"NOOFBYTES": "8",
			"OFFSET": "72",
			"DATATYPE": "DOUBLE"
		},
		"DMYCUC": {
			"NOOFBYTES": "8",
			"OFFSET": "80",
			"DATATYPE": "DOUBLE"
		},
		"DMYCUS": {
			"NOOFBYTES": "8",
			"OFFSET": "88",
			"DATATYPE": "DOUBLE"
		},
		"DMYCRC": {
			"NOOFBYTES": "8",
			"OFFSET": "96",
			"DATATYPE": "DOUBLE"
		},
		"DMYCRS": {
			"NOOFBYTES": "8",
			"OFFSET": "104",
			"DATATYPE": "DOUBLE"
		},
		"DMYCIC": {
			"NOOFBYTES": "8",
			"OFFSET": "112",
			"DATATYPE": "DOUBLE"
		},
		"DMYCIS": {
			"NOOFBYTES": "8",
			"OFFSET": "120",
			"DATATYPE": "DOUBLE"
		},
		"DMYI0": {
			"NOOFBYTES": "8",
			"OFFSET": "128",
			"DATATYPE": "DOUBLE"
		},
		"DMYIDOT": {
			"NOOFBYTES": "8",
			"OFFSET": "136",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA0": {
			"NOOFBYTES": "8",
			"OFFSET": "144",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGADOT": {
			"NOOFBYTES": "8",
			"OFFSET": "152",
			"DATATYPE": "DOUBLE"
		},
		"ULMYIODC": {
			"NOOFBYTES": "4",
			"OFFSET": "160",
			"DATATYPE": "ULONG"
		},
		"DMYTOC": {
			"NOOFBYTES": "8",
			"OFFSET": "164",
			"DATATYPE": "DOUBLE"
		},
		"DMYTGD": {
			"NOOFBYTES": "8",
			"OFFSET": "172",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF0": {
			"NOOFBYTES": "8",
			"OFFSET": "180",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF1": {
			"NOOFBYTES": "8",
			"OFFSET": "188",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF2": {
			"NOOFBYTES": "8",
			"OFFSET": "196",
			"DATATYPE": "DOUBLE"
		},
		"BMYANTISPOOFING": {
			"NOOFBYTES": "4",
			"OFFSET": "204",
			"DATATYPE": "BOOL"
		},
		"DMYN": {
			"NOOFBYTES": "8",
			"OFFSET": "208",
			"DATATYPE": "DOUBLE"
		},
		"DMYEPHVAR": {
			"NOOFBYTES": "8",
			"OFFSET": "216",
			"DATATYPE": "DOUBLE"
		}
	},
	"IONUTC": {
		"DMYA0": {
			"NOOFBYTES": "8",
			"OFFSET": "72",
			"DATATYPE": "DOUBLE"
		},
		"DMYA1": {
			"NOOFBYTES": "8",
			"OFFSET": "80",
			"DATATYPE": "DOUBLE"
		},
		"DMYA2": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYA3": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYB0": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYB1": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYB2": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"DMYB3": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		},
		"ULMYWNT": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ULONG"
		},
		"ULMYTOT": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "ULONG"
		},
		"ULMYWNLSF": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "ULONG"
		},
		"ULMYDN": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "ULONG"
		},
		"LMYDELTATLS": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "LONG"
		},
		"LMYDELTATLSF": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "LONG"
		},
		"ULMYDELTATUTC": {
			"NOOFBYTES": "4",
			"OFFSET": "104",
			"DATATYPE": "ULONG"
		}
	},
	"OBSERVATIONS": {
		"ULMYWN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYRECTIME": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"ACLMYOBS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"USMYSVPRN": {
			"NOOFBYTES": "2",
			"OFFSET": "16",
			"DATATYPE": "USHORT"
		},
		"USMYSVFREQ": {
			"NOOFBYTES": "2",
			"OFFSET": "18",
			"DATATYPE": "USHORT"
		},
		"DMYPSR": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"FMYVPSR": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"DMYADR": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"FMYVADR": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYCNO": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"FMYLOCKTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "FLOAT"
		},
		"ULMYCSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "HEXULONG"
		},
		"DMYDION": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYVDION": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"FMYDACC": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "FLOAT"
		},
		"DMYVOPN": {
			"NOOFBYTES": "8",
			"OFFSET": "80",
			"DATATYPE": "DOUBLE"
		},
		"FMYCODEERROR": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "FLOAT"
		},
		"FMYDLLBANDWIDTH": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "FLOAT"
		},
		"FMYVDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "FLOAT"
		},
		"EMYFREQ": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "FREQUENCYENUM"
		},
		"ULMYSTATE6ID": {
			"NOOFBYTES": "4",
			"OFFSET": "104",
			"DATATYPE": "ULONG"
		},
		"SIGMYCHAN": {
			"NOOFBYTES": "4",
			"OFFSET": "108",
			"DATATYPE": "INT"
		},
		"FMYUSERCNO": {
			"NOOFBYTES": "4",
			"OFFSET": "112",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["16"],
		"CAAO": ["100"]
	},
	"RTCA1": {
		"MODIFIEDZCOUNT": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"AEB": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ACCELERATIONERRORBOUND"
		},
		"CORRECTIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "UCHAR"
		},
		"PSEUDORANGECORRECTION": {
			"NOOFBYTES": "8",
			"OFFSET": "17",
			"DATATYPE": "DOUBLE"
		},
		"ISSUEOFDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "25",
			"DATATYPE": "UCHAR"
		},
		"RANGERATECORRECTION": {
			"NOOFBYTES": "8",
			"OFFSET": "26",
			"DATATYPE": "DOUBLE"
		},
		"UDRE": {
			"NOOFBYTES": "4",
			"OFFSET": "34",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["16"],
		"CAAO": ["22"]
	},
	"RTCAREF": {
		"UCMYNOVATELDESIGNATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "UCHAR"
		},
		"UCMYSUBTYPEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "UCHAR"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "2",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "10",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "18",
			"DATATYPE": "DOUBLE"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "26",
			"DATATYPE": "UCHAR"
		}
	},
	"MSGDEF": {
		"MSGID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "UINT"
		},
		"MESSAGECRC": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"MESSAGENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "STRING"
		},
		"MESSAGETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "MESSAGETYPE"
		},
		"MESSAGEHELP": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "STRING"
		},
		"INPUT": {
			"NOOFBYTES": "4",
			"OFFSET": "14",
			"DATATYPE": "BOOL"
		},
		"OUTPUT": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "BOOL"
		},
		"MESSAGESTYLE": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "UINT"
		},
		"SAVECONFIGABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "26",
			"DATATYPE": "ULONG"
		},
		"PARAMARRAY": {
			"NOOFBYTES": "4",
			"OFFSET": "30",
			"DATATYPE": "MSGPARAMARRAY"
		},
		"ALTERNATEID": {
			"NOOFBYTES": "4",
			"OFFSET": "34",
			"DATATYPE": "ULONG"
		},
		"ACCESSSTRING": {
			"NOOFBYTES": "1",
			"OFFSET": "38",
			"DATATYPE": "STRING"
		},
		"HIDDEN": {
			"NOOFBYTES": "4",
			"OFFSET": "39",
			"DATATYPE": "BOOL"
		},
		"THROTTLED": {
			"NOOFBYTES": "4",
			"OFFSET": "43",
			"DATATYPE": "BOOL"
		},
		"RESTRICTION": {
			"NOOFBYTES": "4",
			"OFFSET": "47",
			"DATATYPE": "LOGRESTRICTRATEENUM"
		}
	},
	"DEBUG": {
		"TOKENNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"ACTIVATEFLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "BOOL"
		}
	},
	"STEERING": {
		"ULMYMODULUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYPULSEWIDTH": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"DMYMODELSTEPADJUSTMENT": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYBANDWIDTH": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		}
	},
	"CLOCKADJUST": {
		"EMYCOMMAND": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLOCKADJUSTCOMMANDENUM"
		}
	},
	"CLOCKMODEL": {
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLOCKMODELSTATUSENUM"
		},
		"ULMYREJECTCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ADMYPAR": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"ADMYDATA": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"DMYINSTRANGEBIAS": {
			"NOOFBYTES": "8",
			"OFFSET": "33",
			"DATATYPE": "DOUBLE"
		},
		"DMYINSTDRIFT": {
			"NOOFBYTES": "8",
			"OFFSET": "41",
			"DATATYPE": "DOUBLE"
		},
		"BMYCONSTELLATIONCHANGE": {
			"NOOFBYTES": "4",
			"OFFSET": "49",
			"DATATYPE": "BOOL"
		}
	},
	"CRESET": {
		"BMYCONSTELLATIONCHANGE": {
			"NOOFBYTES": "0",
			"OFFSET": "0",
			"DATATYPE": ""
		}
	},
	"RESET": {
		"ULMYDELAY": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"SAVECONFIG": {
		"ULMYDELAY": {
			"NOOFBYTES": "0",
			"OFFSET": "0",
			"DATATYPE": ""
		}
	},
	"FRESET": {
		"ETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "NVM_DATATYPEENUM"
		},
		"CABO": ["4"],
		"CAAO": ["4"]
	},
	"CHANCONFIG": {
		"ACLMYCHANCONFIG": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYNUMSVCHANS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"EMYSIGNAL": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "CHANCONFIGSIGNALENUM"
		},
		"EMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "MEASUREMENTSOURCEENUM"
		}
	},
	"MODEL": {
		"MODELNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		}
	},
	"DECODERCMDS": {
		"ULMYSIGNALCHANNELNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"EMYCOMMANDREQUEST": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FRAMEDECODERCOMMANDENUM"
		},
		"EMYNAVMSSGDATATYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "NAVIGATIONMSSGTYPEENUM"
		},
		"UIMYMAXNUMBEROFPARITYFAILURES": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "UINT"
		}
	},
	"RAWNAVDATA": {
		"ULMYSIGCHAN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSATID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"EMYSIGNALTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SIGNALTYPEENUM"
		},
		"BMYNEWDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "BOOL"
		},
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ACLMYRAWNAVDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "CLASSARRAY"
		},
		"CMYDATABIT": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "CHAR"
		},
		"UCMYPOWERSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "29",
			"DATATYPE": "UCHAR"
		},
		"ULMYRESETLOCKCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "30",
			"DATATYPE": "ULONG"
		},
		"BMYPUBLISHFRAME": {
			"NOOFBYTES": "4",
			"OFFSET": "34",
			"DATATYPE": "BOOL"
		},
		"CABO": ["28"],
		"CAAO": ["10"]
	},
	"RAWGPSSUBFRAME": {
		"IMYFRAMEDECODERNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INT"
		},
		"ULMYSATELLITEID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYSUBFRAMEID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"AUCMYRAWSUBFRAMEDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"ULMYSIGNALCHANNELNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "42",
			"DATATYPE": "ULONG"
		}
	},
	"CLOCKSTEERING": {
		"EMYSTEERINGSOURCE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLOCKSOURCEENUM"
		},
		"EMYSTEERINGSTATE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CLOCKSTEERINGSTATEENUM"
		},
		"ULMYMODULUS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"DMYEFFECTIVEPULSEWIDTH": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYBANDWIDTH": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"FMYSLOPE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"DMYLASTOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYLASTRATE": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		}
	},
	"ASSIGN": {
		"SVCHAN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SVCHAN"
		},
		"EASSIGNSTATE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ASSIGNSTATEENUM"
		},
		"ULPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "PRN"
		},
		"LDOPPLER": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "LONG"
		},
		"ULDOPPLERWINDOW": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		}
	},
	"ASSIGNALL": {
		"ESYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ASSIGNSYSTEMENUM"
		},
		"EASSIGNSTATE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ASSIGNSTATEENUM"
		},
		"ULPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "PRN"
		},
		"LDOPPLER": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "LONG"
		},
		"ULDOPPLERWINDOW": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		}
	},
	"UNASSIGN": {
		"SVCHAN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SVCHAN"
		},
		"EASSIGNSTATE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ASSIGNSTATEENUM"
		}
	},
	"UNASSIGNALL": {
		"EMYSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ASSIGNSYSTEMENUM"
		}
	},
	"GPSOL_CTS": {
		"EPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYTRACKINGELEVATIONCUTOFF": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYRTKELEVATIONCUTOFF": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"CHANSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "CLASSARRAY"
		},
		"USPRN": {
			"NOOFBYTES": "2",
			"OFFSET": "20",
			"DATATYPE": "USHORT"
		},
		"USFREQ": {
			"NOOFBYTES": "2",
			"OFFSET": "22",
			"DATATYPE": "USHORT"
		},
		"ULCHANNELSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"DPSR": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"FDOPPLER": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FCNO": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FLOCKTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYPSRRESIDUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"EMYPSRRANGEREJECT": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		},
		"FMYPSRFILTERWEIGHTING": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYRTKRESIDUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"EMYRTKAMBIGUITY": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "AMBIGUITYENUM"
		},
		"FMYRTKFILTERWEIGHTING": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "FLOAT"
		},
		"BMYISAZELAVAIL": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "BOOL"
		},
		"FMYAZIMUTH": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "FLOAT"
		},
		"FMYELEVATION": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["20"],
		"CAAO": ["64"]
	},
	"CHANDEBUG": {
		"ULCHANTRACKINGSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"USPRN": {
			"NOOFBYTES": "2",
			"OFFSET": "4",
			"DATATYPE": "USHORT"
		},
		"USFREQ": {
			"NOOFBYTES": "2",
			"OFFSET": "6",
			"DATATYPE": "USHORT"
		},
		"EDATAFORMAT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "DEBUGDATAFORMATENUM"
		},
		"ACDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"GPSOL_MON": {
		"IROW": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INT"
		},
		"ICOLUMN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "INT"
		},
		"ICOLOR": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "INT"
		},
		"ESCREENCODE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "MONITORSCREENCODEENUM"
		},
		"ASMESSAGE": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "STRING"
		}
	},
	"GPSOL_POS": {
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"EMYDATUMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "DATUMENUM"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"DDOUBLE": {
			"NOOFBYTES": "8",
			"OFFSET": "84",
			"DATATYPE": "DOUBLE"
		},
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"IINT": {
			"NOOFBYTES": "4",
			"OFFSET": "103",
			"DATATYPE": "INT"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "SOLTYPEENUM"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "100",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "101",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "102",
			"DATATYPE": "UCHAR"
		}
	},
	"DEBUGCHANNEL": {
		"EDATAFORMAT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "DEBUGDATAFORMATENUM"
		},
		"SIGCHAN1": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SIGCHAN"
		},
		"SIGCHAN2": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SIGCHAN"
		},
		"SIGCHAN3": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "SIGCHAN"
		},
		"SIGCHAN4": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "SIGCHAN"
		},
		"SIGCHAN5": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "SIGCHAN"
		}
	},
	"UNLOG": {
		"LOGPORTADDRESS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PORTADDRESSENUM"
		},
		"MESSAGEID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "MESSAGEIDTYPE"
		},
		"CABO": ["4"],
		"CAAO": ["8"]
	},
	"VERSION": {
		"ACLVERSIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"ECOMPONENTTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "COMPONENTENUM"
		},
		"SZMODELNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZPSN": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZHARDWAREVERSION": {
			"NOOFBYTES": "1",
			"OFFSET": "25",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZSOFTWAREVERSION": {
			"NOOFBYTES": "1",
			"OFFSET": "26",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZBOOTVERSION": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZCOMPILEDATE": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZCOMPILETIME": {
			"NOOFBYTES": "1",
			"OFFSET": "29",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"UNLOGALL": {
		"PORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PORTADDRESSENUM"
		},
		"REMOVEHELD": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "BOOL"
		}
	},
	"DEBUGMEMORY": {
		"EMEMORYTESTRESULT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "MEMORYTESTENUM"
		},
		"ULMEMORYBLOCK": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMEMORYHIGHWATER": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMAXMEMORY": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		}
	},
	"DEBUGPROCESS": {
		"ESTACKSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PROCESSSTACKSTATUSENUM"
		},
		"ULSTACKPOINTER": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULSTACKSIZE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULSTACKUSED": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMEMORYINUSE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULPROGRAMCOUNTER": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"DPROFILE": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"ULNUMMSGQS": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULNUMMSGSPENDING": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"ULNUMREQUESTORS": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULPROCESSID": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"SZPROCESSNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "48",
			"DATATYPE": "STRING"
		}
	},
	"RAWEPHEM": {
		"ULMYSATELLITEID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYTOE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"AUCMYSUBFRAME1": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"AUCMYSUBFRAME2": {
			"NOOFBYTES": "1",
			"OFFSET": "42",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"AUCMYSUBFRAME3": {
			"NOOFBYTES": "1",
			"OFFSET": "43",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"BESTPOS": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"EMYDATUMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "DATUMENUM"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "66",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "67",
			"DATATYPE": "UCHAR"
		},
		"UCMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "1",
			"OFFSET": "68",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "69",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "70",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "71",
			"DATATYPE": "UCHAR"
		}
	},
	"RANGE": {
		"ACLMYOBS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"USMYSVPRN": {
			"NOOFBYTES": "2",
			"OFFSET": "4",
			"DATATYPE": "USHORT"
		},
		"USMYSVFREQ": {
			"NOOFBYTES": "2",
			"OFFSET": "6",
			"DATATYPE": "USHORT"
		},
		"DMYPSR": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"FMYSDPSR": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"DMYADR": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"FMYSDADR": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"FMYDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYUSERCNO": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYLOCKTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"ULMYCSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["44"]
	},
	"FIX": {
		"EMYFIXCMD": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FIXCMDENUM"
		},
		"DMYPARAM1": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYPARAM2": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYPARAM3": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		}
	},
	"DECODERSTATUS": {
		"SIGMYCHAN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SIGCHAN"
		},
		"BMYPARITYFAILED": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "BOOL"
		},
		"BMYBITSFLIPPED": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "BOOL"
		},
		"BMYPARITYKNOWN": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "BOOL"
		},
		"ULMYRESETLOCKCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		}
	},
	"REALTIME": {
		"EMYREALTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "REALTIMEENUM"
		}
	},
	"PSRPOS": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"EMYDATUMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "DATUMENUM"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "67",
			"DATATYPE": "UCHAR"
		},
		"UCMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "1",
			"OFFSET": "68",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "69",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "70",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "71",
			"DATATYPE": "UCHAR"
		}
	},
	"SATVIS": {
		"BMYISSATVISVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BOOL"
		},
		"BMYWASGPSALMANACUSED": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "BOOL"
		},
		"ACLMYSATVISLIST": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "CLASSARRAY"
		},
		"USMYPRN": {
			"NOOFBYTES": "2",
			"OFFSET": "12",
			"DATATYPE": "USHORT"
		},
		"USMYFREQ": {
			"NOOFBYTES": "2",
			"OFFSET": "14",
			"DATATYPE": "USHORT"
		},
		"ULMYSATHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"DMYELEVATION": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYTRUEDOPPLER": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYAPPARENTDOPPLER": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["12"],
		"CAAO": ["40"]
	},
	"AUTH": {
		"EAUTHSTATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SECURITYENUM"
		},
		"ACAUTHDATA1": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		},
		"ACAUTHDATA2": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "STRING"
		},
		"ACAUTHDATA3": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "STRING"
		},
		"ACAUTHDATA4": {
			"NOOFBYTES": "1",
			"OFFSET": "7",
			"DATATYPE": "STRING"
		},
		"ACAUTHDATA5": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "STRING"
		},
		"ACMODELNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "STRING"
		},
		"ACEXPIRYDATE": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "STRING"
		}
	},
	"ECUTOFF": {
		"FMYELEVATIONCUTOFFANGLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		}
	},
	"ACKNOWLEDGE": {
		"MSGIDACKED": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"RESPONSEID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"RESPONSESTRING": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "STRING"
		}
	},
	"BATTERY": {
		"BATTERYACTION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BATTERYACTIONENUM"
		},
		"BATTERYMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "PDC_BATTERYMODEENUM"
		},
		"MAXCUTOFF": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		}
	},
	"DEL": {
		"DELETETARGET": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "DELETETARGETENUM"
		},
		"FILENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"GROUP": {
		"ACTION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "GROUPACTIONENUM"
		},
		"GROUPNAME1": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"GROUPNAME2": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"GROUPANTSN": {
		"PARAMUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"GROUPNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ASN": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"GROUPECUTOFF": {
		"PARAMUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"GROUPNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ECUTOFF": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "FLOAT"
		}
	},
	"GROUPMODE": {
		"PARAMUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"GROUPNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"MODE": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "GROUPMODEENUM"
		}
	},
	"GROUPFIXPOS": {
		"PARAMUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"GROUPNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"LATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "5",
			"DATATYPE": "DOUBLE"
		},
		"LONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "13",
			"DATATYPE": "DOUBLE"
		},
		"HEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "21",
			"DATATYPE": "DOUBLE"
		},
		"STATIONID": {
			"NOOFBYTES": "4",
			"OFFSET": "29",
			"DATATYPE": "INT"
		},
		"RESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "33",
			"DATATYPE": "INT"
		}
	},
	"GROUPSITENAME": {
		"PARAMUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"GROUPNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SITENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"METS": {
		"TARGET1": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "METTARGETENUM"
		},
		"VALUE1": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"TARGET2": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "METTARGETENUM"
		},
		"VALUE2": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"TARGET3": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "METTARGETENUM"
		},
		"VALUE3": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		}
	},
	"GROUPSITENUMBER": {
		"PARAMUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"GROUPNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SITENUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"GROUPSATLIMIT": {
		"PARAMUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"GROUPNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SATLIMIT": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "INT"
		}
	},
	"GROUPPOSAVE": {
		"PARAMUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"GROUPNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"MAXTIME": {
			"NOOFBYTES": "8",
			"OFFSET": "5",
			"DATATYPE": "DOUBLE"
		},
		"MAXHORZ": {
			"NOOFBYTES": "8",
			"OFFSET": "13",
			"DATATYPE": "DOUBLE"
		},
		"MAXVERT": {
			"NOOFBYTES": "8",
			"OFFSET": "21",
			"DATATYPE": "DOUBLE"
		}
	},
	"GROUPLOG": {
		"ACTION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "GROUPACTIONENUM"
		},
		"GROUPNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"COMPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "PORTADDRESSENUM"
		},
		"MSGID": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "MESSAGEIDTYPE"
		},
		"TRIGGER": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "LOGTRIGGERENUM"
		},
		"PERIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "17",
			"DATATYPE": "FLOAT"
		}
	},
	"GROUPANTTYPE": {
		"PARAMUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"GROUPNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ATYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"GROUPANTHEIGHT": {
		"PARAMUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"GROUPNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"HEIGHT": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "FLOAT"
		}
	},
	"CHANFREQTYPE": {
		"SVCHAN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SVCHAN"
		},
		"EMYFREQUENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FREQUENCYENUM"
		},
		"EMYTRACKMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "CHANTRACKMODEENUM"
		}
	},
	"BAT": {
		"SOURCE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PDC_BATTERYENUM"
		},
		"BATTA": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "INT"
		},
		"BATTB": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "INT"
		}
	},
	"CLOCKTYPE": {
		"EMYCLOCKTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLOCKTYPEENUM"
		},
		"DMYH0": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYHM1": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYHM2": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		}
	},
	"PROPAGATEDCLOCKMODEL": {
		"DMYRANGEBIAS": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYDRIFT": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYRANGEBIASVARIANCE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "CLOCKMODELSTATUSENUM"
		},
		"CABO": ["4"],
		"CAAO": ["28"]
	},
	"PORTSTATS": {
		"ACLMYPORTSTATISTICS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "COMMPORTENUM"
		},
		"ULMYRXCHARS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYTXCHARS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYGOODRXCHARS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYDROPPEDCHARS": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYINTERRUPTS": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYBREAKS": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYPARITYERRORS": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMINGERRORS": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"ULMYOVERRUNS": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"CABO": ["4"],
		"CAAO": ["40"]
	},
	"ALMANAC": {
		"ACLMYSVALMDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"ULPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYWN": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"DMYTOA": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYECC": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGADOT": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA0": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYMO": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF0": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF1": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYN": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"DMYA": {
			"NOOFBYTES": "8",
			"OFFSET": "84",
			"DATATYPE": "DOUBLE"
		},
		"DMYDI": {
			"NOOFBYTES": "8",
			"OFFSET": "92",
			"DATATYPE": "DOUBLE"
		},
		"ULMYSVCONFIGURATION": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH6": {
			"NOOFBYTES": "4",
			"OFFSET": "104",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH8": {
			"NOOFBYTES": "4",
			"OFFSET": "108",
			"DATATYPE": "ULONG"
		},
		"BMYANTISPOOFINGSET": {
			"NOOFBYTES": "4",
			"OFFSET": "112",
			"DATATYPE": "BOOL"
		}
	},
	"RAWALM": {
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ACLMYSUBFRAMEPAGES": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "CLASSARRAY"
		},
		"USSVID": {
			"NOOFBYTES": "2",
			"OFFSET": "12",
			"DATATYPE": "USHORT"
		},
		"AUCMYPAGERAWDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"CABO": ["12"],
		"CAAO": ["32"]
	},
	"HACK": {
		"ULHACK1": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULHACK2": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULHACK3": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULHACK4": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		}
	},
	"SIGNAL": {
		"EBLOCK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SIGNALBLOCKENUM"
		},
		"ULMYCHANNEL": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"GPSOL_VEL": {
		"EMYVELOCITYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"ULULONG": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"DMYSPEED": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYHORIZONTALSPEED": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYGROUNDTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DDOUBLE": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		}
	},
	"USERDATUM": {
		"DMYSEMIMAJORAXIS": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYINVERSEFLATTENING": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		},
		"DMYSCALE": {
			"NOOFBYTES": "8",
			"OFFSET": "64",
			"DATATYPE": "DOUBLE"
		}
	},
	"RTCAOBSIN": {
		"ULMESSAGEIDENTIFIER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFSTATION": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMESSAGETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMESSAGELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"NOVATELDESIGNATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "UCHAR"
		},
		"SUBTYPEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "21",
			"DATATYPE": "UCHAR"
		},
		"MINIMUMPSEUDORANGE": {
			"NOOFBYTES": "8",
			"OFFSET": "22",
			"DATATYPE": "DOUBLE"
		},
		"SECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "30",
			"DATATYPE": "FLOAT"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "73",
			"DATATYPE": "UCHAR"
		},
		"TRANSMITTERDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "38",
			"DATATYPE": "CLASSARRAY"
		},
		"TRANSMITTERID": {
			"NOOFBYTES": "1",
			"OFFSET": "42",
			"DATATYPE": "UCHAR"
		},
		"L1LOCKFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "43",
			"DATATYPE": "UCHAR"
		},
		"L2LOCKFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "44",
			"DATATYPE": "UCHAR"
		},
		"L1PSEUDORANGEOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "45",
			"DATATYPE": "DOUBLE"
		},
		"L2PSEUDORANGEOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "53",
			"DATATYPE": "DOUBLE"
		},
		"L1ADROFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "61",
			"DATATYPE": "FLOAT"
		},
		"L2ADROFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "65",
			"DATATYPE": "FLOAT"
		},
		"L2NOTENCRYPTED": {
			"NOOFBYTES": "4",
			"OFFSET": "69",
			"DATATYPE": "BOOL"
		},
		"CABO": ["42"],
		"CAAO": ["32"]
	},
	"RTCAREFIN": {
		"ULMESSAGEIDENTIFIER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFSTATION": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMESSAGETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMESSAGELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"UCMYNOVATELDESIGNATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "UCHAR"
		},
		"UCMYSUBTYPEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "21",
			"DATATYPE": "UCHAR"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "22",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "30",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "38",
			"DATATYPE": "DOUBLE"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "46",
			"DATATYPE": "UCHAR"
		}
	},
	"FORCEAS": {
		"SVCHAN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SVCHAN"
		},
		"EVALUE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FORCEASENUM"
		}
	},
	"GPSOL_AZEL": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYTRACKINGELEVATIONCUTOFF": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYRTKELEVATIONCUTOFF": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYGDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYPDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"FMYHDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"FMYTDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"ACLMYSATELLITESTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "CLASSARRAY"
		},
		"USMYPRN": {
			"NOOFBYTES": "2",
			"OFFSET": "36",
			"DATATYPE": "USHORT"
		},
		"USMYFREQ": {
			"NOOFBYTES": "2",
			"OFFSET": "38",
			"DATATYPE": "USHORT"
		},
		"BMYHASPRIMARY": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "BOOL"
		},
		"BMYHASSECONDARY": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "BOOL"
		},
		"ULMYPRIMARYTRACKINGSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "HEXULONG"
		},
		"ULMYSECONDARYTRACKINGSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "HEXULONG"
		},
		"DMYPRIMARYPSR": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		},
		"DMYSECONDARYPSR": {
			"NOOFBYTES": "8",
			"OFFSET": "64",
			"DATATYPE": "DOUBLE"
		},
		"FMYPRIMARYDOPPLER": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "FLOAT"
		},
		"FMYSECONDARYDOPPLER": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "FLOAT"
		},
		"FMYPRIMARYCNO": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "FLOAT"
		},
		"FMYSECONDARYCNO": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "FLOAT"
		},
		"FMYPRIMARYLOCKTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "FLOAT"
		},
		"FMYSECONDARYLOCKTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "FLOAT"
		},
		"FMYPRIMARYPSRRESIDUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "FLOAT"
		},
		"FMYSECONDARYPSRRESIDUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "FLOAT"
		},
		"EMYPRIMARYRANGEREJECT": {
			"NOOFBYTES": "4",
			"OFFSET": "104",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		},
		"EMYSECONDARYRANGEREJECT": {
			"NOOFBYTES": "4",
			"OFFSET": "108",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		},
		"FMYPRIMARYPSRFWGT": {
			"NOOFBYTES": "4",
			"OFFSET": "112",
			"DATATYPE": "FLOAT"
		},
		"FMYSECONDARYPSRFWGT": {
			"NOOFBYTES": "4",
			"OFFSET": "116",
			"DATATYPE": "FLOAT"
		},
		"FMYPRIMARYRTKRESID": {
			"NOOFBYTES": "4",
			"OFFSET": "120",
			"DATATYPE": "FLOAT"
		},
		"FMYSECONDARYRTKRESID": {
			"NOOFBYTES": "4",
			"OFFSET": "124",
			"DATATYPE": "FLOAT"
		},
		"EMYPRIMARYRTKAMB": {
			"NOOFBYTES": "4",
			"OFFSET": "128",
			"DATATYPE": "AMBIGUITYENUM"
		},
		"EMYSECONDARYRTKAMB": {
			"NOOFBYTES": "4",
			"OFFSET": "132",
			"DATATYPE": "AMBIGUITYENUM"
		},
		"FMYPRIMARYRTKFWGT": {
			"NOOFBYTES": "4",
			"OFFSET": "136",
			"DATATYPE": "FLOAT"
		},
		"FMYSECONDARYRTKFWGT": {
			"NOOFBYTES": "4",
			"OFFSET": "140",
			"DATATYPE": "FLOAT"
		},
		"BMYISAZELAVAIL": {
			"NOOFBYTES": "4",
			"OFFSET": "144",
			"DATATYPE": "BOOL"
		},
		"FMYAZIMUTH": {
			"NOOFBYTES": "4",
			"OFFSET": "148",
			"DATATYPE": "FLOAT"
		},
		"FMYELEVATION": {
			"NOOFBYTES": "4",
			"OFFSET": "152",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["36"],
		"CAAO": ["120"]
	},
	"TRACKSTAT": {
		"EPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYTRACKINGELEVATIONCUTOFF": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"CHANSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"USPRN": {
			"NOOFBYTES": "2",
			"OFFSET": "16",
			"DATATYPE": "USHORT"
		},
		"USFREQ": {
			"NOOFBYTES": "2",
			"OFFSET": "18",
			"DATATYPE": "USHORT"
		},
		"ULCHANNELSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"DPSR": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FDOPPLER": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FCNO": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FLOCKTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYPSRRESIDUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"EMYPSRRANGEREJECT": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		},
		"FMYPSRFILTERWEIGHTING": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["16"],
		"CAAO": ["40"]
	},
	"SATSTAT": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYTRACKINGELEVATIONCUTOFF": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYRTKELEVATIONCUTOFF": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"ACLMYSATELLITESTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "CLASSARRAY"
		},
		"USMYPRN": {
			"NOOFBYTES": "2",
			"OFFSET": "20",
			"DATATYPE": "USHORT"
		},
		"USMYFREQ": {
			"NOOFBYTES": "2",
			"OFFSET": "22",
			"DATATYPE": "USHORT"
		},
		"BMYHASPRIMARY": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "BOOL"
		},
		"BMYHASSECONDARY": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "BOOL"
		},
		"ULMYPRIMARYTRACKINGSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "HEXULONG"
		},
		"ULMYSECONDARYTRACKINGSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "HEXULONG"
		},
		"DMYPRIMARYPSR": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYSECONDARYPSR": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"FMYPRIMARYDOPPLER": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYSECONDARYDOPPLER": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"FMYPRIMARYCNO": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "FLOAT"
		},
		"FMYSECONDARYCNO": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "FLOAT"
		},
		"FMYPRIMARYLOCKTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "FLOAT"
		},
		"FMYSECONDARYLOCKTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "FLOAT"
		},
		"FMYPRIMARYPSRRESIDUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "FLOAT"
		},
		"FMYSECONDARYPSRRESIDUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "FLOAT"
		},
		"EMYPRIMARYRANGEREJECT": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		},
		"EMYSECONDARYRANGEREJECT": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		},
		"FMYPRIMARYPSRFWGT": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "FLOAT"
		},
		"FMYSECONDARYPSRFWGT": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "FLOAT"
		},
		"FMYPRIMARYRTKRESID": {
			"NOOFBYTES": "4",
			"OFFSET": "104",
			"DATATYPE": "FLOAT"
		},
		"FMYSECONDARYRTKRESID": {
			"NOOFBYTES": "4",
			"OFFSET": "108",
			"DATATYPE": "FLOAT"
		},
		"EMYPRIMARYRTKAMB": {
			"NOOFBYTES": "4",
			"OFFSET": "112",
			"DATATYPE": "AMBIGUITYENUM"
		},
		"EMYSECONDARYRTKAMB": {
			"NOOFBYTES": "4",
			"OFFSET": "116",
			"DATATYPE": "AMBIGUITYENUM"
		},
		"FMYPRIMARYRTKFWGT": {
			"NOOFBYTES": "4",
			"OFFSET": "120",
			"DATATYPE": "FLOAT"
		},
		"FMYSECONDARYRTKFWGT": {
			"NOOFBYTES": "4",
			"OFFSET": "124",
			"DATATYPE": "FLOAT"
		},
		"BMYISAZELAVAIL": {
			"NOOFBYTES": "4",
			"OFFSET": "128",
			"DATATYPE": "BOOL"
		},
		"FMYAZIMUTH": {
			"NOOFBYTES": "4",
			"OFFSET": "132",
			"DATATYPE": "FLOAT"
		},
		"FMYELEVATION": {
			"NOOFBYTES": "4",
			"OFFSET": "136",
			"DATATYPE": "FLOAT"
		},
		"FMYGDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "140",
			"DATATYPE": "FLOAT"
		},
		"FMYPDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "144",
			"DATATYPE": "FLOAT"
		},
		"FMYHDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "148",
			"DATATYPE": "FLOAT"
		},
		"FMYTDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "152",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["4"],
		"CAAO": ["136"]
	},
	"LOOPACCUM": {
		"ACLMYCHANNELLOOPACCUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYACCUMPERIODMS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYIQACCUMTIMEUS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYCARRIERACCUMTIMEUS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYCODEACCUMTIMEUS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"LOOPGAINS": {
		"ACLMYCHANNELLOOPGAINS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"FMYPHASEBAND": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"FMYPHASEGAIN": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYPHASERATEGAIN": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYPHASEACCGAIN": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYCODEBAND": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"FMYCODEGAIN": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"FMYCODERATEGAIN": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		}
	},
	"RTCARXSTATION": {
		"ACMYRTCASTNID": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"RTCATXSTATION": {
		"ACMYRTCASTNID": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"RTCMRXSTATION": {
		"ULMYRTCMRXSTN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"RTCMTXSTATION": {
		"ULMYRTCMTXSTN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"RTKELEVMASK": {
		"EMYELEVMASKTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RTKELEVMASKTYPEENUM"
		},
		"FMYANGLE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		}
	},
	"RTKSVENTRIES": {
		"ULMYMAXSV": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"RXSTATUS": {
		"ULMYRXERROR": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "HEXULONG"
		},
		"ACLMYSTATUSWORDS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSTATUSWORD": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "HEXULONG"
		},
		"ULMYPRIORITYMASK": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "HEXULONG"
		},
		"ULMYEVENTSETMASK": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "HEXULONG"
		},
		"ULMYEVENTCLEARMASK": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "HEXULONG"
		},
		"CABO": ["8"],
		"CAAO": ["16"]
	},
	"RXSTATUSEVENT": {
		"EMYWORD": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RXEVENTWORDENUM"
		},
		"ULMYBITPOSITION": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"EMYEVENT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "RXSTATUSFLAG"
		},
		"SZDESCRIPTION": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"STATUSCONFIG": {
		"EMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RXSTATUSCONFIGTYPE"
		},
		"EMYWORD": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RXEVENTWORDENUM"
		},
		"ULMYMASK": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "HEXULONG"
		}
	},
	"MATCHEDPOS": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"EMYDATUMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "DATUMENUM"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "66",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "67",
			"DATATYPE": "UCHAR"
		},
		"UCMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "1",
			"OFFSET": "68",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "69",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "70",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "71",
			"DATATYPE": "UCHAR"
		}
	},
	"RTKCOMMAND": {
		"EMYCOMMAND": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RTKCOMMANDENUM"
		}
	},
	"ANTENNAPOWER": {
		"EANTENNAPOWER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ANTENNAPOWERENUM"
		}
	},
	"BESTVEL": {
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"DMYHORIZONTALSPEED": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYGROUNDTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"LMYRSVDFIELDFORVELOCITYLOGS": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "LONG"
		}
	},
	"PSRVEL": {
		"EMYVELOCITYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYVELOCITYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"DMYHORIZONTALSPEED": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYGROUNDTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"LMYRSVDFIELDFORVELOCITYLOGS": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "LONG"
		}
	},
	"TIME": {
		"ECLOCKMODELSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLOCKMODELSTATUSENUM"
		},
		"DOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DOFFSETSTD": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DUTCOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"ULUTCYEAR": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"UCUTCMONTH": {
			"NOOFBYTES": "1",
			"OFFSET": "32",
			"DATATYPE": "UCHAR"
		},
		"UCUTCDAY": {
			"NOOFBYTES": "1",
			"OFFSET": "33",
			"DATATYPE": "UCHAR"
		},
		"UCUTCHOUR": {
			"NOOFBYTES": "1",
			"OFFSET": "34",
			"DATATYPE": "UCHAR"
		},
		"UCUTCMINUTE": {
			"NOOFBYTES": "1",
			"OFFSET": "35",
			"DATATYPE": "UCHAR"
		},
		"ULUTCMILLISECOND": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"UTCTIMESTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "UTCTIMESTATUS"
		}
	},
	"SETAPPROXTIME": {
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		}
	},
	"CMROBS": {
		"ULMYCMRSYNC": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYLENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYVERSION": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATIONID": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMESSAGETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYNUMBEROFSV": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYEPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYCLOCKBIASVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"LMYCLOCKOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "LONG"
		},
		"ACLMYCMRBODY": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSLOTNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"BMYCODEFLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "BOOL"
		},
		"BMYL1PHASEVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "BOOL"
		},
		"BMYISL2PRESENT": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "BOOL"
		},
		"ULMYL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ULONG"
		},
		"LMYL1CARRIEROFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "LONG"
		},
		"ULMYL1SNR": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "ULONG"
		},
		"ULMYL1SLIPCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "ULONG"
		},
		"BMYISL2CODE": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "BOOL"
		},
		"BMYCODETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "BOOL"
		},
		"BMYISL2CODEVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "BOOL"
		},
		"BMYISL2PHASEVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "BOOL"
		},
		"BMYPHASEFULL": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "BOOL"
		},
		"ULMYRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "ULONG"
		},
		"LMYL2RANGEOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "104",
			"DATATYPE": "LONG"
		},
		"LMYL2CARRIEROFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "108",
			"DATATYPE": "LONG"
		},
		"ULMYL2SNR": {
			"NOOFBYTES": "4",
			"OFFSET": "112",
			"DATATYPE": "ULONG"
		},
		"ULMYL2SLIPCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "116",
			"DATATYPE": "ULONG"
		},
		"CABO": ["48"],
		"CAAO": ["72"]
	},
	"CMROBSIN": {
		"ULMYCMRSYNC": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYLENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYVERSION": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATIONID": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMESSAGETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYNUMBEROFSV": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYEPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYCLOCKBIASVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"LMYCLOCKOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "LONG"
		},
		"ACLMYCMRBODY": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSLOTNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"BMYCODEFLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "BOOL"
		},
		"BMYL1PHASEVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "BOOL"
		},
		"BMYISL2PRESENT": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "BOOL"
		},
		"ULMYL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ULONG"
		},
		"LMYL1CARRIEROFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "LONG"
		},
		"ULMYL1SNR": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "ULONG"
		},
		"ULMYL1SLIPCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "ULONG"
		},
		"BMYISL2CODE": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "BOOL"
		},
		"BMYCODETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "BOOL"
		},
		"BMYISL2CODEVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "BOOL"
		},
		"BMYISL2PHASEVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "BOOL"
		},
		"BMYPHASEFULL": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "BOOL"
		},
		"ULMYRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "ULONG"
		},
		"LMYL2RANGEOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "104",
			"DATATYPE": "LONG"
		},
		"LMYL2CARRIEROFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "108",
			"DATATYPE": "LONG"
		},
		"ULMYL2SNR": {
			"NOOFBYTES": "4",
			"OFFSET": "112",
			"DATATYPE": "ULONG"
		},
		"ULMYL2SLIPCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "116",
			"DATATYPE": "ULONG"
		},
		"CABO": ["48"],
		"CAAO": ["72"]
	},
	"CMRREF": {
		"ULMYCMRSYNC": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYLENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYVERSION": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATIONID": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYMESSAGETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"BMYISBATTERYLOW": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "BOOL"
		},
		"BMYISMEMLOW": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "BOOL"
		},
		"ULMYRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "ULONG"
		},
		"BMYISL2ENABLED": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "BOOL"
		},
		"ULMYRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULMYEPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYMOTIONSTATE": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"ULMYANTENNANUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_X": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"ULMYANTENNAH": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_Y": {
			"NOOFBYTES": "8",
			"OFFSET": "72",
			"DATATYPE": "DOUBLE"
		},
		"ULMYEASTOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_Z": {
			"NOOFBYTES": "8",
			"OFFSET": "84",
			"DATATYPE": "DOUBLE"
		},
		"ULMYNORTHOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "ULONG"
		},
		"ULMYPOSACCURACY": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "ULONG"
		}
	},
	"CMRREFIN": {
		"ULMYCMRSYNC": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYLENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYVERSION": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATIONID": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYMESSAGETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"BMYISBATTERYLOW": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "BOOL"
		},
		"BMYISMEMLOW": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "BOOL"
		},
		"ULMYRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "ULONG"
		},
		"BMYISL2ENABLED": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "BOOL"
		},
		"ULMYRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULMYEPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYMOTIONSTATE": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"ULMYANTENNANUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_X": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"ULMYANTENNAH": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_Y": {
			"NOOFBYTES": "8",
			"OFFSET": "72",
			"DATATYPE": "DOUBLE"
		},
		"ULMYEASTOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_Z": {
			"NOOFBYTES": "8",
			"OFFSET": "84",
			"DATATYPE": "DOUBLE"
		},
		"ULMYNORTHOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "ULONG"
		},
		"ULMYPOSACCURACY": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "ULONG"
		}
	},
	"RTCM1": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ACLMYDIFFDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSCALE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYUDRE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYSVPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"IMYCOR": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "INT"
		},
		"IMYCORRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "INT"
		},
		"ULMYIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["24"]
	},
	"RTCM18OUT": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYFREQ": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYSPARE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"LMYTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "LONG"
		},
		"ACLMYRTCMBODY": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMULTIPLEMSG": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULMYCODE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULMYCONSTELLATION": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYSV": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"ULMYDATAQUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"ULMYINITS": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"LMYADR": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "LONG"
		},
		"CABO": ["40"],
		"CAAO": ["28"]
	},
	"RTCM19OUT": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYFREQ": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYSMOOTHINGINTERVAL": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"LMYTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "LONG"
		},
		"ACLMYRTCMBODY": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMULTIPLEMSG": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULMYCODE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULMYCONSTELLATION": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYSV": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"ULMYDATAQUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"ULMYMULTIPATH": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"ULMYPSR": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ULONG"
		},
		"CABO": ["40"],
		"CAAO": ["28"]
	},
	"RTCM1IN": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ACLMYDIFFDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSCALE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYUDRE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYSVPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"IMYCOR": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "INT"
		},
		"IMYCORRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "INT"
		},
		"ULMYIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["24"]
	},
	"RTCM20IN": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYFREQ": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULSPARE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"LMYTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "LONG"
		},
		"ACLMYRTCMBODY": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMULTIPLEMSG": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULMYCODE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULMYCONSTELLATION": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYSV": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"ULMYDATAQUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"ULMYINITS": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"ULIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ULONG"
		},
		"LPHASECORR": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "LONG"
		},
		"CABO": ["40"],
		"CAAO": ["32"]
	},
	"RTCM21IN": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYFREQ": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYSMOOTHINGINTERVAL": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"LMYTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "LONG"
		},
		"ACLMYRTCMBODY": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMULTIPLEMSG": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULMYCODE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULMYCONSTELLATION": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYSV": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"ULMYRATECORRSF": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"ULMYDATAQUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"ULMYPSRCORRSF": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ULONG"
		},
		"ULMYMULTIPATH": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "ULONG"
		},
		"ULMYIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "ULONG"
		},
		"LMYPSRCORR": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "LONG"
		},
		"LMYPSRCORRRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "LONG"
		},
		"CABO": ["40"],
		"CAAO": ["44"]
	},
	"RTCM22IN": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"LMYL1ANTDELTAX": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "LONG"
		},
		"LMYL1ANTDELTAY": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "LONG"
		},
		"LMYL1ANTDELTAZ": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "LONG"
		},
		"CLMYRTCM22ANTHGTL1": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "CLASSARRAY"
		},
		"ULSPAREBITS": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULMYCONSTELLATION": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"CABO": ["40"],
		"CAAO": ["8"]
	},
	"RTCM3IN": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_X": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYECEF_Y": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYECEF_Z": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		}
	},
	"RTCM59IN": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"UCMYSUBTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "UCHAR"
		},
		"LMYMINPSR": {
			"NOOFBYTES": "4",
			"OFFSET": "25",
			"DATATYPE": "LONG"
		},
		"LTIMEOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "29",
			"DATATYPE": "LONG"
		},
		"ULSPAREBITS": {
			"NOOFBYTES": "4",
			"OFFSET": "33",
			"DATATYPE": "ULONG"
		},
		"CLMYRTCMBODY": {
			"NOOFBYTES": "4",
			"OFFSET": "37",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSV": {
			"NOOFBYTES": "4",
			"OFFSET": "41",
			"DATATYPE": "ULONG"
		},
		"ULMYLOCK": {
			"NOOFBYTES": "4",
			"OFFSET": "45",
			"DATATYPE": "ULONG"
		},
		"ULMYPSR": {
			"NOOFBYTES": "4",
			"OFFSET": "49",
			"DATATYPE": "ULONG"
		},
		"LMYADRCOR": {
			"NOOFBYTES": "4",
			"OFFSET": "53",
			"DATATYPE": "LONG"
		},
		"CABO": ["41"],
		"CAAO": ["16"]
	},
	"RTCM59": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"UCMYSUBTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "UCHAR"
		},
		"LMYMINPSR": {
			"NOOFBYTES": "4",
			"OFFSET": "25",
			"DATATYPE": "LONG"
		},
		"LTIMEOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "29",
			"DATATYPE": "LONG"
		},
		"ULSPAREBITS": {
			"NOOFBYTES": "4",
			"OFFSET": "33",
			"DATATYPE": "ULONG"
		},
		"CLMYRTCMBODY": {
			"NOOFBYTES": "4",
			"OFFSET": "37",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSV": {
			"NOOFBYTES": "4",
			"OFFSET": "41",
			"DATATYPE": "ULONG"
		},
		"ULMYLOCK": {
			"NOOFBYTES": "4",
			"OFFSET": "45",
			"DATATYPE": "ULONG"
		},
		"ULMYPSR": {
			"NOOFBYTES": "4",
			"OFFSET": "49",
			"DATATYPE": "ULONG"
		},
		"LMYADRCOR": {
			"NOOFBYTES": "4",
			"OFFSET": "53",
			"DATATYPE": "LONG"
		},
		"CABO": ["41"],
		"CAAO": ["16"]
	},
	"RTCM3": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_X": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYECEF_Y": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYECEF_Z": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		}
	},
	"RTCM22": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"LMYL1ANTDELTAX": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "LONG"
		},
		"LMYL1ANTDELTAY": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "LONG"
		},
		"LMYL1ANTDELTAZ": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "LONG"
		},
		"CLMYRTCM22ANTHGTL1": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "CLASSARRAY"
		},
		"ULSPAREBITS": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULMYCONSTELLATION": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULMYANTENNATYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYANTENNAREFPOINT": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"BNOHEIGHT": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "BOOL"
		},
		"ULANTENNAPHASEHEIGHT": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"CLMYRTCM22ANTINFL2": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "CLASSARRAY"
		},
		"LMYL2ANTDELTAX": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "LONG"
		},
		"LMYL2ANTDELTAY": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "LONG"
		},
		"LMYL2ANTDELTAZ": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "LONG"
		},
		"CABO": ["68"],
		"CAAO": ["12"]
	},
	"RTCM21OUT": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYFREQ": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYSMOOTHINGINTERVAL": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"LMYTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "LONG"
		},
		"ACLMYRTCMBODY": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMULTIPLEMSG": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULMYCODE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULMYCONSTELLATION": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYSV": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"ULMYRATECORRSF": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"ULMYDATAQUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"ULMYPSRCORRSF": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ULONG"
		},
		"ULMYMULTIPATH": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "ULONG"
		},
		"ULMYIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "ULONG"
		},
		"LMYPSRCORR": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "LONG"
		},
		"LMYPSRCORRRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "LONG"
		},
		"CABO": ["40"],
		"CAAO": ["44"]
	},
	"RTCM20OUT": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYFREQ": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULSPARE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"LMYTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "LONG"
		},
		"ACLMYRTCMBODY": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMULTIPLEMSG": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULMYCODE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULMYCONSTELLATION": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYSV": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"ULMYDATAQUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"ULMYINITS": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"ULIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ULONG"
		},
		"LPHASECORR": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "LONG"
		},
		"CABO": ["40"],
		"CAAO": ["32"]
	},
	"RTCM19IN": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYFREQ": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYSMOOTHINGINTERVAL": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"LMYTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "LONG"
		},
		"ACLMYRTCMBODY": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMULTIPLEMSG": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULMYCODE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULMYCONSTELLATION": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYSV": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"ULMYDATAQUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"ULMYMULTIPATH": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"ULMYPSR": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ULONG"
		},
		"CABO": ["40"],
		"CAAO": ["28"]
	},
	"RTCM18IN": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYFREQ": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYSPARE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"LMYTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "LONG"
		},
		"ACLMYRTCMBODY": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMULTIPLEMSG": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULMYCODE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULMYCONSTELLATION": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYSV": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"ULMYDATAQUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"ULMYINITS": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"LMYADR": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "LONG"
		},
		"CABO": ["40"],
		"CAAO": ["28"]
	},
	"BREAKPOINT": {
		"ETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BREAKPOINTTYPEENUM"
		},
		"ESET": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "BREAKPOINTSETENUM"
		},
		"ULADDRESS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"EREADWRITE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "BREAKPOINTRWENUM"
		},
		"ULDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMASK": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		}
	},
	"PEEKABOO": {
		"EMYOUTPUTPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		},
		"EMYMEMORYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "MEMTYPEENUM"
		},
		"ULADDRESS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULSIZE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		}
	},
	"POKEABOO": {
		"EMEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "MEMTYPEENUM"
		},
		"ULADDRESS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULPOKEVALUE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		}
	},
	"RANGEPN": {
		"FFLOAT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		},
		"ACLMYOBS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CLASSARRAY"
		},
		"USMYSVPRN": {
			"NOOFBYTES": "2",
			"OFFSET": "8",
			"DATATYPE": "USHORT"
		},
		"USMYSVFREQ": {
			"NOOFBYTES": "2",
			"OFFSET": "10",
			"DATATYPE": "USHORT"
		},
		"DMYPSR": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"FMYSDPSR": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"DMYADR": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYSDADR": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYUSERCNO": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYLOCKTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"ULMYCSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "HEXULONG"
		},
		"CABO": ["8"],
		"CAAO": ["44"]
	},
	"DGPSTIMEOUT": {
		"ULMYTIMEOUT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"RXCONFIG": {
		"MESSAGEID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"MESSAGELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"MESSAGEBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "FIXEDUCHARARRAY"
		}
	},
	"RTCM16": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"AUCMYRTCM16TEXT": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM16IN": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"AUCMYRTCM16TEXT": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"SETRTCM16": {
		"AUCMYTEXT": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDUCHARARRAY"
		}
	},
	"DEBUGETHERS": {
		"SZMYETHERNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"ULMYETHERNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "1",
			"DATATYPE": "ULONG"
		},
		"ULMYETHERSIBLINGNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "ULONG"
		},
		"ULMYNUMPACKETS": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "ULONG"
		},
		"ULMYNUMREQUESTORS": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "ULONG"
		},
		"BMYISCOMMMSGQTAKEN": {
			"NOOFBYTES": "4",
			"OFFSET": "17",
			"DATATYPE": "BOOL"
		},
		"ULMYCOMMMSGQID": {
			"NOOFBYTES": "4",
			"OFFSET": "21",
			"DATATYPE": "ULONG"
		},
		"ULMYPROVIDERTASKID": {
			"NOOFBYTES": "4",
			"OFFSET": "25",
			"DATATYPE": "ULONG"
		}
	},
	"DEBUGMSGQS": {
		"ULMYPROCESSID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYQUEUEID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYNUMMSGS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYMAXMSGS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		}
	},
	"RX_SLEEP": {
		"ULSLEEPTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"LOCKOUT": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PRN"
		}
	},
	"UNLOCKOUT": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PRN"
		}
	},
	"UNLOCKOUTALL": {
		"ULMYPRN": {
			"NOOFBYTES": "0",
			"OFFSET": "0",
			"DATATYPE": ""
		},
		"CABO": ["4"],
		"CAAO": ["0"]
	},
	"RANGECMP": {
		"ACLMYRANGECENTRY": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"AUCRANGECDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"RTKPOS": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"EMYDATUMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "DATUMENUM"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "66",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "67",
			"DATATYPE": "UCHAR"
		},
		"UCMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "1",
			"OFFSET": "68",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "69",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "70",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "71",
			"DATATYPE": "UCHAR"
		}
	},
	"DGPSEPHEMDELAY": {
		"ULEPHEMDELAY": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"DGPSRXID": {
		"EMYDGPSTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "DGPSTYPEENUM"
		},
		"SMYDGPSID": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		}
	},
	"DGPSTXID": {
		"EMYDGPSTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "DGPSTYPEENUM"
		},
		"SMYDGPSID": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		}
	},
	"DEBUGPDC": {
		"VAL0": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INT"
		},
		"VAL1": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "INT"
		},
		"VAL2": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "INT"
		},
		"VAL3": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DEBUGTEXT": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"FILEDUMP": {
		"PACKETID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DATABYTES": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "VARHEXBYTETYPE"
		}
	},
	"FILEHDR": {
		"NAME32769": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FILESIZE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"MINSATS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"STARTWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"STOPWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"STARTSEC": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"STOPSEC": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"RESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "INT"
		},
		"RESERVED2": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"RESERVED3": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"RESERVED4": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"FILESTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"VERSIONP": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"TIMEP": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ULONG"
		},
		"PROJECTP": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "ULONG"
		},
		"GROUPP": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "ULONG"
		},
		"SITEP": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "ULONG"
		},
		"METP": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "ULONG"
		},
		"WRITEOUTP": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "ULONG"
		},
		"RESERVED6": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "ULONG"
		},
		"RESERVED7": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "ULONG"
		},
		"RESERVED8": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "ULONG"
		},
		"RESERVED9": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "ULONG"
		}
	},
	"GROUPDEF": {
		"GROUPNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SESSIONNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ANTSN": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ANTTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ANTHEIGHT": {
			"NOOFBYTES": "4",
			"OFFSET": "15",
			"DATATYPE": "FLOAT"
		},
		"NAME32774": {
			"NOOFBYTES": "4",
			"OFFSET": "19",
			"DATATYPE": "FLOAT"
		},
		"SATLIMIT": {
			"NOOFBYTES": "4",
			"OFFSET": "23",
			"DATATYPE": "INT"
		},
		"GROUPSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "27",
			"DATATYPE": "HEXULONG"
		},
		"GROUPSTATUS2": {
			"NOOFBYTES": "4",
			"OFFSET": "31",
			"DATATYPE": "HEXULONG"
		},
		"LATTIME": {
			"NOOFBYTES": "8",
			"OFFSET": "35",
			"DATATYPE": "DOUBLE"
		},
		"LONGHORZ": {
			"NOOFBYTES": "8",
			"OFFSET": "43",
			"DATATYPE": "DOUBLE"
		},
		"HEIGHTVERT": {
			"NOOFBYTES": "8",
			"OFFSET": "51",
			"DATATYPE": "DOUBLE"
		},
		"SITENUM": {
			"NOOFBYTES": "1",
			"OFFSET": "59",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SITENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "60",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"DGPSTXIDTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "61",
			"DATATYPE": "DGPSTYPEENUM"
		},
		"DGPSTXID": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"RESERVED5": {
			"NOOFBYTES": "1",
			"OFFSET": "66",
			"DATATYPE": "UCHAR"
		},
		"RESERVED6": {
			"NOOFBYTES": "2",
			"OFFSET": "67",
			"DATATYPE": "USHORT"
		},
		"INTERFACEMODES": {
			"NOOFBYTES": "4",
			"OFFSET": "69",
			"DATATYPE": "HEXULONG"
		},
		"RESERVED3": {
			"NOOFBYTES": "1",
			"OFFSET": "111",
			"DATATYPE": "UCHAR"
		},
		"RESERVED4": {
			"NOOFBYTES": "1",
			"OFFSET": "112",
			"DATATYPE": "UCHAR"
		},
		"LOGSPECS": {
			"NOOFBYTES": "4",
			"OFFSET": "85",
			"DATATYPE": "CLASSARRAY"
		},
		"MESSAGEID": {
			"NOOFBYTES": "4",
			"OFFSET": "89",
			"DATATYPE": "ULONG"
		},
		"TRIGGER": {
			"NOOFBYTES": "4",
			"OFFSET": "93",
			"DATATYPE": "LOGTRIGGERENUM"
		},
		"RATE": {
			"NOOFBYTES": "4",
			"OFFSET": "97",
			"DATATYPE": "FLOAT"
		},
		"PORTCHANNEL": {
			"NOOFBYTES": "4",
			"OFFSET": "101",
			"DATATYPE": "PORTADDRESSENUM"
		},
		"RESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "105",
			"DATATYPE": "FLOAT"
		},
		"RESERVED2": {
			"NOOFBYTES": "2",
			"OFFSET": "109",
			"DATATYPE": "USHORT"
		},
		"CABO": ["89"],
		"CAAO": ["24"]
	},
	"GROUPUSE": {
		"ACTION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "GROUPUSEACTIONENUM"
		},
		"GROUPNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"PORTCHANNEL": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "PORTADDRESSENUM"
		},
		"FILENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"METDEF": {
		"METP": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"METSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "HEXULONG"
		},
		"TEMP": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"PRESS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"HUMID": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		}
	},
	"SCHDEF": {
		"INDEX": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"GROUP": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"STARTTIME": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"STOPTIME": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FILENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "7",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"SCHEDULEADD": {
		"GROUPNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"STARTTIME": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ENDTIME": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FILENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"SITEDEF": {
		"SITEP": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"SITENUM": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SITENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ATTRIB": {
			"NOOFBYTES": "4",
			"OFFSET": "6",
			"DATATYPE": "INT"
		},
		"ANTHEIGHT": {
			"NOOFBYTES": "4",
			"OFFSET": "10",
			"DATATYPE": "FLOAT"
		},
		"NAME32774": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FIRSTGPSWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "15",
			"DATATYPE": "ULONG"
		},
		"LASTGPSWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "19",
			"DATATYPE": "ULONG"
		},
		"FIRSTGPSSEC": {
			"NOOFBYTES": "4",
			"OFFSET": "23",
			"DATATYPE": "ULONG"
		},
		"LASTGPSSEC": {
			"NOOFBYTES": "4",
			"OFFSET": "27",
			"DATATYPE": "ULONG"
		},
		"SITESTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "31",
			"DATATYPE": "HEXULONG"
		},
		"RESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "35",
			"DATATYPE": "ULONG"
		}
	},
	"SCHEDULEDEL": {
		"ENTRY": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"SCHEDULE": {
		"MODE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SCHEDULEMODEENUM"
		}
	},
	"PROJECTDEF": {
		"PROJECT": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"AGENCY": {
			"NOOFBYTES": "1",
			"OFFSET": "32",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"OBSERVER": {
			"NOOFBYTES": "1",
			"OFFSET": "33",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"LOGFILE": {
		"EMYACTION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PDC_FILEACTIONENUM"
		},
		"ACMYFILENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"FILECHANNEL": {
		"DISKSPACE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"FLASHCARDMODEL": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FLASHVERSION": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"RESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "23",
			"DATATYPE": "ULONG"
		},
		"RESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "27",
			"DATATYPE": "ULONG"
		},
		"CHANNELENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "11",
			"DATATYPE": "CLASSARRAY"
		},
		"PORTCHANNEL": {
			"NOOFBYTES": "4",
			"OFFSET": "15",
			"DATATYPE": "PORTADDRESSENUM"
		},
		"SATLIMIT": {
			"NOOFBYTES": "4",
			"OFFSET": "19",
			"DATATYPE": "INT"
		},
		"FILENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "31",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"CABO": ["15"],
		"CAAO": ["17"]
	},
	"DIRENT": {
		"FILENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SIZEBYTES": {
			"NOOFBYTES": "4",
			"OFFSET": "128",
			"DATATYPE": "ULONG"
		},
		"SIZEPACKETS": {
			"NOOFBYTES": "4",
			"OFFSET": "132",
			"DATATYPE": "ULONG"
		},
		"LASTCHANGEDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "136",
			"DATATYPE": "ULONG"
		},
		"LASTCHANGETIME": {
			"NOOFBYTES": "4",
			"OFFSET": "140",
			"DATATYPE": "ULONG"
		}
	},
	"DATUM": {
		"EMYDATUMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "DATUMENUM"
		}
	},
	"NAVIGATE": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"EMYVELOCITYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYNAVSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "NAVSTATUSENUM"
		},
		"DMYDISTANCE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYBEARING": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYALONGTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYXTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"ULMYETAWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"DMYETASECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		}
	},
	"SETNAV": {
		"DMYFROMLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYFROMLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYTOLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYTOLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYTRACKOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"SZMYFROMPOINT": {
			"NOOFBYTES": "1",
			"OFFSET": "40",
			"DATATYPE": "STRING"
		},
		"SZMYTOPOINT": {
			"NOOFBYTES": "1",
			"OFFSET": "41",
			"DATATYPE": "STRING"
		}
	},
	"METHUMID": {
		"PARAMUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"HUMIDITY": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		}
	},
	"METPRESS": {
		"PARAMUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"PRESSURE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		}
	},
	"METTEMP": {
		"PARAMUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"TEMPERATURE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		}
	},
	"SITE": {
		"SITEMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PDC_SITEMODEENUM"
		},
		"SITENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"RESERVED1": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"RESERVED2": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"RESERVED3": {
			"NOOFBYTES": "1",
			"OFFSET": "7",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"RESERVED4": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"RESERVED5": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"SITEUPDATEANTHEIGHT": {
		"PARAMUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"ANTHEIGHT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"SITEUPDATEANTTYPE": {
		"PARAMUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"ANTTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"SITEUPDATEATTRIBUTE": {
		"PARAMUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"ATTRIBUTE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "INT"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"SITEUPDATENAME": {
		"PARAMUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"SITENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"SITEUPDATENUMBER": {
		"UPDATEENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"NUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"AVEPOS": {
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYMSLHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"EMYAVESTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "POSAVESTATUSENUM"
		},
		"ULMYAVETIME": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULMYNUMSAMPLE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		}
	},
	"POSAVE": {
		"EMYCOMMAND": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "POSAVECOMMANDENUM"
		},
		"FMYMAXTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"FMYMAXHORIZ": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYMAXHEIGHT": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		}
	},
	"PSRDOP": {
		"FMYGDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		},
		"FMYPDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"FMYHDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYHTDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYTDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYGPSELEVMASK": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"AULMYSATS": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "VARIABLEULONGARRAY"
		}
	},
	"REFSTATION": {
		"ULMYREFSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_X": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYECEF_Y": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYECEF_Z": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"EMYREFTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "REFSTATIONENUM"
		},
		"SMYREFID": {
			"NOOFBYTES": "1",
			"OFFSET": "36",
			"DATATYPE": "STRING"
		}
	},
	"EXTVERSION": {
		"ECOMPONENTTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMPONENTENUM"
		},
		"SZMODELNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZPSN": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZHARDWAREVERSION": {
			"NOOFBYTES": "1",
			"OFFSET": "21",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZSOFTWAREVERSION": {
			"NOOFBYTES": "1",
			"OFFSET": "22",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZBOOTVERSION": {
			"NOOFBYTES": "1",
			"OFFSET": "23",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZCOMPILEDATE": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZCOMPILETIME": {
			"NOOFBYTES": "1",
			"OFFSET": "25",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"SEND": {
		"PORTADDRESS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		},
		"TEXT": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		}
	},
	"SENDHEX": {
		"PORTADDRESS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		},
		"TEXT": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "VARHEXBYTETYPE"
		}
	},
	"RTCMHEALTH": {
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"MAGVAR": {
		"EMYMAGVARTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "MAGVARTYPEENUM"
		},
		"FMYCORRECTION": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"FMYCORRECTIONSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		}
	},
	"MARKPOS": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"EMYDATUMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "DATUMENUM"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "66",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "67",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "70",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "69",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "71",
			"DATATYPE": "UCHAR"
		}
	},
	"RTKBASELINE": {
		"EMYBASELINETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RTKBASELINETYPEENUM"
		},
		"ADMYVECTOR": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"FMY2SIGMA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		}
	},
	"RTKDYNAMICS": {
		"EMYDYNAMICS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RTKDYNAMICSENUM"
		}
	},
	"RTKSOLUTION": {
		"EMYSOLUTIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RTKSOLUTIONENUM"
		}
	},
	"CURRENTFILE": {
		"FILENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"DUMPMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "PDC_DUMPMODEENUM"
		},
		"PACKETID": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		}
	},
	"CURRENTGROUP": {
		"GROUPNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"CURRENTSET": {
		"FILENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FILEPACKET": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"DUMPMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "PDC_DUMPMODEENUM"
		},
		"GROUP": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"PDCSTATUS": {
		"PDCERROR": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"PDCSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"BATTA": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"BATTB": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"BATTEXT": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"TEMP": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"DISKSPACE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"RESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"RESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		}
	},
	"PDC_ENABLE": {
		"ENABLEPDC": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PDC_ENABLEENUM"
		},
		"CABO": ["4"],
		"CAAO": ["4"]
	},
	"HIGHRATEL1DATA": {
		"ACLOBSERVATIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"USMYPRN": {
			"NOOFBYTES": "2",
			"OFFSET": "4",
			"DATATYPE": "USHORT"
		},
		"DMYWIDEBANDADR": {
			"NOOFBYTES": "8",
			"OFFSET": "6",
			"DATATYPE": "DOUBLE"
		}
	},
	"DEBUGPROCESSCOLMODE": {
		"EMYCOLUMNSMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "DEBUGPROCESSCOLGROUPENUM"
		},
		"EMYCOUNTMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "DEBUGPROCESSCOLCOUNTENUM"
		}
	},
	"DEBUGPROCESSIDLES": {
		"ADMYIDLETIMES": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEDOUBLEARRAY"
		},
		"CABO": ["4"],
		"CAAO": ["480"]
	},
	"DEBUGPROCESSNAMES": {
		"ACLMYPROCESSNAMEARRAY": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYPROCESSPRIORITY": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"SZMYPROCESSORBINDING": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "STRING"
		},
		"SZMYPROCESSNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "STRING"
		}
	},
	"RXHWLEVELS": {
		"FMYTEMPERATURE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		},
		"FMYANTENNACURRENT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"FMYLOWVOLTAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYSUPPLYVOLTAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYRFVOLTAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYINTERNALLNAVOLTAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"FMYRESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"FMYRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"FMYRESERVED3": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYLNAOUTPUTVOLTAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		}
	},
	"RTCAIN": {
		"ULMESSAGEIDENTIFIER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFSTATION": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMESSAGETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMESSAGELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"MODIFIEDZCOUNT": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"AEB": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ACCELERATIONERRORBOUND"
		},
		"CORRECTIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "36",
			"DATATYPE": "UCHAR"
		},
		"PSEUDORANGECORRECTION": {
			"NOOFBYTES": "8",
			"OFFSET": "37",
			"DATATYPE": "DOUBLE"
		},
		"ISSUEOFDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "45",
			"DATATYPE": "UCHAR"
		},
		"RANGERATECORRECTION": {
			"NOOFBYTES": "8",
			"OFFSET": "46",
			"DATATYPE": "DOUBLE"
		},
		"UDRE": {
			"NOOFBYTES": "4",
			"OFFSET": "54",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["36"],
		"CAAO": ["22"]
	},
	"NVMRESTORE": {
		"UDRE": {
			"NOOFBYTES": "0",
			"OFFSET": "0",
			"DATATYPE": ""
		}
	},
	"NVMSTATS": {
		"ULBLOCKINUSE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULVERSION": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULERASECYCLES1": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULBYTESLEFT1": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "HEXULONG"
		},
		"ULNEXTAVAILADDR1": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "HEXULONG"
		},
		"ULERASECYCLES2": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULBYTESLEFT2": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "HEXULONG"
		},
		"ULNEXTAVAILADDR2": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "HEXULONG"
		},
		"DATATABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "CLASSARRAY"
		},
		"ETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "NVM_DATATYPEENUM"
		},
		"ULSUBTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"CABO": ["36"],
		"CAAO": ["8"]
	},
	"CTRLSUM": {
		"DOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DOFFSETSTD": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DUTCOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"ULUTCYEAR": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"UCUTCMONTH": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "UCHAR"
		},
		"UCUTCDAY": {
			"NOOFBYTES": "1",
			"OFFSET": "29",
			"DATATYPE": "UCHAR"
		},
		"UCUTCHOUR": {
			"NOOFBYTES": "1",
			"OFFSET": "30",
			"DATATYPE": "UCHAR"
		},
		"UCUTCMINUTE": {
			"NOOFBYTES": "1",
			"OFFSET": "31",
			"DATATYPE": "UCHAR"
		},
		"ULUTCMILLISECOND": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"UTCTIMESTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "UTCTIMESTATUS"
		},
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "64",
			"DATATYPE": "DOUBLE"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "72",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "76",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "77",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMHIGHSATS": {
			"NOOFBYTES": "1",
			"OFFSET": "78",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMHIGHL2SATS": {
			"NOOFBYTES": "1",
			"OFFSET": "79",
			"DATATYPE": "UCHAR"
		},
		"FMYELEVATIONCUTOFFANGLE": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "FLOAT"
		},
		"FMYANGLE": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "FLOAT"
		},
		"PDCSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "ULONG"
		},
		"PDCERROR": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "ULONG"
		},
		"FFLOAT": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "FLOAT"
		}
	},
	"READNVM": {
		"BLOCKNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INT"
		},
		"DATASTRING": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"RENAME": {
		"SOURCENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"DESTNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"WRITENVM": {
		"BLOCKNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INT"
		},
		"DATASTRING": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"VOUT": {
		"POWERENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PDC_POWERENUM"
		},
		"ENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ONOFFENUM"
		},
		"PERSIST": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ONOFFENUM"
		}
	},
	"WRITEFILE": {
		"FILENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"WRITEDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"WRITEHEX": {
		"PREVIOUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"WRITETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"WRITEDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "VARHEXBYTETYPE"
		},
		"CABO": ["4"],
		"CAAO": ["9"]
	},
	"VALIDMODELS": {
		"MODELS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"SZMODEL": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		},
		"ULMYEXPIRYYEAR": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"UCMYEXPIRYMONTH": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"UCMYEXPIRYDAY": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		}
	},
	"SAVEDERROR": {
		"SCAFSTRING": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		}
	},
	"AUDIO": {
		"PARAMUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"AUDIOEVENT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "PDC_AUDIOENUM"
		},
		"VOLUME": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"PITCH": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"AUDIODEF": {
		"EVENTARRAY": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"AUDIOEVENT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "PDC_AUDIOENUM"
		},
		"VOLUME": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"PITCH": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		}
	},
	"HWLEVELS": {
		"FMYTEMPERATURE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		},
		"FMYANTENNACURRENT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"FMYLOWVOLTAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYSUPPLYVOLTAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYRFVOLTAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYINTERNALLNAVOLTAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"FMYRESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"FMYRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"FMYRESERVED3": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYLNAOUTPUTVOLTAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"BATA": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"BATB": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"BATEXT": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"CTEMP": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "FLOAT"
		},
		"DISKSPACE": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"RESERVED4": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"RESERVED5": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "FLOAT"
		}
	},
	"PROJECT": {
		"ACTION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PDC_PROJACTIONENUM"
		},
		"PROJECTNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"AGENCY": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"OBSERVER": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"SATLIMIT": {
		"UPDATEPARAM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"FILEPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "PORTADDRESSENUM"
		},
		"SATLIMIT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "INT"
		}
	},
	"SOFTPOWER": {
		"PRIORITY": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PDC_PRIORITYENUM"
		}
	},
	"UNDULATION": {
		"EMYUNDULATIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "UNDULATIONTYPEENUM"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		}
	},
	"RTKDATA": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"ULMYRTKINFO": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "15",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "19",
			"DATATYPE": "UCHAR"
		},
		"EMYSEARCHSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "RTKSEARCHENUM"
		},
		"ULMYNUMLANES": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"AFMYCOVARIANCE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FIXEDFLOATARRAY"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"FMYXSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"FMYZSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "FLOAT"
		},
		"ULMYREFPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "ULONG"
		},
		"ACLMYRTKSATINFO": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "SATELLITEID"
		},
		"EMYAMBIGUITYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "AMBIGUITYENUM"
		},
		"FMYRESIDUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["76"],
		"CAAO": ["12"]
	},
	"RTKVEL": {
		"EMYVELOCITYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYVELOCITYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"DMYHORIZONTALSPEED": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYGROUNDTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"LMYRSVDFIELDFORVELOCITYLOGS": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "LONG"
		},
		"CABO": ["4"],
		"CAAO": ["44"]
	},
	"GPALM": {
		"ACLMYSVALMDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"ULPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYWN": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH8": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"DMYECC": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYTOA": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYDI": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGADOT": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYA": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA0": {
			"NOOFBYTES": "8",
			"OFFSET": "64",
			"DATATYPE": "DOUBLE"
		},
		"DMYMO": {
			"NOOFBYTES": "8",
			"OFFSET": "72",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF0": {
			"NOOFBYTES": "8",
			"OFFSET": "80",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF1": {
			"NOOFBYTES": "8",
			"OFFSET": "88",
			"DATATYPE": "DOUBLE"
		}
	},
	"GPGGA": {
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "SOLTYPEENUM"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "36",
			"DATATYPE": "UCHAR"
		},
		"FMYHDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "37",
			"DATATYPE": "FLOAT"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "41",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "45",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ULMYGGAQUALITY": {
			"NOOFBYTES": "4",
			"OFFSET": "49",
			"DATATYPE": "ULONG"
		}
	},
	"GPGLL": {
		"ETALKERID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "NMEATALKERIDENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "SOLTYPEENUM"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "29",
			"DATATYPE": "UCHAR"
		}
	},
	"GPGRS": {
		"ETALKERID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "NMEATALKERIDENUM"
		},
		"ACLMYENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "SATELLITEID"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		},
		"DMYRESIDUAL": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"ACLMYSATELLITEENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYNMEAVERSION": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "NMEAVERSIONENUM"
		},
		"EMYINCLUDESBAS": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ENABLEENUM"
		},
		"EMYSOURCE": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "NMEASATELLITESOURCEENUM"
		},
		"CABO": ["32"],
		"CAAO": ["24"]
	},
	"GPGSA": {
		"ETALKERID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "NMEATALKERIDENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "SOLTYPEENUM"
		},
		"ACLMYSATELLITEENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "SATELLITEID"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		},
		"FMYPDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYHDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"FMYVDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "FLOAT"
		},
		"EMYFIXCMD": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FIXCMDENUM"
		},
		"EMYNMEAVERSION": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "NMEAVERSIONENUM"
		},
		"EMYINCLUDESBAS": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ENABLEENUM"
		},
		"EMYSOURCE": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "NMEASATELLITESOURCEENUM"
		},
		"CABO": ["32"],
		"CAAO": ["40"]
	},
	"GPGST": {
		"ETALKERID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "NMEATALKERIDENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "21",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "22",
			"DATATYPE": "UCHAR"
		},
		"ACLMYENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "23",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "27",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		},
		"DMYOBSSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "31",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["27"],
		"CAAO": ["12"]
	},
	"GPGSV": {
		"ETALKERID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "NMEATALKERIDENUM"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"ACLMYSATVISLIST": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "CLASSARRAY"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "SATELLITEID"
		},
		"DMYELEVATION": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"ACLMYOBS": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "CLASSARRAY"
		},
		"USMYSVPRN": {
			"NOOFBYTES": "2",
			"OFFSET": "40",
			"DATATYPE": "USHORT"
		},
		"FMYUSERCNO": {
			"NOOFBYTES": "4",
			"OFFSET": "42",
			"DATATYPE": "FLOAT"
		},
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "46",
			"DATATYPE": "ENABLEENUM"
		},
		"BMYHASGPS": {
			"NOOFBYTES": "4",
			"OFFSET": "50",
			"DATATYPE": "BOOL"
		},
		"EMYINCLUDESBAS": {
			"NOOFBYTES": "4",
			"OFFSET": "54",
			"DATATYPE": "ENABLEENUM"
		},
		"CABO": ["40"],
		"CAAO": ["18"]
	},
	"GPRMB": {
		"ETALKERID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "NMEATALKERIDENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "UCHAR"
		},
		"EMYNAVSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "10",
			"DATATYPE": "NAVSTATUSENUM"
		},
		"DMYXTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "14",
			"DATATYPE": "DOUBLE"
		},
		"SZMYFROMPOINT": {
			"NOOFBYTES": "1",
			"OFFSET": "22",
			"DATATYPE": "STRING"
		},
		"SZMYTOPOINT": {
			"NOOFBYTES": "1",
			"OFFSET": "23",
			"DATATYPE": "STRING"
		},
		"DMYTOLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYTOLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYDISTANCE": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYBEARING": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"DMYALONGTRACKVELOCITY": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		},
		"FMYDECLINATION": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "FLOAT"
		}
	},
	"GPRMC": {
		"ETALKERID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "NMEATALKERIDENUM"
		},
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"EMYVELOCITYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"DMYHORIZONTALSPEED": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYGROUNDTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "56",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "57",
			"DATATYPE": "UCHAR"
		},
		"UCUTCDAY": {
			"NOOFBYTES": "1",
			"OFFSET": "58",
			"DATATYPE": "UCHAR"
		},
		"UCUTCMONTH": {
			"NOOFBYTES": "1",
			"OFFSET": "59",
			"DATATYPE": "UCHAR"
		},
		"ULUTCYEAR": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"UTCTIMESTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "UTCTIMESTATUS"
		},
		"FMYDECLINATION": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "FLOAT"
		},
		"EMYENABLEGPRMCALTITUDE": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"GPVTG": {
		"ETALKERID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "NMEATALKERIDENUM"
		},
		"EMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"DMYGROUNDTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYHORIZONTALSPEED": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "29",
			"DATATYPE": "UCHAR"
		},
		"FMYDECLINATION": {
			"NOOFBYTES": "4",
			"OFFSET": "30",
			"DATATYPE": "FLOAT"
		},
		"EMYNMEAVERSION": {
			"NOOFBYTES": "4",
			"OFFSET": "34",
			"DATATYPE": "NMEAVERSIONENUM"
		}
	},
	"GPZDA": {
		"UCUTCDAY": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "UCHAR"
		},
		"UCUTCMONTH": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "UCHAR"
		},
		"ULUTCYEAR": {
			"NOOFBYTES": "4",
			"OFFSET": "2",
			"DATATYPE": "ULONG"
		},
		"UTCTIMESTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "6",
			"DATATYPE": "UTCTIMESTATUS"
		}
	},
	"FRONTENDSETUP": {
		"ULMYFRONTEND": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYADCBOTTOMBIT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"LMYRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "LONG"
		}
	},
	"AGCMODE": {
		"ULMYFRONTEND": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"EMYMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FRONTENDMODEENUM"
		},
		"ULMYPULSEWIDTH": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYLOADVALUE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		}
	},
	"EXTERNALCLOCK": {
		"EMYCLOCKTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLOCKTYPEENUM"
		},
		"EMYFREQUENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "EXTCLOCKFREQ"
		},
		"DMYH0": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYHM1": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHM2": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		}
	},
	"MARKTIME": {
		"LMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "LONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYOFFSETSTD": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYUTCOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "CLOCKMODELSTATUSENUM"
		}
	},
	"FREQUENCYOUT": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FREQOUTENABLEENUM"
		},
		"ULMYPULSEWIDTH": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYPERIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		}
	},
	"PASSCOM1": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PASSCOM2": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PASSCOM3": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PASSUSB": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"SLEEP": {
		"ESUBSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SLEEPSUBSYSTEMENUM"
		},
		"EACTION": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SLEEPACTION"
		},
		"ULTIMEOUT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		}
	},
	"SLEEPMASK": {
		"EUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"ESUBSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SLEEPSUBSYSTEMENUM"
		},
		"ESOURCE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "PDC_ACTIVITYSRCENUM"
		}
	},
	"SLEEPMODE": {
		"ESUBSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SLEEPSUBSYSTEMENUM"
		},
		"ESLEEPSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SLEEPACTION"
		},
		"ULTIMEOUT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULACTIVITY": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "HEXULONG"
		}
	},
	"WRITEFILEHEX": {
		"FILENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"WRITEDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "VARHEXBYTETYPE"
		}
	},
	"BESTXYZ": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"FMYXSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "FLOAT"
		},
		"FMYYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "FLOAT"
		},
		"FMYZSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "FLOAT"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "SOLTYPEENUM"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "88",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "FLOAT"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "104",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "105",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "106",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "107",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "108",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "109",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "110",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "111",
			"DATATYPE": "UCHAR"
		}
	},
	"MATCHEDXYZ": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYXSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYZSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "44",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "48",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "49",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "50",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "51",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "53",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "54",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "55",
			"DATATYPE": "UCHAR"
		}
	},
	"PSRXYZ": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"FMYXSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "FLOAT"
		},
		"FMYYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "FLOAT"
		},
		"FMYZSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "FLOAT"
		},
		"EMYVELOCITYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYVELOCITYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "SOLTYPEENUM"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "88",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "FLOAT"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "104",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "105",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "108",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "109",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "110",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "111",
			"DATATYPE": "UCHAR"
		}
	},
	"RTKXYZ": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"FMYXSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "FLOAT"
		},
		"FMYYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "FLOAT"
		},
		"FMYZSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "FLOAT"
		},
		"EMYVELOCITYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYVELOCITYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "SOLTYPEENUM"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "88",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "FLOAT"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "104",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "105",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "106",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "107",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "108",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "109",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "110",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "111",
			"DATATYPE": "UCHAR"
		}
	},
	"AUXBUF": {
		"UPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"ULSIZE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"TBA-COMMAND247": {
		"UPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"ULBPS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"EPARITY": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "OEM4_PARITYENUM"
		},
		"ULDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULSTOP": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"EHANDSHAKE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "HANDSHAKEENUM"
		},
		"EECHO": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ONOFFENUM"
		}
	},
	"AUXDEF": {
		"ULBPS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"EPARITY": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "OEM4_PARITYENUM"
		},
		"ULDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULSTOP": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"EHANDSHAKE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "HANDSHAKEENUM"
		},
		"EECHO": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ONOFFENUM"
		},
		"CSTARTLENGTH": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "UCHAR"
		},
		"SZSTART": {
			"NOOFBYTES": "1",
			"OFFSET": "25",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"CSTOPLENGTH": {
			"NOOFBYTES": "1",
			"OFFSET": "26",
			"DATATYPE": "UCHAR"
		},
		"SZSTOP": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"ULTIMEOUT": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULPACKETSIZE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"EMARK": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ONOFFENUM"
		}
	},
	"AUXMARK": {
		"EUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		}
	},
	"AUXSTART": {
		"EUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"ULSIZE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"SZSEQUENCE": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"AUXSTOP": {
		"EUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"ULSIZE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"SZSEQUENCE": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"AUXTIME": {
		"EUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"ULTIMEOUT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"BATSTATUS": {
		"ULBATSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"FBATAVOLT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"FBATBVOLT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FEXTVOLT": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FBATALIFE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FBATBLIFE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"ULAUX2": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULAUX3": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULBATACUTOFF": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULBATBCUTOFF": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"ULEXTCUTOFF": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULRES4": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULRES5": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULRES6": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		}
	},
	"CLEARNVM": {
		"IBLOCKNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INT"
		}
	},
	"PDCSTATS": {
		"ULERROR": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "HEXULONG"
		},
		"ULSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "HEXULONG"
		},
		"FBATALIFE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FBATBLIFE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FEXTVOLT": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FTEMP": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"ULDISKSPACE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULEXTERROR": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "HEXULONG"
		},
		"ULEXTSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "HEXULONG"
		},
		"ULMINSTACK": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"ULMINTASK": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "HEXULONG"
		},
		"ULHEAP": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULGPSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "HEXULONG"
		},
		"FBATAVOLT": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "FLOAT"
		},
		"FBATBVOLT": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"RES1": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "LONG"
		},
		"RES2": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ULONG"
		},
		"RES3": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "HEXULONG"
		},
		"RES4": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "FLOAT"
		},
		"RES5": {
			"NOOFBYTES": "1",
			"OFFSET": "76",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"WRITE": {
		"PREVIOUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"WRITETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"WRITEDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"DYNAMICS": {
		"EVALUE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "DYNAMICSENUM"
		}
	},
	"GPGGARTK": {
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "SOLTYPEENUM"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "36",
			"DATATYPE": "UCHAR"
		},
		"FMYHDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "37",
			"DATATYPE": "FLOAT"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "41",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "45",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ULMYGGAQUALITY": {
			"NOOFBYTES": "4",
			"OFFSET": "49",
			"DATATYPE": "ULONG"
		}
	},
	"RTCM1819": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "ULONG"
		},
		"ULMYFREQ": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "ULONG"
		},
		"ULMYSPARE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"LMYTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "LONG"
		},
		"ACLMYRTCMBODY": {
			"NOOFBYTES": "4",
			"OFFSET": "104",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMULTIPLEMSG": {
			"NOOFBYTES": "4",
			"OFFSET": "108",
			"DATATYPE": "ULONG"
		},
		"ULMYCODE": {
			"NOOFBYTES": "4",
			"OFFSET": "112",
			"DATATYPE": "ULONG"
		},
		"ULMYCONSTELLATION": {
			"NOOFBYTES": "4",
			"OFFSET": "116",
			"DATATYPE": "ULONG"
		},
		"ULMYSV": {
			"NOOFBYTES": "4",
			"OFFSET": "120",
			"DATATYPE": "ULONG"
		},
		"ULMYDATAQUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "124",
			"DATATYPE": "ULONG"
		},
		"ULMYINITS": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"LMYADR": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "LONG"
		},
		"ULMYSMOOTHINGINTERVAL": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "ULONG"
		},
		"ULMYMULTIPATH": {
			"NOOFBYTES": "4",
			"OFFSET": "128",
			"DATATYPE": "ULONG"
		},
		"ULMYPSR": {
			"NOOFBYTES": "4",
			"OFFSET": "132",
			"DATATYPE": "ULONG"
		},
		"CABO": ["108"],
		"CAAO": ["28"]
	},
	"OPTIONS": {
		"ULMYLOWBITS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "HEXULONG"
		},
		"ULMYHIGHBITS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "HEXULONG"
		}
	},
	"INSATT": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "INSSTATUSENUM"
		}
	},
	"INSCOV": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "30",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"INSPOS": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "INSSTATUSENUM"
		}
	},
	"INSSPD": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYGROUNDTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYHORIZONTALSPEED": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "INSSTATUSENUM"
		}
	},
	"INSVEL": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "INSSTATUSENUM"
		}
	},
	"RAWIMU": {
		"ULMYGPSWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYGPSSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"ULMYIMUSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "HEXULONG"
		},
		"LMYDELVELBODYZ": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "LONG"
		},
		"LMYDELVELBODYY": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "LONG"
		},
		"LMYDELVELBODYX": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "LONG"
		},
		"LMYDELANGBODYZ": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "LONG"
		},
		"LMYDELANGBODYY": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "LONG"
		},
		"LMYDELANGBODYX": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "LONG"
		}
	},
	"CSMOOTH": {
		"ULL1TIMECONSTANT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULL2TIMECONSTANT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"SATXYZ": {
		"DDOUBLE": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"ACLMYSATS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "PRN"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYRB": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYIONOCORR": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"DMYTROPOCORR": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		},
		"DMYDUMMY": {
			"NOOFBYTES": "8",
			"OFFSET": "72",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["12"],
		"CAAO": ["68"]
	},
	"GROUPDGPSTXID": {
		"PARAMUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"GROUPNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"TYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "DGPSTYPEENUM"
		},
		"ID": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"CHANDEBUGFFTPHASE": {
		"AFMYPHASE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEFLOATARRAY"
		}
	},
	"CHANDEBUGFFTPOWER": {
		"AFMYPOWER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEFLOATARRAY"
		},
		"CABO": ["4"],
		"CAAO": ["4"]
	},
	"ISMR": {
		"ACLMYREDUCEDDATAENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"FMYAZIMUTH": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYALTITUDE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"DMYCNO": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYS4": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYS4CORRECTION": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMY1SECSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMY3SECSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"DMY10SECSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		},
		"DMY30SECSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "64",
			"DATATYPE": "DOUBLE"
		},
		"DMY60SECSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "72",
			"DATATYPE": "DOUBLE"
		},
		"DMYAVERAGEIONDIVERGENCE": {
			"NOOFBYTES": "8",
			"OFFSET": "80",
			"DATATYPE": "DOUBLE"
		},
		"DMYAVERAGEIONDIVERGENCESTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "88",
			"DATATYPE": "DOUBLE"
		},
		"FMYTOW15TEC": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "FLOAT"
		},
		"FMYTOW15DELTATEC": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "FLOAT"
		},
		"FMYTOW30TEC": {
			"NOOFBYTES": "4",
			"OFFSET": "104",
			"DATATYPE": "FLOAT"
		},
		"FMYTOW30DELTATEC": {
			"NOOFBYTES": "4",
			"OFFSET": "108",
			"DATATYPE": "FLOAT"
		},
		"FMYTOW45TEC": {
			"NOOFBYTES": "4",
			"OFFSET": "112",
			"DATATYPE": "FLOAT"
		},
		"FMYTOW45DELTATEC": {
			"NOOFBYTES": "4",
			"OFFSET": "116",
			"DATATYPE": "FLOAT"
		},
		"FMYTOWTEC": {
			"NOOFBYTES": "4",
			"OFFSET": "120",
			"DATATYPE": "FLOAT"
		},
		"FMYTOWDELTATEC": {
			"NOOFBYTES": "4",
			"OFFSET": "124",
			"DATATYPE": "FLOAT"
		},
		"DMYLOCKTIME": {
			"NOOFBYTES": "8",
			"OFFSET": "128",
			"DATATYPE": "DOUBLE"
		},
		"ULMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "136",
			"DATATYPE": "ULONG"
		},
		"DMYL2LOCKTIME": {
			"NOOFBYTES": "8",
			"OFFSET": "140",
			"DATATYPE": "DOUBLE"
		},
		"DMYL2CNO": {
			"NOOFBYTES": "8",
			"OFFSET": "148",
			"DATATYPE": "DOUBLE"
		}
	},
	"RTCM9": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ACLMYDIFFDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSCALE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYUDRE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYSVPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"IMYCOR": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "INT"
		},
		"IMYCORRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "INT"
		},
		"ULMYIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["24"]
	},
	"RTCM9IN": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ACLMYDIFFDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSCALE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYUDRE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYSVPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"IMYCOR": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "INT"
		},
		"IMYCORRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "INT"
		},
		"ULMYIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["24"]
	},
	"POINT": {
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMOBSUSEDINSOL": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMHIGHL1SATS": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMHIGHL2SATS": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "UCHAR"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "7",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "15",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "23",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTANORTH": {
			"NOOFBYTES": "8",
			"OFFSET": "31",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAEAST": {
			"NOOFBYTES": "8",
			"OFFSET": "39",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAUP": {
			"NOOFBYTES": "8",
			"OFFSET": "47",
			"DATATYPE": "DOUBLE"
		},
		"FMYSDEV2D": {
			"NOOFBYTES": "4",
			"OFFSET": "55",
			"DATATYPE": "FLOAT"
		},
		"FMYSDEV3D": {
			"NOOFBYTES": "4",
			"OFFSET": "59",
			"DATATYPE": "FLOAT"
		},
		"FMYSDEV1D": {
			"NOOFBYTES": "4",
			"OFFSET": "63",
			"DATATYPE": "FLOAT"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "67",
			"DATATYPE": "DOUBLE"
		},
		"DMYELEVATION": {
			"NOOFBYTES": "8",
			"OFFSET": "75",
			"DATATYPE": "DOUBLE"
		},
		"FMYSLOPEDISTANCE": {
			"NOOFBYTES": "4",
			"OFFSET": "83",
			"DATATYPE": "FLOAT"
		},
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "87",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "91",
			"DATATYPE": "SOLTYPEENUM"
		},
		"ACMYSTATIONID": {
			"NOOFBYTES": "1",
			"OFFSET": "95",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"BASESTATIONOBS": {
		"EMYMESSAGEENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BASESTATIONMESSAGEENUM"
		},
		"ACMYDIFFSTATIONID": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "5",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "13",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "21",
			"DATATYPE": "DOUBLE"
		},
		"ULMYWN": {
			"NOOFBYTES": "4",
			"OFFSET": "29",
			"DATATYPE": "ULONG"
		},
		"DMYRECTIME": {
			"NOOFBYTES": "8",
			"OFFSET": "33",
			"DATATYPE": "DOUBLE"
		},
		"ACLMYOBS": {
			"NOOFBYTES": "4",
			"OFFSET": "41",
			"DATATYPE": "CLASSARRAY"
		},
		"USMYSVPRN": {
			"NOOFBYTES": "2",
			"OFFSET": "45",
			"DATATYPE": "USHORT"
		},
		"USMYSVFREQ": {
			"NOOFBYTES": "2",
			"OFFSET": "47",
			"DATATYPE": "USHORT"
		},
		"DMYPSR": {
			"NOOFBYTES": "8",
			"OFFSET": "49",
			"DATATYPE": "DOUBLE"
		},
		"FMYVPSR": {
			"NOOFBYTES": "4",
			"OFFSET": "57",
			"DATATYPE": "FLOAT"
		},
		"DMYADR": {
			"NOOFBYTES": "8",
			"OFFSET": "61",
			"DATATYPE": "DOUBLE"
		},
		"FMYVADR": {
			"NOOFBYTES": "4",
			"OFFSET": "69",
			"DATATYPE": "FLOAT"
		},
		"FMYDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "73",
			"DATATYPE": "FLOAT"
		},
		"FMYLOCKTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "77",
			"DATATYPE": "FLOAT"
		},
		"ULMYCSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "81",
			"DATATYPE": "HEXULONG"
		},
		"FMYDACC": {
			"NOOFBYTES": "4",
			"OFFSET": "85",
			"DATATYPE": "FLOAT"
		},
		"EMYFREQ": {
			"NOOFBYTES": "4",
			"OFFSET": "89",
			"DATATYPE": "FREQUENCYENUM"
		},
		"SIGMYCHAN": {
			"NOOFBYTES": "4",
			"OFFSET": "93",
			"DATATYPE": "INT"
		},
		"FMYUSERCNO": {
			"NOOFBYTES": "4",
			"OFFSET": "97",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["4"],
		"CAAO": ["56"]
	},
	"SATXYZOCC": {
		"ACLMYSATS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "PRN"
		},
		"FMYELEVATION": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYIONOCORR": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"FMYLOCKTIMEL1": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYLOCKTIMEL2": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		}
	},
	"RTKBASELINETHRESHOLD": {
		"DMYWIDELANETHRESHOLD": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYIONOFREETHRESHOLD": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYNARROWLANETHRESHOLD": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		}
	},
	"TIMEWARP": {
		"DMYTIMEWARPFACTOR": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		}
	},
	"RTCM16T": {
		"AUCMYTEXT": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDUCHARARRAY"
		}
	},
	"BASERANGE": {
		"ACLMYOBS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"USMYSVPRN": {
			"NOOFBYTES": "2",
			"OFFSET": "4",
			"DATATYPE": "USHORT"
		},
		"USMYSVFREQ": {
			"NOOFBYTES": "2",
			"OFFSET": "6",
			"DATATYPE": "USHORT"
		},
		"DMYPSR": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"FMYSDPSR": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"DMYADR": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"FMYSDADR": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"FMYDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYUSERCNO": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYLOCKTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"ULMYCSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["44"]
	},
	"DISK": {
		"DISKENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PDC_DISKENUM"
		}
	},
	"BESTPVC": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "64",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "72",
			"DATATYPE": "DOUBLE"
		},
		"FMYXSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYZSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"EMYVELOCITYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYVELOCITYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "80",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "92",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "93",
			"DATATYPE": "UCHAR"
		}
	},
	"POSVELNAVDOP": {
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLTYPEENUM"
		},
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"DMYGROUNDTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"FMYXSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"DMYHORIZONTALSPEED": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"FMYYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "FLOAT"
		},
		"FMYZSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "FLOAT"
		},
		"EMYNAVSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "NAVSTATUSENUM"
		},
		"DMYLATORIGIN": {
			"NOOFBYTES": "8",
			"OFFSET": "88",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONORIGIN": {
			"NOOFBYTES": "8",
			"OFFSET": "96",
			"DATATYPE": "DOUBLE"
		},
		"DMYLATDESTINATION": {
			"NOOFBYTES": "8",
			"OFFSET": "104",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONDESTINATION": {
			"NOOFBYTES": "8",
			"OFFSET": "112",
			"DATATYPE": "DOUBLE"
		},
		"DMYXTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "120",
			"DATATYPE": "DOUBLE"
		},
		"DMYALONGTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "128",
			"DATATYPE": "DOUBLE"
		},
		"FMYXTRACKSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "136",
			"DATATYPE": "FLOAT"
		},
		"FMYALONGTRACKSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "140",
			"DATATYPE": "FLOAT"
		},
		"FMYPDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "144",
			"DATATYPE": "FLOAT"
		},
		"FMYHDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "148",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "152",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "153",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "154",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "155",
			"DATATYPE": "UCHAR"
		}
	},
	"RAWWAASFRAME": {
		"IMYFRAMEDECODERNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INT"
		},
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYWAASMSGID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"AUCMYRAWFRAMEDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"ULMYSIGNALCHANNELNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "ULONG"
		}
	},
	"WAAS0": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"WAAS1": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"AUCMYPRNMASK": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"ULMYIODP": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "ULONG"
		}
	},
	"WAAS10": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYBRRC": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYCLTC_LSB": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYCLTC_V1": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYILTC_V1": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYCLTC_V0": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYILTC_V0": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYCGEO_LSB": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYCGEO_V": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYIGEO": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"ULMYCER": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULMYCIONO_STEP": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULMYIIONO": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYCIONO_RAMP": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"ULMYRSSUDRE": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"ULMYRSSIONO": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"AULMYSPAREBITS": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"WAAS12": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYA1": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYA0": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"ULMYT0T": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"USMYWN": {
			"NOOFBYTES": "2",
			"OFFSET": "24",
			"DATATYPE": "USHORT"
		},
		"SMYDTLS": {
			"NOOFBYTES": "2",
			"OFFSET": "26",
			"DATATYPE": "SHORT"
		},
		"USMYWNLSF": {
			"NOOFBYTES": "2",
			"OFFSET": "28",
			"DATATYPE": "USHORT"
		},
		"USMYDN": {
			"NOOFBYTES": "2",
			"OFFSET": "30",
			"DATATYPE": "USHORT"
		},
		"USMYDTLSF": {
			"NOOFBYTES": "2",
			"OFFSET": "32",
			"DATATYPE": "SHORT"
		},
		"USMYUTCID": {
			"NOOFBYTES": "2",
			"OFFSET": "34",
			"DATATYPE": "USHORT"
		},
		"ULMYGPSTOW": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"ULMYGPSWN": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"BMYGLONASSINDICATOR": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "BOOL"
		},
		"AUCMYRESERVEDBITS": {
			"NOOFBYTES": "1",
			"OFFSET": "48",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"WAAS17": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ACLMYENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CLASSARRAY"
		},
		"USMYDATAID": {
			"NOOFBYTES": "2",
			"OFFSET": "8",
			"DATATYPE": "USHORT"
		},
		"USMYPRN": {
			"NOOFBYTES": "2",
			"OFFSET": "10",
			"DATATYPE": "USHORT"
		},
		"USMYHEALTH": {
			"NOOFBYTES": "2",
			"OFFSET": "12",
			"DATATYPE": "USHORT"
		},
		"LMYX": {
			"NOOFBYTES": "4",
			"OFFSET": "14",
			"DATATYPE": "LONG"
		},
		"LMYY": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "LONG"
		},
		"LMYZ": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "LONG"
		},
		"LMYXVEL": {
			"NOOFBYTES": "4",
			"OFFSET": "26",
			"DATATYPE": "LONG"
		},
		"LMYYVEL": {
			"NOOFBYTES": "4",
			"OFFSET": "30",
			"DATATYPE": "LONG"
		},
		"LMYZVEL": {
			"NOOFBYTES": "4",
			"OFFSET": "34",
			"DATATYPE": "LONG"
		},
		"ULMYT0": {
			"NOOFBYTES": "4",
			"OFFSET": "38",
			"DATATYPE": "ULONG"
		},
		"CABO": ["8"],
		"CAAO": ["34"]
	},
	"WAAS18": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYNUMBANDS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYBANDNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYIODI": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"AUCMYIGPMASK": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"ULMYSPAREBIT": {
			"NOOFBYTES": "4",
			"OFFSET": "17",
			"DATATYPE": "ULONG"
		}
	},
	"WAAS2": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"IODF": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"IODP": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ALMYPRC": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FIXEDLONGARRAY"
		},
		"AULMYUDREI": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FIXEDULONGARRAY"
		}
	},
	"WAAS24": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ALMYPRC": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FIXEDLONGARRAY"
		},
		"AULMYUDREI": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FIXEDULONGARRAY"
		},
		"ULMYIODP": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "ULONG"
		},
		"ULMYBLOCKID": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYIODF": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYSPARE": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "ULONG"
		},
		"ULMYVELOCITYCODE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYPRNMASKNUMBER1": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYIODE1": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"LMYDX1": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "LONG"
		},
		"LMYDY1": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "LONG"
		},
		"LMYDZ1": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "LONG"
		},
		"LMYAF01": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "LONG"
		},
		"ULMYPRNMASKNUMBER2": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"ULMYIODE2": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"LMYDX2ORDDX": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "LONG"
		},
		"LMYDY2ORDDY": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "LONG"
		},
		"LMYDZ2ORDDZ": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "LONG"
		},
		"LMYAF02ORAF1": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "LONG"
		},
		"ULMYTOD": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "ULONG"
		}
	},
	"WAAS25": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYVELOCITYCODE": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "ULONG"
		},
		"ULMYPRNMASKNUMBER1": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "ULONG"
		},
		"ULMYIODE1": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "ULONG"
		},
		"LMYDX1": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "LONG"
		},
		"LMYDY1": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "LONG"
		},
		"LMYDZ1": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "LONG"
		},
		"LMYAF01": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "LONG"
		},
		"ULMYPRNMASKNUMBER2": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "ULONG"
		},
		"ULMYIODE2": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "ULONG"
		},
		"LMYDX2ORDDX": {
			"NOOFBYTES": "4",
			"OFFSET": "104",
			"DATATYPE": "LONG"
		},
		"LMYDY2ORDDY": {
			"NOOFBYTES": "4",
			"OFFSET": "108",
			"DATATYPE": "LONG"
		},
		"LMYDZ2ORDDZ": {
			"NOOFBYTES": "4",
			"OFFSET": "112",
			"DATATYPE": "LONG"
		},
		"LMYAF02ORAF1": {
			"NOOFBYTES": "4",
			"OFFSET": "116",
			"DATATYPE": "LONG"
		},
		"ULMYTOD": {
			"NOOFBYTES": "4",
			"OFFSET": "120",
			"DATATYPE": "ULONG"
		},
		"ULMYIODP": {
			"NOOFBYTES": "4",
			"OFFSET": "124",
			"DATATYPE": "ULONG"
		},
		"ULMYSPARE": {
			"NOOFBYTES": "4",
			"OFFSET": "128",
			"DATATYPE": "ULONG"
		}
	},
	"WAAS26": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYBANDNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYBLOCKID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ACLMYGRIDPOINTDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYIGPVDE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYGIVEI": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYIODI": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYSPAREBITS": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"CABO": ["16"],
		"CAAO": ["16"]
	},
	"WAAS27": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYIODS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYNUMSERVICEMSGS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSERVICEMSGNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYPRIORITYCODE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYUDREINSIDE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYUDREOUTSIDE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ACLMYREGIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "CLASSARRAY"
		},
		"LMYLAT1": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "LONG"
		},
		"LMYLONG1": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "LONG"
		},
		"LMYLAT2": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "LONG"
		},
		"LMYLONG2": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "LONG"
		},
		"ULMYSHAPE": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYT0": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"CABO": ["32"],
		"CAAO": ["24"]
	},
	"WAAS3": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"IODF": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"IODP": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ALMYPRC": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FIXEDLONGARRAY"
		},
		"AULMYUDREI": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FIXEDULONGARRAY"
		}
	},
	"WAAS4": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"IODF": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"IODP": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ALMYPRC": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FIXEDLONGARRAY"
		},
		"AULMYUDREI": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FIXEDULONGARRAY"
		}
	},
	"WAAS5": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"IODF": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"IODP": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ALMYPRC": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FIXEDLONGARRAY"
		},
		"AULMYUDREI": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FIXEDULONGARRAY"
		}
	},
	"WAAS6": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYIODF2": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYIODF3": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYIODF4": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYIODF5": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"AULMYUDREI": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FIXEDULONGARRAY"
		}
	},
	"WAAS7": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSYSTEMLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYIODP": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSPAREBITS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"AULMYDEGRADATIONFACTOR": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FIXEDULONGARRAY"
		}
	},
	"WAAS9": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYIODN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYT0": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYURA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYXVEL": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYYVEL": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"DMYZVEL": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		},
		"DMYXACCEL": {
			"NOOFBYTES": "8",
			"OFFSET": "64",
			"DATATYPE": "DOUBLE"
		},
		"DMYYACCEL": {
			"NOOFBYTES": "8",
			"OFFSET": "72",
			"DATATYPE": "DOUBLE"
		},
		"DMYZACCEL": {
			"NOOFBYTES": "8",
			"OFFSET": "80",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF0": {
			"NOOFBYTES": "8",
			"OFFSET": "88",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF1": {
			"NOOFBYTES": "8",
			"OFFSET": "96",
			"DATATYPE": "DOUBLE"
		}
	},
	"RTCM15": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ACMYIONDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYGPSGLONASS": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYSVPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"ULMYCOR": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"IMYCORRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "INT"
		},
		"CABO": ["28"],
		"CAAO": ["20"]
	},
	"RTCM15IN": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ACMYIONDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYGPSGLONASS": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYSVPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"ULMYCOR": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"IMYCORRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "INT"
		},
		"CABO": ["28"],
		"CAAO": ["20"]
	},
	"ENVIRONMENT": {
		"FMYANTENNACURRENT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		},
		"FMYLOWVOLTAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"FMYSUPPLYVOLTAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYRFVOLTAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYINTERNALLNAVOLTAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYLNAOUTPUTVOLTAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"FMYRESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"FMYRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"FMYRESERVED3": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYTEMPERATURE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYEXTERNALTEMPERATURE": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYAIRPRESSURE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYHUMIDITY": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"FMYWINDSPEED": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "FLOAT"
		},
		"FMYWINDDIRECTION": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		}
	},
	"CMRDESC": {
		"ULMYCMRSYNC": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYLENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYVERSION": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATIONID": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYMESSAGETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"BMYISBATTERYLOW": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "BOOL"
		},
		"BMYISMEMLOW": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "BOOL"
		},
		"ULMYRESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"BMYISL2ENABLED": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "BOOL"
		},
		"ULMYRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULMYEPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYMOTIONSTATE": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"ULMYANTENNANUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"ULMYRECLENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"AUCMYSHORTID": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "FIXEDUCHARARRAY"
		},
		"AUCMYCOGOCODE": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "FIXEDUCHARARRAY"
		},
		"AUCMYLONGID": {
			"NOOFBYTES": "1",
			"OFFSET": "66",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"POSVELNAV": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"EMYDATUMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "DATUMENUM"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "66",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "67",
			"DATATYPE": "UCHAR"
		},
		"EMYVELOCITYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYVELOCITYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "FLOAT"
		},
		"DMYGROUNDTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "80",
			"DATATYPE": "DOUBLE"
		},
		"DMYHORIZONTALSPEED": {
			"NOOFBYTES": "8",
			"OFFSET": "88",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "96",
			"DATATYPE": "DOUBLE"
		},
		"EMYNAVSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "104",
			"DATATYPE": "NAVSTATUSENUM"
		},
		"DMYDISTANCE": {
			"NOOFBYTES": "8",
			"OFFSET": "108",
			"DATATYPE": "DOUBLE"
		},
		"DMYBEARING": {
			"NOOFBYTES": "8",
			"OFFSET": "116",
			"DATATYPE": "DOUBLE"
		},
		"DMYALONGTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "124",
			"DATATYPE": "DOUBLE"
		},
		"DMYXTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "132",
			"DATATYPE": "DOUBLE"
		},
		"ULMYETAWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "140",
			"DATATYPE": "ULONG"
		},
		"DMYETASECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "144",
			"DATATYPE": "DOUBLE"
		}
	},
	"WAASCORRECTION": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"EMYMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "LBANDTESTMODEENUM"
		},
		"CABO": ["4"],
		"CAAO": ["12"]
	},
	"WAASCORR": {
		"ACLMYENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"FMYCORRECTION": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		}
	},
	"PAUSE": {
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		},
		"EMYSTATE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ONOFFENUM"
		}
	},
	"PING": {
		"ULMYTIMEOUTSECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"PINGSETUP": {
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		},
		"SZMYSCRIPT": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		},
		"CABO": ["4"],
		"CAAO": ["5"]
	},
	"COMCONFIG": {
		"ACLMYCOMCONFIG": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "COMMPORTENUM"
		},
		"ULMYBAUD": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"EMYPARITY": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "OEM4_PARITYENUM"
		},
		"ULMYDATABITS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYSTOPBITS": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"EMYHANDSHAKE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "HANDSHAKEENUM"
		},
		"EMYECHO": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ONOFFENUM"
		},
		"EMYBREAKS": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ONOFFENUM"
		},
		"EMYRXTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "INTERFACEMODEENUM"
		},
		"EMYTXTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "INTERFACEMODEENUM"
		},
		"EMYRESPONSES": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ONOFFENUM"
		}
	},
	"GROUPINTERFACEMODE": {
		"EMYUPDATEPARAM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"SZMYGROUPNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "COMMPORTENUM"
		},
		"EMYRXTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "INTERFACEMODEENUM"
		},
		"EMYTXTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "INTERFACEMODEENUM"
		},
		"EMYRESPONSES": {
			"NOOFBYTES": "4",
			"OFFSET": "17",
			"DATATYPE": "ONOFFENUM"
		}
	},
	"INSATTS": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "INSSTATUSENUM"
		}
	},
	"INSCOVS": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "30",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"INSPOSS": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "INSSTATUSENUM"
		}
	},
	"INSPOSSYNC": {
		"DSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"ADECEFCOVARIANCE": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"INSSPDS": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYGROUNDTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYHORIZONTALSPEED": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "INSSTATUSENUM"
		}
	},
	"INSVELS": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "INSSTATUSENUM"
		}
	},
	"RAWIMUS": {
		"ULMYGPSWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYGPSSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"ULMYIMUSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "HEXULONG"
		},
		"LMYDELVELBODYZ": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "LONG"
		},
		"LMYDELVELBODYY": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "LONG"
		},
		"LMYDELVELBODYX": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "LONG"
		},
		"LMYDELANGBODYZ": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "LONG"
		},
		"LMYDELANGBODYY": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "LONG"
		},
		"LMYDELANGBODYX": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "LONG"
		},
		"CABO": ["4"],
		"CAAO": ["40"]
	},
	"DETRSIN": {
		"ACLMYSCINTILLATIONDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"USMYPRN": {
			"NOOFBYTES": "2",
			"OFFSET": "4",
			"DATATYPE": "USHORT"
		},
		"USMYFREQUENCY": {
			"NOOFBYTES": "2",
			"OFFSET": "6",
			"DATATYPE": "USHORT"
		},
		"FMYTEC": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMY1SECONDDELTATEC": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"DMYFIRSTADR": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"ALMYSCINTILLATIONDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FIXEDLONGARRAY"
		},
		"CABO": ["4"],
		"CAAO": ["24"]
	},
	"RAWSIN": {
		"ACLMYSCINTILLATIONDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"USMYPRN": {
			"NOOFBYTES": "2",
			"OFFSET": "4",
			"DATATYPE": "USHORT"
		},
		"USMYFREQUENCY": {
			"NOOFBYTES": "2",
			"OFFSET": "6",
			"DATATYPE": "USHORT"
		},
		"FMYTEC": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMY1SECONDDELTATEC": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"DMYFIRSTADR": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"ALMYSCINTILLATIONDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FIXEDLONGARRAY"
		}
	},
	"SINBANDWIDTH": {
		"DMYPHASEBANDWIDTH": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYAMPLITUDEBANDWIDTH": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		}
	},
	"SINTECCALIBRATION": {
		"DMYTECCALIBRATION": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		}
	},
	"CLASSELEMLOG": {
		"CLASSID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ELEMENTID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"TYPEID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"LENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"OFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"CHILDCLASSID": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"DESCRIPTION": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ELEMENTTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "25",
			"DATATYPE": "ULONG"
		},
		"ARRAYSIZE": {
			"NOOFBYTES": "4",
			"OFFSET": "29",
			"DATATYPE": "ULONG"
		},
		"ARRAYOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "33",
			"DATATYPE": "ULONG"
		},
		"CONVERTSTR": {
			"NOOFBYTES": "1",
			"OFFSET": "37",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"DEFAULTVALUE": {
			"NOOFBYTES": "8",
			"OFFSET": "38",
			"DATATYPE": "DOUBLE"
		},
		"MINVALUE": {
			"NOOFBYTES": "8",
			"OFFSET": "46",
			"DATATYPE": "DOUBLE"
		},
		"MAXVALUE": {
			"NOOFBYTES": "8",
			"OFFSET": "54",
			"DATATYPE": "DOUBLE"
		}
	},
	"CLASSELEMREQ": {
		"INDEX": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"CLASSLIST": {
		"CLASSIDARRAY": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEULONGARRAY"
		}
	},
	"CLASSREQ": {
		"CLASSID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"CLASSREQLOG": {
		"CLASSID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"NUMELEMENTS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"ENUMLIST": {
		"ENUMARRAY": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEULONGARRAY"
		}
	},
	"ENUMREQ": {
		"ENUMREQ": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"ENUMREQLOG": {
		"NAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"CABO": ["4"],
		"CAAO": ["40"]
	},
	"MSGIDLIST": {
		"MSGIDARRAY": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"MESSAGEID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"MSGCRC": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		}
	},
	"MSGREQ": {
		"REQUESTEDID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"MSGREQLOG": {
		"MESSAGEID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "MESSAGEIDTYPE"
		},
		"MESSAGENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"HELP": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"MSGCRC": {
			"NOOFBYTES": "4",
			"OFFSET": "6",
			"DATATYPE": "ULONG"
		},
		"HIDDEN": {
			"NOOFBYTES": "4",
			"OFFSET": "10",
			"DATATYPE": "BOOL"
		},
		"PARAMARRAY": {
			"NOOFBYTES": "4",
			"OFFSET": "14",
			"DATATYPE": "MSGPARAMARRAY"
		}
	},
	"TYPELIST": {
		"TYPEARRAY": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEULONGARRAY"
		}
	},
	"TYPEREQ": {
		"TYPEID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"TYPEREQLOG": {
		"TYPEID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"NAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"LENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "ULONG"
		},
		"BASETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "ULONG"
		},
		"DESCRIPTION": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"DEFAULT": {
			"NOOFBYTES": "8",
			"OFFSET": "14",
			"DATATYPE": "DOUBLE"
		},
		"ELEMENTTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "ULONG"
		}
	},
	"USERMSG": {
		"AUCMYBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"HEIGHTMODEL": {
		"EMYMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"DMYANTENNAHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYWEIGHTING": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		}
	},
	"RTCAEPHEM": {
		"NOVATELDESIGNATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "UCHAR"
		},
		"UCSUBTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "UCHAR"
		},
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "2",
			"DATATYPE": "ULONG"
		},
		"ULMYSECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "6",
			"DATATYPE": "ULONG"
		},
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "10",
			"DATATYPE": "ULONG"
		},
		"UCMYRESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "UCHAR"
		},
		"AUCMYRAWDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "15",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"RTCAEPHEMIN": {
		"ULMESSAGEIDENTIFIER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFSTATION": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMESSAGETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMESSAGELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"NOVATELDESIGNATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "UCHAR"
		},
		"UCSUBTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "21",
			"DATATYPE": "UCHAR"
		},
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "ULONG"
		},
		"ULMYSECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "26",
			"DATATYPE": "ULONG"
		},
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "30",
			"DATATYPE": "ULONG"
		},
		"UCMYRESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "34",
			"DATATYPE": "UCHAR"
		},
		"AUCMYRAWDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "35",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"MSGRANGE": {
		"MINMSGID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"MAXMSGID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"NUMMSGS": {
		"MAXMSGID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"HEIGHTMODELSTATUS": {
		"EMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"SZDESCRIPTION": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		},
		"SZDATE": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "STRING"
		},
		"INUMPOINTS": {
			"NOOFBYTES": "4",
			"OFFSET": "6",
			"DATATYPE": "INT"
		},
		"INUMTRIANGLES": {
			"NOOFBYTES": "4",
			"OFFSET": "10",
			"DATATYPE": "INT"
		},
		"INUMTRIANGLEPOINTERS": {
			"NOOFBYTES": "4",
			"OFFSET": "14",
			"DATATYPE": "INT"
		},
		"IBYTESIZE": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "INT"
		}
	},
	"RTCM2021": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "ULONG"
		},
		"ULMYFREQ": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "ULONG"
		},
		"ULSPARE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"LMYTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "104",
			"DATATYPE": "LONG"
		},
		"ACLMYRTCMBODY": {
			"NOOFBYTES": "4",
			"OFFSET": "108",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMULTIPLEMSG": {
			"NOOFBYTES": "4",
			"OFFSET": "112",
			"DATATYPE": "ULONG"
		},
		"ULMYCODE": {
			"NOOFBYTES": "4",
			"OFFSET": "116",
			"DATATYPE": "ULONG"
		},
		"ULMYCONSTELLATION": {
			"NOOFBYTES": "4",
			"OFFSET": "120",
			"DATATYPE": "ULONG"
		},
		"ULMYSV": {
			"NOOFBYTES": "4",
			"OFFSET": "124",
			"DATATYPE": "ULONG"
		},
		"ULMYDATAQUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "132",
			"DATATYPE": "ULONG"
		},
		"ULMYINITS": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"ULIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ULONG"
		},
		"LPHASECORR": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "LONG"
		},
		"ULMYSMOOTHINGINTERVAL": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "ULONG"
		},
		"ULMYRATECORRSF": {
			"NOOFBYTES": "4",
			"OFFSET": "128",
			"DATATYPE": "ULONG"
		},
		"ULMYPSRCORRSF": {
			"NOOFBYTES": "4",
			"OFFSET": "136",
			"DATATYPE": "ULONG"
		},
		"ULMYMULTIPATH": {
			"NOOFBYTES": "4",
			"OFFSET": "140",
			"DATATYPE": "ULONG"
		},
		"ULMYIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "144",
			"DATATYPE": "ULONG"
		},
		"LMYPSRCORR": {
			"NOOFBYTES": "4",
			"OFFSET": "148",
			"DATATYPE": "LONG"
		},
		"LMYPSRCORRRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "152",
			"DATATYPE": "LONG"
		},
		"CABO": ["112"],
		"CAAO": ["44"]
	},
	"NOISEFLOOR": {
		"F1MSNOISEFLOORE1": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		},
		"F1MSNOISEFLOORE2": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"F1MSNOISEFLOORE3": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"F1MSNOISECHANNELNOISEFLOORE1": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"F1MSNOISECHANNELNOISEFLOORE2": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"F1MSNOISECHANNELNOISEFLOORE3": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		}
	},
	"SETAPPROXPOS": {
		"DMYLAT": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYLON": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYHGT": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		}
	},
	"INSBIASES": {
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"FMYXSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"FMYYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "FLOAT"
		},
		"FMYZSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "FLOAT"
		}
	},
	"INSCOMMAND": {
		"EMYCOMMAND": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INSCOMMANDENUM"
		}
	},
	"INSINITRTK": {
		"EMYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"INSLIGHTS": {
		"ULLEDS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "HEXULONG"
		}
	},
	"INSZUPT": {
		"BMYPERFORMZUPT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BOOL"
		}
	},
	"SETIMUTOANTOFFSET": {
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "3",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"INSKCOV": {
		"MDMYECEFPOSCOV": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"MDMYVELCOV": {
			"NOOFBYTES": "8",
			"OFFSET": "9",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"MDMYATTCOV": {
			"NOOFBYTES": "8",
			"OFFSET": "17",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"MDMYLOCPOSCOV": {
			"NOOFBYTES": "8",
			"OFFSET": "25",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"INSKINIT": {
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "18",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"INSKSTATE": {
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "180",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "188",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "196",
			"DATATYPE": "DOUBLE"
		},
		"FMYXSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "204",
			"DATATYPE": "FLOAT"
		},
		"FMYYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "208",
			"DATATYPE": "FLOAT"
		},
		"FMYZSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "212",
			"DATATYPE": "FLOAT"
		}
	},
	"INSSYSTEM": {
		"DMYGPSSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"ADMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"MDMYATMIDINSEPOCHRBE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"MDMYEPOCHRBE": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"ADMYGE": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"ADMYWEPOCH": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"BMYDOZUPT": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "BOOL"
		},
		"MDMYRLE": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"IMYLASTUPDATEID": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "INT"
		},
		"DMYACCSIZE": {
			"NOOFBYTES": "8",
			"OFFSET": "64",
			"DATATYPE": "DOUBLE"
		},
		"DMYGYROSIZE": {
			"NOOFBYTES": "8",
			"OFFSET": "72",
			"DATATYPE": "DOUBLE"
		}
	},
	"WLANENABLE": {
		"EMYONOFFENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ONOFFENUM"
		}
	},
	"CMRDATADESC": {
		"ULMYCMRSYNC": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYLENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYVERSION": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATIONID": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYMESSAGETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"BMYISBATTERYLOW": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "BOOL"
		},
		"BMYISMEMLOW": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "BOOL"
		},
		"ULMYRESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"BMYISL2ENABLED": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "BOOL"
		},
		"ULMYRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULMYEPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYMOTIONSTATE": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"ULMYANTENNANUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"ULMYRECLENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"AUCMYSHORTID": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "FIXEDUCHARARRAY"
		},
		"AUCMYCOGOCODE": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "FIXEDUCHARARRAY"
		},
		"AUCMYLONGID": {
			"NOOFBYTES": "1",
			"OFFSET": "66",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"CMRDATAOBS": {
		"ULMYCMRSYNC": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYLENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYVERSION": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATIONID": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMESSAGETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYNUMBEROFSV": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYEPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYCLOCKBIASVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"LMYCLOCKOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "LONG"
		},
		"ACLMYCMRBODY": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSLOTNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"BMYCODEFLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "BOOL"
		},
		"BMYL1PHASEVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "BOOL"
		},
		"BMYISL2PRESENT": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "BOOL"
		},
		"ULMYL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ULONG"
		},
		"LMYL1CARRIEROFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "LONG"
		},
		"ULMYL1SNR": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "ULONG"
		},
		"ULMYL1SLIPCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "ULONG"
		},
		"BMYISL2CODE": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "BOOL"
		},
		"BMYCODETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "BOOL"
		},
		"BMYISL2CODEVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "BOOL"
		},
		"BMYISL2PHASEVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "BOOL"
		},
		"BMYPHASEFULL": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "BOOL"
		},
		"ULMYRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "ULONG"
		},
		"LMYL2RANGEOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "104",
			"DATATYPE": "LONG"
		},
		"LMYL2CARRIEROFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "108",
			"DATATYPE": "LONG"
		},
		"ULMYL2SNR": {
			"NOOFBYTES": "4",
			"OFFSET": "112",
			"DATATYPE": "ULONG"
		},
		"ULMYL2SLIPCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "116",
			"DATATYPE": "ULONG"
		},
		"CABO": ["48"],
		"CAAO": ["72"]
	},
	"CMRDATAREF": {
		"ULMYCMRSYNC": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYLENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYVERSION": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATIONID": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYMESSAGETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"BMYISBATTERYLOW": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "BOOL"
		},
		"BMYISMEMLOW": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "BOOL"
		},
		"ULMYRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "ULONG"
		},
		"BMYISL2ENABLED": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "BOOL"
		},
		"ULMYRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULMYEPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYMOTIONSTATE": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"ULMYANTENNANUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_X": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"ULMYANTENNAH": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_Y": {
			"NOOFBYTES": "8",
			"OFFSET": "72",
			"DATATYPE": "DOUBLE"
		},
		"ULMYEASTOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_Z": {
			"NOOFBYTES": "8",
			"OFFSET": "84",
			"DATATYPE": "DOUBLE"
		},
		"ULMYNORTHOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "ULONG"
		},
		"ULMYPOSACCURACY": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "ULONG"
		}
	},
	"RTCADATA1": {
		"MODIFIEDZCOUNT": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"AEB": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ACCELERATIONERRORBOUND"
		},
		"CORRECTIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "UCHAR"
		},
		"PSEUDORANGECORRECTION": {
			"NOOFBYTES": "8",
			"OFFSET": "17",
			"DATATYPE": "DOUBLE"
		},
		"ISSUEOFDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "25",
			"DATATYPE": "UCHAR"
		},
		"RANGERATECORRECTION": {
			"NOOFBYTES": "8",
			"OFFSET": "26",
			"DATATYPE": "DOUBLE"
		},
		"UDRE": {
			"NOOFBYTES": "4",
			"OFFSET": "34",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["16"],
		"CAAO": ["22"]
	},
	"RTCADATAEPHEM": {
		"NOVATELDESIGNATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "UCHAR"
		},
		"UCSUBTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "UCHAR"
		},
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "2",
			"DATATYPE": "ULONG"
		},
		"ULMYSECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "6",
			"DATATYPE": "ULONG"
		},
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "10",
			"DATATYPE": "ULONG"
		},
		"UCMYRESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "UCHAR"
		},
		"AUCMYRAWDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "15",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"RTCADATAOBS": {
		"NOVATELDESIGNATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "UCHAR"
		},
		"SUBTYPEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "UCHAR"
		},
		"MINIMUMPSEUDORANGE": {
			"NOOFBYTES": "8",
			"OFFSET": "2",
			"DATATYPE": "DOUBLE"
		},
		"SECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "10",
			"DATATYPE": "FLOAT"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "53",
			"DATATYPE": "UCHAR"
		},
		"TRANSMITTERDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "CLASSARRAY"
		},
		"TRANSMITTERID": {
			"NOOFBYTES": "1",
			"OFFSET": "22",
			"DATATYPE": "UCHAR"
		},
		"L1LOCKFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "23",
			"DATATYPE": "UCHAR"
		},
		"L2LOCKFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "UCHAR"
		},
		"L1PSEUDORANGEOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "25",
			"DATATYPE": "DOUBLE"
		},
		"L2PSEUDORANGEOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "33",
			"DATATYPE": "DOUBLE"
		},
		"L1ADROFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "41",
			"DATATYPE": "FLOAT"
		},
		"L2ADROFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "45",
			"DATATYPE": "FLOAT"
		},
		"L2NOTENCRYPTED": {
			"NOOFBYTES": "4",
			"OFFSET": "49",
			"DATATYPE": "BOOL"
		},
		"CABO": ["22"],
		"CAAO": ["32"]
	},
	"RTCADATAREF": {
		"UCMYNOVATELDESIGNATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "UCHAR"
		},
		"UCMYSUBTYPEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "UCHAR"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "2",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "10",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "18",
			"DATATYPE": "DOUBLE"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "26",
			"DATATYPE": "UCHAR"
		}
	},
	"RTCMDATA1": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ACLMYDIFFDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSCALE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYUDRE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYSVPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"IMYCOR": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "INT"
		},
		"IMYCORRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "INT"
		},
		"ULMYIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["24"]
	},
	"RTCMDATA15": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ACMYIONDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYGPSGLONASS": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYSVPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"ULMYCOR": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"IMYCORRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "INT"
		},
		"CABO": ["28"],
		"CAAO": ["20"]
	},
	"RTCMDATA16": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"AUCMYRTCM16TEXT": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCMDATA1819": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "ULONG"
		},
		"ULMYFREQ": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "ULONG"
		},
		"ULMYSPARE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"LMYTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "LONG"
		},
		"ACLMYRTCMBODY": {
			"NOOFBYTES": "4",
			"OFFSET": "104",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMULTIPLEMSG": {
			"NOOFBYTES": "4",
			"OFFSET": "108",
			"DATATYPE": "ULONG"
		},
		"ULMYCODE": {
			"NOOFBYTES": "4",
			"OFFSET": "112",
			"DATATYPE": "ULONG"
		},
		"ULMYCONSTELLATION": {
			"NOOFBYTES": "4",
			"OFFSET": "116",
			"DATATYPE": "ULONG"
		},
		"ULMYSV": {
			"NOOFBYTES": "4",
			"OFFSET": "120",
			"DATATYPE": "ULONG"
		},
		"ULMYDATAQUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "124",
			"DATATYPE": "ULONG"
		},
		"ULMYINITS": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"LMYADR": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "LONG"
		},
		"ULMYSMOOTHINGINTERVAL": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "ULONG"
		},
		"ULMYMULTIPATH": {
			"NOOFBYTES": "4",
			"OFFSET": "128",
			"DATATYPE": "ULONG"
		},
		"ULMYPSR": {
			"NOOFBYTES": "4",
			"OFFSET": "132",
			"DATATYPE": "ULONG"
		},
		"CABO": ["108"],
		"CAAO": ["28"]
	},
	"RTCMDATA2021": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "ULONG"
		},
		"ULMYFREQ": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "ULONG"
		},
		"ULSPARE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"LMYTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "104",
			"DATATYPE": "LONG"
		},
		"ACLMYRTCMBODY": {
			"NOOFBYTES": "4",
			"OFFSET": "108",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMULTIPLEMSG": {
			"NOOFBYTES": "4",
			"OFFSET": "112",
			"DATATYPE": "ULONG"
		},
		"ULMYCODE": {
			"NOOFBYTES": "4",
			"OFFSET": "116",
			"DATATYPE": "ULONG"
		},
		"ULMYCONSTELLATION": {
			"NOOFBYTES": "4",
			"OFFSET": "120",
			"DATATYPE": "ULONG"
		},
		"ULMYSV": {
			"NOOFBYTES": "4",
			"OFFSET": "124",
			"DATATYPE": "ULONG"
		},
		"ULMYDATAQUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "132",
			"DATATYPE": "ULONG"
		},
		"ULMYINITS": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"ULIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ULONG"
		},
		"LPHASECORR": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "LONG"
		},
		"ULMYSMOOTHINGINTERVAL": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "ULONG"
		},
		"ULMYRATECORRSF": {
			"NOOFBYTES": "4",
			"OFFSET": "128",
			"DATATYPE": "ULONG"
		},
		"ULMYPSRCORRSF": {
			"NOOFBYTES": "4",
			"OFFSET": "136",
			"DATATYPE": "ULONG"
		},
		"ULMYMULTIPATH": {
			"NOOFBYTES": "4",
			"OFFSET": "140",
			"DATATYPE": "ULONG"
		},
		"ULMYIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "144",
			"DATATYPE": "ULONG"
		},
		"LMYPSRCORR": {
			"NOOFBYTES": "4",
			"OFFSET": "148",
			"DATATYPE": "LONG"
		},
		"LMYPSRCORRRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "152",
			"DATATYPE": "LONG"
		},
		"CABO": ["112"],
		"CAAO": ["44"]
	},
	"RTCMDATA22": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"LMYL1ANTDELTAX": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "LONG"
		},
		"LMYL1ANTDELTAY": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "LONG"
		},
		"LMYL1ANTDELTAZ": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "LONG"
		},
		"CLMYRTCM22ANTHGTL1": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "CLASSARRAY"
		},
		"ULSPAREBITS": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"BNOHEIGHT": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "BOOL"
		},
		"ULANTENNAPHASEHEIGHT": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"CLMYRTCM22ANTINFL2": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "CLASSARRAY"
		},
		"LMYL2ANTDELTAX": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "LONG"
		},
		"LMYL2ANTDELTAY": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "LONG"
		},
		"LMYL2ANTDELTAZ": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "LONG"
		},
		"CABO": ["56"],
		"CAAO": ["12"]
	},
	"RTCMDATA3": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_X": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYECEF_Y": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYECEF_Z": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		}
	},
	"RTCMDATA59": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"UCMYSUBTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "UCHAR"
		},
		"LMYMINPSR": {
			"NOOFBYTES": "4",
			"OFFSET": "25",
			"DATATYPE": "LONG"
		},
		"LTIMEOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "29",
			"DATATYPE": "LONG"
		},
		"ULSPAREBITS": {
			"NOOFBYTES": "4",
			"OFFSET": "33",
			"DATATYPE": "ULONG"
		},
		"CLMYRTCMBODY": {
			"NOOFBYTES": "4",
			"OFFSET": "37",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSV": {
			"NOOFBYTES": "4",
			"OFFSET": "41",
			"DATATYPE": "ULONG"
		},
		"ULMYLOCK": {
			"NOOFBYTES": "4",
			"OFFSET": "45",
			"DATATYPE": "ULONG"
		},
		"ULMYPSR": {
			"NOOFBYTES": "4",
			"OFFSET": "49",
			"DATATYPE": "ULONG"
		},
		"LMYADRCOR": {
			"NOOFBYTES": "4",
			"OFFSET": "53",
			"DATATYPE": "LONG"
		},
		"CABO": ["41"],
		"CAAO": ["16"]
	},
	"RTCMDATA9": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ACLMYDIFFDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSCALE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYUDRE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYSVPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"IMYCOR": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "INT"
		},
		"IMYCORRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "INT"
		},
		"ULMYIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["24"]
	},
	"PASSXCOM1": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PASSXCOM2": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"RAWGPSWORD": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYRAWWORD": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"CABO": ["4"],
		"CAAO": ["8"]
	},
	"PDC_VERSIONDATA": {
		"ACLVERSIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"SZPSN": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZSOFTWAREVERSION": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZMODELNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"CABO": ["4"],
		"CAAO": ["18"]
	},
	"PDC_SATDATA": {
		"CHANSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"USPRN": {
			"NOOFBYTES": "2",
			"OFFSET": "4",
			"DATATYPE": "USHORT"
		},
		"FCNO": {
			"NOOFBYTES": "4",
			"OFFSET": "6",
			"DATATYPE": "FLOAT"
		},
		"EMYPSRRANGEREJECT": {
			"NOOFBYTES": "4",
			"OFFSET": "10",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		}
	},
	"PLLBANDWIDTH": {
		"EMYSIGNAL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SIGNALTYPEENUM"
		},
		"FMYBANDWIDTH": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		}
	},
	"APPLICATION": {
		"ESTARTENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "APPSTARTENUM"
		},
		"ULPARAMETER": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"IPRIORITY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "INT"
		},
		"ISTACKSIZE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "INT"
		}
	},
	"POINTM": {
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMOBSUSEDINSOL": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMHIGHL1SATS": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMHIGHL2SATS": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "UCHAR"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "7",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "15",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "23",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTANORTH": {
			"NOOFBYTES": "8",
			"OFFSET": "31",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAEAST": {
			"NOOFBYTES": "8",
			"OFFSET": "39",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAUP": {
			"NOOFBYTES": "8",
			"OFFSET": "47",
			"DATATYPE": "DOUBLE"
		},
		"FMYSDEV2D": {
			"NOOFBYTES": "4",
			"OFFSET": "55",
			"DATATYPE": "FLOAT"
		},
		"FMYSDEV3D": {
			"NOOFBYTES": "4",
			"OFFSET": "59",
			"DATATYPE": "FLOAT"
		},
		"FMYSDEV1D": {
			"NOOFBYTES": "4",
			"OFFSET": "63",
			"DATATYPE": "FLOAT"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "67",
			"DATATYPE": "DOUBLE"
		},
		"DMYELEVATION": {
			"NOOFBYTES": "8",
			"OFFSET": "75",
			"DATATYPE": "DOUBLE"
		},
		"FMYSLOPEDISTANCE": {
			"NOOFBYTES": "4",
			"OFFSET": "83",
			"DATATYPE": "FLOAT"
		},
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "87",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "91",
			"DATATYPE": "SOLTYPEENUM"
		},
		"ACMYSTATIONID": {
			"NOOFBYTES": "1",
			"OFFSET": "95",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"BESTGPSPOS": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"EMYDATUMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "DATUMENUM"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "66",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "67",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "68",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "69",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "70",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "71",
			"DATATYPE": "UCHAR"
		}
	},
	"PDPFILTER": {
		"EMYCOMMAND": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PDPFILTERCOMMANDENUM"
		}
	},
	"ADJUST1PPS": {
		"EMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ADJUST1PPSMODEENUM"
		},
		"EPERIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ADJUST1PPSPERIODENUM"
		},
		"LTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "LONG"
		}
	},
	"CLOCKCALIBRATE": {
		"ESETTING": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLOCKCALIBRATEENUM"
		},
		"ULMODULUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULCENTER": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"FSLOPE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FBANDWIDTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		}
	},
	"COMCONTROL": {
		"EPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		},
		"ESIGNAL": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "COMSIGNALENUM"
		},
		"ECONTROL": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "COMSIGNALCTRLENUM"
		}
	},
	"RTKIFTHRESH": {
		"DIONOFREETHRESH": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		}
	},
	"PSRDIFFIN": {
		"EMYDGPSTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "DGPSTYPEENUM"
		},
		"ACMYDIFFSTATIONID": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ACLMYDIFFCORRECTIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "SATELLITEID"
		},
		"DMYDIFFCOR": {
			"NOOFBYTES": "8",
			"OFFSET": "17",
			"DATATYPE": "DOUBLE"
		},
		"DMYDIFFCORRATE": {
			"NOOFBYTES": "8",
			"OFFSET": "25",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["4"],
		"CAAO": ["24"]
	},
	"PSRDIFFOUT": {
		"ACLMYDIFFCORDATBASE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSVPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"DMYCOR": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYCORRATE": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		}
	},
	"RTKFIXRATE": {
		"DFIXRATE": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		}
	},
	"PDPPOS": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"EMYDATUMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "DATUMENUM"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "67",
			"DATATYPE": "UCHAR"
		},
		"UCMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "1",
			"OFFSET": "68",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "69",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "70",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "71",
			"DATATYPE": "UCHAR"
		}
	},
	"PDPVEL": {
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"DMYHORIZONTALSPEED": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYGROUNDTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"ULULONG": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		}
	},
	"PDPXYZ": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"FMYXSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "FLOAT"
		},
		"FMYYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "FLOAT"
		},
		"FMYZSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "FLOAT"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "SOLTYPEENUM"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "88",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "FLOAT"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "104",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "105",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "108",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "109",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "110",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "111",
			"DATATYPE": "UCHAR"
		}
	},
	"SOFTLOADCOMMIT": {
		"EMYSRC": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOFTLOADSOURCEENUM"
		}
	},
	"SOFTLOADRESET": {
		"EMYSRC": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOFTLOADSOURCEENUM"
		}
	},
	"SOFTLOADSREC": {
		"SZMYSREC": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"EMYSRC": {
			"NOOFBYTES": "4",
			"OFFSET": "515",
			"DATATYPE": "SOFTLOADSOURCEENUM"
		}
	},
	"TIMESYNC": {
		"ULGPSWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ETIMESTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "GPSTIMESTATUSENUM"
		}
	},
	"PSRDIFFSOURCE": {
		"EMYCORRTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "DGPSTYPEENUM"
		},
		"SZMYSTATIONID": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"RTKSOURCE": {
		"EMYCORRTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "DGPSTYPEENUM"
		},
		"SZMYSTATIONID": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"MEMSINSGPS": {
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INSSTATUSENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYNORTHVELOCITY": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYEASTVELOCITY": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYUPVELOCITY": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYELEVATION": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCHRATE": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"DMYROLLRATE": {
			"NOOFBYTES": "8",
			"OFFSET": "84",
			"DATATYPE": "DOUBLE"
		},
		"DMYYAWRATE": {
			"NOOFBYTES": "8",
			"OFFSET": "92",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDINALACC": {
			"NOOFBYTES": "8",
			"OFFSET": "100",
			"DATATYPE": "DOUBLE"
		},
		"DMYLATERALACC": {
			"NOOFBYTES": "8",
			"OFFSET": "108",
			"DATATYPE": "DOUBLE"
		},
		"DMYVERTICALACC": {
			"NOOFBYTES": "8",
			"OFFSET": "116",
			"DATATYPE": "DOUBLE"
		}
	},
	"WHEELVELOCITY": {
		"USMYLATENCY": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "USHORT"
		},
		"USMYTICKCOUNT": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "USHORT"
		},
		"USMYWHEELVELOCITY": {
			"NOOFBYTES": "2",
			"OFFSET": "4",
			"DATATYPE": "USHORT"
		},
		"USRESERVED1": {
			"NOOFBYTES": "2",
			"OFFSET": "6",
			"DATATYPE": "USHORT"
		},
		"FMYWHEELVELOCITY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"ULRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULRESERVED3": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"LMYCUMULATIVETICKSPERSECOND": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "LONG"
		}
	},
	"WAASECUTOFF": {
		"FMYELEVATIONCUTOFFANGLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		}
	},
	"BESTGPSVEL": {
		"EMYVELOCITYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYVELOCITYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"DMYHORIZONTALSPEED": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYGROUNDTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"FFLOAT": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		}
	},
	"INSPVA": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "INSSTATUSENUM"
		}
	},
	"INSPVAS": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "INSSTATUSENUM"
		}
	},
	"RAWIMUSUMS": {
		"ULMYGPSWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYGPSTIME": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"ULMYIMUSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "HEXULONG"
		},
		"ULMYANGBODYX": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYANGBODYY": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYANGBODYZ": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYVELBODYX": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYVELBODYY": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYVELBODYZ": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		}
	},
	"SETDEBUGPROCESS": {
		"ETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "DEBUGPROCESSTYPE"
		}
	},
	"APPLICATIONSTATUS": {
		"ULAPIVERSION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"BRUNNING": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "BOOL"
		},
		"ULBASEADDRESS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULSIZE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"SZNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZVERSION": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZCOMPILEDATE": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZCOMPILETIME": {
			"NOOFBYTES": "1",
			"OFFSET": "19",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"GPGGALONG": {
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "SOLTYPEENUM"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "36",
			"DATATYPE": "UCHAR"
		},
		"FMYHDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "37",
			"DATATYPE": "FLOAT"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "41",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "45",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ULMYGGAQUALITY": {
			"NOOFBYTES": "4",
			"OFFSET": "49",
			"DATATYPE": "ULONG"
		}
	},
	"SETIMUORIENTATION": {
		"IMYORIENTATION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INT"
		}
	},
	"SETIMUTYPE": {
		"EMYIMUTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "IMUTYPEENUM"
		}
	},
	"SETHEALTH": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"EMYENABLEDISABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ENABLEENUM"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		}
	},
	"SETALMHEALTH": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"EMYENABLEDISABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ENABLEENUM"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		}
	},
	"SETEPHEMHEALTH": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"EMYENABLEDISABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ENABLEENUM"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		}
	},
	"FORCEPRNAS": {
		"ULPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PRN"
		},
		"EVALUE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FORCEASENUM"
		}
	},
	"MAXTRACK": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"CLOCKOFFSET": {
		"LMYCLOCKOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "LONG"
		}
	},
	"PASSTOPASSMODE": {
		"EENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"EMEASSMOOTH": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ONOFFENUM"
		},
		"ECORRSMOOTH": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ONOFFENUM"
		},
		"EDEWEIGHT": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "PASSTOPASSDEWEIGHTENUM"
		},
		"DDEWEIGHTSCALE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		}
	},
	"INSHOTSTART": {
		"ESTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"INSSTATENVM": {
		"EIMUTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "IMUTYPEENUM"
		},
		"IMAPPING": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "INT"
		},
		"ADPOSECEF": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"ADACCELBIAS": {
			"NOOFBYTES": "8",
			"OFFSET": "11",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"ADGYROBIAS": {
			"NOOFBYTES": "8",
			"OFFSET": "19",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"MDRLB": {
			"NOOFBYTES": "8",
			"OFFSET": "27",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"DWHEELSCALE": {
			"NOOFBYTES": "8",
			"OFFSET": "35",
			"DATATYPE": "DOUBLE"
		},
		"MDP": {
			"NOOFBYTES": "8",
			"OFFSET": "43",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"TYPEENUMS": {
		"ULMYTYPEID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"AULMYENUMLIST": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "VARIABLEULONGARRAY"
		}
	},
	"PASSUSB1": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PASSUSB2": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PASSUSB3": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"POSTIMEOUT": {
		"ULTIMEOUT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"PPSCONTROL": {
		"EMYENABLEDISABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PPSENABLEENUM"
		},
		"EMYPOLARITY": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "POLARITYENUM"
		},
		"DMYRATE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"ULMYPULSEWIDTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		}
	},
	"MARKCONTROL": {
		"EMYMARK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "MARKENUM"
		},
		"EMYENABLEDISABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ENABLEENUM"
		},
		"EMYPOLARITY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "POLARITYENUM"
		},
		"LMYTIMEBIAS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "LONG"
		},
		"ULMYTIMEGUARD": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		}
	},
	"MARK2POS": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"EMYDATUMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "DATUMENUM"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "66",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "67",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "70",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "69",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "71",
			"DATATYPE": "UCHAR"
		}
	},
	"MARK2TIME": {
		"LMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "LONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYOFFSETSTD": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYUTCOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "CLOCKMODELSTATUSENUM"
		}
	},
	"SRESET": {
		"ETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SPECIALRESETTYPEENUM"
		}
	},
	"TIMEDWHEELDATA": {
		"USMYTICKSPERREV": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "USHORT"
		},
		"USMYWHEELVELOCITY": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "USHORT"
		},
		"FMYWHEELVELOCITY": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"ULMYRESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"LMYCUMULATIVETICKSPERSECOND": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "LONG"
		},
		"CABO": ["4"],
		"CAAO": ["20"]
	},
	"RANGEGPSL1": {
		"ACLMYOBS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"USMYSVPRN": {
			"NOOFBYTES": "2",
			"OFFSET": "4",
			"DATATYPE": "USHORT"
		},
		"USMYSVFREQ": {
			"NOOFBYTES": "2",
			"OFFSET": "6",
			"DATATYPE": "USHORT"
		},
		"DMYPSR": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"FMYSDPSR": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"DMYADR": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"FMYSDADR": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"FMYDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYUSERCNO": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYLOCKTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"ULMYCSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "HEXULONG"
		}
	},
	"INSPHASEUPDATE": {
		"EMYTRIGGER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"INSPSRUPDATE": {
		"EMYTRIGGER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"RVBCALIBRATE": {
		"EMYCMD": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RVBCOMPENUM"
		}
	},
	"VEHICLEBODYROTATION": {
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "3",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"CBITHINT": {
		"EMYHINT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CBITHINTENUM"
		},
		"ULMYPARAM1": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYPARAM2": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYPARAM3": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		}
	},
	"DEBUGETHERRSRC": {
		"ULMYINUSEREQUESTORS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYHIGHWATERMARKREQUESTORS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYMAXREQUESTORS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYINUSERATEREQUESTS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYHIGHWATERMARKRATEREQUESTS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYMAXRATEREQUESTS": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		}
	},
	"TIMEDMAGDATA": {
		"USMAGID": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "USHORT"
		},
		"USMAGSTATUS": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "USHORT"
		},
		"SXMAG": {
			"NOOFBYTES": "2",
			"OFFSET": "4",
			"DATATYPE": "SHORT"
		},
		"SYMAG": {
			"NOOFBYTES": "2",
			"OFFSET": "6",
			"DATATYPE": "SHORT"
		},
		"SZMAG": {
			"NOOFBYTES": "2",
			"OFFSET": "8",
			"DATATYPE": "SHORT"
		}
	},
	"WHEELSIZE": {
		"DMYWHEELSCALE": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYWHEELCIRCUMFERENCE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYWHEELVARIANCE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		}
	},
	"INSWHEELUPDATE": {
		"EMYTRIGGER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"MAGDATA": {
		"USMAGID": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "USHORT"
		},
		"USLATENCY": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "USHORT"
		},
		"USMAGSTATUS": {
			"NOOFBYTES": "2",
			"OFFSET": "4",
			"DATATYPE": "USHORT"
		},
		"SXMAG": {
			"NOOFBYTES": "2",
			"OFFSET": "6",
			"DATATYPE": "SHORT"
		},
		"SYMAG": {
			"NOOFBYTES": "2",
			"OFFSET": "8",
			"DATATYPE": "SHORT"
		},
		"SZMAG": {
			"NOOFBYTES": "2",
			"OFFSET": "10",
			"DATATYPE": "SHORT"
		}
	},
	"INTEGRITYCHECKING": {
		"EDOINTEGRITYCHECKING": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ONOFFENUM"
		},
		"DSCALE": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		}
	},
	"SATVISSYS": {
		"BMYISSATVISVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BOOL"
		},
		"BMYWASGPSALMANACUSED": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "BOOL"
		},
		"ACLMYSATVISLIST": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "CLASSARRAY"
		},
		"BMYPOSVELVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "BOOL"
		},
		"USMYPRN": {
			"NOOFBYTES": "2",
			"OFFSET": "16",
			"DATATYPE": "USHORT"
		},
		"USMYFREQ": {
			"NOOFBYTES": "2",
			"OFFSET": "18",
			"DATATYPE": "USHORT"
		},
		"ULMYSATHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"DMYELEVATION": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYTRUEDOPPLER": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYAPPARENTDOPPLER": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"EMYSYSTEMVARIANT": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "SYSTEMVARIANTENUM"
		},
		"CABO": ["12"],
		"CAAO": ["52"]
	},
	"SBASCONTROL": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"EMYSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SBASSYSTEMENUM"
		},
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "PRN"
		},
		"EMYTESTMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "SBASTESTMODEENUM"
		}
	},
	"RTCMDATA59FKP": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULINSTITUTIONID1": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULINSTITUTIONID2": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULINSTITUTIONID3": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULSUBID": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"ULRESERVE": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULDATASETNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULSATIDBITMASK": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ACLMYRTCMBODY": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"ULMYRESERVE": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"ULMYSL0": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ULONG"
		},
		"ULMYSLI": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "ULONG"
		},
		"ULMYN0": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "LONG"
		},
		"ULMYNI": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "LONG"
		},
		"ULMYE0": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "LONG"
		},
		"ULMYEI": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "LONG"
		},
		"CABO": ["56"],
		"CAAO": ["32"]
	},
	"RTCM59FKPIN": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULINSTITUTIONID1": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULINSTITUTIONID2": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULINSTITUTIONID3": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULSUBID": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"ULRESERVE": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULDATASETNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULSATIDBITMASK": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ACLMYRTCMBODY": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"ULMYRESERVE": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"ULMYSL0": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ULONG"
		},
		"ULMYSLI": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "ULONG"
		},
		"ULMYN0": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "LONG"
		},
		"ULMYNI": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "LONG"
		},
		"ULMYE0": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "LONG"
		},
		"ULMYEI": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "LONG"
		},
		"CABO": ["56"],
		"CAAO": ["32"]
	},
	"RTCM59FKP": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULINSTITUTIONID1": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULINSTITUTIONID2": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULINSTITUTIONID3": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULSUBID": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"ULRESERVE": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULDATASETNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULSATIDBITMASK": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ACLMYRTCMBODY": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"ULMYRESERVE": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"ULMYSL0": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ULONG"
		},
		"ULMYSLI": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "ULONG"
		},
		"ULMYN0": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "LONG"
		},
		"ULMYNI": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "LONG"
		},
		"ULMYE0": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "LONG"
		},
		"ULMYEI": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "LONG"
		},
		"CABO": ["56"],
		"CAAO": ["32"]
	},
	"RTCMDATA23": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYRESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYAR": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYSF": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"SZMYANTENNADESCRIPTION": {
			"NOOFBYTES": "1",
			"OFFSET": "36",
			"DATATYPE": "VARIABLECHARARRAY"
		},
		"ULMYSETUPID": {
			"NOOFBYTES": "4",
			"OFFSET": "67",
			"DATATYPE": "ULONG"
		},
		"ULMYRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "71",
			"DATATYPE": "ULONG"
		},
		"SZMYANTENNASERIALNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "75",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"RTCMDATA24": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_X": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"ULMYRESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_Y": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"ULMYRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_Z": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"ULMYSYSTEMINDICATOR": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"ULMYANTENNAHTFLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"CLMYANTHGTINF": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYANTHGT": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "ULONG"
		},
		"ULMYANTRSR": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "ULONG"
		},
		"CABO": ["68"],
		"CAAO": ["8"]
	},
	"RTCM23": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYRESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYAR": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYSF": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"SZMYANTENNADESCRIPTION": {
			"NOOFBYTES": "1",
			"OFFSET": "36",
			"DATATYPE": "VARIABLECHARARRAY"
		},
		"ULMYSETUPID": {
			"NOOFBYTES": "4",
			"OFFSET": "67",
			"DATATYPE": "ULONG"
		},
		"ULMYRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "71",
			"DATATYPE": "ULONG"
		},
		"SZMYANTENNASERIALNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "75",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"RTCM23IN": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYRESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYAR": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYSF": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"SZMYANTENNADESCRIPTION": {
			"NOOFBYTES": "1",
			"OFFSET": "36",
			"DATATYPE": "VARIABLECHARARRAY"
		},
		"ULMYSETUPID": {
			"NOOFBYTES": "4",
			"OFFSET": "67",
			"DATATYPE": "ULONG"
		},
		"ULMYRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "71",
			"DATATYPE": "ULONG"
		},
		"SZMYANTENNASERIALNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "75",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"RTCM24": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_X": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"ULMYRESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_Y": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"ULMYRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_Z": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"ULMYSYSTEMINDICATOR": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"ULMYANTENNAHTFLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"CLMYANTHGTINF": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYANTHGT": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "ULONG"
		},
		"ULMYANTRSR": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "ULONG"
		},
		"CABO": ["68"],
		"CAAO": ["8"]
	},
	"RTCM24IN": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_X": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"ULMYRESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_Y": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"ULMYRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_Z": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"ULMYSYSTEMINDICATOR": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"ULMYANTENNAHTFLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"CLMYANTHGTINF": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYANTHGT": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "ULONG"
		},
		"ULMYANTRSR": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "ULONG"
		},
		"CABO": ["68"],
		"CAAO": ["8"]
	},
	"RAWIMUIFCARDPACKET": {
		"UCMYIMUIFCARDMSGID": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "UCHAR"
		},
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "FIXEDUCHARARRAY"
		},
		"USMYIMUIFCARDCKSUM": {
			"NOOFBYTES": "2",
			"OFFSET": "65",
			"DATATYPE": "USHORT"
		}
	},
	"IMUCONTROL": {
		"EMYIMUIFCARDCONTROLCMD": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "IMUIFCARDCONTROLENUM"
		},
		"AUCMYIMUIFCARDCONTROLDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDUCHARARRAY"
		}
	},
	"IMUCARDDEBUG": {
		"AUCMYDEBUGBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"IMUCARDSTATUS": {
		"ULMYSDLCCNTRCVCRCFRAMEOK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSDLCCNTRCVINERTIALMSG": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"USMYSDLCCNTRCVABORTERROR": {
			"NOOFBYTES": "2",
			"OFFSET": "8",
			"DATATYPE": "USHORT"
		},
		"USMYSDLCCNTRCVCRCERROR": {
			"NOOFBYTES": "2",
			"OFFSET": "10",
			"DATATYPE": "USHORT"
		},
		"USMYSDLCCNTRCVBUFFEROVERRUN": {
			"NOOFBYTES": "2",
			"OFFSET": "12",
			"DATATYPE": "USHORT"
		},
		"USMYSDLCRESERVED1": {
			"NOOFBYTES": "2",
			"OFFSET": "14",
			"DATATYPE": "USHORT"
		},
		"USMYSDLCRESERVED2": {
			"NOOFBYTES": "2",
			"OFFSET": "16",
			"DATATYPE": "USHORT"
		},
		"USMYSDLCRESERVED3": {
			"NOOFBYTES": "2",
			"OFFSET": "18",
			"DATATYPE": "USHORT"
		},
		"USMYUARTRCVBUFFEROVERRUN": {
			"NOOFBYTES": "2",
			"OFFSET": "20",
			"DATATYPE": "USHORT"
		},
		"USMYUARTRCVOVERRUNERROR": {
			"NOOFBYTES": "2",
			"OFFSET": "22",
			"DATATYPE": "USHORT"
		},
		"USMYUARTRCVFRAMEERROR": {
			"NOOFBYTES": "2",
			"OFFSET": "24",
			"DATATYPE": "USHORT"
		},
		"USMYUARTRCVPARITYERROR": {
			"NOOFBYTES": "2",
			"OFFSET": "26",
			"DATATYPE": "USHORT"
		},
		"USMYUARTRCVARBITRATIONERROR": {
			"NOOFBYTES": "2",
			"OFFSET": "28",
			"DATATYPE": "USHORT"
		},
		"USMYUARTRESERVED1": {
			"NOOFBYTES": "2",
			"OFFSET": "30",
			"DATATYPE": "USHORT"
		},
		"ULMYTIMERTMROUTOFBOUNDSSHORT": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYTIMERTMROUTOFBOUNDSLONG": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"ULMYTIMERTMRRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULMYNONINTERROR": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULMYNONINTRCVMSGCRCERROR": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYNONINTRCVIDLETIME": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"ULMYNONINTRESERVED4": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"ULMYNONINTRESERVED5": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		}
	},
	"IMUCARDVERSION": {
		"ACMYBUILDDATE": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ACMYBUILDTIME": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ACMYVERSION": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"AUCMYRESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "FIXEDUCHARARRAY"
		}
	},
	"BESTLEVERARM": {
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "3",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"IMYMAPPING": {
			"NOOFBYTES": "4",
			"OFFSET": "6",
			"DATATYPE": "INT"
		}
	},
	"LEVERARMCALIBRATE": {
		"EMYTRIGGER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ONOFFENUM"
		},
		"DMYMAXTIME": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYMAXOFFSETSTD": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		}
	},
	"SETINSOFFSET": {
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"SOLVEDLEVERARM": {
		"ADMYRGIB": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"ADMYRGIB_ACCURACY": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"BSLNXYZ": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYXSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYZSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "44",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "48",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "49",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "50",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "51",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "53",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "54",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "55",
			"DATATYPE": "UCHAR"
		}
	},
	"SETDIFFCODEBIASES": {
		"EMYCODEPAIR": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CODEPAIRENUM"
		},
		"AFMYBIASES": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FIXEDFLOATARRAY"
		}
	},
	"PASSAUX": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		},
		"CABO": ["4"],
		"CAAO": ["80"]
	},
	"GGAQUALITY": {
		"ACLMYMAPPINGS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSOLTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"ULMYGGAQUALITY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		}
	},
	"DEBUGETHERRSRC2": {
		"ULMYINUSEREQUESTORS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYHIGHWATERMARKREQUESTORS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYMAXREQUESTORS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYINUSERATEREQUESTS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYHIGHWATERMARKRATEREQUESTS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYMAXRATEREQUESTS": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYINUSETASKHANDLES": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYHIGHWATERMARKTASKHANDLES": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		}
	},
	"DEBUGETHERS2": {
		"SZMYETHERNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"ULMYETHERNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "1",
			"DATATYPE": "ULONG"
		},
		"ULMYETHERSIBLINGNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "ULONG"
		},
		"ULMYNUMPACKETS": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "ULONG"
		},
		"ULMYHIGHWATERPACKETS": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "ULONG"
		},
		"ULMYPACKETCAP": {
			"NOOFBYTES": "4",
			"OFFSET": "17",
			"DATATYPE": "ULONG"
		},
		"ULMYNUMREQUESTORS": {
			"NOOFBYTES": "4",
			"OFFSET": "21",
			"DATATYPE": "ULONG"
		},
		"BMYISCOMMMSGQTAKEN": {
			"NOOFBYTES": "4",
			"OFFSET": "25",
			"DATATYPE": "BOOL"
		},
		"ULMYCOMMMSGQID": {
			"NOOFBYTES": "4",
			"OFFSET": "29",
			"DATATYPE": "ULONG"
		},
		"ULMYPROVIDERTASKID": {
			"NOOFBYTES": "4",
			"OFFSET": "33",
			"DATATYPE": "ULONG"
		}
	},
	"WAAS32": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"IODP": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ALMYPRC": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FIXEDLONGARRAY"
		},
		"AULMYUDREI": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FIXEDULONGARRAY"
		}
	},
	"WAAS33": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"IODP": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ALMYPRC": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FIXEDLONGARRAY"
		},
		"AULMYUDREI": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FIXEDULONGARRAY"
		}
	},
	"WAAS34": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"IODP": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ALMYPRC": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FIXEDLONGARRAY"
		},
		"AULMYUDREI": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FIXEDULONGARRAY"
		}
	},
	"WAAS35": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"IODP": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ALMYPRC": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FIXEDLONGARRAY"
		},
		"AULMYUDREI": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FIXEDULONGARRAY"
		}
	},
	"WAAS45": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYPRNMASKNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULMYIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"LMYDX": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "LONG"
		},
		"LMYDY": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "LONG"
		},
		"LMYDZ": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "LONG"
		},
		"LMYDDX": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "LONG"
		},
		"LMYDDY": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "LONG"
		},
		"LMYDDZ": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "LONG"
		},
		"LMYDAF0": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "LONG"
		},
		"ULMYTOD": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "ULONG"
		},
		"ULMYIODP": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "ULONG"
		}
	},
	"FKP": {
		"EVALUE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FKPENUM"
		}
	},
	"FKPCORRECTIONS": {
		"ULMYFKPPRNMASK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"AMYFKPCORRECTION": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CLASSARRAY"
		},
		"DMYNONDISPERSIVEERRORL1": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYDISPERSIVEERRORL1": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["8"],
		"CAAO": ["16"]
	},
	"SETPASSCOMTO": {
		"ULMYTIMEOUTMS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"SETIONOTYPE": {
		"EMODEL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "IONOCORRTYPEENUM"
		}
	},
	"CMRPLUSIN": {
		"ULMYCMRSYNC": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYLENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATIONID": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYPAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYNUMPAGES": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"VISIONACCUMTIME": {
		"ULMYACCUMTIMEUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"VISIONBINSPACING": {
		"SIGMYCHAN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SIGCHAN"
		},
		"AUSMYENDPOINTS": {
			"NOOFBYTES": "2",
			"OFFSET": "4",
			"DATATYPE": "FIXEDUSHORTARRAY"
		}
	},
	"VISIONCOUNTERENABLE": {
		"SIGMYACCUMCHAN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SIGCHAN"
		},
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ENABLEENUM"
		},
		"SIGMYCOUNTCHAN": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SIGCHAN"
		}
	},
	"RAWVISIONDATA": {
		"SIGMYCHAN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SIGCHAN"
		},
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "PRN"
		},
		"ACLMYBINS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "CLASSARRAY"
		},
		"LMYI": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "LONG"
		},
		"LMYQ": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "LONG"
		},
		"LMYCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "LONG"
		},
		"LMYENDPOINT": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "LONG"
		},
		"CABO": ["12"],
		"CAAO": ["32"]
	},
	"CMRPLUS": {
		"ULMYCMRSYNC": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYLENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATIONID": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYPAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYNUMPAGES": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "VARIABLEUCHARARRAY"
		},
		"CABO": ["4"],
		"CAAO": ["29"]
	},
	"GLOALMANAC": {
		"ACLMYSATALMDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"UCMYSLOT": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "UCHAR"
		},
		"CMYFREQUENCY": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "CHAR"
		},
		"UCMYSATTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "UCHAR"
		},
		"UCMYHEALTH": {
			"NOOFBYTES": "1",
			"OFFSET": "15",
			"DATATYPE": "UCHAR"
		},
		"DMYTLAMBDAN": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYLAMBDAN": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAI": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYECC": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYARGPERIG": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAT": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTATD": {
			"NOOFBYTES": "8",
			"OFFSET": "64",
			"DATATYPE": "DOUBLE"
		},
		"DMYTAU": {
			"NOOFBYTES": "8",
			"OFFSET": "72",
			"DATATYPE": "DOUBLE"
		}
	},
	"GLOCLOCK": {
		"ULMYNOMINALOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYRESIDUALOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYRESIDUALOFFSETVAR": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"UCMYSATTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "UCHAR"
		},
		"UCMYN4": {
			"NOOFBYTES": "1",
			"OFFSET": "21",
			"DATATYPE": "UCHAR"
		},
		"DMYTAUGPS": {
			"NOOFBYTES": "8",
			"OFFSET": "22",
			"DATATYPE": "DOUBLE"
		},
		"USMYNA": {
			"NOOFBYTES": "2",
			"OFFSET": "30",
			"DATATYPE": "USHORT"
		},
		"DMYTAUC": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYB1": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYB2": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"UCMYKP": {
			"NOOFBYTES": "1",
			"OFFSET": "56",
			"DATATYPE": "UCHAR"
		}
	},
	"GLORAWALM": {
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ACLMYSTRINGS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "CLASSARRAY"
		},
		"AUCMYSTRING": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"UCMYRESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "23",
			"DATATYPE": "UCHAR"
		},
		"CABO": ["12"],
		"CAAO": ["12"]
	},
	"GLORAWFRAME": {
		"ULMYFRAMENUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"USMYSLOTO": {
			"NOOFBYTES": "2",
			"OFFSET": "4",
			"DATATYPE": "USHORT"
		},
		"USMYFREQO": {
			"NOOFBYTES": "2",
			"OFFSET": "6",
			"DATATYPE": "USHORT"
		},
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMEDECODERNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYSIGNALCHANNELNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ACLMYRAWSTRING": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "CLASSARRAY"
		},
		"AUCMYSTRING": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"UCMYRESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "39",
			"DATATYPE": "UCHAR"
		},
		"CABO": ["28"],
		"CAAO": ["12"]
	},
	"GLORAWSTRING": {
		"UCMYSLOT": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "UCHAR"
		},
		"CMYFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "CHAR"
		},
		"AUCMYSTRING": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"UCMYRESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "UCHAR"
		}
	},
	"GLOEPHEMERIS": {
		"USMYSLOTO": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "USHORT"
		},
		"USMYFREQO": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "USHORT"
		},
		"UCMYSATTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "UCHAR"
		},
		"UCMYFALSEIOD": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "UCHAR"
		},
		"USMYEPHEMWEEK": {
			"NOOFBYTES": "2",
			"OFFSET": "6",
			"DATATYPE": "USHORT"
		},
		"ULMYEPHEMTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYTIMEOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"USMYNT": {
			"NOOFBYTES": "2",
			"OFFSET": "16",
			"DATATYPE": "USHORT"
		},
		"UCMYRESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "19",
			"DATATYPE": "UCHAR"
		},
		"ULMYISSUE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYBROADCASTHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"DMYPOSX": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYPOSY": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYPOSZ": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYVELX": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYVELY": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYVELZ": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYLSACCX": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"DMYLSACCY": {
			"NOOFBYTES": "8",
			"OFFSET": "84",
			"DATATYPE": "DOUBLE"
		},
		"DMYLSACCZ": {
			"NOOFBYTES": "8",
			"OFFSET": "92",
			"DATATYPE": "DOUBLE"
		},
		"DMYTAU": {
			"NOOFBYTES": "8",
			"OFFSET": "100",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTATAU": {
			"NOOFBYTES": "8",
			"OFFSET": "108",
			"DATATYPE": "DOUBLE"
		},
		"DMYGAMMA": {
			"NOOFBYTES": "8",
			"OFFSET": "116",
			"DATATYPE": "DOUBLE"
		},
		"ULMYTK": {
			"NOOFBYTES": "4",
			"OFFSET": "124",
			"DATATYPE": "ULONG"
		},
		"ULMYP": {
			"NOOFBYTES": "4",
			"OFFSET": "128",
			"DATATYPE": "ULONG"
		},
		"ULMYFT": {
			"NOOFBYTES": "4",
			"OFFSET": "132",
			"DATATYPE": "ULONG"
		},
		"ULMYAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "136",
			"DATATYPE": "ULONG"
		},
		"ULMYFLAGS": {
			"NOOFBYTES": "4",
			"OFFSET": "140",
			"DATATYPE": "ULONG"
		}
	},
	"BESTUTM": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"ULMYZONENUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYZONELETTER": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"DMYNORTHING": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYEASTING": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"EMYDATUM": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "DATUMENUM"
		},
		"FMYNORTHINGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"FMYEASTINGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"ACMYSTNID": {
			"NOOFBYTES": "1",
			"OFFSET": "60",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "61",
			"DATATYPE": "FLOAT"
		},
		"FMYOLDPOSITIONTIMEDELTA": {
			"NOOFBYTES": "4",
			"OFFSET": "65",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMOBSTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "69",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMGPSL1": {
			"NOOFBYTES": "1",
			"OFFSET": "70",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMHIGHSATS": {
			"NOOFBYTES": "1",
			"OFFSET": "71",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMHIGHL2SATS": {
			"NOOFBYTES": "1",
			"OFFSET": "72",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "75",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "74",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "76",
			"DATATYPE": "UCHAR"
		}
	},
	"VISIONCALDATA": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ACLMYBINS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CLASSARRAY"
		},
		"LMYI": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "LONG"
		},
		"LMYQ": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "LONG"
		},
		"LMYCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "LONG"
		},
		"LMYENDPOINT": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "LONG"
		},
		"CABO": ["8"],
		"CAAO": ["32"]
	},
	"VISIONCALIBRATE": {
		"EMYCALENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "MMTCALENUM"
		},
		"EMYFREQ": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FREQUENCYENUM"
		},
		"SZMYREFNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "STRING"
		},
		"ULMYCALIBRATESECS": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "ULONG"
		},
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "PRN"
		},
		"LMYDOPPLER": {
			"NOOFBYTES": "4",
			"OFFSET": "17",
			"DATATYPE": "LONG"
		},
		"ULMYDOPWINDOW": {
			"NOOFBYTES": "4",
			"OFFSET": "21",
			"DATATYPE": "ULONG"
		}
	},
	"RAWLBANDFRAME": {
		"USMYSERVICEID": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "USHORT"
		},
		"USMYRESERVED": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "USHORT"
		},
		"AUCDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RAWLBANDPACKET": {
		"AUCDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"SETSYSTEMRANGEBIAS": {
		"ULEXPIRYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ESYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RANGEBIASSYSTEMENUM"
		},
		"ECODETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "RANGEBIASCODETYPEENUM"
		},
		"EFREQUENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "RANGEBIASFREQUENCYENUM"
		},
		"ACLENTRY": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"FCORRECTION": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["20"],
		"CAAO": ["8"]
	},
	"GLOECUTOFF": {
		"FMYELEVATIONCUTOFFANGLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		}
	},
	"RAWNAVMSGDATA": {
		"ULMYPICOSECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"BMYISNEGATIVE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "BOOL"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"EMYTIMESTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "GPSTIMESTATUSENUM"
		},
		"ULMYNUMRAWBITS": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"AUCMYRAWBITS": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"AUCMYBADPOWERBITINDEX": {
			"NOOFBYTES": "1",
			"OFFSET": "25",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"ULMYSIGNALCHANNELNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "26",
			"DATATYPE": "ULONG"
		},
		"ULMYBITPERIODUS": {
			"NOOFBYTES": "4",
			"OFFSET": "30",
			"DATATYPE": "ULONG"
		},
		"AUCMYPHASELOCKED": {
			"NOOFBYTES": "1",
			"OFFSET": "34",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"SETDATE": {
		"ULMYYEAR": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYMONTH": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYDAY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		}
	},
	"UTMZONE": {
		"EMYUTMZONECOMMAND": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "UTMZONECOMMANDENUM"
		},
		"LMYPARAM": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "LONG"
		}
	},
	"DBGLOGFILE": {
		"ACTION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PDC_DBGFILEACTIONENUM"
		},
		"REPORTINGLEVEL1": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "PDC_REPORTINGLEVELENUM"
		},
		"REPORTINGLEVEL2": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "PDC_REPORTINGLEVELENUM"
		},
		"REPORTINGLEVEL3": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "PDC_REPORTINGLEVELENUM"
		},
		"REPORTINGLEVEL4": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "PDC_REPORTINGLEVELENUM"
		},
		"REPORTINGLEVEL5": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "PDC_REPORTINGLEVELENUM"
		},
		"REPORTINGLEVEL6": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "PDC_REPORTINGLEVELENUM"
		}
	},
	"GROUPCOMVOUT": {
		"EMYPARAMUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"ACMYGROUPNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "COMMPORTENUM"
		},
		"EMYCOMVOUTACTION": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "PDC_COMVOUTACTIONENUM"
		},
		"ULMYRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "ULONG"
		}
	},
	"GROUPCOMCONFIG": {
		"ACMYGROUPNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ACLMYCOMCONFIGS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "COMMPORTENUM"
		},
		"ULMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "HEXULONG"
		},
		"ULMYBAUD": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"EMYPARITY": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "OEM4_PARITYENUM"
		},
		"ULMYDATABITS": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYSTOPBITS": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"EMYHANDSHAKE": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "HANDSHAKEENUM"
		},
		"EMYECHO": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ONOFFENUM"
		},
		"EMYBREAKS": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ONOFFENUM"
		},
		"EMYRXTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "INTERFACEMODEENUM"
		},
		"EMYTXTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "INTERFACEMODEENUM"
		},
		"EMYRESPONSES": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ONOFFENUM"
		},
		"EMYCOMVOUTACTION": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "PDC_COMVOUTACTIONENUM"
		},
		"ULMYRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "ULONG"
		},
		"CABO": ["16"],
		"CAAO": ["56"]
	},
	"GROUPCOM": {
		"EMYPARAMUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PARAMUPDATEENUM"
		},
		"ACMYGROUPNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "COMMPORTENUM"
		},
		"ULMYBAUD": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "ULONG"
		},
		"EMYPARITY": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "OEM4_PARITYENUM"
		},
		"ULMYDATABITS": {
			"NOOFBYTES": "4",
			"OFFSET": "17",
			"DATATYPE": "ULONG"
		},
		"ULMYSTOPBITS": {
			"NOOFBYTES": "4",
			"OFFSET": "21",
			"DATATYPE": "ULONG"
		},
		"EMYHANDSHAKE": {
			"NOOFBYTES": "4",
			"OFFSET": "25",
			"DATATYPE": "HANDSHAKEENUM"
		},
		"EMYECHO": {
			"NOOFBYTES": "4",
			"OFFSET": "29",
			"DATATYPE": "ONOFFENUM"
		},
		"EMYBREAKS": {
			"NOOFBYTES": "4",
			"OFFSET": "33",
			"DATATYPE": "ONOFFENUM"
		}
	},
	"INSUTM": {
		"ULWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"ULMYZONENUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYZONELETTER": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"DMYNORTHING": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYEASTING": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"ESTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "INSSTATUSENUM"
		}
	},
	"INSUPDATE": {
		"EMYPOSTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLTYPEENUM"
		},
		"IMYNUMPSR": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "INT"
		},
		"IMYNUMPHASE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "INT"
		},
		"IMYNUMDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "INT"
		},
		"BMYZUPTEPOCH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "BOOL"
		},
		"EMYWHEELSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "WHEELSTATUSENUM"
		},
		"EMYHEADINGUPDATESTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "HEADINGUPDATESTATUSENUM"
		}
	},
	"INSRB": {
		"DMYRB": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYRBR": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYRBSTD": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYRBRSTD": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"BMYCONSTCHG": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "BOOL"
		},
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "SOLSTATUSENUM"
		}
	},
	"VISIONREFFUNC": {
		"SZMYREFNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ULMYREFSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "1",
			"DATATYPE": "HEXULONG"
		},
		"ACLMYREFPOINTS": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "CLASSARRAY"
		},
		"FMYI": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "FLOAT"
		},
		"FMYQ": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["4"],
		"CAAO": ["8"]
	},
	"VISIONSOL": {
		"CLMYMMTSOLVEDPARAMS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"USMYCHANNEL": {
			"NOOFBYTES": "2",
			"OFFSET": "4",
			"DATATYPE": "USHORT"
		},
		"USMYPRN": {
			"NOOFBYTES": "2",
			"OFFSET": "6",
			"DATATYPE": "USHORT"
		},
		"BMYHAVEMP": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "BOOL"
		},
		"FMYTAU1": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYPHI1": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYAMP1": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"FMYTAU2": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"FMYPHI2": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"FMYAMP2": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYLKF": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		}
	},
	"FIXPOSDATUM": {
		"EMYPOSDATUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "DATUMENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		}
	},
	"SETVERSIONINFO": {
		"ECOMPONENTTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMPONENTENUM"
		},
		"SZMODELNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZPSN": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZHARDWAREVERSION": {
			"NOOFBYTES": "1",
			"OFFSET": "21",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZSOFTWAREVERSION": {
			"NOOFBYTES": "1",
			"OFFSET": "22",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZBOOTVERSION": {
			"NOOFBYTES": "1",
			"OFFSET": "23",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZCOMPILEDATE": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZCOMPILETIME": {
			"NOOFBYTES": "1",
			"OFFSET": "25",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"MOVINGBASESTATION": {
		"MOVINGBASESTATIONENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"RTCM1005IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"ITRFREALIZATIONYEAR": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"GPSINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLONASSINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GALILEOINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "7",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"REFERENCESTATIONINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"ECEFX": {
			"NOOFBYTES": "8",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_INT38"
		},
		"SINGLERECEIVEROSCINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"ECEFY": {
			"NOOFBYTES": "8",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_INT38"
		},
		"QUARTERCYCLEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"ECEFZ": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_INT38"
		}
	},
	"RTCM1005": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"ITRFREALIZATIONYEAR": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"GPSINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLONASSINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GALILEOINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "7",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"REFERENCESTATIONINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"ECEFX": {
			"NOOFBYTES": "8",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_INT38"
		},
		"SINGLERECEIVEROSCINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"ECEFY": {
			"NOOFBYTES": "8",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_INT38"
		},
		"QUARTERCYCLEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"ECEFZ": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_INT38"
		}
	},
	"RTCM1006IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"ITRFREALIZATIONYEAR": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"GPSINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLONASSINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GALILEOINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "7",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"REFERENCESTATIONINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"ECEFX": {
			"NOOFBYTES": "8",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_INT38"
		},
		"SINGLERECEIVEROSCINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"ECEFY": {
			"NOOFBYTES": "8",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_INT38"
		},
		"QUARTERCYCLEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"ECEFZ": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_INT38"
		},
		"ANTENNAHEIGHT": {
			"NOOFBYTES": "2",
			"OFFSET": "36",
			"DATATYPE": "RTCMV3_UINT16"
		}
	},
	"RTCM1006": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"ITRFREALIZATIONYEAR": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"GPSINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLONASSINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GALILEOINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "7",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"REFERENCESTATIONINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"ECEFX": {
			"NOOFBYTES": "8",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_INT38"
		},
		"SINGLERECEIVEROSCINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"ECEFY": {
			"NOOFBYTES": "8",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_INT38"
		},
		"QUARTERCYCLEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"ECEFZ": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_INT38"
		},
		"ANTENNAHEIGHT": {
			"NOOFBYTES": "2",
			"OFFSET": "36",
			"DATATYPE": "RTCMV3_UINT16"
		}
	},
	"RTCM1004IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT30"
		},
		"GNSSMESSAGEFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"NUMSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"SMOOTHINGINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"SMOOTHINGINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"L1CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"L1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT24"
		},
		"L1PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L1LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "26",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"INTEGERL1PSRMODULUSAMB": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"L1CNR": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"L2CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "29",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"L1L2PSRDIFF": {
			"NOOFBYTES": "2",
			"OFFSET": "30",
			"DATATYPE": "RTCMV3_INT14"
		},
		"L2PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L2LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "36",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"L2CNR": {
			"NOOFBYTES": "1",
			"OFFSET": "37",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"CABO": ["16"],
		"CAAO": ["22"]
	},
	"RTCM1004": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT30"
		},
		"GNSSMESSAGEFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"NUMSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"SMOOTHINGINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"SMOOTHINGINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"L1CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"L1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT24"
		},
		"L1PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L1LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "26",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"INTEGERL1PSRMODULUSAMB": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"L1CNR": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"L2CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "29",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"L1L2PSRDIFF": {
			"NOOFBYTES": "2",
			"OFFSET": "30",
			"DATATYPE": "RTCMV3_INT14"
		},
		"L2PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L2LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "36",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"L2CNR": {
			"NOOFBYTES": "1",
			"OFFSET": "37",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"CABO": ["16"],
		"CAAO": ["22"]
	},
	"RTCM1001IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT30"
		},
		"GNSSMESSAGEFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"NUMSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"SMOOTHINGINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"SMOOTHINGINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"L1CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"L1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT24"
		},
		"L1PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L1LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "26",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"CABO": ["16"],
		"CAAO": ["11"]
	},
	"RTCM1001": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT30"
		},
		"GNSSMESSAGEFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"NUMSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"SMOOTHINGINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"SMOOTHINGINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"L1CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"L1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT24"
		},
		"L1PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L1LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "26",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"CABO": ["16"],
		"CAAO": ["11"]
	},
	"RTCM1002IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT30"
		},
		"GNSSMESSAGEFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"NUMSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"SMOOTHINGINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"SMOOTHINGINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"L1CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"L1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT24"
		},
		"L1PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L1LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "26",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"INTEGERL1PSRMODULUSAMB": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"L1CNR": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"CABO": ["16"],
		"CAAO": ["13"]
	},
	"RTCM1002": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT30"
		},
		"GNSSMESSAGEFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"NUMSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"SMOOTHINGINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"SMOOTHINGINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"L1CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"L1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT24"
		},
		"L1PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L1LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "26",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"INTEGERL1PSRMODULUSAMB": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"L1CNR": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"CABO": ["16"],
		"CAAO": ["13"]
	},
	"RTCM1003IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT30"
		},
		"GNSSMESSAGEFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"NUMSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"SMOOTHINGINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"SMOOTHINGINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"L1CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"L1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT24"
		},
		"L1PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L1LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "26",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"L2CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"L1L2PSRDIFF": {
			"NOOFBYTES": "2",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_INT14"
		},
		"L2PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "30",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L2LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "34",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"CABO": ["16"],
		"CAAO": ["19"]
	},
	"RTCM1003": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT30"
		},
		"GNSSMESSAGEFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"NUMSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"SMOOTHINGINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"SMOOTHINGINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"L1CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"L1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT24"
		},
		"L1PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L1LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "26",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"L2CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"L1L2PSRDIFF": {
			"NOOFBYTES": "2",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_INT14"
		},
		"L2PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "30",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L2LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "34",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"CABO": ["16"],
		"CAAO": ["19"]
	},
	"AUDIOCFG": {
		"EAUDIOACTION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "AUDIOACTIONENUM"
		},
		"EAUDIOEVENT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "AUDIOEVENTENUM"
		},
		"ULVOLUME": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULPITCH": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"USFILESETINDEX": {
			"NOOFBYTES": "2",
			"OFFSET": "16",
			"DATATYPE": "USHORT"
		}
	},
	"SETMSG": {
		"MESSAGENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"MESSAGEID": {
			"NOOFBYTES": "4",
			"OFFSET": "1",
			"DATATYPE": "UINT"
		},
		"MESSAGEPARAMS": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "CLASSARRAY"
		},
		"DATATYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "STRING"
		},
		"CONVERTSTRING": {
			"NOOFBYTES": "1",
			"OFFSET": "42",
			"DATATYPE": "STRING"
		},
		"ARRAYSIZE": {
			"NOOFBYTES": "4",
			"OFFSET": "43",
			"DATATYPE": "UINT"
		},
		"MINVALUE": {
			"NOOFBYTES": "4",
			"OFFSET": "47",
			"DATATYPE": "LONG"
		},
		"MAXVALUE": {
			"NOOFBYTES": "4",
			"OFFSET": "51",
			"DATATYPE": "LONG"
		},
		"CABO": ["9"],
		"CAAO": ["46"]
	},
	"COMVOUT": {
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		},
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ONOFFENUM"
		}
	},
	"APPCONTROL": {
		"EMYAPPCONTROLENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "APPCONTROLENUM"
		},
		"LMYAPPCONTROLPARAM1": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "LONG"
		},
		"ULMYAPPCONTROLPARAM2": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYAPPCONTROLPARAM3": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYAPPCONTROLPARAM4": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		}
	},
	"USEREXPDATUM": {
		"DMYSEMIMAJORAXIS": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYINVERSEFLATTENING": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "96",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "104",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "112",
			"DATATYPE": "DOUBLE"
		},
		"DMYSCALE": {
			"NOOFBYTES": "8",
			"OFFSET": "64",
			"DATATYPE": "DOUBLE"
		},
		"DMYSCALERATE": {
			"NOOFBYTES": "8",
			"OFFSET": "120",
			"DATATYPE": "DOUBLE"
		},
		"DMYREFERENCEDATE": {
			"NOOFBYTES": "8",
			"OFFSET": "128",
			"DATATYPE": "DOUBLE"
		}
	},
	"RTCMDATA1001": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT30"
		},
		"GNSSMESSAGEFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"NUMSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"SMOOTHINGINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"SMOOTHINGINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"L1CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"L1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT24"
		},
		"L1PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L1LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "26",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"CABO": ["16"],
		"CAAO": ["11"]
	},
	"RTCMDATA1002": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT30"
		},
		"GNSSMESSAGEFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"NUMSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"SMOOTHINGINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"SMOOTHINGINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"L1CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"L1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT24"
		},
		"L1PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L1LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "26",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"INTEGERL1PSRMODULUSAMB": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"L1CNR": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"CABO": ["16"],
		"CAAO": ["13"]
	},
	"RTCMDATA1003": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT30"
		},
		"GNSSMESSAGEFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"NUMSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"SMOOTHINGINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"SMOOTHINGINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"L1CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"L1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT24"
		},
		"L1PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L1LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "26",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"L2CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"L1L2PSRDIFF": {
			"NOOFBYTES": "2",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_INT14"
		},
		"L2PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "30",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L2LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "34",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"CABO": ["16"],
		"CAAO": ["19"]
	},
	"RTCMDATA1004": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT30"
		},
		"GNSSMESSAGEFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"NUMSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"SMOOTHINGINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"SMOOTHINGINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"L1CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"L1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT24"
		},
		"L1PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L1LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "26",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"INTEGERL1PSRMODULUSAMB": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"L1CNR": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"L2CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "29",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"L1L2PSRDIFF": {
			"NOOFBYTES": "2",
			"OFFSET": "30",
			"DATATYPE": "RTCMV3_INT14"
		},
		"L2PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L2LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "36",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"L2CNR": {
			"NOOFBYTES": "1",
			"OFFSET": "37",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"CABO": ["16"],
		"CAAO": ["22"]
	},
	"RTCMDATA1005": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"ITRFREALIZATIONYEAR": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"GPSINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLONASSINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GALILEOINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "7",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"REFERENCESTATIONINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"ECEFX": {
			"NOOFBYTES": "8",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_INT38"
		},
		"SINGLERECEIVEROSCINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"ECEFY": {
			"NOOFBYTES": "8",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_INT38"
		},
		"QUARTERCYCLEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"ECEFZ": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_INT38"
		}
	},
	"RTCMDATA1006": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"ITRFREALIZATIONYEAR": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"GPSINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLONASSINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GALILEOINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "7",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"REFERENCESTATIONINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"ECEFX": {
			"NOOFBYTES": "8",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_INT38"
		},
		"SINGLERECEIVEROSCINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"ECEFY": {
			"NOOFBYTES": "8",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_INT38"
		},
		"QUARTERCYCLEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"ECEFZ": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_INT38"
		},
		"ANTENNAHEIGHT": {
			"NOOFBYTES": "2",
			"OFFSET": "36",
			"DATATYPE": "RTCMV3_UINT16"
		}
	},
	"SETCORRTYPE": {
		"EMYSIGNAL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SIGNALTYPEENUM"
		},
		"EMYCHANCORRTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CORRELATORTYPEENUM"
		}
	},
	"GLORAWEPHEM": {
		"USMYSLOTO": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "USHORT"
		},
		"USMYFREQO": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "USHORT"
		},
		"ULMYSIGNALCHANNELNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ACLGLORAWEPHEM": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "CLASSARRAY"
		},
		"AUCMYSTRING": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"UCMYRESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "31",
			"DATATYPE": "UCHAR"
		},
		"CABO": ["20"],
		"CAAO": ["12"]
	},
	"AUDIOCFGINDEX": {
		"UCMYINDEX": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "UCHAR"
		}
	},
	"PRXSTATUS": {
		"AULMYTEMPERATURE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FIXEDULONGARRAY"
		},
		"AULMYFILLER": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FIXEDULONGARRAY"
		}
	},
	"PASSXCOM3": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"FORCEGPSL2CODE": {
		"EMYCODETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "L2CODETYPEENUM"
		}
	},
	"AUDIOCFGDEF": {
		"ACMYAUDIOBLOCK": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"USMYAUDIOINDEX": {
			"NOOFBYTES": "2",
			"OFFSET": "8",
			"DATATYPE": "USHORT"
		},
		"USMYRESERVED": {
			"NOOFBYTES": "2",
			"OFFSET": "10",
			"DATATYPE": "USHORT"
		},
		"ULMYNUMEVENTS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"EAUDIOEVENT": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "AUDIOEVENTENUM"
		},
		"ULMYVOLUME": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"CABO": ["16"],
		"CAAO": ["8"]
	},
	"EXTLEVELS": {
		"FMYGPSTEMPERATURE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		},
		"FMYANTENNACURRENT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"FMYCOREVOLTAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYSUPPLYVOLTAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYRFVOLTAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYINTLNAVOLTAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"FMYLNAVOLTAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"ULMYBATTLIFE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"FMYBATTVOLT": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYBATTTEMP": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"ULMYDISKSPACE": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"FMYRESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"FMYRESERVED3": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "FLOAT"
		},
		"FMYRESERVED4": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYRESERVED5": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		}
	},
	"PWRSTATUS": {
		"ULMYPORTPOWERSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "HEXULONG"
		},
		"ULMYRXSTATUSWORD2": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "HEXULONG"
		},
		"ULMYRXSTATUSWORD3": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "HEXULONG"
		},
		"FMYBATTVOLT": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYCHARGEVOLT": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYEXTVOLT": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"ULMYBATTLIFE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYCHARGETIME": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYRELATIVESOC": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYABSOLUTESOC": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"ULMYRESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULMYRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULMYRESERVED3": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		}
	},
	"RTCAOBS2": {
		"NOVATELDESIGNATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "UCHAR"
		},
		"SUBTYPEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "UCHAR"
		},
		"RECEIVERTIMEBIAS": {
			"NOOFBYTES": "8",
			"OFFSET": "2",
			"DATATYPE": "DOUBLE"
		},
		"SECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "10",
			"DATATYPE": "FLOAT"
		},
		"GLOCALIBRATIONQUAL": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "UCHAR"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "43",
			"DATATYPE": "UCHAR"
		},
		"TRANSMITTER2DATA": {
			"NOOFBYTES": "4",
			"OFFSET": "19",
			"DATATYPE": "CLASSARRAY"
		},
		"TRANSMITTERID": {
			"NOOFBYTES": "1",
			"OFFSET": "23",
			"DATATYPE": "UCHAR"
		},
		"L1LOCKTIME": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "UCHAR"
		},
		"L1PSROFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "25",
			"DATATYPE": "DOUBLE"
		},
		"L1ADROFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "33",
			"DATATYPE": "DOUBLE"
		},
		"FREQAVAIL": {
			"NOOFBYTES": "1",
			"OFFSET": "41",
			"DATATYPE": "UCHAR"
		},
		"CODETYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "42",
			"DATATYPE": "UCHAR"
		},
		"L2LOCKTIME": {
			"NOOFBYTES": "1",
			"OFFSET": "44",
			"DATATYPE": "UCHAR"
		},
		"L2PSROFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "45",
			"DATATYPE": "DOUBLE"
		},
		"L2ADROFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "53",
			"DATATYPE": "DOUBLE"
		},
		"CODETYPE2": {
			"NOOFBYTES": "1",
			"OFFSET": "61",
			"DATATYPE": "UCHAR"
		},
		"RESERVED2": {
			"NOOFBYTES": "1",
			"OFFSET": "62",
			"DATATYPE": "UCHAR"
		},
		"CABO": ["23"],
		"CAAO": ["40"]
	},
	"RTCAOBS2IN": {
		"ULMESSAGEIDENTIFIER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFSTATION": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMESSAGETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMESSAGELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"NOVATELDESIGNATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "UCHAR"
		},
		"SUBTYPEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "21",
			"DATATYPE": "UCHAR"
		},
		"RECEIVERTIMEBIAS": {
			"NOOFBYTES": "8",
			"OFFSET": "22",
			"DATATYPE": "DOUBLE"
		},
		"SECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "30",
			"DATATYPE": "FLOAT"
		},
		"GLOCALIBRATIONQUAL": {
			"NOOFBYTES": "1",
			"OFFSET": "34",
			"DATATYPE": "UCHAR"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "63",
			"DATATYPE": "UCHAR"
		},
		"TRANSMITTER2DATA": {
			"NOOFBYTES": "4",
			"OFFSET": "39",
			"DATATYPE": "CLASSARRAY"
		},
		"TRANSMITTERID": {
			"NOOFBYTES": "1",
			"OFFSET": "43",
			"DATATYPE": "UCHAR"
		},
		"L1LOCKTIME": {
			"NOOFBYTES": "1",
			"OFFSET": "44",
			"DATATYPE": "UCHAR"
		},
		"L1PSROFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "45",
			"DATATYPE": "DOUBLE"
		},
		"L1ADROFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "53",
			"DATATYPE": "DOUBLE"
		},
		"FREQAVAIL": {
			"NOOFBYTES": "1",
			"OFFSET": "61",
			"DATATYPE": "UCHAR"
		},
		"CODETYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "62",
			"DATATYPE": "UCHAR"
		},
		"L2LOCKTIME": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "UCHAR"
		},
		"L2PSROFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "65",
			"DATATYPE": "DOUBLE"
		},
		"L2ADROFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "73",
			"DATATYPE": "DOUBLE"
		},
		"CODETYPE2": {
			"NOOFBYTES": "1",
			"OFFSET": "81",
			"DATATYPE": "UCHAR"
		},
		"RESERVED2": {
			"NOOFBYTES": "1",
			"OFFSET": "82",
			"DATATYPE": "UCHAR"
		},
		"CABO": ["43"],
		"CAAO": ["40"]
	},
	"RTCA2IN": {
		"ULMESSAGEIDENTIFIER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFSTATION": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMESSAGETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMESSAGELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"MODIFIEDZCOUNT": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"AEB": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ACCELERATIONERRORBOUND"
		},
		"CORRECTIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "36",
			"DATATYPE": "UCHAR"
		},
		"PSEUDORANGECORRECTION": {
			"NOOFBYTES": "8",
			"OFFSET": "37",
			"DATATYPE": "DOUBLE"
		},
		"ISSUEOFDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "45",
			"DATATYPE": "UCHAR"
		},
		"RANGERATECORRECTION": {
			"NOOFBYTES": "8",
			"OFFSET": "46",
			"DATATYPE": "DOUBLE"
		},
		"UDRE": {
			"NOOFBYTES": "4",
			"OFFSET": "54",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["36"],
		"CAAO": ["22"]
	},
	"RTCADATA2OBS": {
		"NOVATELDESIGNATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "UCHAR"
		},
		"SUBTYPEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "UCHAR"
		},
		"RECEIVERTIMEBIAS": {
			"NOOFBYTES": "8",
			"OFFSET": "2",
			"DATATYPE": "DOUBLE"
		},
		"SECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "10",
			"DATATYPE": "FLOAT"
		},
		"GLOCALIBRATIONQUAL": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "UCHAR"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "43",
			"DATATYPE": "UCHAR"
		},
		"TRANSMITTER2DATA": {
			"NOOFBYTES": "4",
			"OFFSET": "19",
			"DATATYPE": "CLASSARRAY"
		},
		"TRANSMITTERID": {
			"NOOFBYTES": "1",
			"OFFSET": "23",
			"DATATYPE": "UCHAR"
		},
		"L1LOCKTIME": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "UCHAR"
		},
		"L1PSROFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "25",
			"DATATYPE": "DOUBLE"
		},
		"L1ADROFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "33",
			"DATATYPE": "DOUBLE"
		},
		"FREQAVAIL": {
			"NOOFBYTES": "1",
			"OFFSET": "41",
			"DATATYPE": "UCHAR"
		},
		"CODETYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "42",
			"DATATYPE": "UCHAR"
		},
		"L2LOCKTIME": {
			"NOOFBYTES": "1",
			"OFFSET": "44",
			"DATATYPE": "UCHAR"
		},
		"L2PSROFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "45",
			"DATATYPE": "DOUBLE"
		},
		"L2ADROFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "53",
			"DATATYPE": "DOUBLE"
		},
		"CODETYPE2": {
			"NOOFBYTES": "1",
			"OFFSET": "61",
			"DATATYPE": "UCHAR"
		},
		"RESERVED2": {
			"NOOFBYTES": "1",
			"OFFSET": "62",
			"DATATYPE": "UCHAR"
		},
		"CABO": ["23"],
		"CAAO": ["40"]
	},
	"VISION": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "MMTENABLEENUM"
		},
		"SZMYANTENNANAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		}
	},
	"CORRIMUDATA": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"ADMYCORR_WB_IB": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"ADMYCORR_FB": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"CORRIMUDATAS": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"ADMYCORR_WB_IB": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"ADMYCORR_FB": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"CABO": ["4"],
		"CAAO": ["28"]
	},
	"VISIONREFLIST": {
		"ACLMYREFLIST": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"SZMYREFNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		},
		"ULMYRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		}
	},
	"SETRTCMFKP": {
		"EMYFKPFORMAT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RTCMFKPTYPEENUM"
		}
	},
	"CMRSTATIONINFO": {
		"UCMYANTENNANUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "UCHAR"
		},
		"UCMYPOSCOORDACCURACY": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "UCHAR"
		},
		"SZMYSHORTSTATIONID": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZMYCOGOCODE": {
			"NOOFBYTES": "1",
			"OFFSET": "3",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZMYLONGSTATIONID": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"SETANTOFFSETS": {
		"DMYANTENNAHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYEASTOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYNORTHOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYUPOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		}
	},
	"SETATXTYPE": {
		"ULMYKEY1": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYKEY2": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"UCMYANTENNATYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "UCHAR"
		},
		"USMYANTENNAPROFILE": {
			"NOOFBYTES": "2",
			"OFFSET": "9",
			"DATATYPE": "USHORT"
		}
	},
	"NVMCLEAR": {
		"EMYNVMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "NVM_DATATYPEENUM"
		}
	},
	"GLOCSMOOTH": {
		"ULMYL1TIMECONSTANT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYL2TIMECONSTANT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"GLOLOOPSBANDWIDTH": {
		"FMYL1BANDWIDTH": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		},
		"FMYL2BANDWIDTH": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		}
	},
	"RAWLBANDPREVITERBI": {
		"AUCDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1014": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"SUBNETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "3",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"NUMAUXSTATIONSTRANSMITTED": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"MASTERREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"AUXREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "7",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"AUXMASTERDELTALAT": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_INT20"
		},
		"AUXMASTERDELTALON": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "RTCMV3_INT21"
		},
		"AUXMASTERDELTAHEIGHT": {
			"NOOFBYTES": "4",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_INT23"
		}
	},
	"RTCM1014IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"SUBNETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "3",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"NUMAUXSTATIONSTRANSMITTED": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"MASTERREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"AUXREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "7",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"AUXMASTERDELTALAT": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_INT20"
		},
		"AUXMASTERDELTALON": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "RTCMV3_INT21"
		},
		"AUXMASTERDELTAHEIGHT": {
			"NOOFBYTES": "4",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_INT23"
		}
	},
	"SETBESTPOSCRITERIA": {
		"EMYSELECTIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SETBESTPOSCRITERIAENUM"
		},
		"ULMYNUMEPOCHS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"BITSYNTHPWR": {
		"ULMYPOWERLEVEL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"ANTENNAMODEL": {
		"ARANTENNANAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"ARSERIALNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "32",
			"DATATYPE": "STRING"
		},
		"ULSETUPID": {
			"NOOFBYTES": "4",
			"OFFSET": "33",
			"DATATYPE": "ULONG"
		},
		"EANTENNATYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "37",
			"DATATYPE": "ANTENNAMODELENUM"
		},
		"ARL1OFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "41",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"ARL1PCV": {
			"NOOFBYTES": "8",
			"OFFSET": "49",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"ARL2OFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "57",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"ARL2PCV": {
			"NOOFBYTES": "8",
			"OFFSET": "65",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"EXTRXHWLEVELS": {
		"FMYSYSTEMVOLTAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		},
		"FMYMINOSVOLTAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"FMYRF2VOLTAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYRF3VOLTAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYCURRENTSENSE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYEXTRESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"FMYEXTRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"FMYEXTRESERVED3": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"FMYEXTRESERVED4": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYEXTRESERVED5": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		}
	},
	"RTKQUALITYLEVEL": {
		"EMYRTKQUALITYLEVEL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RTKQUALITYENUM"
		}
	},
	"RTKENGINESOURCE": {
		"EMYRTKENGINE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RTKENGINEENUM"
		}
	},
	"SETWHEELPARAMETERS": {
		"USMYTICKSPERREV": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "USHORT"
		},
		"DMYWHEELCIRCUMFERENCE": {
			"NOOFBYTES": "8",
			"OFFSET": "2",
			"DATATYPE": "DOUBLE"
		},
		"DMYWHEELRESOLUTION": {
			"NOOFBYTES": "8",
			"OFFSET": "10",
			"DATATYPE": "DOUBLE"
		}
	},
	"CNOUPDATE": {
		"ECNOUPDATERATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CNOUPDATERATEENUM"
		}
	},
	"CDGPSTIMEOUT": {
		"ETIMEOUTENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "TIMEOUTENUM"
		},
		"DTIMEOUT": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DRESERVED": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		}
	},
	"WAASTIMEOUT": {
		"EMYTIMEOUTENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "TIMEOUTENUM"
		},
		"DMYTIMEOUT": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DRESERVED": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		}
	},
	"RTCM1007": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"DESCRIPTORCOUNTER": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"ANTENNADESCRIPTOR": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		},
		"ANTENNASETUPID": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "RTCMV3_UINT8"
		}
	},
	"RTCM1007IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"DESCRIPTORCOUNTER": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"ANTENNADESCRIPTOR": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		},
		"ANTENNASETUPID": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "RTCMV3_UINT8"
		}
	},
	"RTCM1008": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"DESCRIPTORCOUNTER": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"ANTENNADESCRIPTOR": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		},
		"ANTENNASETUPID": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"SERIALNUMBERCOUNTER": {
			"NOOFBYTES": "1",
			"OFFSET": "7",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"ANTENNASERIALNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		}
	},
	"RTCM1008IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"DESCRIPTORCOUNTER": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"ANTENNADESCRIPTOR": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		},
		"ANTENNASETUPID": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"SERIALNUMBERCOUNTER": {
			"NOOFBYTES": "1",
			"OFFSET": "7",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"ANTENNASERIALNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		}
	},
	"RTCMDATA1007": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"ANTENNADESCRIPTOR": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		},
		"ANTENNASETUPID": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_UINT8"
		}
	},
	"RTCMDATA1008": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"ANTENNADESCRIPTOR": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		},
		"ANTENNASETUPID": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"ANTENNASERIALNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		}
	},
	"RTKANTENNA": {
		"EPOSITIONREFERENCEENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "POSITIONREFERENCEENUM"
		},
		"EPCVMODELENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "PCVMODELINGENUM"
		},
		"BRESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "BOOL"
		},
		"BRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "BOOL"
		}
	},
	"GLMLA": {
		"ULMYNA": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYTAUC": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"ACLMYSATALMDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"UCMYSLOT": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "UCHAR"
		},
		"UCMYHEALTH": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "UCHAR"
		},
		"CMYFREQUENCY": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "CHAR"
		},
		"DMYECC": {
			"NOOFBYTES": "8",
			"OFFSET": "19",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTATD": {
			"NOOFBYTES": "8",
			"OFFSET": "27",
			"DATATYPE": "DOUBLE"
		},
		"DMYARGPERIG": {
			"NOOFBYTES": "8",
			"OFFSET": "35",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAT": {
			"NOOFBYTES": "8",
			"OFFSET": "43",
			"DATATYPE": "DOUBLE"
		},
		"DMYTLAMBDAN": {
			"NOOFBYTES": "8",
			"OFFSET": "51",
			"DATATYPE": "DOUBLE"
		},
		"DMYLAMBDAN": {
			"NOOFBYTES": "8",
			"OFFSET": "59",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAI": {
			"NOOFBYTES": "8",
			"OFFSET": "67",
			"DATATYPE": "DOUBLE"
		},
		"DMYTAU": {
			"NOOFBYTES": "8",
			"OFFSET": "75",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["16"],
		"CAAO": ["67"]
	},
	"NMEATALKER": {
		"ETALKERID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "NMEATALKERIDENUM"
		}
	},
	"SETINITATTITUDE": {
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"FMYPITCHSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"FMYROLLSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"FMYAZIMUTHSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		}
	},
	"SETINITAZIMUTH": {
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"FMYAZIMUTHSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		}
	},
	"RTCM31": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ACLMYDIFFDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSCALE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYUDRE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYSVPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"IMYCOR": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "INT"
		},
		"IMYCORRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "INT"
		},
		"ULMYCHANGEBIT": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYTK": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["28"]
	},
	"RTCM31IN": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ACLMYDIFFDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSCALE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYUDRE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYSVPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"IMYCOR": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "INT"
		},
		"IMYCORRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "INT"
		},
		"ULMYCHANGEBIT": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYTK": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["28"]
	},
	"RTCM34": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ACLMYDIFFDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSCALE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYUDRE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYSVPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"IMYCOR": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "INT"
		},
		"IMYCORRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "INT"
		},
		"ULMYCHANGEBIT": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYTK": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["28"]
	},
	"RTCM34IN": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ACLMYDIFFDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSCALE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYUDRE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYSVPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"IMYCOR": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "INT"
		},
		"IMYCORRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "INT"
		},
		"ULMYCHANGEBIT": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYTK": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["28"]
	},
	"RTCMDATA31": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ACLMYDIFFDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSCALE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYUDRE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYSVPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"IMYCOR": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "INT"
		},
		"IMYCORRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "INT"
		},
		"ULMYCHANGEBIT": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYTK": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["28"]
	},
	"RTCMDATA34": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ACLMYDIFFDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSCALE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYUDRE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYSVPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"IMYCOR": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "INT"
		},
		"IMYCORRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "INT"
		},
		"ULMYCHANGEBIT": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYTK": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["28"]
	},
	"BASEANTENNAMODEL": {
		"ARANTENNANAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"ARSERIALNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "32",
			"DATATYPE": "STRING"
		},
		"ULSETUPID": {
			"NOOFBYTES": "4",
			"OFFSET": "33",
			"DATATYPE": "ULONG"
		},
		"EANTENNATYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "37",
			"DATATYPE": "ANTENNAMODELENUM"
		},
		"ARL1OFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "41",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"ARL1PCV": {
			"NOOFBYTES": "8",
			"OFFSET": "49",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"ARL2OFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "57",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"ARL2PCV": {
			"NOOFBYTES": "8",
			"OFFSET": "65",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"LOCKOUTSYSTEM": {
		"EMYSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SYSTEMTYPEENUM"
		}
	},
	"RTCM32": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_X": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYECEF_Y": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYECEF_Z": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		}
	},
	"RTCM32IN": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_X": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYECEF_Y": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYECEF_Z": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		}
	},
	"RTCM36": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"AUCMYRTCM36TEXT": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM36IN": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"AUCMYRTCM36TEXT": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM36T": {
		"AUCMYTEXT": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDUCHARARRAY"
		}
	},
	"RTCMDATA32": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"DMYECEF_X": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYECEF_Y": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYECEF_Z": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		}
	},
	"RTCMDATA36": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"AUCMYRTCM36TEXT": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"SETRTCM36": {
		"AUCMYTEXT": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDUCHARARRAY"
		}
	},
	"PSRTIME": {
		"ACLMYSYSTEMOFFSETS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "TIMINGSYSTEMENUM"
		},
		"DMYBIAS": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYBIASSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["4"],
		"CAAO": ["20"]
	},
	"CMRGLOOBS": {
		"ULMYCMRSYNC": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYLENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYVERSION": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATIONID": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMESSAGETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYNUMBEROFSV": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYEPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYCLOCKBIASVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"LMYCLOCKOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "LONG"
		},
		"ACLMYCMRBODY": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSLOTNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"BMYCODEFLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "BOOL"
		},
		"BMYL1PHASEVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "BOOL"
		},
		"BMYISL2PRESENT": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "BOOL"
		},
		"ULMYL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ULONG"
		},
		"LMYL1CARRIEROFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "LONG"
		},
		"ULMYL1SNR": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "ULONG"
		},
		"ULMYL1SLIPCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "ULONG"
		},
		"BMYISL2CODE": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "BOOL"
		},
		"BMYCODETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "BOOL"
		},
		"BMYISL2CODEVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "BOOL"
		},
		"BMYISL2PHASEVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "BOOL"
		},
		"BMYPHASEFULL": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "BOOL"
		},
		"ULMYRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "ULONG"
		},
		"LMYL2RANGEOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "104",
			"DATATYPE": "LONG"
		},
		"LMYL2CARRIEROFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "108",
			"DATATYPE": "LONG"
		},
		"ULMYL2SNR": {
			"NOOFBYTES": "4",
			"OFFSET": "112",
			"DATATYPE": "ULONG"
		},
		"ULMYL2SLIPCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "116",
			"DATATYPE": "ULONG"
		},
		"CABO": ["48"],
		"CAAO": ["72"]
	},
	"CMRGLOOBSIN": {
		"ULMYCMRSYNC": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYLENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYVERSION": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATIONID": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMESSAGETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYNUMBEROFSV": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYEPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYCLOCKBIASVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"LMYCLOCKOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "LONG"
		},
		"ACLMYCMRBODY": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSLOTNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"BMYCODEFLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "BOOL"
		},
		"BMYL1PHASEVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "BOOL"
		},
		"BMYISL2PRESENT": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "BOOL"
		},
		"ULMYL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ULONG"
		},
		"LMYL1CARRIEROFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "LONG"
		},
		"ULMYL1SNR": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "ULONG"
		},
		"ULMYL1SLIPCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "ULONG"
		},
		"BMYISL2CODE": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "BOOL"
		},
		"BMYCODETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "BOOL"
		},
		"BMYISL2CODEVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "BOOL"
		},
		"BMYISL2PHASEVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "BOOL"
		},
		"BMYPHASEFULL": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "BOOL"
		},
		"ULMYRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "ULONG"
		},
		"LMYL2RANGEOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "104",
			"DATATYPE": "LONG"
		},
		"LMYL2CARRIEROFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "108",
			"DATATYPE": "LONG"
		},
		"ULMYL2SNR": {
			"NOOFBYTES": "4",
			"OFFSET": "112",
			"DATATYPE": "ULONG"
		},
		"ULMYL2SLIPCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "116",
			"DATATYPE": "ULONG"
		},
		"CABO": ["48"],
		"CAAO": ["72"]
	},
	"CANCONFIG": {
		"EMYCANPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CANPORTENUM"
		},
		"EMYONOFF": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ONOFFENUM"
		},
		"EMYBITRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "CANBITRATEENUM"
		}
	},
	"RTCM1009": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT27"
		},
		"GNSSMESSAGEFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"NUMSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"SMOOTHINGINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"SMOOTHINGINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"L1CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"FREQCHANNELNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"L1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_UINT25"
		},
		"L1PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "23",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L1LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"CABO": ["16"],
		"CAAO": ["12"]
	},
	"RTCM1009IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT27"
		},
		"GNSSMESSAGEFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"NUMSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"SMOOTHINGINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"SMOOTHINGINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"L1CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"FREQCHANNELNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"L1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_UINT25"
		},
		"L1PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "23",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L1LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"CABO": ["16"],
		"CAAO": ["12"]
	},
	"RTCM1010": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT27"
		},
		"GNSSMESSAGEFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"NUMSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"SMOOTHINGINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"SMOOTHINGINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"L1CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"FREQCHANNELNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"L1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_UINT25"
		},
		"L1PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "23",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L1LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"INTEGERL1PSRMODULUSAMB": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"L1CNR": {
			"NOOFBYTES": "1",
			"OFFSET": "29",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"CABO": ["16"],
		"CAAO": ["14"]
	},
	"RTCM1010IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT27"
		},
		"GNSSMESSAGEFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"NUMSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"SMOOTHINGINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"SMOOTHINGINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"L1CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"FREQCHANNELNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"L1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_UINT25"
		},
		"L1PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "23",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L1LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"INTEGERL1PSRMODULUSAMB": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"L1CNR": {
			"NOOFBYTES": "1",
			"OFFSET": "29",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"CABO": ["16"],
		"CAAO": ["14"]
	},
	"RTCM1011": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT27"
		},
		"GNSSMESSAGEFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"NUMSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"SMOOTHINGINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"SMOOTHINGINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"L1CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"FREQCHANNELNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"L1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_UINT25"
		},
		"L1PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "23",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L1LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"L2CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"L1L2PSRDIFF": {
			"NOOFBYTES": "2",
			"OFFSET": "29",
			"DATATYPE": "RTCMV3_INT14"
		},
		"L2PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "31",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L2LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "35",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"CABO": ["16"],
		"CAAO": ["20"]
	},
	"RTCM1011IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT27"
		},
		"GNSSMESSAGEFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"NUMSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"SMOOTHINGINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"SMOOTHINGINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"L1CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"FREQCHANNELNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"L1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_UINT25"
		},
		"L1PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "23",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L1LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"L2CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"L1L2PSRDIFF": {
			"NOOFBYTES": "2",
			"OFFSET": "29",
			"DATATYPE": "RTCMV3_INT14"
		},
		"L2PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "31",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L2LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "35",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"CABO": ["16"],
		"CAAO": ["20"]
	},
	"RTCM1012": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT27"
		},
		"GNSSMESSAGEFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"NUMSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"SMOOTHINGINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"SMOOTHINGINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"L1CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"FREQCHANNELNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"L1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_UINT25"
		},
		"L1PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "23",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L1LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"INTEGERL1PSRMODULUSAMB": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"L1CNR": {
			"NOOFBYTES": "1",
			"OFFSET": "29",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"L2CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "30",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"L1L2PSRDIFF": {
			"NOOFBYTES": "2",
			"OFFSET": "31",
			"DATATYPE": "RTCMV3_INT14"
		},
		"L2PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "33",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L2LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "37",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"L2CNR": {
			"NOOFBYTES": "1",
			"OFFSET": "38",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"CABO": ["16"],
		"CAAO": ["23"]
	},
	"RTCM1012IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT27"
		},
		"GNSSMESSAGEFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"NUMSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"SMOOTHINGINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"SMOOTHINGINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"L1CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"FREQCHANNELNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"L1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_UINT25"
		},
		"L1PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "23",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L1LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"INTEGERL1PSRMODULUSAMB": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"L1CNR": {
			"NOOFBYTES": "1",
			"OFFSET": "29",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"L2CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "30",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"L1L2PSRDIFF": {
			"NOOFBYTES": "2",
			"OFFSET": "31",
			"DATATYPE": "RTCMV3_INT14"
		},
		"L2PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "33",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L2LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "37",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"L2CNR": {
			"NOOFBYTES": "1",
			"OFFSET": "38",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"CABO": ["16"],
		"CAAO": ["23"]
	},
	"RTCM1019": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"GPSSATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"GPSWEEKNUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "3",
			"DATATYPE": "RTCMV3_UINT10"
		},
		"GPSSVACCURACY": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"GPSCODEONL2": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"GPSIDOT": {
			"NOOFBYTES": "2",
			"OFFSET": "7",
			"DATATYPE": "RTCMV3_INT14"
		},
		"GPSIODE": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"GPSTOC": {
			"NOOFBYTES": "2",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_UINT16"
		},
		"GPSAF2": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "RTCMV3_INT8"
		},
		"GPSAF1": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "RTCMV3_INT16"
		},
		"GPSAF0": {
			"NOOFBYTES": "4",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_INT22"
		},
		"GPSIODC": {
			"NOOFBYTES": "2",
			"OFFSET": "21",
			"DATATYPE": "RTCMV3_UINT10"
		},
		"GPSCRS": {
			"NOOFBYTES": "4",
			"OFFSET": "23",
			"DATATYPE": "RTCMV3_INT16"
		},
		"GPSDELTAN": {
			"NOOFBYTES": "4",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_INT16"
		},
		"GPSM0": {
			"NOOFBYTES": "4",
			"OFFSET": "31",
			"DATATYPE": "RTCMV3_INT32"
		},
		"GPSCUC": {
			"NOOFBYTES": "4",
			"OFFSET": "35",
			"DATATYPE": "RTCMV3_INT16"
		},
		"GPSECC": {
			"NOOFBYTES": "4",
			"OFFSET": "39",
			"DATATYPE": "RTCMV3_UINT32"
		},
		"GPSCUS": {
			"NOOFBYTES": "4",
			"OFFSET": "43",
			"DATATYPE": "RTCMV3_INT16"
		},
		"GPSSQRROOTA": {
			"NOOFBYTES": "4",
			"OFFSET": "47",
			"DATATYPE": "RTCMV3_UINT32"
		},
		"GPSTOE": {
			"NOOFBYTES": "2",
			"OFFSET": "51",
			"DATATYPE": "RTCMV3_UINT16"
		},
		"GPSCIC": {
			"NOOFBYTES": "4",
			"OFFSET": "53",
			"DATATYPE": "RTCMV3_INT16"
		},
		"GPSOMEGA0": {
			"NOOFBYTES": "4",
			"OFFSET": "57",
			"DATATYPE": "RTCMV3_INT32"
		},
		"GPSCIS": {
			"NOOFBYTES": "4",
			"OFFSET": "61",
			"DATATYPE": "RTCMV3_INT16"
		},
		"GPSI0": {
			"NOOFBYTES": "4",
			"OFFSET": "65",
			"DATATYPE": "RTCMV3_INT32"
		},
		"GPSCRC": {
			"NOOFBYTES": "4",
			"OFFSET": "69",
			"DATATYPE": "RTCMV3_INT16"
		},
		"GPSOMEGA": {
			"NOOFBYTES": "4",
			"OFFSET": "73",
			"DATATYPE": "RTCMV3_INT32"
		},
		"GPSOMEGADOT": {
			"NOOFBYTES": "4",
			"OFFSET": "77",
			"DATATYPE": "RTCMV3_INT24"
		},
		"GPSTGD": {
			"NOOFBYTES": "1",
			"OFFSET": "81",
			"DATATYPE": "RTCMV3_INT8"
		},
		"GPSSVHEALTH": {
			"NOOFBYTES": "1",
			"OFFSET": "82",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"GPSL2PDATAFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "83",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GPSFITINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "84",
			"DATATYPE": "RTCMV3_BIT1"
		}
	},
	"RTCM1019IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"GPSSATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"GPSWEEKNUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "3",
			"DATATYPE": "RTCMV3_UINT10"
		},
		"GPSSVACCURACY": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"GPSCODEONL2": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"GPSIDOT": {
			"NOOFBYTES": "2",
			"OFFSET": "7",
			"DATATYPE": "RTCMV3_INT14"
		},
		"GPSIODE": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"GPSTOC": {
			"NOOFBYTES": "2",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_UINT16"
		},
		"GPSAF2": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "RTCMV3_INT8"
		},
		"GPSAF1": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "RTCMV3_INT16"
		},
		"GPSAF0": {
			"NOOFBYTES": "4",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_INT22"
		},
		"GPSIODC": {
			"NOOFBYTES": "2",
			"OFFSET": "21",
			"DATATYPE": "RTCMV3_UINT10"
		},
		"GPSCRS": {
			"NOOFBYTES": "4",
			"OFFSET": "23",
			"DATATYPE": "RTCMV3_INT16"
		},
		"GPSDELTAN": {
			"NOOFBYTES": "4",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_INT16"
		},
		"GPSM0": {
			"NOOFBYTES": "4",
			"OFFSET": "31",
			"DATATYPE": "RTCMV3_INT32"
		},
		"GPSCUC": {
			"NOOFBYTES": "4",
			"OFFSET": "35",
			"DATATYPE": "RTCMV3_INT16"
		},
		"GPSECC": {
			"NOOFBYTES": "4",
			"OFFSET": "39",
			"DATATYPE": "RTCMV3_UINT32"
		},
		"GPSCUS": {
			"NOOFBYTES": "4",
			"OFFSET": "43",
			"DATATYPE": "RTCMV3_INT16"
		},
		"GPSSQRROOTA": {
			"NOOFBYTES": "4",
			"OFFSET": "47",
			"DATATYPE": "RTCMV3_UINT32"
		},
		"GPSTOE": {
			"NOOFBYTES": "2",
			"OFFSET": "51",
			"DATATYPE": "RTCMV3_UINT16"
		},
		"GPSCIC": {
			"NOOFBYTES": "4",
			"OFFSET": "53",
			"DATATYPE": "RTCMV3_INT16"
		},
		"GPSOMEGA0": {
			"NOOFBYTES": "4",
			"OFFSET": "57",
			"DATATYPE": "RTCMV3_INT32"
		},
		"GPSCIS": {
			"NOOFBYTES": "4",
			"OFFSET": "61",
			"DATATYPE": "RTCMV3_INT16"
		},
		"GPSI0": {
			"NOOFBYTES": "4",
			"OFFSET": "65",
			"DATATYPE": "RTCMV3_INT32"
		},
		"GPSCRC": {
			"NOOFBYTES": "4",
			"OFFSET": "69",
			"DATATYPE": "RTCMV3_INT16"
		},
		"GPSOMEGA": {
			"NOOFBYTES": "4",
			"OFFSET": "73",
			"DATATYPE": "RTCMV3_INT32"
		},
		"GPSOMEGADOT": {
			"NOOFBYTES": "4",
			"OFFSET": "77",
			"DATATYPE": "RTCMV3_INT24"
		},
		"GPSTGD": {
			"NOOFBYTES": "1",
			"OFFSET": "81",
			"DATATYPE": "RTCMV3_INT8"
		},
		"GPSSVHEALTH": {
			"NOOFBYTES": "1",
			"OFFSET": "82",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"GPSL2PDATAFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "83",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GPSFITINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "84",
			"DATATYPE": "RTCMV3_BIT1"
		}
	},
	"RTCM1020": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"GLOSATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"GLOSATELLITEFREQCHANNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "3",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"GLOALMANACHEALTH": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLOALMANACHEALTHAVAILABILITY": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLOP1": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"GLOTK": {
			"NOOFBYTES": "2",
			"OFFSET": "7",
			"DATATYPE": "RTCMV3_BIT12"
		},
		"GLOMSBBN": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLOP2": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLOTB": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"GLOXNTBFIRSTDERIVATIVE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "RTCMV3_INTS24"
		},
		"GLOXNTB": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_INTS27"
		},
		"GLOXNTBSECONDDERIVATIVE": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "RTCMV3_INTS5"
		},
		"GLOYNTBFIRSTDERIVATIVE": {
			"NOOFBYTES": "4",
			"OFFSET": "21",
			"DATATYPE": "RTCMV3_INTS24"
		},
		"GLOYNTB": {
			"NOOFBYTES": "4",
			"OFFSET": "25",
			"DATATYPE": "RTCMV3_INTS27"
		},
		"GLOYNTBSECONDDERIVATIVE": {
			"NOOFBYTES": "1",
			"OFFSET": "29",
			"DATATYPE": "RTCMV3_INTS5"
		},
		"GLOZNTBFIRSTDERIVATIVE": {
			"NOOFBYTES": "4",
			"OFFSET": "30",
			"DATATYPE": "RTCMV3_INTS24"
		},
		"GLOZNTB": {
			"NOOFBYTES": "4",
			"OFFSET": "34",
			"DATATYPE": "RTCMV3_INTS27"
		},
		"GLOZNTBSECONDDERIVATIVE": {
			"NOOFBYTES": "1",
			"OFFSET": "38",
			"DATATYPE": "RTCMV3_INTS5"
		},
		"GLOP3": {
			"NOOFBYTES": "1",
			"OFFSET": "39",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLOGAMMATB": {
			"NOOFBYTES": "2",
			"OFFSET": "40",
			"DATATYPE": "RTCMV3_INTS11"
		},
		"GLOMP": {
			"NOOFBYTES": "1",
			"OFFSET": "42",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"GLOM1THIRDSTRING": {
			"NOOFBYTES": "1",
			"OFFSET": "43",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLOTAUTB": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "RTCMV3_INTS22"
		},
		"GLOMDELTATAU": {
			"NOOFBYTES": "1",
			"OFFSET": "48",
			"DATATYPE": "RTCMV3_INTS5"
		},
		"GLOEN": {
			"NOOFBYTES": "1",
			"OFFSET": "49",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"GLOMP4": {
			"NOOFBYTES": "1",
			"OFFSET": "50",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLOMFT": {
			"NOOFBYTES": "1",
			"OFFSET": "51",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"GLOMNT": {
			"NOOFBYTES": "2",
			"OFFSET": "52",
			"DATATYPE": "RTCMV3_UINT11"
		},
		"GLOMM": {
			"NOOFBYTES": "1",
			"OFFSET": "54",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"GLOAVAILABILITY": {
			"NOOFBYTES": "1",
			"OFFSET": "55",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLONA": {
			"NOOFBYTES": "2",
			"OFFSET": "56",
			"DATATYPE": "RTCMV3_UINT11"
		},
		"GLOTAUC": {
			"NOOFBYTES": "4",
			"OFFSET": "58",
			"DATATYPE": "RTCMV3_INTS32"
		},
		"GLOMN4": {
			"NOOFBYTES": "1",
			"OFFSET": "62",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"GLOMTAUGPS": {
			"NOOFBYTES": "4",
			"OFFSET": "63",
			"DATATYPE": "RTCMV3_INTS22"
		},
		"GLOM1NFIFTHSTRING": {
			"NOOFBYTES": "1",
			"OFFSET": "67",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "68",
			"DATATYPE": "RTCMV3_BIT7"
		}
	},
	"RTCM1020IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"GLOSATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"GLOSATELLITEFREQCHANNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "3",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"GLOALMANACHEALTH": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLOALMANACHEALTHAVAILABILITY": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLOP1": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"GLOTK": {
			"NOOFBYTES": "2",
			"OFFSET": "7",
			"DATATYPE": "RTCMV3_BIT12"
		},
		"GLOMSBBN": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLOP2": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLOTB": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"GLOXNTBFIRSTDERIVATIVE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "RTCMV3_INTS24"
		},
		"GLOXNTB": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_INTS27"
		},
		"GLOXNTBSECONDDERIVATIVE": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "RTCMV3_INTS5"
		},
		"GLOYNTBFIRSTDERIVATIVE": {
			"NOOFBYTES": "4",
			"OFFSET": "21",
			"DATATYPE": "RTCMV3_INTS24"
		},
		"GLOYNTB": {
			"NOOFBYTES": "4",
			"OFFSET": "25",
			"DATATYPE": "RTCMV3_INTS27"
		},
		"GLOYNTBSECONDDERIVATIVE": {
			"NOOFBYTES": "1",
			"OFFSET": "29",
			"DATATYPE": "RTCMV3_INTS5"
		},
		"GLOZNTBFIRSTDERIVATIVE": {
			"NOOFBYTES": "4",
			"OFFSET": "30",
			"DATATYPE": "RTCMV3_INTS24"
		},
		"GLOZNTB": {
			"NOOFBYTES": "4",
			"OFFSET": "34",
			"DATATYPE": "RTCMV3_INTS27"
		},
		"GLOZNTBSECONDDERIVATIVE": {
			"NOOFBYTES": "1",
			"OFFSET": "38",
			"DATATYPE": "RTCMV3_INTS5"
		},
		"GLOP3": {
			"NOOFBYTES": "1",
			"OFFSET": "39",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLOGAMMATB": {
			"NOOFBYTES": "2",
			"OFFSET": "40",
			"DATATYPE": "RTCMV3_INTS11"
		},
		"GLOMP": {
			"NOOFBYTES": "1",
			"OFFSET": "42",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"GLOM1THIRDSTRING": {
			"NOOFBYTES": "1",
			"OFFSET": "43",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLOTAUTB": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "RTCMV3_INTS22"
		},
		"GLOMDELTATAU": {
			"NOOFBYTES": "1",
			"OFFSET": "48",
			"DATATYPE": "RTCMV3_INTS5"
		},
		"GLOEN": {
			"NOOFBYTES": "1",
			"OFFSET": "49",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"GLOMP4": {
			"NOOFBYTES": "1",
			"OFFSET": "50",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLOMFT": {
			"NOOFBYTES": "1",
			"OFFSET": "51",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"GLOMNT": {
			"NOOFBYTES": "2",
			"OFFSET": "52",
			"DATATYPE": "RTCMV3_UINT11"
		},
		"GLOMM": {
			"NOOFBYTES": "1",
			"OFFSET": "54",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"GLOAVAILABILITY": {
			"NOOFBYTES": "1",
			"OFFSET": "55",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLONA": {
			"NOOFBYTES": "2",
			"OFFSET": "56",
			"DATATYPE": "RTCMV3_UINT11"
		},
		"GLOTAUC": {
			"NOOFBYTES": "4",
			"OFFSET": "58",
			"DATATYPE": "RTCMV3_INTS32"
		},
		"GLOMN4": {
			"NOOFBYTES": "1",
			"OFFSET": "62",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"GLOMTAUGPS": {
			"NOOFBYTES": "4",
			"OFFSET": "63",
			"DATATYPE": "RTCMV3_INTS22"
		},
		"GLOM1NFIFTHSTRING": {
			"NOOFBYTES": "1",
			"OFFSET": "67",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "68",
			"DATATYPE": "RTCMV3_BIT7"
		}
	},
	"RTCMDATA1009": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT27"
		},
		"GNSSMESSAGEFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"NUMSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"SMOOTHINGINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"SMOOTHINGINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"L1CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"FREQCHANNELNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"L1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_UINT25"
		},
		"L1PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "23",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L1LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"CABO": ["16"],
		"CAAO": ["12"]
	},
	"RTCMDATA1010": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT27"
		},
		"GNSSMESSAGEFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"NUMSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"SMOOTHINGINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"SMOOTHINGINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"L1CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"FREQCHANNELNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"L1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_UINT25"
		},
		"L1PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "23",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L1LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"INTEGERL1PSRMODULUSAMB": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"L1CNR": {
			"NOOFBYTES": "1",
			"OFFSET": "29",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"CABO": ["16"],
		"CAAO": ["14"]
	},
	"RTCMDATA1011": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT27"
		},
		"GNSSMESSAGEFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"NUMSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"SMOOTHINGINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"SMOOTHINGINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"L1CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"FREQCHANNELNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"L1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_UINT25"
		},
		"L1PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "23",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L1LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"L2CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"L1L2PSRDIFF": {
			"NOOFBYTES": "2",
			"OFFSET": "29",
			"DATATYPE": "RTCMV3_INT14"
		},
		"L2PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "31",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L2LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "35",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"CABO": ["16"],
		"CAAO": ["20"]
	},
	"RTCMDATA1012": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT27"
		},
		"GNSSMESSAGEFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"NUMSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"SMOOTHINGINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"SMOOTHINGINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"L1CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"FREQCHANNELNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"L1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_UINT25"
		},
		"L1PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "23",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L1LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"INTEGERL1PSRMODULUSAMB": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"L1CNR": {
			"NOOFBYTES": "1",
			"OFFSET": "29",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"L2CODEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "30",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"L1L2PSRDIFF": {
			"NOOFBYTES": "2",
			"OFFSET": "31",
			"DATATYPE": "RTCMV3_INT14"
		},
		"L2PHASERANGEMINUSL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "33",
			"DATATYPE": "RTCMV3_INT20"
		},
		"L2LOCKTIMEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "37",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"L2CNR": {
			"NOOFBYTES": "1",
			"OFFSET": "38",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"USRESERVED": {
			"NOOFBYTES": "2",
			"OFFSET": "39",
			"DATATYPE": "USHORT"
		},
		"CABO": ["16"],
		"CAAO": ["25"]
	},
	"RTCMDATA1019": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"GPSSATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"GPSWEEKNUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "3",
			"DATATYPE": "RTCMV3_UINT10"
		},
		"GPSSVACCURACY": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"GPSCODEONL2": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"GPSIDOT": {
			"NOOFBYTES": "2",
			"OFFSET": "7",
			"DATATYPE": "RTCMV3_INT14"
		},
		"GPSIODE": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"GPSTOC": {
			"NOOFBYTES": "2",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_UINT16"
		},
		"GPSAF2": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "RTCMV3_INT8"
		},
		"GPSAF1": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "RTCMV3_INT16"
		},
		"GPSAF0": {
			"NOOFBYTES": "4",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_INT22"
		},
		"GPSIODC": {
			"NOOFBYTES": "2",
			"OFFSET": "21",
			"DATATYPE": "RTCMV3_UINT10"
		},
		"GPSCRS": {
			"NOOFBYTES": "4",
			"OFFSET": "23",
			"DATATYPE": "RTCMV3_INT16"
		},
		"GPSDELTAN": {
			"NOOFBYTES": "4",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_INT16"
		},
		"GPSM0": {
			"NOOFBYTES": "4",
			"OFFSET": "31",
			"DATATYPE": "RTCMV3_INT32"
		},
		"GPSCUC": {
			"NOOFBYTES": "4",
			"OFFSET": "35",
			"DATATYPE": "RTCMV3_INT16"
		},
		"GPSECC": {
			"NOOFBYTES": "4",
			"OFFSET": "39",
			"DATATYPE": "RTCMV3_UINT32"
		},
		"GPSCUS": {
			"NOOFBYTES": "4",
			"OFFSET": "43",
			"DATATYPE": "RTCMV3_INT16"
		},
		"GPSSQRROOTA": {
			"NOOFBYTES": "4",
			"OFFSET": "47",
			"DATATYPE": "RTCMV3_UINT32"
		},
		"GPSTOE": {
			"NOOFBYTES": "2",
			"OFFSET": "51",
			"DATATYPE": "RTCMV3_UINT16"
		},
		"GPSCIC": {
			"NOOFBYTES": "4",
			"OFFSET": "53",
			"DATATYPE": "RTCMV3_INT16"
		},
		"GPSOMEGA0": {
			"NOOFBYTES": "4",
			"OFFSET": "57",
			"DATATYPE": "RTCMV3_INT32"
		},
		"GPSCIS": {
			"NOOFBYTES": "4",
			"OFFSET": "61",
			"DATATYPE": "RTCMV3_INT16"
		},
		"GPSI0": {
			"NOOFBYTES": "4",
			"OFFSET": "65",
			"DATATYPE": "RTCMV3_INT32"
		},
		"GPSCRC": {
			"NOOFBYTES": "4",
			"OFFSET": "69",
			"DATATYPE": "RTCMV3_INT16"
		},
		"GPSOMEGA": {
			"NOOFBYTES": "4",
			"OFFSET": "73",
			"DATATYPE": "RTCMV3_INT32"
		},
		"GPSOMEGADOT": {
			"NOOFBYTES": "4",
			"OFFSET": "77",
			"DATATYPE": "RTCMV3_INT24"
		},
		"GPSTGD": {
			"NOOFBYTES": "1",
			"OFFSET": "81",
			"DATATYPE": "RTCMV3_INT8"
		},
		"GPSSVHEALTH": {
			"NOOFBYTES": "1",
			"OFFSET": "82",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"GPSL2PDATAFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "83",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GPSFITINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "84",
			"DATATYPE": "RTCMV3_BIT1"
		}
	},
	"RTCMDATA1020": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"GLOSATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"GLOSATELLITEFREQCHANNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "3",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"GLOALMANACHEALTH": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLOALMANACHEALTHAVAILABILITY": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLOP1": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"GLOTK": {
			"NOOFBYTES": "2",
			"OFFSET": "7",
			"DATATYPE": "RTCMV3_BIT12"
		},
		"GLOMSBBN": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLOP2": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLOTB": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_UINT7"
		},
		"GLOXNTBFIRSTDERIVATIVE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "RTCMV3_INTS24"
		},
		"GLOXNTB": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "RTCMV3_INTS27"
		},
		"GLOXNTBSECONDDERIVATIVE": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "RTCMV3_INTS5"
		},
		"GLOYNTBFIRSTDERIVATIVE": {
			"NOOFBYTES": "4",
			"OFFSET": "21",
			"DATATYPE": "RTCMV3_INTS24"
		},
		"GLOYNTB": {
			"NOOFBYTES": "4",
			"OFFSET": "25",
			"DATATYPE": "RTCMV3_INTS27"
		},
		"GLOYNTBSECONDDERIVATIVE": {
			"NOOFBYTES": "1",
			"OFFSET": "29",
			"DATATYPE": "RTCMV3_INTS5"
		},
		"GLOZNTBFIRSTDERIVATIVE": {
			"NOOFBYTES": "4",
			"OFFSET": "30",
			"DATATYPE": "RTCMV3_INTS24"
		},
		"GLOZNTB": {
			"NOOFBYTES": "4",
			"OFFSET": "34",
			"DATATYPE": "RTCMV3_INTS27"
		},
		"GLOZNTBSECONDDERIVATIVE": {
			"NOOFBYTES": "1",
			"OFFSET": "38",
			"DATATYPE": "RTCMV3_INTS5"
		},
		"GLOP3": {
			"NOOFBYTES": "1",
			"OFFSET": "39",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLOGAMMATB": {
			"NOOFBYTES": "2",
			"OFFSET": "40",
			"DATATYPE": "RTCMV3_INTS11"
		},
		"GLOMP": {
			"NOOFBYTES": "1",
			"OFFSET": "42",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"GLOM1THIRDSTRING": {
			"NOOFBYTES": "1",
			"OFFSET": "43",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLOTAUTB": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "RTCMV3_INTS22"
		},
		"GLOMDELTATAU": {
			"NOOFBYTES": "1",
			"OFFSET": "48",
			"DATATYPE": "RTCMV3_INTS5"
		},
		"GLOEN": {
			"NOOFBYTES": "1",
			"OFFSET": "49",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"GLOMP4": {
			"NOOFBYTES": "1",
			"OFFSET": "50",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLOMFT": {
			"NOOFBYTES": "1",
			"OFFSET": "51",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"GLOMNT": {
			"NOOFBYTES": "2",
			"OFFSET": "52",
			"DATATYPE": "RTCMV3_UINT11"
		},
		"GLOMM": {
			"NOOFBYTES": "1",
			"OFFSET": "54",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"GLOAVAILABILITY": {
			"NOOFBYTES": "1",
			"OFFSET": "55",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLONA": {
			"NOOFBYTES": "2",
			"OFFSET": "56",
			"DATATYPE": "RTCMV3_UINT11"
		},
		"GLOTAUC": {
			"NOOFBYTES": "4",
			"OFFSET": "58",
			"DATATYPE": "RTCMV3_INTS32"
		},
		"GLOMN4": {
			"NOOFBYTES": "1",
			"OFFSET": "62",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"GLOMTAUGPS": {
			"NOOFBYTES": "4",
			"OFFSET": "63",
			"DATATYPE": "RTCMV3_INTS22"
		},
		"GLOM1NFIFTHSTRING": {
			"NOOFBYTES": "1",
			"OFFSET": "67",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "68",
			"DATATYPE": "RTCMV3_BIT7"
		}
	},
	"RTCM59GLO": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"UCMYSUBTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "UCHAR"
		},
		"ACLMYDIFFDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "25",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSCALE": {
			"NOOFBYTES": "4",
			"OFFSET": "29",
			"DATATYPE": "ULONG"
		},
		"ULMYUDRE": {
			"NOOFBYTES": "4",
			"OFFSET": "33",
			"DATATYPE": "ULONG"
		},
		"ULMYSVPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "37",
			"DATATYPE": "ULONG"
		},
		"IMYCOR": {
			"NOOFBYTES": "4",
			"OFFSET": "41",
			"DATATYPE": "INT"
		},
		"IMYCORRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "45",
			"DATATYPE": "INT"
		},
		"ULMYCHANGEBIT": {
			"NOOFBYTES": "4",
			"OFFSET": "49",
			"DATATYPE": "ULONG"
		},
		"ULMYTK": {
			"NOOFBYTES": "4",
			"OFFSET": "53",
			"DATATYPE": "ULONG"
		},
		"CABO": ["29"],
		"CAAO": ["28"]
	},
	"RTCM59GLOIN": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"UCMYSUBTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "UCHAR"
		},
		"ACLMYDIFFDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "25",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSCALE": {
			"NOOFBYTES": "4",
			"OFFSET": "29",
			"DATATYPE": "ULONG"
		},
		"ULMYUDRE": {
			"NOOFBYTES": "4",
			"OFFSET": "33",
			"DATATYPE": "ULONG"
		},
		"ULMYSVPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "37",
			"DATATYPE": "ULONG"
		},
		"IMYCOR": {
			"NOOFBYTES": "4",
			"OFFSET": "41",
			"DATATYPE": "INT"
		},
		"IMYCORRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "45",
			"DATATYPE": "INT"
		},
		"ULMYCHANGEBIT": {
			"NOOFBYTES": "4",
			"OFFSET": "49",
			"DATATYPE": "ULONG"
		},
		"ULMYTK": {
			"NOOFBYTES": "4",
			"OFFSET": "53",
			"DATATYPE": "ULONG"
		},
		"CABO": ["29"],
		"CAAO": ["28"]
	},
	"RTCMDATA59GLO": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"UCMYSUBTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "UCHAR"
		},
		"ACLMYDIFFDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "25",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSCALE": {
			"NOOFBYTES": "4",
			"OFFSET": "29",
			"DATATYPE": "ULONG"
		},
		"ULMYUDRE": {
			"NOOFBYTES": "4",
			"OFFSET": "33",
			"DATATYPE": "ULONG"
		},
		"ULMYSVPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "37",
			"DATATYPE": "ULONG"
		},
		"IMYCOR": {
			"NOOFBYTES": "4",
			"OFFSET": "41",
			"DATATYPE": "INT"
		},
		"IMYCORRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "45",
			"DATATYPE": "INT"
		},
		"ULMYCHANGEBIT": {
			"NOOFBYTES": "4",
			"OFFSET": "49",
			"DATATYPE": "ULONG"
		},
		"ULMYTK": {
			"NOOFBYTES": "4",
			"OFFSET": "53",
			"DATATYPE": "ULONG"
		},
		"CABO": ["29"],
		"CAAO": ["28"]
	},
	"UNLOCKOUTSYSTEM": {
		"EMYSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SYSTEMTYPEENUM"
		}
	},
	"RTKTIMEOUT": {
		"ULMYRTKTIMEOUT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"DIFFCODEBIASCONTROL": {
		"EMYENABLEENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"SETMESSAGE": {
		"MESSAGENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"MESSAGEID": {
			"NOOFBYTES": "4",
			"OFFSET": "1",
			"DATATYPE": "UINT"
		},
		"MESSAGETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "DYNAMICMSGTYPEENUM"
		},
		"NUMSAVEPARAMS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "UCHAR"
		},
		"MESSAGEPARAMS": {
			"NOOFBYTES": "4",
			"OFFSET": "10",
			"DATATYPE": "CLASSARRAY"
		},
		"DATATYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "STRING"
		},
		"CONVERTSTRING": {
			"NOOFBYTES": "1",
			"OFFSET": "47",
			"DATATYPE": "STRING"
		},
		"ARRAYSIZE": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "UINT"
		},
		"MINVALUE": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "LONG"
		},
		"MAXVALUE": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "LONG"
		},
		"CABO": ["14"],
		"CAAO": ["46"]
	},
	"EXTREFSTATION": {
		"ULMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYGPSWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYGPSSECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"EMYREFTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "REFSTATIONENUM"
		},
		"ACMYSTATIONID": {
			"NOOFBYTES": "1",
			"OFFSET": "44",
			"DATATYPE": "STRING"
		},
		"FMYARPHEIGHT": {
			"NOOFBYTES": "4",
			"OFFSET": "45",
			"DATATYPE": "FLOAT"
		},
		"EMYSOLUTIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "49",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "53",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYDIFFERENTIALAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "57",
			"DATATYPE": "FLOAT"
		},
		"ULMYRESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "61",
			"DATATYPE": "ULONG"
		},
		"ULMYRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "65",
			"DATATYPE": "ULONG"
		}
	},
	"RTKNETWORK": {
		"EMYRTKNETWORK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RTKNETWORKENUM"
		},
		"ULMYNETWORKNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"RTKDOP": {
		"FMYGDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		},
		"FMYPDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"FMYHDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYHTDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYTDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYGPSELEVMASK": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"AULMYSATS": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "VARIABLEULONGARRAY"
		}
	},
	"TUNNELESCAPE": {
		"EENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"AUCTUNNELESCAPE": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "VARHEXBYTETYPE"
		},
		"CABO": ["4"],
		"CAAO": ["5"]
	},
	"HWMONITOR": {
		"ACLMYMEASUREMENTS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"FMYVALUE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"ULMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "HEXULONG"
		}
	},
	"RTCMDATA22GG": {
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYZCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSEQUENCENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"LMYL1ANTDELTAX": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "LONG"
		},
		"LMYL1ANTDELTAY": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "LONG"
		},
		"LMYL1ANTDELTAZ": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "LONG"
		},
		"CLMYRTCM22ANTHGTL1": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "CLASSARRAY"
		},
		"ULSPAREBITS": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULMYCONSTELLATION": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULMYANTENNATYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYANTENNAREFPOINT": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"BNOHEIGHT": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "BOOL"
		},
		"ULANTENNAPHASEHEIGHT": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"CLMYRTCM22ANTINFL2": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "CLASSARRAY"
		},
		"LMYL2ANTDELTAX": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "LONG"
		},
		"LMYL2ANTDELTAY": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "LONG"
		},
		"LMYL2ANTDELTAZ": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "LONG"
		},
		"CABO": ["68"],
		"CAAO": ["12"]
	},
	"ENCODERSETUP": {
		"ULMYENCODER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"EMYRANGE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ENCODERRANGEENUM"
		}
	},
	"PDPMODE": {
		"EMYMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PDPFILTERMODEENUM"
		},
		"EMYDYNAMICS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "PDPFILTERDYNAMICSENUM"
		}
	},
	"HEADING": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYBLENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYHEADING": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYPITCH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FFLOAT": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"FMYHEADINGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"FMYPITCHSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "32",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "36",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "37",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "38",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "39",
			"DATATYPE": "UCHAR"
		},
		"UCMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "1",
			"OFFSET": "40",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "41",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "42",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "43",
			"DATATYPE": "UCHAR"
		}
	},
	"RAWSBASFRAME": {
		"IMYFRAMEDECODERNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INT"
		},
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYWAASMSGID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"AUCMYRAWFRAMEDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"ULMYSIGNALCHANNELNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "ULONG"
		}
	},
	"RAWGLOFRAME": {
		"ULMYFRAMENUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"USMYSLOTO": {
			"NOOFBYTES": "2",
			"OFFSET": "4",
			"DATATYPE": "USHORT"
		},
		"USMYFREQO": {
			"NOOFBYTES": "2",
			"OFFSET": "6",
			"DATATYPE": "USHORT"
		},
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMEDECODERNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYSIGNALCHANNELNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ACLMYRAWSTRING": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "CLASSARRAY"
		},
		"AUCMYSTRING": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"UCMYRESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "39",
			"DATATYPE": "UCHAR"
		},
		"CABO": ["28"],
		"CAAO": ["12"]
	},
	"RAWGLOSTRING": {
		"UCMYSLOT": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "UCHAR"
		},
		"CMYFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "CHAR"
		},
		"AUCMYSTRING": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"UCMYRESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "UCHAR"
		}
	},
	"SBAS0": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"SBAS1": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"AUCMYPRNMASK": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"ULMYIODP": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "ULONG"
		}
	},
	"SBAS10": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYBRRC": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYCLTC_LSB": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYCLTC_V1": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYILTC_V1": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYCLTC_V0": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYILTC_V0": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYCGEO_LSB": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYCGEO_V": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYIGEO": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"ULMYCER": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULMYCIONO_STEP": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULMYIIONO": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYCIONO_RAMP": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"ULMYRSSUDRE": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"ULMYRSSIONO": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"AULMYSPAREBITS": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"SBAS12": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYA1": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYA0": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"ULMYT0T": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"USMYWN": {
			"NOOFBYTES": "2",
			"OFFSET": "24",
			"DATATYPE": "USHORT"
		},
		"SMYDTLS": {
			"NOOFBYTES": "2",
			"OFFSET": "26",
			"DATATYPE": "SHORT"
		},
		"USMYWNLSF": {
			"NOOFBYTES": "2",
			"OFFSET": "28",
			"DATATYPE": "USHORT"
		},
		"USMYDN": {
			"NOOFBYTES": "2",
			"OFFSET": "30",
			"DATATYPE": "USHORT"
		},
		"USMYDTLSF": {
			"NOOFBYTES": "2",
			"OFFSET": "32",
			"DATATYPE": "SHORT"
		},
		"USMYUTCID": {
			"NOOFBYTES": "2",
			"OFFSET": "34",
			"DATATYPE": "USHORT"
		},
		"ULMYGPSTOW": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"ULMYGPSWN": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"BMYGLONASSINDICATOR": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "BOOL"
		},
		"AUCMYRESERVEDBITS": {
			"NOOFBYTES": "1",
			"OFFSET": "48",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"SBAS17": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ACLMYENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CLASSARRAY"
		},
		"USMYDATAID": {
			"NOOFBYTES": "2",
			"OFFSET": "8",
			"DATATYPE": "USHORT"
		},
		"USMYPRN": {
			"NOOFBYTES": "2",
			"OFFSET": "10",
			"DATATYPE": "USHORT"
		},
		"USMYHEALTH": {
			"NOOFBYTES": "2",
			"OFFSET": "12",
			"DATATYPE": "USHORT"
		},
		"LMYX": {
			"NOOFBYTES": "4",
			"OFFSET": "14",
			"DATATYPE": "LONG"
		},
		"LMYY": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "LONG"
		},
		"LMYZ": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "LONG"
		},
		"LMYXVEL": {
			"NOOFBYTES": "4",
			"OFFSET": "26",
			"DATATYPE": "LONG"
		},
		"LMYYVEL": {
			"NOOFBYTES": "4",
			"OFFSET": "30",
			"DATATYPE": "LONG"
		},
		"LMYZVEL": {
			"NOOFBYTES": "4",
			"OFFSET": "34",
			"DATATYPE": "LONG"
		},
		"ULMYT0": {
			"NOOFBYTES": "4",
			"OFFSET": "38",
			"DATATYPE": "ULONG"
		},
		"CABO": ["8"],
		"CAAO": ["34"]
	},
	"SBAS18": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYNUMBANDS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYBANDNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYIODI": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"AUCMYIGPMASK": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"ULMYSPAREBIT": {
			"NOOFBYTES": "4",
			"OFFSET": "17",
			"DATATYPE": "ULONG"
		}
	},
	"SBAS2": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"IODF": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"IODP": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ALMYPRC": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FIXEDLONGARRAY"
		},
		"AULMYUDREI": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FIXEDULONGARRAY"
		}
	},
	"SBAS24": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ALMYPRC": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FIXEDLONGARRAY"
		},
		"AULMYUDREI": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FIXEDULONGARRAY"
		},
		"ULMYIODP": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "ULONG"
		},
		"ULMYBLOCKID": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYIODF": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYSPARE": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "ULONG"
		},
		"ULMYVELOCITYCODE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYPRNMASKNUMBER1": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYIODE1": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"LMYDX1": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "LONG"
		},
		"LMYDY1": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "LONG"
		},
		"LMYDZ1": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "LONG"
		},
		"LMYAF01": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "LONG"
		},
		"ULMYPRNMASKNUMBER2": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"ULMYIODE2": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"LMYDX2ORDDX": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "LONG"
		},
		"LMYDY2ORDDY": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "LONG"
		},
		"LMYDZ2ORDDZ": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "LONG"
		},
		"LMYAF02ORAF1": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "LONG"
		},
		"ULMYTOD": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "ULONG"
		}
	},
	"SBAS25": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYVELOCITYCODE": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "ULONG"
		},
		"ULMYPRNMASKNUMBER1": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "ULONG"
		},
		"ULMYIODE1": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "ULONG"
		},
		"LMYDX1": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "LONG"
		},
		"LMYDY1": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "LONG"
		},
		"LMYDZ1": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "LONG"
		},
		"LMYAF01": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "LONG"
		},
		"ULMYPRNMASKNUMBER2": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "ULONG"
		},
		"ULMYIODE2": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "ULONG"
		},
		"LMYDX2ORDDX": {
			"NOOFBYTES": "4",
			"OFFSET": "104",
			"DATATYPE": "LONG"
		},
		"LMYDY2ORDDY": {
			"NOOFBYTES": "4",
			"OFFSET": "108",
			"DATATYPE": "LONG"
		},
		"LMYDZ2ORDDZ": {
			"NOOFBYTES": "4",
			"OFFSET": "112",
			"DATATYPE": "LONG"
		},
		"LMYAF02ORAF1": {
			"NOOFBYTES": "4",
			"OFFSET": "116",
			"DATATYPE": "LONG"
		},
		"ULMYTOD": {
			"NOOFBYTES": "4",
			"OFFSET": "120",
			"DATATYPE": "ULONG"
		},
		"ULMYIODP": {
			"NOOFBYTES": "4",
			"OFFSET": "124",
			"DATATYPE": "ULONG"
		},
		"ULMYSPARE": {
			"NOOFBYTES": "4",
			"OFFSET": "128",
			"DATATYPE": "ULONG"
		}
	},
	"SBAS26": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYBANDNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYBLOCKID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ACLMYGRIDPOINTDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYIGPVDE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYGIVEI": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYIODI": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYSPAREBITS": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"CABO": ["16"],
		"CAAO": ["16"]
	},
	"SBAS27": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYIODS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYNUMSERVICEMSGS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSERVICEMSGNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYPRIORITYCODE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYUDREINSIDE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYUDREOUTSIDE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ACLMYREGIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "CLASSARRAY"
		},
		"LMYLAT1": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "LONG"
		},
		"LMYLONG1": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "LONG"
		},
		"LMYLAT2": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "LONG"
		},
		"LMYLONG2": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "LONG"
		},
		"ULMYSHAPE": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYT0": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"CABO": ["32"],
		"CAAO": ["24"]
	},
	"SBAS3": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"IODF": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"IODP": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ALMYPRC": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FIXEDLONGARRAY"
		},
		"AULMYUDREI": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FIXEDULONGARRAY"
		}
	},
	"SBAS32": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"IODP": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ALMYPRC": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FIXEDLONGARRAY"
		},
		"AULMYUDREI": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FIXEDULONGARRAY"
		}
	},
	"SBAS33": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"IODP": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ALMYPRC": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FIXEDLONGARRAY"
		},
		"AULMYUDREI": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FIXEDULONGARRAY"
		}
	},
	"SBAS34": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"IODP": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ALMYPRC": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FIXEDLONGARRAY"
		},
		"AULMYUDREI": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FIXEDULONGARRAY"
		}
	},
	"SBAS35": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"IODP": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ALMYPRC": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FIXEDLONGARRAY"
		},
		"AULMYUDREI": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FIXEDULONGARRAY"
		}
	},
	"SBAS4": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"IODF": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"IODP": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ALMYPRC": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FIXEDLONGARRAY"
		},
		"AULMYUDREI": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FIXEDULONGARRAY"
		}
	},
	"SBAS45": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYPRNMASKNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULMYIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"LMYDX": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "LONG"
		},
		"LMYDY": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "LONG"
		},
		"LMYDZ": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "LONG"
		},
		"LMYDDX": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "LONG"
		},
		"LMYDDY": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "LONG"
		},
		"LMYDDZ": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "LONG"
		},
		"LMYDAF0": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "LONG"
		},
		"ULMYTOD": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "ULONG"
		},
		"ULMYIODP": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "ULONG"
		}
	},
	"SBAS5": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"IODF": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"IODP": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ALMYPRC": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FIXEDLONGARRAY"
		},
		"AULMYUDREI": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FIXEDULONGARRAY"
		}
	},
	"SBAS6": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYIODF2": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYIODF3": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYIODF4": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYIODF5": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"AULMYUDREI": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FIXEDULONGARRAY"
		}
	},
	"SBAS7": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSYSTEMLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYIODP": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSPAREBITS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"AULMYDEGRADATIONFACTOR": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FIXEDULONGARRAY"
		}
	},
	"SBAS9": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYIODN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYT0": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYURA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYXVEL": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYYVEL": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"DMYZVEL": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		},
		"DMYXACCEL": {
			"NOOFBYTES": "8",
			"OFFSET": "64",
			"DATATYPE": "DOUBLE"
		},
		"DMYYACCEL": {
			"NOOFBYTES": "8",
			"OFFSET": "72",
			"DATATYPE": "DOUBLE"
		},
		"DMYZACCEL": {
			"NOOFBYTES": "8",
			"OFFSET": "80",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF0": {
			"NOOFBYTES": "8",
			"OFFSET": "88",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF1": {
			"NOOFBYTES": "8",
			"OFFSET": "96",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["4"],
		"CAAO": ["104"]
	},
	"SBASCORR": {
		"ACLMYENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"FMYCORRECTION": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		}
	},
	"SBASCORRECTION": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"EMYMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "LBANDTESTMODEENUM"
		}
	},
	"SBASECUTOFF": {
		"FMYELEVATIONCUTOFFANGLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		}
	},
	"SBASTIMEOUT": {
		"EMYTIMEOUTENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "TIMEOUTENUM"
		},
		"DMYTIMEOUT": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DRESERVED": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		}
	},
	"CMRDATAGLOOBS": {
		"ULMYCMRSYNC": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYLENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYVERSION": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYSTATIONID": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMESSAGETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYNUMBEROFSV": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYEPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYCLOCKBIASVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"LMYCLOCKOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "LONG"
		},
		"ACLMYCMRBODY": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSLOTNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"BMYCODEFLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "BOOL"
		},
		"BMYL1PHASEVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "BOOL"
		},
		"BMYISL2PRESENT": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "BOOL"
		},
		"ULMYL1PSR": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ULONG"
		},
		"LMYL1CARRIEROFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "LONG"
		},
		"ULMYL1SNR": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "ULONG"
		},
		"ULMYL1SLIPCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "ULONG"
		},
		"BMYISL2CODE": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "BOOL"
		},
		"BMYCODETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "BOOL"
		},
		"BMYISL2CODEVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "BOOL"
		},
		"BMYISL2PHASEVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "BOOL"
		},
		"BMYPHASEFULL": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "BOOL"
		},
		"ULMYRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "ULONG"
		},
		"LMYL2RANGEOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "104",
			"DATATYPE": "LONG"
		},
		"LMYL2CARRIEROFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "108",
			"DATATYPE": "LONG"
		},
		"ULMYL2SNR": {
			"NOOFBYTES": "4",
			"OFFSET": "112",
			"DATATYPE": "ULONG"
		},
		"ULMYL2SLIPCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "116",
			"DATATYPE": "ULONG"
		},
		"CABO": ["48"],
		"CAAO": ["72"]
	},
	"DLLTIMECONST": {
		"EMYSIGNALTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SIGNALTYPEENUM"
		},
		"ULMYTIMECONSTSEC": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"RTCM1037": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"SUBNETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "3",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT20"
		},
		"MULTIPLEMESSAGEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"MASTERREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"AUXREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NUMSATS": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "14",
			"DATATYPE": "CLASSARRAY"
		},
		"AMBIGUITYSTATUSFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"NONSYNCCOUNT": {
			"NOOFBYTES": "1",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_UINT3"
		},
		"IONOCARRIERPHASECORRDIFF": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "RTCMV3_INT17"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"CABO": ["18"],
		"CAAO": ["7"]
	},
	"RTCM1037IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"SUBNETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "3",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT20"
		},
		"MULTIPLEMESSAGEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"MASTERREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"AUXREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NUMSATS": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "14",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"AMBIGUITYSTATUSFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"NONSYNCCOUNT": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "RTCMV3_UINT3"
		},
		"IONOCARRIERPHASECORRDIFF": {
			"NOOFBYTES": "4",
			"OFFSET": "21",
			"DATATYPE": "RTCMV3_INT17"
		},
		"CABO": ["18"],
		"CAAO": ["7"]
	},
	"RTCM1038": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"SUBNETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "3",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT20"
		},
		"MULTIPLEMESSAGEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"MASTERREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"AUXREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NUMSATS": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "14",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"AMBIGUITYSTATUSFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"NONSYNCCOUNT": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "RTCMV3_UINT3"
		},
		"GEOCARRIERPHASECORRDIFF": {
			"NOOFBYTES": "4",
			"OFFSET": "21",
			"DATATYPE": "RTCMV3_INT17"
		},
		"IODE": {
			"NOOFBYTES": "1",
			"OFFSET": "25",
			"DATATYPE": "RTCMV3_BIT8"
		},
		"CABO": ["18"],
		"CAAO": ["8"]
	},
	"RTCM1038IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"SUBNETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "3",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT20"
		},
		"MULTIPLEMESSAGEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"MASTERREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"AUXREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NUMSATS": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "14",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"AMBIGUITYSTATUSFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"NONSYNCCOUNT": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "RTCMV3_UINT3"
		},
		"GEOCARRIERPHASECORRDIFF": {
			"NOOFBYTES": "4",
			"OFFSET": "21",
			"DATATYPE": "RTCMV3_INT17"
		},
		"IODE": {
			"NOOFBYTES": "1",
			"OFFSET": "25",
			"DATATYPE": "RTCMV3_BIT8"
		},
		"CABO": ["18"],
		"CAAO": ["8"]
	},
	"RTCM1039": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"SUBNETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "3",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT20"
		},
		"MULTIPLEMESSAGEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"MASTERREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"AUXREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NUMSATS": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "14",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"AMBIGUITYSTATUSFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"NONSYNCCOUNT": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "RTCMV3_UINT3"
		},
		"GEOCARRIERPHASECORRDIFF": {
			"NOOFBYTES": "4",
			"OFFSET": "21",
			"DATATYPE": "RTCMV3_INT17"
		},
		"IODE": {
			"NOOFBYTES": "1",
			"OFFSET": "25",
			"DATATYPE": "RTCMV3_BIT8"
		},
		"IONOCARRIERPHASECORRDIFF": {
			"NOOFBYTES": "4",
			"OFFSET": "26",
			"DATATYPE": "RTCMV3_INT17"
		},
		"CABO": ["18"],
		"CAAO": ["12"]
	},
	"RTCM1039IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"SUBNETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "3",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT20"
		},
		"MULTIPLEMESSAGEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"MASTERREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"AUXREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NUMSATS": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "14",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"AMBIGUITYSTATUSFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"NONSYNCCOUNT": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "RTCMV3_UINT3"
		},
		"GEOCARRIERPHASECORRDIFF": {
			"NOOFBYTES": "4",
			"OFFSET": "21",
			"DATATYPE": "RTCMV3_INT17"
		},
		"IODE": {
			"NOOFBYTES": "1",
			"OFFSET": "25",
			"DATATYPE": "RTCMV3_BIT8"
		},
		"IONOCARRIERPHASECORRDIFF": {
			"NOOFBYTES": "4",
			"OFFSET": "26",
			"DATATYPE": "RTCMV3_INT17"
		},
		"CABO": ["18"],
		"CAAO": ["12"]
	},
	"RTCM1015": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"SUBNETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "3",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT23"
		},
		"MULTIPLEMESSAGEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"MASTERREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"AUXREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NUMSATS": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "14",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"AMBIGUITYSTATUSFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"NONSYNCCOUNT": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "RTCMV3_UINT3"
		},
		"IONOCARRIERPHASECORRDIFF": {
			"NOOFBYTES": "4",
			"OFFSET": "21",
			"DATATYPE": "RTCMV3_INT17"
		},
		"CABO": ["18"],
		"CAAO": ["7"]
	},
	"RTCM1015IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"SUBNETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "3",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT23"
		},
		"MULTIPLEMESSAGEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"MASTERREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"AUXREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NUMSATS": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "14",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"AMBIGUITYSTATUSFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"NONSYNCCOUNT": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "RTCMV3_UINT3"
		},
		"IONOCARRIERPHASECORRDIFF": {
			"NOOFBYTES": "4",
			"OFFSET": "21",
			"DATATYPE": "RTCMV3_INT17"
		},
		"CABO": ["18"],
		"CAAO": ["7"]
	},
	"RTCM1016": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"SUBNETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "3",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT23"
		},
		"MULTIPLEMESSAGEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"MASTERREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"AUXREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NUMSATS": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "14",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"AMBIGUITYSTATUSFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"NONSYNCCOUNT": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "RTCMV3_UINT3"
		},
		"GEOCARRIERPHASECORRDIFF": {
			"NOOFBYTES": "4",
			"OFFSET": "21",
			"DATATYPE": "RTCMV3_INT17"
		},
		"IODE": {
			"NOOFBYTES": "1",
			"OFFSET": "25",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"CABO": ["18"],
		"CAAO": ["8"]
	},
	"RTCM1016IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"SUBNETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "3",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT23"
		},
		"MULTIPLEMESSAGEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"MASTERREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"AUXREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NUMSATS": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "14",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"AMBIGUITYSTATUSFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"NONSYNCCOUNT": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "RTCMV3_UINT3"
		},
		"GEOCARRIERPHASECORRDIFF": {
			"NOOFBYTES": "4",
			"OFFSET": "21",
			"DATATYPE": "RTCMV3_INT17"
		},
		"IODE": {
			"NOOFBYTES": "1",
			"OFFSET": "25",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"CABO": ["18"],
		"CAAO": ["8"]
	},
	"RTCM1017": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"SUBNETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "3",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT23"
		},
		"MULTIPLEMESSAGEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"MASTERREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"AUXREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NUMSATS": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "14",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"AMBIGUITYSTATUSFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"NONSYNCCOUNT": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "RTCMV3_UINT3"
		},
		"GEOCARRIERPHASECORRDIFF": {
			"NOOFBYTES": "4",
			"OFFSET": "21",
			"DATATYPE": "RTCMV3_INT17"
		},
		"IODE": {
			"NOOFBYTES": "1",
			"OFFSET": "25",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"IONOCARRIERPHASECORRDIFF": {
			"NOOFBYTES": "4",
			"OFFSET": "26",
			"DATATYPE": "RTCMV3_INT17"
		},
		"CABO": ["18"],
		"CAAO": ["12"]
	},
	"RTCM1017IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"SUBNETWORKID": {
			"NOOFBYTES": "1",
			"OFFSET": "3",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"EPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT23"
		},
		"MULTIPLEMESSAGEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"MASTERREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"AUXREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NUMSATS": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "14",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"AMBIGUITYSTATUSFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"NONSYNCCOUNT": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "RTCMV3_UINT3"
		},
		"GEOCARRIERPHASECORRDIFF": {
			"NOOFBYTES": "4",
			"OFFSET": "21",
			"DATATYPE": "RTCMV3_INT17"
		},
		"IODE": {
			"NOOFBYTES": "1",
			"OFFSET": "25",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"IONOCARRIERPHASECORRDIFF": {
			"NOOFBYTES": "4",
			"OFFSET": "26",
			"DATATYPE": "RTCMV3_INT17"
		},
		"CABO": ["18"],
		"CAAO": ["12"]
	},
	"RTCM1036": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NUMGLODATA": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "CLASSARRAY"
		},
		"GLOSATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"GLOSUBIOD": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"GLOCRC24": {
			"NOOFBYTES": "4",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT24"
		},
		"CABO": ["9"],
		"CAAO": ["6"]
	},
	"RTCM1036IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NUMGLODATA": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT4"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "CLASSARRAY"
		},
		"GLOSATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"GLOSUBIOD": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"GLOCRC24": {
			"NOOFBYTES": "4",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_BIT24"
		},
		"CABO": ["9"],
		"CAAO": ["6"]
	},
	"RTCM1034": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"FKPEPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT20"
		},
		"NUMSATS": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"IODE": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "RTCMV3_BIT8"
		},
		"NORTHGEOGRADIENT": {
			"NOOFBYTES": "2",
			"OFFSET": "15",
			"DATATYPE": "RTCMV3_INT12"
		},
		"EASTGEOGRADIENT": {
			"NOOFBYTES": "2",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_INT12"
		},
		"NORTHIONOGRADIENT": {
			"NOOFBYTES": "2",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_INT14"
		},
		"EASTIONOGRADIENT": {
			"NOOFBYTES": "2",
			"OFFSET": "21",
			"DATATYPE": "RTCMV3_INT14"
		},
		"CABO": ["13"],
		"CAAO": ["10"]
	},
	"RTCM1034IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"FKPEPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT20"
		},
		"NUMSATS": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"IODE": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "RTCMV3_BIT8"
		},
		"NORTHGEOGRADIENT": {
			"NOOFBYTES": "2",
			"OFFSET": "15",
			"DATATYPE": "RTCMV3_INT12"
		},
		"EASTGEOGRADIENT": {
			"NOOFBYTES": "2",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_INT12"
		},
		"NORTHIONOGRADIENT": {
			"NOOFBYTES": "2",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_INT14"
		},
		"EASTIONOGRADIENT": {
			"NOOFBYTES": "2",
			"OFFSET": "21",
			"DATATYPE": "RTCMV3_INT14"
		},
		"CABO": ["13"],
		"CAAO": ["10"]
	},
	"RTCM1035": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"FKPEPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT17"
		},
		"NUMSATS": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"IODE": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "RTCMV3_BIT8"
		},
		"NORTHGEOGRADIENT": {
			"NOOFBYTES": "2",
			"OFFSET": "15",
			"DATATYPE": "RTCMV3_INT12"
		},
		"EASTGEOGRADIENT": {
			"NOOFBYTES": "2",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_INT12"
		},
		"NORTHIONOGRADIENT": {
			"NOOFBYTES": "2",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_INT14"
		},
		"EASTIONOGRADIENT": {
			"NOOFBYTES": "2",
			"OFFSET": "21",
			"DATATYPE": "RTCMV3_INT14"
		},
		"CABO": ["13"],
		"CAAO": ["10"]
	},
	"RTCM1035IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"FKPEPOCHTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT17"
		},
		"NUMSATS": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_UINT5"
		},
		"ACLBODYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "CLASSARRAY"
		},
		"SATELLITEID": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"IODE": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "RTCMV3_BIT8"
		},
		"NORTHGEOGRADIENT": {
			"NOOFBYTES": "2",
			"OFFSET": "15",
			"DATATYPE": "RTCMV3_INT12"
		},
		"EASTGEOGRADIENT": {
			"NOOFBYTES": "2",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_INT12"
		},
		"NORTHIONOGRADIENT": {
			"NOOFBYTES": "2",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_INT14"
		},
		"EASTIONOGRADIENT": {
			"NOOFBYTES": "2",
			"OFFSET": "21",
			"DATATYPE": "RTCMV3_INT14"
		},
		"CABO": ["13"],
		"CAAO": ["10"]
	},
	"CONFIGCODE": {
		"ECONFIGSTATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SECURITYENUM"
		},
		"ACDATA1": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		},
		"ACDATA2": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "STRING"
		},
		"ACDATA3": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "STRING"
		},
		"ACDATA4": {
			"NOOFBYTES": "1",
			"OFFSET": "7",
			"DATATYPE": "STRING"
		},
		"ACDATA5": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "STRING"
		},
		"ACDESCRIPTION": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "STRING"
		}
	},
	"BLCONSTRAINT": {
		"EMYENABLECONSTRAINT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"DMYBASELINELENGTH": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYCONSTRAINTSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		}
	},
	"SATVIS2": {
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"BMYISSATVISVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "BOOL"
		},
		"BMYWASGNSSALMANACUSED": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "BOOL"
		},
		"ACLMYSATVISLIST": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "SATELLITEID"
		},
		"ULMYSATHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"DMYELEVATION": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYTRUEDOPPLER": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYAPPARENTDOPPLER": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["16"],
		"CAAO": ["40"]
	},
	"GPHDT": {
		"ETALKERID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "NMEATALKERIDENUM"
		},
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SOLTYPEENUM"
		},
		"BMYOUTPUTHDT": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "BOOL"
		},
		"FMYHEADING": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "21",
			"DATATYPE": "UCHAR"
		}
	},
	"HWCONFIGTABLE": {
		"ULMYNUMCLEAREDPACKETS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYNUMUNUSEDPACKETS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"CLMYHWCONFIGTABLEENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "CLASSARRAY"
		},
		"ACMYTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "STRING"
		},
		"ACMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "STRING"
		},
		"CABO": ["12"],
		"CAAO": ["17"]
	},
	"DEBUGFIQ": {
		"FMYFIQAVERAGERUNTIMEUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		},
		"FMYFIQMAXRUNTIMEUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"FMYFIQRUNTIMEUS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYFIQMAXPERIODUS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYFIQPERIODUS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		}
	},
	"GLORAWL2FRAME": {
		"UCMYSLOT": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "UCHAR"
		},
		"CMYFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "CHAR"
		},
		"ULMYSIGCHAN": {
			"NOOFBYTES": "4",
			"OFFSET": "2",
			"DATATYPE": "ULONG"
		},
		"AUCMYRAWFRAMEDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"RTCAREFEXT": {
		"UCMYNOVATELDESIGNATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "UCHAR"
		},
		"UCMYSUBTYPEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "UCHAR"
		},
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "2",
			"DATATYPE": "ULONG"
		},
		"DMYRTCATIME": {
			"NOOFBYTES": "8",
			"OFFSET": "6",
			"DATATYPE": "DOUBLE"
		},
		"UCMYSOLSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "UCHAR"
		},
		"UCMYPOSTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "15",
			"DATATYPE": "UCHAR"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYSTDX": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYSTDY": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"DMYSTDZ": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		},
		"DMYSTDXY": {
			"NOOFBYTES": "8",
			"OFFSET": "64",
			"DATATYPE": "DOUBLE"
		},
		"DMYSTDYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "72",
			"DATATYPE": "DOUBLE"
		},
		"DMYSTDZX": {
			"NOOFBYTES": "8",
			"OFFSET": "80",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMSATSTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "92",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMSATSINSOL": {
			"NOOFBYTES": "1",
			"OFFSET": "93",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMHIGHSATS": {
			"NOOFBYTES": "1",
			"OFFSET": "94",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMHIGHL2SATS": {
			"NOOFBYTES": "1",
			"OFFSET": "95",
			"DATATYPE": "UCHAR"
		},
		"UCMYRESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "96",
			"DATATYPE": "UCHAR"
		}
	},
	"RTCAREFEXTIN": {
		"ULMESSAGEIDENTIFIER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFSTATION": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMESSAGETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMESSAGELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"UCMYNOVATELDESIGNATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "UCHAR"
		},
		"UCMYSUBTYPEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "21",
			"DATATYPE": "UCHAR"
		},
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "ULONG"
		},
		"DMYRTCATIME": {
			"NOOFBYTES": "8",
			"OFFSET": "26",
			"DATATYPE": "DOUBLE"
		},
		"UCMYSOLSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "34",
			"DATATYPE": "UCHAR"
		},
		"UCMYPOSTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "35",
			"DATATYPE": "UCHAR"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYSTDX": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYSTDY": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYSTDZ": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"DMYSTDXY": {
			"NOOFBYTES": "8",
			"OFFSET": "84",
			"DATATYPE": "DOUBLE"
		},
		"DMYSTDYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "92",
			"DATATYPE": "DOUBLE"
		},
		"DMYSTDZX": {
			"NOOFBYTES": "8",
			"OFFSET": "100",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "108",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMSATSTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "112",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMSATSINSOL": {
			"NOOFBYTES": "1",
			"OFFSET": "113",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMHIGHSATS": {
			"NOOFBYTES": "1",
			"OFFSET": "114",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMHIGHL2SATS": {
			"NOOFBYTES": "1",
			"OFFSET": "115",
			"DATATYPE": "UCHAR"
		},
		"UCMYRESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "116",
			"DATATYPE": "UCHAR"
		}
	},
	"MASTERPOS": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"EMYDATUMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "DATUMENUM"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FFLOAT": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "66",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "67",
			"DATATYPE": "UCHAR"
		},
		"UCMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "1",
			"OFFSET": "68",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "71",
			"DATATYPE": "UCHAR"
		}
	},
	"ROVERPOS": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"EMYDATUMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "DATUMENUM"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FFLOAT": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "66",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "67",
			"DATATYPE": "UCHAR"
		},
		"UCMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "1",
			"OFFSET": "68",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "71",
			"DATATYPE": "UCHAR"
		}
	},
	"HEADINGDEBUG": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYBLENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYHEADING": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYPITCH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"FFLOAT": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"FMYHEADINGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"FMYPITCHSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "36",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "40",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "41",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "42",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "43",
			"DATATYPE": "UCHAR"
		},
		"UCMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "1",
			"OFFSET": "44",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "45",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "46",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "47",
			"DATATYPE": "UCHAR"
		}
	},
	"HDTOUTTHRESHOLD": {
		"FMYHEADINGSTDTHRESHOLD": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		}
	},
	"RAWCNAVFRAME": {
		"ULMYSIGCHANNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMEID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"AUCMYRAWFRAMEDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"MARK1PVA": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "INSSTATUSENUM"
		}
	},
	"MARK2PVA": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "INSSTATUSENUM"
		}
	},
	"SETMARK1OFFSET": {
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "3",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"SETMARK2OFFSET": {
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "3",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"APPLYVEHICLEBODYROTATION": {
		"EMYTRIGGER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"CONFIRMCODE": {
		"ACCONFIRMATIONCODE": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		}
	},
	"DEBUGTRACE": {
		"EMYOUTPUTPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		},
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ENABLEENUM"
		},
		"EMYCOMMAND": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "TRACECOMMANDENUM"
		},
		"ULMYPARAMETER0": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYPARAMETER1": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		}
	},
	"MARK3TIME": {
		"LMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "LONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYOFFSETSTD": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYUTCOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "CLOCKMODELSTATUSENUM"
		}
	},
	"MARK4TIME": {
		"LMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "LONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYOFFSETSTD": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYUTCOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "CLOCKMODELSTATUSENUM"
		}
	},
	"MFGTEST": {
		"EMYMFGTESTTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "MFGTESTTYPEENUM"
		},
		"ULMYPARAM1": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYPARAM2": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"SZPARAM3": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "STRING"
		},
		"CABO": ["4"],
		"CAAO": ["13"]
	},
	"MFGTESTRESULTS": {
		"MFGTESTRESULTSLIST": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYMFGTESTTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "MFGTESTTYPEENUM"
		},
		"EMYTESTRESULT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "TESTRESULTSENUM"
		},
		"SZMYRESULT": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "STRING"
		},
		"CABO": ["4"],
		"CAAO": ["9"]
	},
	"SIGNALCONFIGURATION": {
		"ACLSIGCONFIG": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSIGNALTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SIGNALTYPEENUM"
		},
		"FMYPLLBANDWIDTH": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"ULMYDLLTIMECONSTSEC": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"EMYCORRELATORTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "CORRELATORTYPEENUM"
		}
	},
	"RFBANDWIDTH": {
		"EMYRF1BANDWIDTH": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RFBANDWIDTHENUM"
		},
		"EMYRF2BANDWIDTH": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RFBANDWIDTHENUM"
		}
	},
	"HEADINGOFFSET": {
		"FMYHEADINGOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		},
		"FMYPITCHOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		}
	},
	"ASSIGNCW": {
		"SVMYCHAN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SVCHAN"
		},
		"EMYCWFREQUENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CWFREQUENCYENUM"
		},
		"LMYDOPPLER": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "LONG"
		},
		"ULMYDOPPLERWINDOW": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		}
	},
	"PDPSTAT": {
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PDPFILTERCOMMANDENUM"
		},
		"EMYMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "PDPFILTERMODEENUM"
		},
		"EMYDYNAMICS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "PDPFILTERDYNAMICSENUM"
		},
		"UINUMPSRUSED": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "UINT"
		},
		"UINUMPHASEUSED": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "UINT"
		},
		"DMYSECONDSCONTRELOP": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYESTIMATEDNORTHING900SECSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYESTIMATEDEASTING900SECSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		}
	},
	"SUPERAG": {
		"EMYCOMMAND": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SUPERAGCOMMANDENUM"
		},
		"ULMYOFFSETDEWEIGHT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"SETCANNAME": {
		"ULMANUFACTURERCODE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULINDUSTRYGROUP": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULDEVICECLASS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULDEVICECLASSINSTANCE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULFUNCTION": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULFUNCTIONINSTANCE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULECUINSTANCE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULPREFERREDADDRESS": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ECANPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "CANPORTENUM"
		}
	},
	"MARK1COUNT": {
		"ULMYPERIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"USMYCOUNT": {
			"NOOFBYTES": "2",
			"OFFSET": "4",
			"DATATYPE": "USHORT"
		}
	},
	"MARK2COUNT": {
		"ULMYPERIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"USMYCOUNT": {
			"NOOFBYTES": "2",
			"OFFSET": "4",
			"DATATYPE": "USHORT"
		}
	},
	"MARK3COUNT": {
		"ULMYPERIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"USMYCOUNT": {
			"NOOFBYTES": "2",
			"OFFSET": "4",
			"DATATYPE": "USHORT"
		}
	},
	"MARK4COUNT": {
		"ULMYPERIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"USMYCOUNT": {
			"NOOFBYTES": "2",
			"OFFSET": "4",
			"DATATYPE": "USHORT"
		}
	},
	"RTCM1033": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"DESCRIPTORCOUNTER": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"ANTENNADESCRIPTOR": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		},
		"ANTENNASETUPID": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"SERIALNUMBERCOUNTER": {
			"NOOFBYTES": "1",
			"OFFSET": "7",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"ANTENNASERIALNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		},
		"RECEIVERTYPEDESCRIPTORCOUNTER": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"RECEIVERTYPEDESCRIPTOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		},
		"RECEIVERFIRMWAREVERSIONCOUNTER": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"RECEIVERFIRMWAREVERSION": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		},
		"RECEIVERSERIALNUMBERCOUNTER": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"RECEIVERSERIALNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		}
	},
	"RTCM1033IN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"DESCRIPTORCOUNTER": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"ANTENNADESCRIPTOR": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		},
		"ANTENNASETUPID": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"SERIALNUMBERCOUNTER": {
			"NOOFBYTES": "1",
			"OFFSET": "7",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"ANTENNASERIALNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		},
		"RECEIVERTYPEDESCRIPTORCOUNTER": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"RECEIVERTYPEDESCRIPTOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		},
		"RECEIVERFIRMWAREVERSIONCOUNTER": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"RECEIVERFIRMWAREVERSION": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		},
		"RECEIVERSERIALNUMBERCOUNTER": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"RECEIVERSERIALNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		}
	},
	"RTCMDATA1033": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"REFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"DESCRIPTORCOUNTER": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"ANTENNADESCRIPTOR": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		},
		"ANTENNASETUPID": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"SERIALNUMBERCOUNTER": {
			"NOOFBYTES": "1",
			"OFFSET": "7",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"ANTENNASERIALNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		},
		"RECEIVERTYPEDESCRIPTORCOUNTER": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"RECEIVERTYPEDESCRIPTOR": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		},
		"RECEIVERFIRMWAREVERSIONCOUNTER": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"RECEIVERFIRMWAREVERSION": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		},
		"RECEIVERSERIALNUMBERCOUNTER": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"RECEIVERSERIALNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		},
		"CABO": ["4"],
		"CAAO": ["15"]
	},
	"DLLINFO": {
		"ACLMYDLLINFO": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"SIGMYCHAN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SIGCHAN"
		},
		"ULMYPERIODUS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"DMYCODEERROR": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYCODECORR": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"FMYCODERATE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"FMYBANDWIDTH": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYK0": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYK1": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		}
	},
	"CHANRESETEVENT": {
		"SIGMYCHAN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SIGCHAN"
		},
		"ULMYSATELLITEID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"EMYRESETEVENT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SIGCHANEVENTENUM"
		},
		"CABO": ["4"],
		"CAAO": ["12"]
	},
	"PLLINFO": {
		"ACLMYPLLINFO": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"SIGMYCHAN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SIGCHAN"
		},
		"ULMYPERIODUS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"FMYPHASEERROR": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYDOPPLER": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYACCELERATION": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"FMYBANDWIDTH": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"FMYK0": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"FMYK1": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYK2": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"EMYLOOPTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "CARRIERLOOPTYPEENUM"
		}
	},
	"GALECUTOFF": {
		"FMYELEVATIONCUTOFFANGLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		}
	},
	"SETMARK3OFFSET": {
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "3",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"SETMARK4OFFSET": {
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "3",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"MARK3PVA": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "INSSTATUSENUM"
		}
	},
	"MARK4PVA": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "INSSTATUSENUM"
		}
	},
	"GALALMANAC": {
		"ULMYSATID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"BMYFNAVRECEIVED": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "BOOL"
		},
		"BMYINAVRECEIVED": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "BOOL"
		},
		"UCMYE1BHEALTH": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "UCHAR"
		},
		"UCMYE5AHEALTH": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "UCHAR"
		},
		"UCMYE5BHEALTH": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "UCHAR"
		},
		"UCMYRESERVED1": {
			"NOOFBYTES": "1",
			"OFFSET": "15",
			"DATATYPE": "UCHAR"
		},
		"ULMYIODA": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"DMYECC": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGADOT": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA0": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYM0": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF0": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF1": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAROOTA": {
			"NOOFBYTES": "8",
			"OFFSET": "84",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAI": {
			"NOOFBYTES": "8",
			"OFFSET": "92",
			"DATATYPE": "DOUBLE"
		}
	},
	"GALCLOCK": {
		"DMYA0": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYA1": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"LMYDELTATLS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "LONG"
		},
		"ULMYTOT": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYWNT": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYWNLSF": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYDN": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"LMYDELTATLSF": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "LONG"
		},
		"DMYA0G": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYA1G": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"ULMYT0G": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"ULMYWN0G": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		}
	},
	"GALEPHEMERIS": {
		"ULMYSATID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"BMYFNAVRECEIVED": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "BOOL"
		},
		"BMYINAVRECEIVED": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "BOOL"
		},
		"UCMYE1BHEALTH": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "UCHAR"
		},
		"UCMYE5AHEALTH": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "UCHAR"
		},
		"UCMYE5BHEALTH": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "UCHAR"
		},
		"UCMYE1BDVS": {
			"NOOFBYTES": "1",
			"OFFSET": "15",
			"DATATYPE": "UCHAR"
		},
		"UCMYE5ADVS": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "UCHAR"
		},
		"UCMYE5BDVS": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "UCHAR"
		},
		"UCMYSISA": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "UCHAR"
		},
		"UCMYRESERVED1": {
			"NOOFBYTES": "1",
			"OFFSET": "19",
			"DATATYPE": "UCHAR"
		},
		"ULMYIODNAV": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYT0E": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"DMYROOTA": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAN": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYM0": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYECC": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYCUC": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYCUS": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"DMYCRC": {
			"NOOFBYTES": "8",
			"OFFSET": "84",
			"DATATYPE": "DOUBLE"
		},
		"DMYCRS": {
			"NOOFBYTES": "8",
			"OFFSET": "92",
			"DATATYPE": "DOUBLE"
		},
		"DMYCIC": {
			"NOOFBYTES": "8",
			"OFFSET": "100",
			"DATATYPE": "DOUBLE"
		},
		"DMYCIS": {
			"NOOFBYTES": "8",
			"OFFSET": "108",
			"DATATYPE": "DOUBLE"
		},
		"DMYI0": {
			"NOOFBYTES": "8",
			"OFFSET": "116",
			"DATATYPE": "DOUBLE"
		},
		"DMYIDOT": {
			"NOOFBYTES": "8",
			"OFFSET": "124",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA0": {
			"NOOFBYTES": "8",
			"OFFSET": "132",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGADOT": {
			"NOOFBYTES": "8",
			"OFFSET": "140",
			"DATATYPE": "DOUBLE"
		},
		"ULMYFNAVT0C": {
			"NOOFBYTES": "4",
			"OFFSET": "148",
			"DATATYPE": "ULONG"
		},
		"DMYFNAVAF0": {
			"NOOFBYTES": "8",
			"OFFSET": "152",
			"DATATYPE": "DOUBLE"
		},
		"DMYFNAVAF1": {
			"NOOFBYTES": "8",
			"OFFSET": "160",
			"DATATYPE": "DOUBLE"
		},
		"DMYFNAVAF2": {
			"NOOFBYTES": "8",
			"OFFSET": "168",
			"DATATYPE": "DOUBLE"
		},
		"ULMYINAVT0C": {
			"NOOFBYTES": "4",
			"OFFSET": "176",
			"DATATYPE": "ULONG"
		},
		"DMYINAVAF0": {
			"NOOFBYTES": "8",
			"OFFSET": "180",
			"DATATYPE": "DOUBLE"
		},
		"DMYINAVAF1": {
			"NOOFBYTES": "8",
			"OFFSET": "188",
			"DATATYPE": "DOUBLE"
		},
		"DMYINAVAF2": {
			"NOOFBYTES": "8",
			"OFFSET": "196",
			"DATATYPE": "DOUBLE"
		},
		"DMYE1E5ABGD": {
			"NOOFBYTES": "8",
			"OFFSET": "204",
			"DATATYPE": "DOUBLE"
		},
		"DMYE1E5BBGD": {
			"NOOFBYTES": "8",
			"OFFSET": "212",
			"DATATYPE": "DOUBLE"
		}
	},
	"GALFNAVRAWALMANAC": {
		"ULMYIODA": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYWNA": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYT0A": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"AUCMYRAWDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"GALFNAVRAWEPHEMERIS": {
		"ULMYSATID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ACLMYRAWPAGES": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"AUCMYPAGE": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"UCMYRESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "43",
			"DATATYPE": "UCHAR"
		},
		"CABO": ["16"],
		"CAAO": ["28"]
	},
	"GALINAVRAWALMANAC": {
		"ULMYIODA": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYWNA": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYT0A": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"AUCMYRAWDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"GALINAVRAWEPHEMERIS": {
		"ULMYSATID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ACLMYRAWWORDS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"AUCMYWORD": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"CABO": ["16"],
		"CAAO": ["16"]
	},
	"GALIONO": {
		"DMYAI0": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYAI1": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYAI2": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"UCMYSF1": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "UCHAR"
		},
		"UCMYSF2": {
			"NOOFBYTES": "1",
			"OFFSET": "25",
			"DATATYPE": "UCHAR"
		},
		"UCMYSF3": {
			"NOOFBYTES": "1",
			"OFFSET": "26",
			"DATATYPE": "UCHAR"
		},
		"UCMYSF4": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "UCHAR"
		},
		"UCMYSF5": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "UCHAR"
		}
	},
	"MARK1TIME": {
		"LMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "LONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYOFFSETSTD": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYUTCOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "CLOCKMODELSTATUSENUM"
		}
	},
	"BASEANTENNAIN": {
		"ULMYSOURCEMESSAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ACMYSTATIONID": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZMYMODELNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "STRING"
		},
		"SZMYSERIALNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "37",
			"DATATYPE": "STRING"
		},
		"ULMYSETUPID": {
			"NOOFBYTES": "4",
			"OFFSET": "38",
			"DATATYPE": "ULONG"
		}
	},
	"HEADINGEXT": {
		"UCMYSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "UCHAR"
		},
		"UCMYSOLUTIONTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "UCHAR"
		},
		"FMYHEADINGOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "2",
			"DATATYPE": "FLOAT"
		},
		"FMYPITCHOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "6",
			"DATATYPE": "FLOAT"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "10",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "18",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "26",
			"DATATYPE": "DOUBLE"
		},
		"DMYXVAR": {
			"NOOFBYTES": "8",
			"OFFSET": "34",
			"DATATYPE": "DOUBLE"
		},
		"DMYYVAR": {
			"NOOFBYTES": "8",
			"OFFSET": "42",
			"DATATYPE": "DOUBLE"
		},
		"DMYZVAR": {
			"NOOFBYTES": "8",
			"OFFSET": "50",
			"DATATYPE": "DOUBLE"
		},
		"DMYXYVAR": {
			"NOOFBYTES": "8",
			"OFFSET": "58",
			"DATATYPE": "DOUBLE"
		},
		"DMYYZVAR": {
			"NOOFBYTES": "8",
			"OFFSET": "66",
			"DATATYPE": "DOUBLE"
		},
		"DMYZXVAR": {
			"NOOFBYTES": "8",
			"OFFSET": "74",
			"DATATYPE": "DOUBLE"
		},
		"ACMYMASTERID": {
			"NOOFBYTES": "1",
			"OFFSET": "82",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ACMYROVERID": {
			"NOOFBYTES": "1",
			"OFFSET": "83",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMSATSTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "88",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMSATSINSOL": {
			"NOOFBYTES": "1",
			"OFFSET": "89",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMHIGHSATS": {
			"NOOFBYTES": "1",
			"OFFSET": "90",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMHIGHL2SATS": {
			"NOOFBYTES": "1",
			"OFFSET": "91",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "92",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOFREQSINSOL": {
			"NOOFBYTES": "1",
			"OFFSET": "93",
			"DATATYPE": "UCHAR"
		}
	},
	"HEADINGEXTIN": {
		"UCMYSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "UCHAR"
		},
		"UCMYSOLUTIONTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "UCHAR"
		},
		"FMYHEADINGOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "2",
			"DATATYPE": "FLOAT"
		},
		"FMYPITCHOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "6",
			"DATATYPE": "FLOAT"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "10",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "18",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "26",
			"DATATYPE": "DOUBLE"
		},
		"DMYXVAR": {
			"NOOFBYTES": "8",
			"OFFSET": "34",
			"DATATYPE": "DOUBLE"
		},
		"DMYYVAR": {
			"NOOFBYTES": "8",
			"OFFSET": "42",
			"DATATYPE": "DOUBLE"
		},
		"DMYZVAR": {
			"NOOFBYTES": "8",
			"OFFSET": "50",
			"DATATYPE": "DOUBLE"
		},
		"DMYXYVAR": {
			"NOOFBYTES": "8",
			"OFFSET": "58",
			"DATATYPE": "DOUBLE"
		},
		"DMYYZVAR": {
			"NOOFBYTES": "8",
			"OFFSET": "66",
			"DATATYPE": "DOUBLE"
		},
		"DMYZXVAR": {
			"NOOFBYTES": "8",
			"OFFSET": "74",
			"DATATYPE": "DOUBLE"
		},
		"ACMYMASTERID": {
			"NOOFBYTES": "1",
			"OFFSET": "82",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ACMYROVERID": {
			"NOOFBYTES": "1",
			"OFFSET": "83",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMSATSTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "88",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMSATSINSOL": {
			"NOOFBYTES": "1",
			"OFFSET": "89",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMHIGHSATS": {
			"NOOFBYTES": "1",
			"OFFSET": "90",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMHIGHL2SATS": {
			"NOOFBYTES": "1",
			"OFFSET": "91",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "92",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOFREQSINSOL": {
			"NOOFBYTES": "1",
			"OFFSET": "93",
			"DATATYPE": "UCHAR"
		}
	},
	"USEHPPRECONVERGED": {
		"EMYCOMMAND": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "USEHPPRECONVERGEDCOMMANDENUM"
		}
	},
	"SETROVERID": {
		"SMYID": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		}
	},
	"GIOVEFNAVRAWFRAME": {
		"ULMYSIGCHANNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSATID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMEID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"AUCMYPAGE": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"GIOVEINAVRAWFRAME": {
		"ULMYSIGCHANNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSATID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMEID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"EMYSIGNALTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "SIGNALTYPEENUM"
		},
		"AUCMYPAGE": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"GIOVEFNAVRAWEPHEMERIS": {
		"ULMYSATID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ACLMYRAWPAGES": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"AUCMYPAGE": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"CABO": ["16"],
		"CAAO": ["1"]
	},
	"GIOVEFNAVRAWALMANAC": {
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ACLMYRAWPAGES": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "CLASSARRAY"
		},
		"AUCMYPAGE": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"CABO": ["12"],
		"CAAO": ["1"]
	},
	"GIOVEINAVRAWEPHEMERIS": {
		"ULMYSATID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ACLMYRAWPAGES": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"AUCMYPAGE": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"CABO": ["16"],
		"CAAO": ["1"]
	},
	"GIOVEINAVRAWALMANAC": {
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ACLMYRAWPAGES": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "CLASSARRAY"
		},
		"AUCMYPAGE": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"CABO": ["12"],
		"CAAO": ["1"]
	},
	"OUTPUTUNDULATION": {
		"EMYUNDULATIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "UNDULATIONTYPEENUM"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		}
	},
	"OUTPUTDATUM": {
		"EMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "DATUMENUM"
		},
		"DMYSEMIMAJORAXIS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYINVERSEFLATTENING": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYSCALE": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		}
	},
	"LOGFILESTATUS": {
		"EMYFILESTATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PDC_FILEACTIONENUM"
		},
		"SZMYFILENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDUCHARARRAY"
		},
		"ULMYFILESIZE": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "ULONG"
		},
		"EMYSTORAGEMEDIUM": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "MASSSTORAGEDEVICEENUM"
		},
		"ULMYMEDIAFREESPACE": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "ULONG"
		},
		"ULMYMEDIACAPACITY": {
			"NOOFBYTES": "4",
			"OFFSET": "17",
			"DATATYPE": "ULONG"
		}
	},
	"CHANCONFIGLIST": {
		"SETINUSE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"CHANCFGLISTARRAY": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CLASSARRAY"
		},
		"CLCHANCFGLISTSYSARRAY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "CLASSARRAY"
		},
		"ULNUMCHANS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ESIGNALTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "CHANCONFIGSIGNALENUM"
		},
		"CABO": ["12"],
		"CAAO": ["8"]
	},
	"SELECTCHANCONFIG": {
		"ULCHANCONFIGSETTING": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"SETUTCLEAPSECONDS": {
		"ULSECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULFUTUREWEEKNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULFUTUREDAYNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULFUTURESECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		}
	},
	"RTCMDATAV3USER": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_BIT4"
		},
		"MESSAGE4093SUBTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "3",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"USERDEFINEDDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		}
	},
	"RTCMV3USER": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_BIT4"
		},
		"MESSAGE4093SUBTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "3",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"USERDEFINEDDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		}
	},
	"RTCMV3USERDATA": {
		"USERDEFINEDDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		}
	},
	"RTCMV3USERIN": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_BIT4"
		},
		"MESSAGE4093SUBTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "3",
			"DATATYPE": "RTCMV3_UINT8"
		},
		"USERDEFINEDDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_VARCHAR8ARRAY"
		}
	},
	"SETRTCMV3USER": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARHEXBYTETYPE"
		}
	},
	"SBASCORRECTIONS": {
		"ULMYSOURCEPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"EMYSERVICEPROVIDER": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SBASSERVICEPROVIDERENUM"
		},
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ACLMYCORRECTIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "SATELLITEID"
		},
		"ULMYIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYIODP": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYSLOWCLOCKCORRECTION": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYFASTCLOCKCORRECTION": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYCORRECTIONVARIANCE": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["4"],
		"CAAO": ["64"]
	},
	"HASSSTATUS": {
		"AMYHLASSPOSPOLY": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"EMYSYSTEMVARIANT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SYSTEMVARIANTENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "SATELLITEID"
		},
		"ULMYIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"BMYISPOLYCOMPUTABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "BOOL"
		},
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"CABO": ["4"],
		"CAAO": ["28"]
	},
	"LASSSTATUS": {
		"AMYHLASSPOSPOLY": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"EMYSYSTEMVARIANT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SYSTEMVARIANTENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "SATELLITEID"
		},
		"ULMYIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"BMYISPOLYCOMPUTABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "BOOL"
		},
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		}
	},
	"RANGECORRECTIONS": {
		"EMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "DGPSTYPEENUM"
		},
		"ACMYSTATIONID": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "ULONG"
		},
		"ACLMYCORRECTIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "17",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "21",
			"DATATYPE": "SATELLITEID"
		},
		"ULMYIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "25",
			"DATATYPE": "ULONG"
		},
		"FMYTOTALCORRECTION": {
			"NOOFBYTES": "4",
			"OFFSET": "29",
			"DATATYPE": "FLOAT"
		},
		"FMYTOTALCORRECTIONVARIANCE": {
			"NOOFBYTES": "4",
			"OFFSET": "33",
			"DATATYPE": "FLOAT"
		},
		"FMYIONOCORRECTION": {
			"NOOFBYTES": "4",
			"OFFSET": "37",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["17"],
		"CAAO": ["24"]
	},
	"CLOCKSTEERINGADJUSTMENT": {
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"EMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "CLOCKADJUSTTYPE"
		},
		"DMYADJUSTAMOUNT": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYADJUSTDRIFTAMOUNT": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYADJUSTDRIFTVARAMOUNT": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["4"],
		"CAAO": ["36"]
	},
	"PACKAGEDOBSERVATIONS": {
		"ACLMYOBSERVATIONSETS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"ULMYIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"BMYHASTROPOCORR": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "BOOL"
		},
		"BMYHASKLOBUCHARIONOCORR": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "BOOL"
		},
		"BMYHASDUALFREQIONOCORR": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "BOOL"
		},
		"BMYHASGRIDIONOCORR": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "BOOL"
		},
		"BMYSBASCORRECTIONISVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "BOOL"
		},
		"BMYRANGECORRECTIONISVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "BOOL"
		},
		"BMYAZIMUTHANDELEVATIONAREVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "BOOL"
		},
		"FMYAZIMUTH": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"FMYELEVATION": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "FLOAT"
		}
	},
	"PSRSATS": {
		"ACLMYSATELLITEENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		},
		"ULMYSTATUSMASK": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"PSRDOP2": {
		"FMYGDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		},
		"FMYPDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"FMYHDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYVDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"ACLMYTDOPS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "TIMINGSYSTEMENUM"
		},
		"FMYDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["20"],
		"CAAO": ["8"]
	},
	"PSRTIME2": {
		"ACLMYSYSTEMOFFSETS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "TIMINGSYSTEMENUM"
		},
		"DMYBIAS": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYBIASSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYRATE": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYRATESTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["4"],
		"CAAO": ["36"]
	},
	"FIXAUTO": {
		"DMYRATESTDDEV": {
			"NOOFBYTES": "0",
			"OFFSET": "0",
			"DATATYPE": ""
		}
	},
	"FIXHEIGHT": {
		"EMYHEIGHTTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "HEIGHTTYPEENUM"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		}
	},
	"UNFIX": {
		"DMYSTDDEV": {
			"NOOFBYTES": "0",
			"OFFSET": "0",
			"DATATYPE": ""
		}
	},
	"PROPAGATEDCLOCKMODEL2": {
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLOCKMODELSTATUSENUM"
		},
		"ACLMYSYSTEMBIASES": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "TIMINGSYSTEMENUM"
		},
		"DMYBIAS": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYBIASSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYRATE": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYRATESTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["8"],
		"CAAO": ["36"]
	},
	"CLOCKMODEL2": {
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLOCKMODELSTATUSENUM"
		},
		"DMYRATE": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"ACLMYSYSTEMBIASES": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "TIMINGSYSTEMENUM"
		},
		"DMYBIAS": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYBIASSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["4"],
		"CAAO": ["20"]
	},
	"PSRCHANNELSTATUS": {
		"ACLMYENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"SIGMYCHANNEL": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "SIGCHAN"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		},
		"DMYOBSSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYRESIDUAL": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		}
	},
	"RTKDOP2": {
		"FMYGDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		},
		"FMYPDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"FMYHDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYVDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"ACLMYTDOPS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "TIMINGSYSTEMENUM"
		},
		"FMYDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["20"],
		"CAAO": ["8"]
	},
	"SBASFAST": {
		"EMYSOURCESYSTEMVARIANT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SYSTEMVARIANTENUM"
		},
		"ULMYSOURCEPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "30",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "34",
			"DATATYPE": "ULONG"
		},
		"DMYFASTTIMEOUT": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"ACLMYFAST": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "CLASSARRAY"
		},
		"USMYPRN": {
			"NOOFBYTES": "2",
			"OFFSET": "28",
			"DATATYPE": "USHORT"
		},
		"ULMYUDRE": {
			"NOOFBYTES": "4",
			"OFFSET": "38",
			"DATATYPE": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["14"]
	},
	"RTKSATS": {
		"ACLMYSATELLITEENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		},
		"ULMYSTATUSMASK": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"FIX2": {
		"EMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FIXTYPEENUM"
		},
		"DMYPARAM1": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYPARAM2": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYPARAM3": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYPARAM4": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYPARAM5": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYPARAM6": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYPARAM7": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYPARAM8": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYPARAM9": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		}
	},
	"MATCHEDSATS": {
		"ACLMYSATELLITEENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		},
		"ULMYSTATUSMASK": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"PASHR": {
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INSSTATUSENUM"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DDOUBLE": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "45",
			"DATATYPE": "SOLTYPEENUM"
		}
	},
	"DEBUGETHERNUM": {
		"EMYAUTOSETCLEAR": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "AUTOSETCLEARENUM"
		},
		"ULMYETHERNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"PSRINTEGRITYEVENT": {
		"ULMYREDUNDANCY": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYDESIREDGLOBALTHRESHOLD": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYREQUIREDGLOBALTHRESHOLD": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYGLOBALSTATISTIC": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"ACLMYENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "SATELLITEID"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		},
		"DMYRESIDUAL": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYRESIDUALVARIANCE": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["32"],
		"CAAO": ["28"]
	},
	"DEBUGETHER": {
		"ULMYETHERNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"SZMYETHERNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		},
		"ULMYNUMPACKETS": {
			"NOOFBYTES": "4",
			"OFFSET": "55",
			"DATATYPE": "ULONG"
		},
		"ULMYPACKETCAP": {
			"NOOFBYTES": "4",
			"OFFSET": "59",
			"DATATYPE": "ULONG"
		},
		"ACLMYENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "63",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYPACKETPOINTER": {
			"NOOFBYTES": "4",
			"OFFSET": "67",
			"DATATYPE": "ULONG"
		},
		"DMYTIME": {
			"NOOFBYTES": "8",
			"OFFSET": "71",
			"DATATYPE": "DOUBLE"
		},
		"ULMYTASKID": {
			"NOOFBYTES": "4",
			"OFFSET": "79",
			"DATATYPE": "ULONG"
		},
		"SZMYTASKNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "83",
			"DATATYPE": "STRING"
		},
		"CABO": ["67"],
		"CAAO": ["67"]
	},
	"DEBUGETHEREXCEEDED": {
		"ULMYETHERNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"SZMYETHERNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		},
		"ULMYNUMPACKETS": {
			"NOOFBYTES": "4",
			"OFFSET": "55",
			"DATATYPE": "ULONG"
		},
		"ULMYPACKETCAP": {
			"NOOFBYTES": "4",
			"OFFSET": "59",
			"DATATYPE": "ULONG"
		},
		"ACLMYENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "63",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYPACKETPOINTER": {
			"NOOFBYTES": "4",
			"OFFSET": "67",
			"DATATYPE": "ULONG"
		},
		"DMYTIME": {
			"NOOFBYTES": "8",
			"OFFSET": "71",
			"DATATYPE": "DOUBLE"
		},
		"ULMYTASKID": {
			"NOOFBYTES": "4",
			"OFFSET": "79",
			"DATATYPE": "ULONG"
		},
		"SZMYTASKNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "83",
			"DATATYPE": "STRING"
		},
		"CABO": ["67"],
		"CAAO": ["67"]
	},
	"SBASMASK": {
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYIODP": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYNUMSATS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"AULMYPRNTOSLOT": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FIXEDULONGARRAY"
		},
		"CABO": ["4"],
		"CAAO": ["20"]
	},
	"DEBUGCHANMAP": {
		"ACLMYDEBUGCHANNUMS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"SVMYCHAN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SVCHAN"
		},
		"SIGMYCHAN": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SIGCHAN"
		},
		"ULMYMINOSCHAN": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"EMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "MEASUREMENTSOURCEENUM"
		},
		"ULMYSATID": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYIDNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"EMYSIGNALTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "SIGNALTYPEENUM"
		},
		"ULMYCHANNELTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		}
	},
	"HEADINGUPDATE": {
		"DMYHEADING": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEADINGUNCERTAINTY": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCHUNCERTAINTY": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"ULMYGPSWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"DMYGPSSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"EMYUPDATESOURCE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "HEADINGUPDATESOURCEENUM"
		}
	},
	"ELEVCUTOFFDEBUG": {
		"FMYELEVATIONCUTOFFANGLE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["4"],
		"CAAO": ["8"]
	},
	"SIMULATEDOBSERRORS": {
		"ACLMYENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSIGNALTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SIGNALTYPEENUM"
		},
		"ULMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"EMYOBSERVATIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "OBSERVATIONTYPEENUM"
		},
		"DMYERROR": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		}
	},
	"SIMULATEOBSERROR": {
		"EMYCOMMAND": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SETCLEARCLEARALLENUM"
		},
		"EMYSIGNALTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SIGNALTYPEENUM"
		},
		"ULMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"EMYOBSERVATIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "OBSERVATIONTYPEENUM"
		},
		"EMYTIMEFRAME": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ABSOLUTERELATIVEENUM"
		},
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"DMYDURATION": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"EMYERRORTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "SIMULATEDERRORTYPEENUM"
		},
		"ADMYPARAMETERS": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "VARIABLEDOUBLEARRAY"
		},
		"CABO": ["4"],
		"CAAO": ["48"]
	},
	"SIMULATEOBSERRORSTATUS": {
		"ACLMYENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSIGNALTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SIGNALTYPEENUM"
		},
		"ULMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"EMYOBSERVATIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "OBSERVATIONTYPEENUM"
		},
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"DMYDURATION": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"EMYERRORTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "SIMULATEDERRORTYPEENUM"
		}
	},
	"SBASSLOW": {
		"EMYSOURCESYSTEMVARIANT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SYSTEMVARIANTENUM"
		},
		"ULMYSOURCEPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ACLMYSLOW": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "CLASSARRAY"
		},
		"USMYPRN": {
			"NOOFBYTES": "2",
			"OFFSET": "12",
			"DATATYPE": "USHORT"
		},
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "14",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "ULONG"
		},
		"ULMYIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "ULONG"
		},
		"ADMYXYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "26",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"CABO": ["12"],
		"CAAO": ["22"]
	},
	"RAWLBANDCOMDATA": {
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		},
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"GRIDIONO": {
		"ULMYSOURCEPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"BMYRECEIVERISINGRID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "BOOL"
		},
		"ACLMYIONOCORRS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "SATELLITEID"
		},
		"FMYDELAY": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"FMYVARIANCE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["12"],
		"CAAO": ["16"]
	},
	"GPGSTDATA": {
		"ETALKERID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "NMEATALKERIDENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "21",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "22",
			"DATATYPE": "UCHAR"
		},
		"ACLMYENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "23",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "27",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		},
		"DMYOBSSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "31",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["27"],
		"CAAO": ["12"]
	},
	"BESTSATS": {
		"ACLMYSATELLITEENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		},
		"ULMYSTATUSMASK": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"PSRRESIDUALS": {
		"ACLMYENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"DMYRESIDUAL": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYRESIDUALSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["4"],
		"CAAO": ["24"]
	},
	"LBANDTRACKSTAT": {
		"ACLMYLBANDCHANSTATES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"SZMYBEAMNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ULMYASSIGNEDFREQUENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"USMYBAUDRATE": {
			"NOOFBYTES": "2",
			"OFFSET": "16",
			"DATATYPE": "USHORT"
		},
		"USMYSERVICEID": {
			"NOOFBYTES": "2",
			"OFFSET": "18",
			"DATATYPE": "USHORT"
		},
		"USMYTRACKINGSTATUS": {
			"NOOFBYTES": "2",
			"OFFSET": "20",
			"DATATYPE": "USHORT"
		},
		"USMYRESERVED": {
			"NOOFBYTES": "2",
			"OFFSET": "22",
			"DATATYPE": "USHORT"
		},
		"FMYDOPPLER": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"FMYCN0": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"FMYPHASESTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYLOCKTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"ULMYTOTALUNIQUEWORDBITS": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULMYBADUNIQUEWORDBITS": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULMYBADUNIQUEWORDS": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYTOTALVITERBISYMBOLS": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"ULMYCORRECTEDVITERBISYMS": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"FMYBER": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		}
	},
	"EXTHDGOFFSET": {
		"DMYHEADINGOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEADINGOFFSETSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCHOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCHOFFSETSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		}
	},
	"SETIMUTOANTOFFSET2": {
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "3",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"PASSETH1": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PASSETH2": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PASSETH3": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"IONOTROPO2": {
		"BMYKLOBUCHARMODELISDEFAULT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BOOL"
		},
		"ULMYKLOBUCHARIODI": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ACLMYIONOTROPO": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "SATELLITEID"
		},
		"FMYTROPOCORR": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"FMYTROPOCORRVAR": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"BMYHASTROPOCORR": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "BOOL"
		},
		"FMYDUALFREQIONOCORR": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYDUALFREQIONOCORRVAR": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"BMYHASDUALFREQIONOCORR": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "BOOL"
		},
		"FMYGRIDIONOCORR": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYGRIDIONOCORRVAR": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"BMYHASGRIDIONOCORR": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "BOOL"
		},
		"FMYKLOBUCHARIONOCORR": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYKLOBUCHARIONOCORRVAR": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"BMYHASKLOBUCHARIONOCORR": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "BOOL"
		},
		"CABO": ["12"],
		"CAAO": ["56"]
	},
	"SETBASEWEEK": {
		"ULMYBASEWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"ALIGNMENTMODE": {
		"EMYALIGNMENTMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ALIGNMENTMODEENUM"
		}
	},
	"IONOCONDITION": {
		"EMYIONOCONDITION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "IONOCONDITIONENUM"
		}
	},
	"SETRTCMRXVERSION": {
		"EMYVERSION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RTCMVERSIONENUM"
		}
	},
	"FORCEGLOL2CODE": {
		"EMYL2CODETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "L2CODETYPEENUM"
		}
	},
	"SOFTLOADDATA": {
		"ULMYOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "VARHEXBYTETYPE"
		}
	},
	"SOFTLOADSETUP": {
		"EMYSETUPTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOFTLOADSETUPENUM"
		},
		"SZMYSETUPSTRING": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		}
	},
	"TILTDATA": {
		"ULSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DXACCL": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DYACCL": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DAVGXINCL": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DXINCL": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DYINCL": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DAVGYINCL": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"ULMYRESERVED3": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		}
	},
	"TILTFILTER": {
		"ULSAMPLEPERIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULAVERAGECOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULSMOOTHINGPERIODMS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMEASUREMENTPERIODMS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		}
	},
	"TILTZERO": {
		"ETILTZEROACTION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "TILTZEROACTIONENUM"
		}
	},
	"COMPENSATION": {
		"ECOMPENSATIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMPENSATIONTYPEENUM"
		},
		"DPARAM1": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DPARAM2": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DPARAM3": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DPARAM4": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DPARAM5": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DPARAM6": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		}
	},
	"COMPENSATIONCONTROL": {
		"ECONTROL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"ULTIMEOUT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"GPGGAPRECISION": {
		"ULAPPLICABILITY": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULUTCPRECISION": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULLATITUDEPRECISION": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULLONGITUDEPRECISION": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"EGPSQUALENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ENABLEENUM"
		},
		"ENUMSATENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ENABLEENUM"
		},
		"EHDOPENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ENABLEENUM"
		},
		"ULHDOPPRECISION": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"EALTITUDEENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ENABLEENUM"
		},
		"ULALTITUDEPRECISION": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"EALTITUDEUNITSENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ENABLEENUM"
		},
		"EUNDULATIONENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ENABLEENUM"
		},
		"ULUNDULATIONPRECISION": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"EUNDULATIONUNITSENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ENABLEENUM"
		},
		"EAGEENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ENABLEENUM"
		},
		"ESTNIDENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ENABLEENUM"
		},
		"ESTNIDZEROPADDINGENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"GPVTGDATA": {
		"ETALKERID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "NMEATALKERIDENUM"
		},
		"EMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"DMYGROUNDTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYHORIZONTALSPEED": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "29",
			"DATATYPE": "UCHAR"
		},
		"FMYDECLINATION": {
			"NOOFBYTES": "4",
			"OFFSET": "30",
			"DATATYPE": "FLOAT"
		},
		"EMYNMEAVERSION": {
			"NOOFBYTES": "4",
			"OFFSET": "34",
			"DATATYPE": "NMEAVERSIONENUM"
		}
	},
	"MAGNETICDECLINATION": {
		"FMYDECLINATION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		},
		"FMYDECLINATIONSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		}
	},
	"PSRVEL2": {
		"EMYVELOCITYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYVELOCITYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYXSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYZSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "44",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "53",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "54",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "55",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "58",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "57",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "59",
			"DATATYPE": "UCHAR"
		}
	},
	"GPRMCDATA": {
		"ETALKERID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "NMEATALKERIDENUM"
		},
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"EMYVELOCITYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"DMYHORIZONTALSPEED": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYGROUNDTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "48",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "49",
			"DATATYPE": "UCHAR"
		},
		"UCUTCDAY": {
			"NOOFBYTES": "1",
			"OFFSET": "50",
			"DATATYPE": "UCHAR"
		},
		"UCUTCMONTH": {
			"NOOFBYTES": "1",
			"OFFSET": "51",
			"DATATYPE": "UCHAR"
		},
		"ULUTCYEAR": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"UTCTIMESTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "UTCTIMESTATUS"
		},
		"FMYDECLINATION": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		}
	},
	"RTKVEL2": {
		"EMYVELOCITYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYVELOCITYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYXSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYZSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "44",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "53",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "54",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "55",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "58",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "57",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "59",
			"DATATYPE": "UCHAR"
		}
	},
	"BESTVEL2": {
		"EMYVELOCITYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYVELOCITYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYXSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYZSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "44",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "53",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "54",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "55",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "58",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "57",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "59",
			"DATATYPE": "UCHAR"
		}
	},
	"PDPVEL2": {
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYXSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYZSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "44",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "53",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "54",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "55",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "56",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "57",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "58",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "59",
			"DATATYPE": "UCHAR"
		}
	},
	"PDPSATS": {
		"ACLMYSATELLITEENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		},
		"ULMYSTATUSMASK": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"SOFTLOADSTATUS": {
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOFTLOADSTATUSENUM"
		}
	},
	"SOFTLOADDEBUG": {
		"SZMYDEBUGSTRING": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		}
	},
	"SETTIMEBASE": {
		"EMYPRIMARYSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "TIMINGSYSTEMENUM"
		},
		"ACLMYBACKUPSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "TIMINGSYSTEMENUM"
		},
		"ULMYTIMEOUT": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"CABO": ["8"],
		"CAAO": ["8"]
	},
	"DEBUGIQDATA": {
		"SIGMYCHAN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SIGCHAN"
		},
		"ULMYSATELLITEID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"EMYIQTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "IQTYPEENUM"
		},
		"ACLMYIQACCUMS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"LCARRIERACCUMI": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "LONG"
		},
		"LCARRIERACCUMQ": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "LONG"
		},
		"LCODEACCUMI": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "LONG"
		},
		"LCODEACCUMQ": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "LONG"
		},
		"LPUNCTUALACCUMI": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "LONG"
		},
		"LPUNCTUALACCUMQ": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "LONG"
		},
		"CABO": ["16"],
		"CAAO": ["24"]
	},
	"SETOPTIONBITS": {
		"ULMYOPTIONBITS1": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYOPTIONBITS2": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"RTKVERIFIEDQUALITY": {
		"EMYRTKVERIFIEDQUALITYLEVEL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RTKVERIFIEDQUALITYLEVELENUM"
		},
		"EMYRTKVERIFIEDQUALITYARC": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTKVERIFIEDQUALITYARCENUM"
		}
	},
	"RTKVERIFIEDONLY": {
		"EMYRTKVERIFIEDONLY": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"IPCONFIG": {
		"EMYINTERFACE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PHYSICALINTERFACEENUM"
		},
		"EMYMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "IPCONFIGMODEENUM"
		},
		"SMYIPADDRESS": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "STRING"
		},
		"SMYNETMASK": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "STRING"
		},
		"SMYGATEWAY": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "STRING"
		},
		"CABO": ["4"],
		"CAAO": ["11"]
	},
	"DNSCONFIG": {
		"ACLDNSSERVER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"SIPADDRESS": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		}
	},
	"ETHCONFIG": {
		"EMYINTERFACE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PHYSICALINTERFACEENUM"
		},
		"EMYSPEED": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ETHERNETSPEEDENUM"
		},
		"EMYDUPLEX": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ETHERNETDUPLEXENUM"
		},
		"EMYCROSSOVER": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ETHERNETCROSSOVERENUM"
		},
		"EMYPOWERMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ETHERNETPOWERMODEENUM"
		}
	},
	"SERIALCONFIG": {
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		},
		"ULMYBAUDRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"EMYPARITY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "OEM4_PARITYENUM"
		},
		"ULMYDATABITS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYSTOPBITS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"EMYHANDSHAKING": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "HANDSHAKEENUM"
		},
		"EMYBREAKS": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ONOFFENUM"
		}
	},
	"ECHO": {
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		},
		"EMYECHO": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ONOFFENUM"
		}
	},
	"ICOMCONFIG": {
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		},
		"EMYPROTOCOL": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ETHERNETPROTOCOLENUM"
		},
		"SMYENDPOINT": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "STRING"
		},
		"EMYBINDINTERFACE": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "PHYSICALINTERFACEENUM"
		}
	},
	"NTRIPCONFIG": {
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		},
		"EMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "NTRIPTYPEENUM"
		},
		"EMYPROTOCOL": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "NTRIPPROTOCOLENUM"
		},
		"SMYENDPOINT": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "STRING"
		},
		"SMYMOUNTPOINT": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "STRING"
		},
		"SMYUSERNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "STRING"
		},
		"SMYPASSWORD": {
			"NOOFBYTES": "1",
			"OFFSET": "15",
			"DATATYPE": "STRING"
		},
		"EMYBINDINTERFACE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "PHYSICALINTERFACEENUM"
		}
	},
	"PASSICOM1": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PASSICOM2": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PASSICOM3": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PASSNCOM1": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PASSNCOM2": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PASSNCOM3": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"BESTLEVERARM2": {
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "3",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"IMYMAPPING": {
			"NOOFBYTES": "4",
			"OFFSET": "6",
			"DATATYPE": "INT"
		}
	},
	"TAGNEXTMARK": {
		"EMYMARK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "MARKENUM"
		},
		"ULMYTAG": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"TAGGEDMARK1PVA": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "INSSTATUSENUM"
		},
		"ULMYTAGID": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "ULONG"
		}
	},
	"TAGGEDMARK2PVA": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "INSSTATUSENUM"
		},
		"ULMYTAGID": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "ULONG"
		}
	},
	"GENERATERTKCORRECTIONS": {
		"EMYCORRECTIONTYPEENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RTKCORRECTIONSETENUM"
		},
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "COMMPORTENUM"
		}
	},
	"GLOFIXINGOPTION": {
		"EMYOPTION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"EMYBASERXTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "BASERECEIVERTYPEENUM"
		}
	},
	"GPGRSDATA": {
		"ETALKERID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "NMEATALKERIDENUM"
		},
		"ACLMYENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "SATELLITEID"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		},
		"DMYRESIDUAL": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"EMYNMEAVERSION": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "NMEAVERSIONENUM"
		},
		"CABO": ["8"],
		"CAAO": ["24"]
	},
	"SETGALSATTYPE": {
		"ULMYSATELLITEID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"EMYSATTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "GALILEOSATTYPEENUM"
		}
	},
	"DEBUGBUFFER": {
		"ULMYSEQNO": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"SZMYMESSAGE": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		}
	},
	"RXSTATUSUPDATE": {
		"EMYRXSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RXSTATUSENUM"
		},
		"EMYRXSTATUSFLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RXSTATUSFLAG"
		},
		"EMYRXSTATUSAUXILIARY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "RXSTATUSAUXILIARY"
		}
	},
	"DDCDEBUGENABLE": {
		"BMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BOOL"
		},
		"CABO": ["4"],
		"CAAO": ["4"]
	},
	"DDCDEBUG": {
		"ACLMYDDCS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYENCODER": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"FMYNOISEFLOOR": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"EMYRANGE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ENCODERRANGEENUM"
		},
		"FMYDCOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYPDFERROR": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"AFMYPDF": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FIXEDFLOATARRAY"
		}
	},
	"IMUTOANTOFFSETS": {
		"IMYMAPPING": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INT"
		},
		"ACLMYLEVERARM": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "INSOFFSETENUM"
		},
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "15",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "SOURCESTATUSENUM"
		},
		"CABO": ["8"],
		"CAAO": ["14"]
	},
	"BASEIONO": {
		"EMYDGPSTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "DGPSTYPEENUM"
		},
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ACLMYIONOCORRECTIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "SATELLITEID"
		},
		"FMYIONODELAY": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"FMYIONODELAYRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["12"],
		"CAAO": ["16"]
	},
	"RANGECMP2": {
		"AUCMYRANGEDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARHEXBYTETYPE"
		}
	},
	"RAIMMODE": {
		"EMYMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RAIMMODEENUM"
		},
		"DMYHAL": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYVAL": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYPFA": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		}
	},
	"RAIMSTATUS": {
		"EMYMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RAIMMODEENUM"
		},
		"EMYINTEGRITYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RAIMINTEGRITYSTATUSENUM"
		},
		"EMYHPLSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "RAIMPROTECTIONLEVELSTATUS"
		},
		"DMYHPL": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"EMYVPLSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "RAIMPROTECTIONLEVELSTATUS"
		},
		"DMYVPL": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"ACLMYREJECTEDSVS": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "SATELLITEID"
		},
		"CABO": ["4"],
		"CAAO": ["8"]
	},
	"ETHSTATUS": {
		"ACLMYETHSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYINTERFACE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "PHYSICALINTERFACEENUM"
		},
		"SMYMACADDRESS": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "STRING"
		},
		"EMYINTERFACECONFIG": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "ETHERNETINTERFACECONFIGENUM"
		},
		"CABO": ["4"],
		"CAAO": ["9"]
	},
	"IPSTATUS": {
		"ACLMYIPSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYINTERFACE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "PHYSICALINTERFACEENUM"
		},
		"SMYIPADDRESS": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "STRING"
		},
		"SMYNETMASK": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "STRING"
		},
		"SMYGATEWAY": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "STRING"
		},
		"ACLMYDNSSERVER": {
			"NOOFBYTES": "4",
			"OFFSET": "11",
			"DATATYPE": "CLASSARRAY"
		},
		"SIPADDRESS": {
			"NOOFBYTES": "1",
			"OFFSET": "15",
			"DATATYPE": "STRING"
		},
		"CABO": ["15"],
		"CAAO": ["16"]
	},
	"CREATEETHERLOG": {
		"SZMYLOGNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"EMYETHERID": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"UCETHERCOPY": {
			"NOOFBYTES": "1",
			"OFFSET": "36",
			"DATATYPE": "UCHAR"
		}
	},
	"INSZUPTCONTROL": {
		"EMYTRIGGER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"SETIMUSPECS": {
		"ULMYDATARATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYACCELBIAS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYACCELVRW": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYGYROBIAS": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYGYROARW": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"ULMYACCELSCALEFACTORERROR": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"ULMYGYROSCALEFACTORERROR": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"DMYDATALATENCY": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"EMYSCALEFACTOR": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "SCALEFACTORENUM"
		}
	},
	"GENERATEDIFFCORRECTIONS": {
		"EMYINTERFACEMODEENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INTERFACEMODEENUM"
		},
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "COMMPORTENUM"
		}
	},
	"SOFTLOADFILE": {
		"EMYFILESYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "MASSSTORAGEDEVICEENUM"
		},
		"SZMYFILENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"EMYDESTINATIONDEVICE": {
			"NOOFBYTES": "4",
			"OFFSET": "132",
			"DATATYPE": "EGRESSROUTINGDESTENUM"
		}
	},
	"IMURATEPVAS": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "INSSTATUSENUM"
		},
		"CABO": ["4"],
		"CAAO": ["88"]
	},
	"FRONTENDDATA": {
		"ACLMYAGCFRONTENDDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYFRONTEND": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYTIMESTAMP": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"BMYCALIBRATED": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "BOOL"
		},
		"ULMYADJUSTMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYADJUSTRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYPULSEWIDTH": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYMODULUS": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYADCBOTTOMBIT": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"DMYDCOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYPDFERROR": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"ADMYPDF": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"DEBUGBUFFERCMP": {
		"ULMYSEQNO": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"SZMYMESSAGE": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		}
	},
	"DEBUGETHERREQUESTORS": {
		"ULMYETHERNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"SZMYETHERNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		},
		"ACLMYENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "55",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYPERIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "59",
			"DATATYPE": "ULONG"
		},
		"ULMYTRIGGER": {
			"NOOFBYTES": "4",
			"OFFSET": "63",
			"DATATYPE": "ULONG"
		},
		"ULMYTASKID": {
			"NOOFBYTES": "4",
			"OFFSET": "67",
			"DATATYPE": "ULONG"
		},
		"SZMYTASKNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "71",
			"DATATYPE": "STRING"
		},
		"CABO": ["59"],
		"CAAO": ["63"]
	},
	"GALINAVEPHEMERIS": {
		"ULMYSATID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"UCMYE5BHEALTH": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "UCHAR"
		},
		"UCMYE5BDVS": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "UCHAR"
		},
		"UCMYRESERVED1": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "UCHAR"
		},
		"UCMYRESERVED2": {
			"NOOFBYTES": "1",
			"OFFSET": "7",
			"DATATYPE": "UCHAR"
		},
		"UCMYE1BHEALTH": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "UCHAR"
		},
		"UCMYE1BDVS": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "UCHAR"
		},
		"UCMYRESERVED3": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "UCHAR"
		},
		"UCMYRESERVED4": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "UCHAR"
		},
		"USMYIODNAV": {
			"NOOFBYTES": "2",
			"OFFSET": "12",
			"DATATYPE": "USHORT"
		},
		"UCMYSISA": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "UCHAR"
		},
		"UCMYINAVSIGNALTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "15",
			"DATATYPE": "UCHAR"
		},
		"ULMYTOE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "UINT"
		},
		"ULMYTOC": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"DMYM0": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAN": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYECC": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYROOTA": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"DMYI0": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		},
		"DMYIDOT": {
			"NOOFBYTES": "8",
			"OFFSET": "64",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA0": {
			"NOOFBYTES": "8",
			"OFFSET": "72",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA": {
			"NOOFBYTES": "8",
			"OFFSET": "80",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGADOT": {
			"NOOFBYTES": "8",
			"OFFSET": "88",
			"DATATYPE": "DOUBLE"
		},
		"DMYCUC": {
			"NOOFBYTES": "8",
			"OFFSET": "96",
			"DATATYPE": "DOUBLE"
		},
		"DMYCUS": {
			"NOOFBYTES": "8",
			"OFFSET": "104",
			"DATATYPE": "DOUBLE"
		},
		"DMYCRC": {
			"NOOFBYTES": "8",
			"OFFSET": "112",
			"DATATYPE": "DOUBLE"
		},
		"DMYCRS": {
			"NOOFBYTES": "8",
			"OFFSET": "120",
			"DATATYPE": "DOUBLE"
		},
		"DMYCIC": {
			"NOOFBYTES": "8",
			"OFFSET": "128",
			"DATATYPE": "DOUBLE"
		},
		"DMYCIS": {
			"NOOFBYTES": "8",
			"OFFSET": "136",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF0": {
			"NOOFBYTES": "8",
			"OFFSET": "144",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF1": {
			"NOOFBYTES": "8",
			"OFFSET": "152",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF2": {
			"NOOFBYTES": "8",
			"OFFSET": "160",
			"DATATYPE": "DOUBLE"
		},
		"DMYE1E5ABGD": {
			"NOOFBYTES": "8",
			"OFFSET": "168",
			"DATATYPE": "DOUBLE"
		},
		"DMYE1E5BBGD": {
			"NOOFBYTES": "8",
			"OFFSET": "176",
			"DATATYPE": "DOUBLE"
		}
	},
	"GALFNAVEPHEMERIS": {
		"ULMYSATID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"UCMYE5AHEALTH": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "UCHAR"
		},
		"UCMYE5ADVS": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "UCHAR"
		},
		"UCMYRESERVED1": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "UCHAR"
		},
		"UCMYRESERVED2": {
			"NOOFBYTES": "1",
			"OFFSET": "7",
			"DATATYPE": "UCHAR"
		},
		"USMYIODNAV": {
			"NOOFBYTES": "2",
			"OFFSET": "8",
			"DATATYPE": "USHORT"
		},
		"UCMYSISA": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "UCHAR"
		},
		"UCMYRESERVED3": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "UCHAR"
		},
		"ULMYTOE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "UINT"
		},
		"ULMYTOC": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"DMYM0": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAN": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYECC": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYROOTA": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYI0": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYIDOT": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA0": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGADOT": {
			"NOOFBYTES": "8",
			"OFFSET": "84",
			"DATATYPE": "DOUBLE"
		},
		"DMYCUC": {
			"NOOFBYTES": "8",
			"OFFSET": "92",
			"DATATYPE": "DOUBLE"
		},
		"DMYCUS": {
			"NOOFBYTES": "8",
			"OFFSET": "100",
			"DATATYPE": "DOUBLE"
		},
		"DMYCRC": {
			"NOOFBYTES": "8",
			"OFFSET": "108",
			"DATATYPE": "DOUBLE"
		},
		"DMYCRS": {
			"NOOFBYTES": "8",
			"OFFSET": "116",
			"DATATYPE": "DOUBLE"
		},
		"DMYCIC": {
			"NOOFBYTES": "8",
			"OFFSET": "124",
			"DATATYPE": "DOUBLE"
		},
		"DMYCIS": {
			"NOOFBYTES": "8",
			"OFFSET": "132",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF0": {
			"NOOFBYTES": "8",
			"OFFSET": "140",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF1": {
			"NOOFBYTES": "8",
			"OFFSET": "148",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF2": {
			"NOOFBYTES": "8",
			"OFFSET": "156",
			"DATATYPE": "DOUBLE"
		},
		"DMYE1E5ABGD": {
			"NOOFBYTES": "8",
			"OFFSET": "164",
			"DATATYPE": "DOUBLE"
		}
	},
	"SETIMUPROTOCOL": {
		"EMYPORTPROTOCOL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PORTPROTOCOLENUM"
		},
		"ULMYBAUDRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"EMYPARITY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "OEM4_PARITYENUM"
		},
		"ULMYDATABITS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYSTOPBITS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"EMYHANDSHAKING": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "HANDSHAKEENUM"
		},
		"EMYTIMEMESSAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "TIMEMESSAGEENUM"
		}
	},
	"ALIGNBSLNXYZ": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYXSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYZSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"ACMYROVERID": {
			"NOOFBYTES": "1",
			"OFFSET": "44",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "45",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "49",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "50",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "51",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "UCHAR"
		},
		"UCMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "1",
			"OFFSET": "53",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "54",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "55",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "56",
			"DATATYPE": "UCHAR"
		}
	},
	"ALIGNBSLNENU": {
		"EMYSOLUTIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYSOLUTIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"ACMYROVERID": {
			"NOOFBYTES": "1",
			"OFFSET": "44",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ACMYMASTERID": {
			"NOOFBYTES": "1",
			"OFFSET": "45",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "49",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "50",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "51",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "UCHAR"
		},
		"UCMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "1",
			"OFFSET": "53",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "54",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "55",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "56",
			"DATATYPE": "UCHAR"
		}
	},
	"HEADINGSATS": {
		"ACLMYSATELLITEENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		},
		"ULMYSTATUSMASK": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"INPUTGIMBALANGLE": {
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "3",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"SETGIMBALORIENTATION": {
		"IMYORIENTATION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INT"
		}
	},
	"GIMBALSPANROTATION": {
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "3",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"VARIABLELEVERARM": {
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "3",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"GIMBALLEDPVA": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "INSSTATUSENUM"
		}
	},
	"SETRTCMTXVERSION": {
		"EMYVERSION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RTCMVERSIONENUM"
		}
	},
	"ALIGNAUTOMATION": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "COMMPORTENUM"
		},
		"ULMYBAUDRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYREQRATEINHZ": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"EMYSENDHEADINGEXT": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ONOFFENUM"
		},
		"EMYINTERFACEMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "INTERFACEMODEENUM"
		}
	},
	"PDPVELOCITYOUT": {
		"EMYPDPVELOCITYOUTCMD": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PDPVELOCITYOUTENUM"
		}
	},
	"REFSTATIONINFO": {
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"EMYDATUM": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "DATUMENUM"
		},
		"FMYARPHEIGHT": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"EMYREFTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "REFSTATIONENUM"
		},
		"ACMYSTATIONID": {
			"NOOFBYTES": "1",
			"OFFSET": "40",
			"DATATYPE": "STRING"
		},
		"ACMYANTENNAMODEL": {
			"NOOFBYTES": "1",
			"OFFSET": "41",
			"DATATYPE": "STRING"
		},
		"ACMYANTENNASERIAL": {
			"NOOFBYTES": "1",
			"OFFSET": "42",
			"DATATYPE": "STRING"
		}
	},
	"TRACKSV": {
		"EMYSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"ULMYSATID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"EMYCONDITION": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "TRACKSVENUM"
		}
	},
	"TAGGEDMARK3PVA": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "INSSTATUSENUM"
		},
		"ULMYTAGID": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "ULONG"
		}
	},
	"TAGGEDMARK4PVA": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "INSSTATUSENUM"
		},
		"ULMYTAGID": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "ULONG"
		},
		"CABO": ["4"],
		"CAAO": ["92"]
	},
	"MODELFEATURES": {
		"ACLFEATURES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EFEATURESTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FEATURESTATUSENUM"
		},
		"EFEATURE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FEATUREENUM"
		}
	},
	"QZSSRAWSUBFRAME": {
		"ULMYSATELLITEID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSUBFRAMEID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"AUCMYRAWSUBFRAMEDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"ULMYSIGNALCHANNELNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "38",
			"DATATYPE": "ULONG"
		}
	},
	"QZSSRAWEPHEM": {
		"ULMYSATELLITEID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYTOE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"AUCMYSUBFRAME1": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"AUCMYSUBFRAME2": {
			"NOOFBYTES": "1",
			"OFFSET": "42",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"AUCMYSUBFRAME3": {
			"NOOFBYTES": "1",
			"OFFSET": "43",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"ALIGNDOP": {
		"FMYGDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		},
		"FMYPDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"FMYHDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYHTDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYTDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYGPSELEVMASK": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"AULMYSATS": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "VARIABLEULONGARRAY"
		}
	},
	"SETUPSENSOR": {
		"ESENSORID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SENSORENUM"
		},
		"ESPANEVENTOUT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "MARKENUM"
		},
		"ESPANEVTOUTPOLARITY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "POLARITYENUM"
		},
		"ULSPANEVTOUTACTIVEPULSEMS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ESPANEVENTIN": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "MARKENUM"
		},
		"ESPANEVTINENABLEDISABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "EVENTINENABLEENUM"
		},
		"ESPANEVTINPOLARITY": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "POLARITYENUM"
		},
		"LSPANEVTINTIMEBIASNS": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "LONG"
		},
		"ULSPANEVTINTIMEGUARDMS": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		}
	},
	"HEADING2": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYBLENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYHEADING": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYPITCH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FFLOAT": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"FMYHEADINGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"FMYPITCHSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"ACMYROVERID": {
			"NOOFBYTES": "1",
			"OFFSET": "32",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "33",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "37",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "38",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "39",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "40",
			"DATATYPE": "UCHAR"
		},
		"UCMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "1",
			"OFFSET": "41",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "42",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "43",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "44",
			"DATATYPE": "UCHAR"
		}
	},
	"QZSSEPHEMERIS": {
		"ULMYSATELLITEID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYTOW": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"ULMYHEALTH6": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYIODE1": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYIODE2": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYWN": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULMYZWN": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"DMYTOE": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYA": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAN": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"DMYM0": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		},
		"DMYECC": {
			"NOOFBYTES": "8",
			"OFFSET": "64",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA": {
			"NOOFBYTES": "8",
			"OFFSET": "72",
			"DATATYPE": "DOUBLE"
		},
		"DMYCUC": {
			"NOOFBYTES": "8",
			"OFFSET": "80",
			"DATATYPE": "DOUBLE"
		},
		"DMYCUS": {
			"NOOFBYTES": "8",
			"OFFSET": "88",
			"DATATYPE": "DOUBLE"
		},
		"DMYCRC": {
			"NOOFBYTES": "8",
			"OFFSET": "96",
			"DATATYPE": "DOUBLE"
		},
		"DMYCRS": {
			"NOOFBYTES": "8",
			"OFFSET": "104",
			"DATATYPE": "DOUBLE"
		},
		"DMYCIC": {
			"NOOFBYTES": "8",
			"OFFSET": "112",
			"DATATYPE": "DOUBLE"
		},
		"DMYCIS": {
			"NOOFBYTES": "8",
			"OFFSET": "120",
			"DATATYPE": "DOUBLE"
		},
		"DMYI0": {
			"NOOFBYTES": "8",
			"OFFSET": "128",
			"DATATYPE": "DOUBLE"
		},
		"DMYIDOT": {
			"NOOFBYTES": "8",
			"OFFSET": "136",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA0": {
			"NOOFBYTES": "8",
			"OFFSET": "144",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGADOT": {
			"NOOFBYTES": "8",
			"OFFSET": "152",
			"DATATYPE": "DOUBLE"
		},
		"ULMYIODC": {
			"NOOFBYTES": "4",
			"OFFSET": "160",
			"DATATYPE": "ULONG"
		},
		"DMYTOC": {
			"NOOFBYTES": "8",
			"OFFSET": "164",
			"DATATYPE": "DOUBLE"
		},
		"DMYTGD": {
			"NOOFBYTES": "8",
			"OFFSET": "172",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF0": {
			"NOOFBYTES": "8",
			"OFFSET": "180",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF1": {
			"NOOFBYTES": "8",
			"OFFSET": "188",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF2": {
			"NOOFBYTES": "8",
			"OFFSET": "196",
			"DATATYPE": "DOUBLE"
		},
		"BMYANTISPOOFING": {
			"NOOFBYTES": "4",
			"OFFSET": "204",
			"DATATYPE": "BOOL"
		},
		"DMYN": {
			"NOOFBYTES": "8",
			"OFFSET": "208",
			"DATATYPE": "DOUBLE"
		},
		"DMYEPHVAR": {
			"NOOFBYTES": "8",
			"OFFSET": "216",
			"DATATYPE": "DOUBLE"
		},
		"UCMYFITINTERVAL": {
			"NOOFBYTES": "1",
			"OFFSET": "224",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "227",
			"DATATYPE": "UCHAR"
		}
	},
	"TIMEDEVENTPULSE": {
		"LSELECTEDSENSORS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "LONG"
		},
		"ULTARGETWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"DTARGETSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"ULTAG": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		}
	},
	"RTCAOBS3": {
		"NOVATELDESIGNATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "UCHAR"
		},
		"SUBTYPEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "UCHAR"
		},
		"BMYMOVINGBASE": {
			"NOOFBYTES": "4",
			"OFFSET": "2",
			"DATATYPE": "BOOL"
		},
		"DMYREFX": {
			"NOOFBYTES": "8",
			"OFFSET": "6",
			"DATATYPE": "DOUBLE"
		},
		"DMYREFY": {
			"NOOFBYTES": "8",
			"OFFSET": "14",
			"DATATYPE": "DOUBLE"
		},
		"DMYREFZ": {
			"NOOFBYTES": "8",
			"OFFSET": "22",
			"DATATYPE": "DOUBLE"
		},
		"SECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "30",
			"DATATYPE": "FLOAT"
		},
		"RECEIVERTIMEBIAS": {
			"NOOFBYTES": "8",
			"OFFSET": "34",
			"DATATYPE": "DOUBLE"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "70",
			"DATATYPE": "UCHAR"
		},
		"TRANSMITTER2DATA": {
			"NOOFBYTES": "4",
			"OFFSET": "46",
			"DATATYPE": "CLASSARRAY"
		},
		"TRANSMITTERID": {
			"NOOFBYTES": "1",
			"OFFSET": "50",
			"DATATYPE": "UCHAR"
		},
		"FREQAVAIL": {
			"NOOFBYTES": "1",
			"OFFSET": "51",
			"DATATYPE": "UCHAR"
		},
		"L1ADROFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"L1PSROFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"CODETYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "68",
			"DATATYPE": "UCHAR"
		},
		"L1LOCKTIME": {
			"NOOFBYTES": "1",
			"OFFSET": "69",
			"DATATYPE": "UCHAR"
		},
		"L2ADROFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "71",
			"DATATYPE": "DOUBLE"
		},
		"L2PSROFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "79",
			"DATATYPE": "DOUBLE"
		},
		"CODETYPE2": {
			"NOOFBYTES": "1",
			"OFFSET": "87",
			"DATATYPE": "UCHAR"
		},
		"L2LOCKTIME": {
			"NOOFBYTES": "1",
			"OFFSET": "88",
			"DATATYPE": "UCHAR"
		},
		"RESERVED2": {
			"NOOFBYTES": "1",
			"OFFSET": "89",
			"DATATYPE": "UCHAR"
		},
		"CABO": ["50"],
		"CAAO": ["40"]
	},
	"RTCAOBS3IN": {
		"ULMESSAGEIDENTIFIER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFSTATION": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMESSAGETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMESSAGELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"NOVATELDESIGNATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "UCHAR"
		},
		"SUBTYPEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "21",
			"DATATYPE": "UCHAR"
		},
		"BMYMOVINGBASE": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "BOOL"
		},
		"DMYREFX": {
			"NOOFBYTES": "8",
			"OFFSET": "26",
			"DATATYPE": "DOUBLE"
		},
		"DMYREFY": {
			"NOOFBYTES": "8",
			"OFFSET": "34",
			"DATATYPE": "DOUBLE"
		},
		"DMYREFZ": {
			"NOOFBYTES": "8",
			"OFFSET": "42",
			"DATATYPE": "DOUBLE"
		},
		"SECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "50",
			"DATATYPE": "FLOAT"
		},
		"RECEIVERTIMEBIAS": {
			"NOOFBYTES": "8",
			"OFFSET": "54",
			"DATATYPE": "DOUBLE"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "90",
			"DATATYPE": "UCHAR"
		},
		"TRANSMITTER2DATA": {
			"NOOFBYTES": "4",
			"OFFSET": "66",
			"DATATYPE": "CLASSARRAY"
		},
		"TRANSMITTERID": {
			"NOOFBYTES": "1",
			"OFFSET": "70",
			"DATATYPE": "UCHAR"
		},
		"FREQAVAIL": {
			"NOOFBYTES": "1",
			"OFFSET": "71",
			"DATATYPE": "UCHAR"
		},
		"L1ADROFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "72",
			"DATATYPE": "DOUBLE"
		},
		"L1PSROFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "80",
			"DATATYPE": "DOUBLE"
		},
		"CODETYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "88",
			"DATATYPE": "UCHAR"
		},
		"L1LOCKTIME": {
			"NOOFBYTES": "1",
			"OFFSET": "89",
			"DATATYPE": "UCHAR"
		},
		"L2ADROFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "91",
			"DATATYPE": "DOUBLE"
		},
		"L2PSROFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "99",
			"DATATYPE": "DOUBLE"
		},
		"CODETYPE2": {
			"NOOFBYTES": "1",
			"OFFSET": "107",
			"DATATYPE": "UCHAR"
		},
		"L2LOCKTIME": {
			"NOOFBYTES": "1",
			"OFFSET": "108",
			"DATATYPE": "UCHAR"
		},
		"RESERVED2": {
			"NOOFBYTES": "1",
			"OFFSET": "109",
			"DATATYPE": "UCHAR"
		},
		"CABO": ["70"],
		"CAAO": ["40"]
	},
	"PASSTHROUGH": {
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		},
		"ACMYBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"NTRIPSOURCETABLE": {
		"SMYENDPOINT": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"ULMYRESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "ULONG"
		},
		"ULMYRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "ULONG"
		}
	},
	"SOURCETABLE": {
		"SMYENDPOINT": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"ULMYRESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "ULONG"
		},
		"ULMYRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "ULONG"
		},
		"SMYENTRYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "88",
			"DATATYPE": "STRING"
		}
	},
	"QZSSRAWALMANAC": {
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ACLMYSUBFRAMEPAGES": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "CLASSARRAY"
		},
		"USSVID": {
			"NOOFBYTES": "2",
			"OFFSET": "12",
			"DATATYPE": "USHORT"
		},
		"AUCMYPAGERAWDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"CABO": ["4"],
		"CAAO": ["32"]
	},
	"QZSSALMANAC": {
		"ACLMYSVALMDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"ULPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYWN": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"DMYTOA": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYECC": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGADOT": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA0": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYMO": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF0": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF1": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYN": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"DMYA": {
			"NOOFBYTES": "8",
			"OFFSET": "84",
			"DATATYPE": "DOUBLE"
		},
		"DMYDI": {
			"NOOFBYTES": "8",
			"OFFSET": "92",
			"DATATYPE": "DOUBLE"
		},
		"ULMYHEALTH6": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH8": {
			"NOOFBYTES": "4",
			"OFFSET": "104",
			"DATATYPE": "ULONG"
		}
	},
	"QZSSIONUTC": {
		"DMYA0": {
			"NOOFBYTES": "8",
			"OFFSET": "72",
			"DATATYPE": "DOUBLE"
		},
		"DMYA1": {
			"NOOFBYTES": "8",
			"OFFSET": "80",
			"DATATYPE": "DOUBLE"
		},
		"DMYA2": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYA3": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYB0": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYB1": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYB2": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"DMYB3": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		},
		"ULMYWNT": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ULONG"
		},
		"ULMYTOT": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "ULONG"
		},
		"ULMYWNLSF": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "ULONG"
		},
		"ULMYDN": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "ULONG"
		},
		"LMYDELTATLS": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "LONG"
		},
		"LMYDELTATLSF": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "LONG"
		},
		"ULMYDELTATUTC": {
			"NOOFBYTES": "4",
			"OFFSET": "104",
			"DATATYPE": "ULONG"
		}
	},
	"AUTHCODES": {
		"ESIGNATURESTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SIGNATURESTATUS"
		},
		"CLMYAUTHCODES": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "PLATFORMAUTHCODETYPEENUM"
		},
		"BMYVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "BOOL"
		},
		"ASZMYAUTHCODE": {
			"NOOFBYTES": "1",
			"OFFSET": "92",
			"DATATYPE": "STRING"
		},
		"CABO": ["8"],
		"CAAO": ["85"]
	},
	"GENERATEALIGNCORRECTIONS": {
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		},
		"ULMYBAUDRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYOBSRATEINHZ": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYREFRATEINHZ": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"EMYCORRECTIONINTERFACE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "INTERFACEMODEENUM"
		}
	},
	"QZSSECUTOFF": {
		"FMYELEVATIONCUTOFFANGLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		}
	},
	"RTKTRACKINGCONTROL": {
		"EMYMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RTKTRACKINGCONTROLENUM"
		}
	},
	"SETIMUTOGIMBALOFFSET": {
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "3",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"GLODECODEKSAT": {
		"BMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BOOL"
		}
	},
	"DOSCMD": {
		"EMYDOSCOMMAND": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "DOSCOMMANDENUM"
		},
		"SZMYSTRINGFIELD1": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		},
		"SZMYSTRINGFIELD2": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "STRING"
		}
	},
	"DUALANTENNAPORTCONFIG": {
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		}
	},
	"SBASHANDLERSSTATUS": {
		"ULMYACTIVEHANDLERPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ACLMYENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"EMYSERVICEPROVIDER": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "SBASSERVICEPROVIDERENUM"
		},
		"BMYISTESTMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "BOOL"
		},
		"ULMYIODP": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYIODI": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"FMYELEVATIONINDEGREES": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"FMYLOCKTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"CABO": ["8"],
		"CAAO": ["36"]
	},
	"SBASHANDLEREVENT": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"EMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SBASHANDLEREVENTENUM"
		}
	},
	"IMURATECORRIMUS": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYLATERAL": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDINAL": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYVERTICAL": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		}
	},
	"ASYNCHINSLOGGING": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"IQLOGCONFIG": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"SIGMYCHAN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SIGCHAN"
		},
		"EMYIQTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "IQTYPEENUM"
		}
	},
	"RTCM4093TYPE0": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM4093IN": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARHEXBYTETYPE"
		}
	},
	"RTCM4093TYPE1": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM4093TYPE2": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM4093TYPE3": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM4093TYPE4": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"INSUPDATEDEBUG": {
		"EMYPOSTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLTYPEENUM"
		},
		"IMYGNSSPOSREJECTCODE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "INT"
		}
	},
	"RTCMV3REFINFO": {
		"SZMYRECEIVERSERIALNUMDESCRIPTOR": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		},
		"SZMYRECEIVERTYPEDESCRIPTOR": {
			"NOOFBYTES": "1",
			"OFFSET": "31",
			"DATATYPE": "VARIABLECHARARRAY"
		},
		"SZMYRECEIVERFIRMWAREVERSIONDESCRIPTOR": {
			"NOOFBYTES": "1",
			"OFFSET": "32",
			"DATATYPE": "VARIABLECHARARRAY"
		},
		"SZMYANTENNASERIALNUMDESCRIPTOR": {
			"NOOFBYTES": "1",
			"OFFSET": "33",
			"DATATYPE": "VARIABLECHARARRAY"
		},
		"SZMYANTENNATYPEDESCRIPTOR": {
			"NOOFBYTES": "1",
			"OFFSET": "34",
			"DATATYPE": "VARIABLECHARARRAY"
		},
		"UCMYANTENNASETUPID": {
			"NOOFBYTES": "1",
			"OFFSET": "35",
			"DATATYPE": "UCHAR"
		}
	},
	"SETBASERECEIVERTYPE": {
		"EMYRECEIVERTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BASERECEIVERTYPEENUM"
		}
	},
	"POWERTYPE": {
		"EMYPOWERTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "POWERTYPEENUM"
		},
		"CABO": ["4"],
		"CAAO": ["4"]
	},
	"RTKATMOSPHEREDELAYS": {
		"ACLMYATMOSPHEREDELAYS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"FMYL1IONO": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYTROPO": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"RTKAMBIGUITIES": {
		"ACLMYAMBIGUITIES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"EMYFREQUENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FREQINDEXENUM"
		},
		"EMYAMBIGUITYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "AMBIGUITYSTATUSENUM"
		},
		"FMYAMBIGUITY": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"FMYAMBIGUITYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"FMYRESIDUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		}
	},
	"MOTION": {
		"EMYMOTION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "MOTIONENUM"
		},
		"DMYSPEED": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		}
	},
	"HEAVE": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEAVE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		}
	},
	"SETHEAVEWINDOW": {
		"IMYHEAVEWINDOW": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INT"
		}
	},
	"PASSCOM4": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"ISMTECCALIBRATION": {
		"EMYSIGNALCOMBINATION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SIGNALCOMBINATIONENUM"
		},
		"DMYTECCALIBRATION": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		}
	},
	"ISMRAWOBS": {
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"ACLMYRAWOBSERVATIONENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CLASSARRAY"
		},
		"UCMYSVID": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "UCHAR"
		},
		"CMYFREQUENCY": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "CHAR"
		},
		"UCMYSIGNALTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "UCHAR"
		},
		"UCMYRESERVED1": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "UCHAR"
		},
		"DMYFIRSTADR": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"ULMYFIRSTPOWER": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"AULMYSCINTOBSERVATIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FIXEDULONGARRAY"
		},
		"CABO": ["4"],
		"CAAO": ["20"]
	},
	"ISMRAWTEC": {
		"ACLMYRAWTECENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"UCMYSVID": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "UCHAR"
		},
		"CMYFREQUENCY": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "CHAR"
		},
		"UCMYSATELLITESYSTEM": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "UCHAR"
		},
		"UCMYPRIMARYSIGNAL": {
			"NOOFBYTES": "1",
			"OFFSET": "7",
			"DATATYPE": "UCHAR"
		},
		"UCMYSECONDARYSIGNAL": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "UCHAR"
		},
		"UCMYRESERVED1": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "UCHAR"
		},
		"UCMYRESERVED2": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "UCHAR"
		},
		"UCMYRESERVED3": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "UCHAR"
		},
		"FMYTEC": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYDELTATEC": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		}
	},
	"ISMBANDWIDTH": {
		"DMYPHASEBANDWIDTH": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYAMPLITUDEBANDWIDTH": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"ISMREDOBS": {
		"ACLMYREDUCEDOBSENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"UCMYSVID": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "UCHAR"
		},
		"CMYFREQUENCY": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "CHAR"
		},
		"UCMYSATELLITESYSTEM": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "UCHAR"
		},
		"UCMYSIGNALTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "7",
			"DATATYPE": "UCHAR"
		},
		"FMYAZIMUTH": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYELEVATION": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYCNO": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYLOCKTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"FMYCMCAVERAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"FMYCMCSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"FMYS4": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYS4CORRECTION": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYPHASE1SECSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYPHASE3SECSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYPHASE10SECSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"FMYPHASE30SECSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "FLOAT"
		},
		"FMYPHASE60SECSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["4"],
		"CAAO": ["56"]
	},
	"ISMREDTEC": {
		"ACLMYREDUCEDTECENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"UCMYSVID": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "UCHAR"
		},
		"CMYFREQUENCY": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "CHAR"
		},
		"UCMYSATELLITESYSTEM": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "UCHAR"
		},
		"UCMYPRIMARYSIGNAL": {
			"NOOFBYTES": "1",
			"OFFSET": "7",
			"DATATYPE": "UCHAR"
		},
		"UCMYSECONDARYSIGNAL": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "UCHAR"
		},
		"UCMYRESERVED1": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "UCHAR"
		},
		"UCMYRESERVED2": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "UCHAR"
		},
		"UCMYRESERVED3": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "UCHAR"
		},
		"FMYAZIMUTH": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYELEVATION": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYSECONDARYLOCKTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"FMYSECONDARYCNO": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"FMYTEC15": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"FMYDELTATEC15": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYTEC30": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYDELTATEC30": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYTEC45": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYDELTATEC45": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"FMYTECTOW": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "FLOAT"
		},
		"FMYDELTATECTOW": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		}
	},
	"ISMDETOBS": {
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"ACLMYDETRENDEDENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CLASSARRAY"
		},
		"UCMYSVID": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "UCHAR"
		},
		"CMYFREQUENCY": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "CHAR"
		},
		"UCMYSIGNALTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "UCHAR"
		},
		"UCMYRESERVED1": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "UCHAR"
		},
		"DMYFIRSTADR": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"ULMYFIRSTPOWER": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"AULMYSCINTOBSERVATIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FIXEDULONGARRAY"
		},
		"CABO": ["8"],
		"CAAO": ["20"]
	},
	"OBSDECORRELATION": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"SETALIGNMENTVEL": {
		"DMYMINVELOCITY": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		}
	},
	"ISMSIGNALCONTROL": {
		"EMYSIGNALTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SIGNALTYPEENUM"
		},
		"EMYENABLEOBS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ENABLEENUM"
		},
		"EMYENABLETEC": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"SETIMUSCALE": {
		"DMYACCELSCALE": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYGYROSCALE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		}
	},
	"SETIMUTOEXTANTOFFSET": {
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "3",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"EXTERNALPOS": {
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYLATITUDESTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDESTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHTSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"ULMYUPDATETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "HEXULONG"
		}
	},
	"DECODEDBASESTATIONOBS": {
		"EMYMESSAGEENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BASESTATIONMESSAGEENUM"
		},
		"ACMYDIFFSTATIONID": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ACLMYOBS": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "CLASSARRAY"
		},
		"USMYSVPRN": {
			"NOOFBYTES": "2",
			"OFFSET": "9",
			"DATATYPE": "USHORT"
		},
		"USMYSVFREQ": {
			"NOOFBYTES": "2",
			"OFFSET": "11",
			"DATATYPE": "USHORT"
		},
		"DMYPSR": {
			"NOOFBYTES": "8",
			"OFFSET": "13",
			"DATATYPE": "DOUBLE"
		},
		"FMYSDPSR": {
			"NOOFBYTES": "4",
			"OFFSET": "21",
			"DATATYPE": "FLOAT"
		},
		"DMYADR": {
			"NOOFBYTES": "8",
			"OFFSET": "25",
			"DATATYPE": "DOUBLE"
		},
		"FMYSDADR": {
			"NOOFBYTES": "4",
			"OFFSET": "33",
			"DATATYPE": "FLOAT"
		},
		"FMYDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "37",
			"DATATYPE": "FLOAT"
		},
		"FMYUSERCNO": {
			"NOOFBYTES": "4",
			"OFFSET": "41",
			"DATATYPE": "FLOAT"
		},
		"FMYLOCKTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "45",
			"DATATYPE": "FLOAT"
		},
		"ULMYCSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "49",
			"DATATYPE": "HEXULONG"
		},
		"CABO": ["9"],
		"CAAO": ["44"]
	},
	"ISMCALIBRATE": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"ULMYSTARTDELAYSEC": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYDURATIONSEC": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"FMYELEVATIONCUTOFF": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		}
	},
	"ISMCALIBRATIONSTATUS": {
		"ULMYCALIBRATIONTIMESEC": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ACLMYCALIBRATIONSTATUSES": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSIGNALCOMBINATION": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SIGNALCOMBINATIONENUM"
		},
		"ULMYNUMSAMPLES": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"FMYTECCALIBRATION": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYTECSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["8"],
		"CAAO": ["16"]
	},
	"PROFILE": {
		"EMYPROFILEOPTION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PROFILEOPTIONENUM"
		},
		"SMYPROFILENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		},
		"SMYCOMMAND": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "STRING"
		}
	},
	"PROFILEINFO": {
		"SMYPROFILENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"ULMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "1",
			"DATATYPE": "HEXULONG"
		},
		"ACLMYPROFILEINFOCOMMAND": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "CLASSARRAY"
		},
		"SMYCOMMAND": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "STRING"
		},
		"CABO": ["9"],
		"CAAO": ["201"]
	},
	"GALFNAVRAWPAGE": {
		"ULMYSIGCHANNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSATID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"AUCMYRAWFRAMEDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"GALINAVRAWWORD": {
		"ULMYSIGCHANNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSATID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"EMYSIGNALTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SIGNALTYPEENUM"
		},
		"AUCMYRAWFRAMEDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"BASEANTENNAPCO": {
		"EMYFREQUENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FREQUENCYENUM"
		},
		"ARMYOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"EMYCORRTYPE ": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "DGPSTYPEENUM"
		},
		"SZMYSTATIONID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"BASEANTENNAPCV": {
		"EMYFREQUENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FREQUENCYENUM"
		},
		"ARMYPCV": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"EMYCORRTYPE ": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "DGPSTYPEENUM"
		},
		"SZMYSTATIONID": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"THISANTENNAPCO": {
		"EMYFREQUENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FREQUENCYENUM"
		},
		"ARMYOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"THISANTENNAPCV": {
		"EMYFREQUENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FREQUENCYENUM"
		},
		"ARMYPCV": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"BASEANTENNATYPE": {
		"EMYANTENNATYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ANTENNAMODELENUM"
		},
		"EMYANTENNARAYDOM": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ANTENNARAYDOMTYPEENUM"
		},
		"EMYCORRTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "DGPSTYPEENUM"
		},
		"SZMYSTATIONID": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"THISANTENNATYPE": {
		"EMYANTENNATYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ANTENNAMODELENUM"
		},
		"EMYANTENNARAYDOM": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ANTENNARAYDOMTYPEENUM"
		}
	},
	"THISANTENNAIN": {
		"ACMYSTATIONID": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZMYMODELNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "STRING"
		},
		"SZMYSERIALNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "33",
			"DATATYPE": "STRING"
		},
		"ULMYSETUPID": {
			"NOOFBYTES": "4",
			"OFFSET": "34",
			"DATATYPE": "ULONG"
		}
	},
	"BASEANTENNAPCCORRECTION": {
		"ACMYDIFFSTATIONID": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"EMYCORRTYPE ": {
			"NOOFBYTES": "4",
			"OFFSET": "1",
			"DATATYPE": "DGPSTYPEENUM"
		},
		"ADMYPHASECENTERXYZOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "5",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"ADMYPHASECENTERENUOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"ACLMYPHASECENTERVARIATIONCORRECTION": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "CLASSARRAY"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "SATELLITEID"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"EFREQUENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FREQUENCYENUM"
		},
		"DPSRCORRECTION": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DADRCORRECTION": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["20"],
		"CAAO": ["28"]
	},
	"THISANTENNAPCCORRECTION": {
		"ACMYDIFFSTATIONID": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"EMYCORRTYPE ": {
			"NOOFBYTES": "4",
			"OFFSET": "1",
			"DATATYPE": "DGPSTYPEENUM"
		},
		"ADMYPHASECENTERXYZOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "5",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"ADMYPHASECENTERENUOFFSET": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"ACLMYPHASECENTERVARIATIONCORRECTION": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "CLASSARRAY"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "SATELLITEID"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"EFREQUENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FREQUENCYENUM"
		},
		"DPSRCORRECTION": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DADRCORRECTION": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["20"],
		"CAAO": ["28"]
	},
	"GL1DEINITIALIZATIONPERIOD": {
		"DMYWAITDURATION": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		}
	},
	"SBASALMANAC": {
		"ULMYSATELLITEID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"EMYSYSTEMVARIANT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMVARIANTENUM"
		},
		"ULMYT0": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"USMYDATAID": {
			"NOOFBYTES": "2",
			"OFFSET": "12",
			"DATATYPE": "USHORT"
		},
		"USMYHEALTH": {
			"NOOFBYTES": "2",
			"OFFSET": "14",
			"DATATYPE": "USHORT"
		},
		"LMYX": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "LONG"
		},
		"LMYY": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "LONG"
		},
		"LMYZ": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "LONG"
		},
		"LMYXVEL": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "LONG"
		},
		"LMYYVEL": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "LONG"
		},
		"LMYZVEL": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "LONG"
		},
		"CABO": ["4"],
		"CAAO": ["40"]
	},
	"CORRECTIONSTATS": {
		"ACLMYCORRECTIONMESSAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "COMMPORTENUM"
		},
		"ULMYUNKNOWNBYTES": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"EMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "INTERFACEMODEENUM"
		},
		"ULMYINVALIDCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ACMYID": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ULMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "21",
			"DATATYPE": "ULONG"
		},
		"ULMYSUBTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "25",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "29",
			"DATATYPE": "ULONG"
		},
		"ULMYCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "33",
			"DATATYPE": "ULONG"
		}
	},
	"HEAVEFILTER": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"CONNECTIMU": {
		"EMYIMUPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "IMUPORTENUM"
		},
		"EMYIMUTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "IMUTYPEENUM"
		}
	},
	"BESTGNSSPOS": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"EMYDATUMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "DATUMENUM"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "66",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "67",
			"DATATYPE": "UCHAR"
		},
		"UCMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "1",
			"OFFSET": "68",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "69",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "70",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "71",
			"DATATYPE": "UCHAR"
		}
	},
	"BESTGNSSVEL": {
		"EMYVELOCITYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYVELOCITYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"DMYHORIZONTALSPEED": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYGROUNDTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"FFLOAT": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		}
	},
	"RAWIMUCOMDATAS": {
		"EMYIMUIFTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INTERFACEMODEENUM"
		},
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "COMMPORTENUM"
		},
		"UCMYMSGID": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "UCHAR"
		},
		"UCMYPACKETCOUNT": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "UCHAR"
		},
		"UCMYRESERVED1": {
			"NOOFBYTES": "1",
			"OFFSET": "10",
			"DATATYPE": "UCHAR"
		},
		"UCMYRESERVED2": {
			"NOOFBYTES": "1",
			"OFFSET": "11",
			"DATATYPE": "UCHAR"
		},
		"AUCMYRAWDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"SYNCTIMETRIGGER": {
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"SETTROPOMODEL": {
		"EMYMODEL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "TROPOMODELENUM"
		}
	},
	"RTKAGE": {
		"EMYAGETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RTKAGEENUM"
		}
	},
	"SERIALPROTOCOL": {
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		},
		"EMYPROTOCOL": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "PORTPROTOCOLENUM"
		}
	},
	"RTKSOURCETIMEOUT": {
		"EMYSETTING": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CORRECTIONSTIMEOUTENUM"
		},
		"ULMYTIMEOUT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"RELINSPVA": {
		"EMYRELINSOUTPUT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RELINSOUTPUTENUM"
		},
		"DMYDELTAPOSN": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAPOSE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAPOSU": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAVELN": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAVELE": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAVELU": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAHEADING": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "FLOAT"
		},
		"ACMYROVERID": {
			"NOOFBYTES": "1",
			"OFFSET": "80",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"EMYROVERINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "81",
			"DATATYPE": "INSSTATUSENUM"
		},
		"ACMYMASTERID": {
			"NOOFBYTES": "1",
			"OFFSET": "85",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"EMYMASTERINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "86",
			"DATATYPE": "INSSTATUSENUM"
		},
		"EMYRTKBASELINESTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "90",
			"DATATYPE": "SOLTYPEENUM"
		},
		"ULMYEXTENDEDSOLSTAT": {
			"NOOFBYTES": "4",
			"OFFSET": "94",
			"DATATYPE": "HEXULONG"
		}
	},
	"RTKMATCHEDTIMEOUT": {
		"ULMYTIMEOUT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"INSTHRESHOLDS": {
		"EMYINSTHRESHOLDS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INSTHRESHOLDSENUM"
		},
		"DMYRESERVED1THRESHOLD": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYRESERVED2THRESHOLD": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYRESERVED3THRESHOLD": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		}
	},
	"PSRDIFFSOURCETIMEOUT": {
		"EMYSETTING": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CORRECTIONSTIMEOUTENUM"
		},
		"ULMYTIMEOUT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"PSRDIFFTIMEOUT": {
		"ULMYTIMEOUT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"CABO": ["4"],
		"CAAO": ["4"]
	},
	"SATXYZ2": {
		"ACLMYSATS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYRB": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYIONOCORR": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYTROPOCORR": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYDUMMY": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		}
	},
	"STEADYLINE": {
		"EMYCOMMAND": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "STEADYLINECOMMANDENUM"
		},
		"LMYOFFSETDEWEIGHT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "LONG"
		}
	},
	"RTKNETWORKGEOMETRICDELAYS": {
		"EMYNETWORKTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RTKNETWORKENUM"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ACLMYENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "SATELLITEID"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "17",
			"DATATYPE": "ULONG"
		},
		"DMYGEOMETRICDELAY": {
			"NOOFBYTES": "8",
			"OFFSET": "21",
			"DATATYPE": "DOUBLE"
		},
		"ULMYIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "29",
			"DATATYPE": "ULONG"
		},
		"CABO": ["9"],
		"CAAO": ["24"]
	},
	"RTKNETWORKIONOSPHERICDELAYS": {
		"EMYNETWORKTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RTKNETWORKENUM"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ACLMYENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "SATELLITEID"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "17",
			"DATATYPE": "ULONG"
		},
		"DMYIONOSPHERICDELAY": {
			"NOOFBYTES": "8",
			"OFFSET": "21",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["9"],
		"CAAO": ["20"]
	},
	"MACNETWORK": {
		"ULMYNETWORKID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSUBNETWORKID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYMASTERREFERENCEID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ACLMYSTATIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSTATIONID": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"DMYLATITUDEINDEGREES": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDEINDEGREES": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["16"],
		"CAAO": ["28"]
	},
	"TSS1": {
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INSSTATUSENUM"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEAVE": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		}
	},
	"INSATTX": {
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INSSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYROLLSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYPITCHSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYAZIMUTHSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"ULMYEXTENDEDSOLSTAT": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "HEXULONG"
		},
		"USMYTIMESINCEPOSUPT": {
			"NOOFBYTES": "2",
			"OFFSET": "48",
			"DATATYPE": "USHORT"
		}
	},
	"INSVELX": {
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INSSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYXSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYZSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"ULMYEXTENDEDSOLSTAT": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "HEXULONG"
		},
		"USMYTIMESINCEPOSUPT": {
			"NOOFBYTES": "2",
			"OFFSET": "48",
			"DATATYPE": "USHORT"
		}
	},
	"INSPOSX": {
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INSSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"ULMYEXTENDEDSOLSTAT": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "HEXULONG"
		},
		"USMYTIMESINCEPOSUPT": {
			"NOOFBYTES": "2",
			"OFFSET": "52",
			"DATATYPE": "USHORT"
		}
	},
	"RTKCONSERVEIDLE": {
		"EMYCOMMAND": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RTKCONSERVEIDLEENUM"
		}
	},
	"RAWIMUX": {
		"UCMYIMUSTATUSINFO": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "UCHAR"
		},
		"UCMYIMUTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "UCHAR"
		},
		"USMYGPSWEEK": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "USHORT"
		},
		"DMYGPSSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"ULMYIMUSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "HEXULONG"
		},
		"LMYDELVELBODYZ": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "LONG"
		},
		"LMYDELVELBODYY": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "LONG"
		},
		"LMYDELVELBODYX": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "LONG"
		},
		"LMYDELANGBODYZ": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "LONG"
		},
		"LMYDELANGBODYY": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "LONG"
		},
		"LMYDELANGBODYX": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "LONG"
		}
	},
	"RAWIMUSX": {
		"UCMYIMUSTATUSINFO": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "UCHAR"
		},
		"UCMYIMUTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "UCHAR"
		},
		"USMYGPSWEEK": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "USHORT"
		},
		"DMYGPSSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"ULMYIMUSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "HEXULONG"
		},
		"LMYDELVELBODYZ": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "LONG"
		},
		"LMYDELVELBODYY": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "LONG"
		},
		"LMYDELVELBODYX": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "LONG"
		},
		"LMYDELANGBODYZ": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "LONG"
		},
		"LMYDELANGBODYY": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "LONG"
		},
		"LMYDELANGBODYX": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "LONG"
		}
	},
	"EXTERNALPVAS": {
		"DMYPOSITION1": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYPOSITION2": {
			"NOOFBYTES": "8",
			"OFFSET": "3",
			"DATATYPE": "DOUBLE"
		},
		"FMYPOSITION3": {
			"NOOFBYTES": "4",
			"OFFSET": "11",
			"DATATYPE": "FLOAT"
		},
		"FMYVELOCITY1": {
			"NOOFBYTES": "4",
			"OFFSET": "15",
			"DATATYPE": "FLOAT"
		},
		"FMYVELOCITY2": {
			"NOOFBYTES": "4",
			"OFFSET": "19",
			"DATATYPE": "FLOAT"
		},
		"FMYVELOCITY3": {
			"NOOFBYTES": "4",
			"OFFSET": "23",
			"DATATYPE": "FLOAT"
		},
		"FMYATTITUDE1": {
			"NOOFBYTES": "4",
			"OFFSET": "27",
			"DATATYPE": "FLOAT"
		},
		"FMYATTITUDE2": {
			"NOOFBYTES": "4",
			"OFFSET": "31",
			"DATATYPE": "FLOAT"
		},
		"FMYATTITUDE3": {
			"NOOFBYTES": "4",
			"OFFSET": "35",
			"DATATYPE": "FLOAT"
		},
		"FMYPOSITIONSTDDEV1": {
			"NOOFBYTES": "4",
			"OFFSET": "39",
			"DATATYPE": "FLOAT"
		},
		"FMYPOSITIONSTDDEV2": {
			"NOOFBYTES": "4",
			"OFFSET": "43",
			"DATATYPE": "FLOAT"
		},
		"FMYPOSITIONSTDDEV3": {
			"NOOFBYTES": "4",
			"OFFSET": "47",
			"DATATYPE": "FLOAT"
		},
		"FMYVELOCITYSTDDEV1": {
			"NOOFBYTES": "4",
			"OFFSET": "51",
			"DATATYPE": "FLOAT"
		},
		"FMYVELOCITYSTDDEV2": {
			"NOOFBYTES": "4",
			"OFFSET": "55",
			"DATATYPE": "FLOAT"
		},
		"FMYVELOCITYSTDDEV3": {
			"NOOFBYTES": "4",
			"OFFSET": "59",
			"DATATYPE": "FLOAT"
		},
		"FMYATTITUDESTDDEV1": {
			"NOOFBYTES": "4",
			"OFFSET": "63",
			"DATATYPE": "FLOAT"
		},
		"FMYATTITUDESTDDEV2": {
			"NOOFBYTES": "4",
			"OFFSET": "67",
			"DATATYPE": "FLOAT"
		},
		"FMYATTITUDESTDDEV3": {
			"NOOFBYTES": "4",
			"OFFSET": "71",
			"DATATYPE": "FLOAT"
		},
		"ULMYUPDATETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "75",
			"DATATYPE": "HEXULONG"
		},
		"ULMYOPTIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "79",
			"DATATYPE": "HEXULONG"
		}
	},
	"RTKFIXEDSTDLIMIT": {
		"FMYSTDLIMIT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		}
	},
	"INSPVAX": {
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INSSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "FLOAT"
		},
		"FMYXSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "FLOAT"
		},
		"FMYYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "100",
			"DATATYPE": "FLOAT"
		},
		"FMYZSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "104",
			"DATATYPE": "FLOAT"
		},
		"FMYROLLSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "108",
			"DATATYPE": "FLOAT"
		},
		"FMYPITCHSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "112",
			"DATATYPE": "FLOAT"
		},
		"FMYAZIMUTHSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "116",
			"DATATYPE": "FLOAT"
		},
		"ULMYEXTENDEDSOLSTAT": {
			"NOOFBYTES": "4",
			"OFFSET": "120",
			"DATATYPE": "HEXULONG"
		},
		"USMYTIMESINCEPOSUPT": {
			"NOOFBYTES": "2",
			"OFFSET": "124",
			"DATATYPE": "USHORT"
		},
		"CABO": ["4"],
		"CAAO": ["126"]
	},
	"INSLEVERARMS": {
		"ACLMYLEVERARM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"IMYMAPPING": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "INT"
		},
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "11",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"EMYOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "14",
			"DATATYPE": "INSOFFSETENUM"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "SOURCESTATUSENUM"
		}
	},
	"INSOFFSETS": {
		"IMYMAPPING": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INT"
		},
		"IMYGIMBALMAPPING": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "INT"
		},
		"BMYAPPLYRBVROTATION": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "BOOL"
		},
		"BMYHAVEDUALANTENNA": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "BOOL"
		},
		"BMYISGIMBALLED": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "BOOL"
		},
		"ACLMYLEVERARM": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "INSOFFSETENUM"
		},
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "83",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"EMYINPUTFRAME": {
			"NOOFBYTES": "4",
			"OFFSET": "86",
			"DATATYPE": "INSOFFSETFRAMEENUM"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "90",
			"DATATYPE": "SOURCESTATUSENUM"
		},
		"ULEXTENDEDSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "94",
			"DATATYPE": "ULONG"
		},
		"ACLMYSOLUTIONTRANSLATION": {
			"NOOFBYTES": "4",
			"OFFSET": "46",
			"DATATYPE": "CLASSARRAY"
		},
		"ACLMYEULERSOLUTIONROTATION": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "CLASSARRAY"
		},
		"CABO": ["76"],
		"CAAO": ["22"]
	},
	"SETLEVERARM": {
		"EMYOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INSOFFSETENUM"
		},
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "7",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"SETINSOFFSETS": {
		"EMYOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INSOFFSETENUM"
		},
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "7",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"INSVARIABLELEVERARMS": {
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "3",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"RTKGLOBIASOPTION": {
		"EMYOPTION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RTKGLOBIASOPTIONENUM"
		},
		"ULMYINPUT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"RTCM1071": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1072": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1073": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1074": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1075": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1076": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1077": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1081": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1082": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1083": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1084": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1085": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1086": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1087": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1091": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1092": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1093": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1094": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1095": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1096": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1097": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTKLOGGINGLEVEL": {
		"EMYLEVEL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RTKLOGGINGLEVELENUM"
		}
	},
	"MATCHEDRESET": {
		"SZMYCAUSE": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		}
	},
	"EXTERNALCLOCKSYNC": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"RTKGLOBIAS": {
		"ACMYENGINE": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"EMYRECEIVERTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "2",
			"DATATYPE": "BASERECEIVERTYPEENUM"
		},
		"EMYBIASTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "6",
			"DATATYPE": "RTKGLOBIASOPTIONENUM"
		},
		"DMYBIAS": {
			"NOOFBYTES": "8",
			"OFFSET": "10",
			"DATATYPE": "DOUBLE"
		},
		"DMYMEANBIAS": {
			"NOOFBYTES": "8",
			"OFFSET": "18",
			"DATATYPE": "DOUBLE"
		},
		"DMYSAMPLESTD": {
			"NOOFBYTES": "8",
			"OFFSET": "26",
			"DATATYPE": "DOUBLE"
		},
		"ULMYSAMPLECOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "34",
			"DATATYPE": "ULONG"
		}
	},
	"RFATTENUATION": {
		"ULMYRFPATH": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYATTENUATION": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"LEDCONFIG": {
		"EMYLEDID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "LEDIDENUM"
		},
		"LMYARG1": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "LONG"
		},
		"LMYARG2": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "LONG"
		},
		"CABO": ["4"],
		"CAAO": ["12"]
	},
	"LEDSTATES": {
		"ACLMYLEDSTATES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYLEDID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "LEDIDENUM"
		},
		"EMYLEDPATTERNSTATE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "LEDPATTERNENUM"
		}
	},
	"GPSCNAVEPHEM": {
		"ULMYSATELLITEID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYTOW": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"BMYALERT": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "BOOL"
		},
		"ULMYWNE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"DMYTOP": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"LMYURAEDINDEX": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "LONG"
		},
		"DMYTOE": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAA": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYADOT": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAN": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTANDOT": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYM0": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"DMYECC": {
			"NOOFBYTES": "8",
			"OFFSET": "84",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA": {
			"NOOFBYTES": "8",
			"OFFSET": "92",
			"DATATYPE": "DOUBLE"
		},
		"UCMYISFLAG": {
			"NOOFBYTES": "1",
			"OFFSET": "100",
			"DATATYPE": "UCHAR"
		},
		"UCMYL2CPHASING": {
			"NOOFBYTES": "1",
			"OFFSET": "101",
			"DATATYPE": "UCHAR"
		},
		"DMYOMEGA0": {
			"NOOFBYTES": "8",
			"OFFSET": "102",
			"DATATYPE": "DOUBLE"
		},
		"DMYI0": {
			"NOOFBYTES": "8",
			"OFFSET": "110",
			"DATATYPE": "DOUBLE"
		},
		"DMYDOD": {
			"NOOFBYTES": "8",
			"OFFSET": "118",
			"DATATYPE": "DOUBLE"
		},
		"DMYIDOT": {
			"NOOFBYTES": "8",
			"OFFSET": "126",
			"DATATYPE": "DOUBLE"
		},
		"DMYCIS": {
			"NOOFBYTES": "8",
			"OFFSET": "134",
			"DATATYPE": "DOUBLE"
		},
		"DMYCIC": {
			"NOOFBYTES": "8",
			"OFFSET": "142",
			"DATATYPE": "DOUBLE"
		},
		"DMYCRS": {
			"NOOFBYTES": "8",
			"OFFSET": "150",
			"DATATYPE": "DOUBLE"
		},
		"DMYCRC": {
			"NOOFBYTES": "8",
			"OFFSET": "158",
			"DATATYPE": "DOUBLE"
		},
		"DMYCUS": {
			"NOOFBYTES": "8",
			"OFFSET": "166",
			"DATATYPE": "DOUBLE"
		},
		"DMYCUC": {
			"NOOFBYTES": "8",
			"OFFSET": "174",
			"DATATYPE": "DOUBLE"
		},
		"LMYURANEDINDEX": {
			"NOOFBYTES": "4",
			"OFFSET": "182",
			"DATATYPE": "LONG"
		},
		"ULMYURANED1INDEX": {
			"NOOFBYTES": "8",
			"OFFSET": "186",
			"DATATYPE": "DOUBLE"
		},
		"ULMYURANED2INDEX": {
			"NOOFBYTES": "8",
			"OFFSET": "194",
			"DATATYPE": "DOUBLE"
		},
		"DMYTOC": {
			"NOOFBYTES": "8",
			"OFFSET": "202",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF0": {
			"NOOFBYTES": "8",
			"OFFSET": "210",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF1": {
			"NOOFBYTES": "8",
			"OFFSET": "218",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF2": {
			"NOOFBYTES": "8",
			"OFFSET": "226",
			"DATATYPE": "DOUBLE"
		}
	},
	"GPSRAWCNAVEPHEM": {
		"ULMYSIGNALCHANNELNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSATELLITEID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYWNE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"DMYTOP": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYTOE": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYTOC": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"AUCMYMESSAGE10": {
			"NOOFBYTES": "1",
			"OFFSET": "36",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"AUCMYMESSAGE11": {
			"NOOFBYTES": "1",
			"OFFSET": "74",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		},
		"AUCMYMESSAGECLOCK": {
			"NOOFBYTES": "1",
			"OFFSET": "75",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"GPSCNAVMIDIALM": {
		"ULMYTRANSMITTINGPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYPRNA": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYWNA": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"DMYTOA": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"DMYECC": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAI": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGADOT": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYSQRTA": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA0": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA": {
			"NOOFBYTES": "8",
			"OFFSET": "64",
			"DATATYPE": "DOUBLE"
		},
		"DMYM0": {
			"NOOFBYTES": "8",
			"OFFSET": "72",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF0": {
			"NOOFBYTES": "8",
			"OFFSET": "80",
			"DATATYPE": "DOUBLE"
		},
		"DMYAF1": {
			"NOOFBYTES": "8",
			"OFFSET": "88",
			"DATATYPE": "DOUBLE"
		}
	},
	"GPSRAWCNAVMIDIALM": {
		"ULMYTRANSMITTINGPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYPRNA": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYWNA": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"DMYTOA": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"AUCMYMESSAGEMIDIALM": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"GPSCNAVREDUCEDALM": {
		"ULMYTRANSMITTINGPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYPRNA": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYWNA": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"DMYTOA": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAA": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA0": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYPHI0": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		}
	},
	"GPSRAWCNAVREDUCEDALM": {
		"ULMYTRANSMITTINGPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYPRNA": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYWNA": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"DMYTOA": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"AUCMYMESSAGEREDUCEDALM": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"GPSCNAVIONO": {
		"ULMYSATELLITEID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYWNOP": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYTOP": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"DMYALPHA0": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYALPHA1": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYALPHA2": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYALPHA3": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYBEETA0": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYBEETA1": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYBEETA2": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYBEETA3": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		}
	},
	"GPSCNAVGROUPDELAY": {
		"ULMYSATELLITEID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYWNOP": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYTOP": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"DMYTGD": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYISCL1CA": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYISCL2C": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYISCL5I5": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYISCL5Q5": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		}
	},
	"GPSCNAVUTC": {
		"ULMYSATELLITEID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYA0": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYA1": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYA2": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"LMYDELTATLS": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "LONG"
		},
		"ULMYTOT": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULMYWNOT": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"ULMYWNLSF": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULMYDN": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"LMYDELTATLSF": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "LONG"
		}
	},
	"GPSCNAVEOP": {
		"ULMYSATELLITEID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYTEOP": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"DMYPMX": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYPMXDOT": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYPMY": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYPMYDOT": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAUT1": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAUT1DOT": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		}
	},
	"GPSCNAVGGTO": {
		"ULMYSATELLITEID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYTGGTO": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYWNGGTO": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYGNSSTYPEID": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"DMYA0GGTO": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYA1GGTO": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYA2GGTO": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		}
	},
	"GPSRAWCNAVMESSAGE": {
		"ULMYSIGCHANNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYFRAMEID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"AUCMYRAWFRAMEDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"DOPPLERWINDOW": {
		"EMYSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ASSIGNSYSTEMENUM"
		},
		"EMYSETTING": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "DOPPLERWINDOWMODEENUM"
		},
		"ULMYDOPPLERWINDOW": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"LMYCENTERFREQUENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "LONG"
		}
	},
	"APPROXPOSTIMEOUT": {
		"ULMYTIMEOUTSEC": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"CELLINFO": {
		"SZMYMAKE": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"SZMYMANUFACTURER": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "STRING"
		},
		"SZMYSERIALNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "21",
			"DATATYPE": "STRING"
		},
		"SZMYSOFTWAREVERSION": {
			"NOOFBYTES": "1",
			"OFFSET": "22",
			"DATATYPE": "STRING"
		},
		"SZMYMOBILENUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "23",
			"DATATYPE": "STRING"
		},
		"SZMYMOBILESUBSCRIBERID": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "STRING"
		},
		"SZMYACCESSPOINTNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "25",
			"DATATYPE": "STRING"
		},
		"SZMYUSERNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "26",
			"DATATYPE": "STRING"
		},
		"SZMYPASSWORD": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "STRING"
		}
	},
	"CELLSTATUS": {
		"EMYMODEMSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RILPOWERSTATEENUM"
		},
		"EMYNETSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CELLNETREGISTRATIONSTATUSENUM"
		},
		"SZMYIPADDRESS": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "STRING"
		},
		"IMYSIGNAL": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "INT"
		},
		"IMYRSSI": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "INT"
		},
		"SZMYNETWORK": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "STRING"
		},
		"UIMYCELLID": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "UINT"
		},
		"IMYMODEMTEMPERATURE": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "INT"
		},
		"SZMYLASTERROR": {
			"NOOFBYTES": "1",
			"OFFSET": "26",
			"DATATYPE": "STRING"
		}
	},
	"CELLCONFIG": {
		"EMYCELLCFG": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CELLULARCONFIGURATIONENUM"
		},
		"SZMYARG1": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		},
		"SZMYARG2": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "STRING"
		}
	},
	"CAKEPOS": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"EMYDATUMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "DATUMENUM"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "66",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "67",
			"DATATYPE": "UCHAR"
		},
		"UCMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "1",
			"OFFSET": "68",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "69",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "70",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "71",
			"DATATYPE": "UCHAR"
		}
	},
	"CAKEXYZ": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYXSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYZSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		}
	},
	"CAKESATS": {
		"ACLMYSATELLITEENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		},
		"ULMYSTATUSMASK": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"CAKETIME": {
		"ACLMYSYSTEMOFFSETS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "TIMINGSYSTEMENUM"
		},
		"DMYBIAS": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYBIASSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["4"],
		"CAAO": ["20"]
	},
	"CAKEVEL2": {
		"EMYVELOCITYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYVELOCITYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYXSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYZSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "44",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "53",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "54",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "55",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "56",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "57",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "58",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "59",
			"DATATYPE": "UCHAR"
		}
	},
	"CAKEVEL": {
		"EMYVELOCITYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYVELOCITYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"DMYHORIZONTALSPEED": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYGROUNDTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"LMYRSVDFIELDFORVELOCITYLOGS": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "LONG"
		}
	},
	"CLOCKSTEERINGSOURCE": {
		"EMYSOURCE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLOCKSTEERINGSOURCEENUM"
		}
	},
	"CLOCKSTEERINGBIASTOLERANCE": {
		"FMYTHRESHOLD": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["4"],
		"CAAO": ["4"]
	},
	"SINGLEPOINTRESIDUALS": {
		"ACLMYRESIDUALS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"ULMYCHANNEL": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"FMYRESIDUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYRESIDUALSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		}
	},
	"SINGLEPOINTLOGGINGLEVEL": {
		"EMYLEVEL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "LOGGINGLEVELENUM"
		},
		"CABO": ["4"],
		"CAAO": ["4"]
	},
	"SINGLEPOINTOUTLIERS": {
		"ACLMYOUTLIERS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"ULMYCHANNEL": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"FMYMISCLOSURE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		}
	},
	"CAKELOG": {
		"SZMYMESSAGE": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		}
	},
	"QZSSRAWCNAVMESSAGE": {
		"ULMYSIGCHANNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYMESSAGEID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"AUCMYRAWFRAMEDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"MODULEPOWER": {
		"EMYEXTMODULE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "EXTMODULEENUM"
		},
		"EMYONOFF": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ONOFFENUM"
		}
	},
	"DATADECODESIGNAL": {
		"EMYSIGNALTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SIGNALTYPEENUM"
		},
		"EMYDATADECODEMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"GPSNAVCDC": {
		"ULMYTRANSMITTINGPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYWNOPD": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYTOPD": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYTOD": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYDATATYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYPRNA": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"DMYDELTAAF0": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAAF1": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYUDRA": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		}
	},
	"GPSNAVEDC": {
		"ULMYTRANSMITTINGPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYWNOPD": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYTOPD": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYTOD": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYDATATYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYPRNA": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"DMYDELTAALPHA": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTABETA": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAGAMMA": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAI": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAOMEGA": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAA": {
			"NOOFBYTES": "8",
			"OFFSET": "64",
			"DATATYPE": "DOUBLE"
		},
		"DMYDOTUDRA": {
			"NOOFBYTES": "8",
			"OFFSET": "72",
			"DATATYPE": "DOUBLE"
		}
	},
	"ENCLOSUREWHEELSENSOR": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"EMYWHEELSENSORDATARATE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "WHEELSENSORDATARATEENUM"
		}
	},
	"ENCLOSURECOMSELECT": {
		"EMYENCLOSURECOM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENCLOSURECOMSELECTENUM"
		}
	},
	"FAULT": {
		"SZMYMESSAGE": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		}
	},
	"PPPPOS": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"EMYDATUMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "DATUMENUM"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "66",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "67",
			"DATATYPE": "UCHAR"
		},
		"UCMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "1",
			"OFFSET": "68",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "69",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "70",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "71",
			"DATATYPE": "UCHAR"
		},
		"CABO": ["4"],
		"CAAO": ["72"]
	},
	"PPPSATELLITEBIASES": {
		"ACLMYSATELLITEBIASES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"FMYBIAS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYBIASSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		}
	},
	"PPPDATAFILE": {
		"SZMYPATH": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"EMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "1024",
			"DATATYPE": "PPPDATAFILETYPEENUM"
		},
		"ULMYPARAM1": {
			"NOOFBYTES": "4",
			"OFFSET": "1028",
			"DATATYPE": "ULONG"
		}
	},
	"PPPSATS": {
		"ACLMYSATELLITEENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		},
		"ULMYSTATUSMASK": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"PPPRESET": {
		"EMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PPPRESETTYPE"
		}
	},
	"PPPXYZ": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"FMYXSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "FLOAT"
		},
		"FMYYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "FLOAT"
		},
		"FMYZSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "FLOAT"
		},
		"EMYVELOCITYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYVELOCITYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "SOLTYPEENUM"
		}
	},
	"PPPSEED": {
		"EMYMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PPPSEEDMODEENUM"
		},
		"DMYLATITUDEINDEGREES": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDEINDEGREES": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"FMYNORTHINGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"FMYEASTINGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYHEIGHTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		}
	},
	"PPPUSEPSEUDORANGES": {
		"BMYISSET": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BOOL"
		}
	},
	"PPPDOP2": {
		"FMYGDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		},
		"FMYPDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"FMYHDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYVDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"ACLMYTDOPS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "TIMINGSYSTEMENUM"
		},
		"FMYDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["20"],
		"CAAO": ["8"]
	},
	"PPPEARTHTIDESMODEL": {
		"EMYMODEL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "EARTHTIDESMODELENUM"
		}
	},
	"ORBITANDCLOCKCORRECTIONS": {
		"EMYSOURCE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ORBITANDCLOCKCORRECTIONSSOURCEENUM"
		},
		"SZMYID": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ULMYSOLUTIONID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYSSRIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ACLMYENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "SATELLITEID"
		},
		"ULMYIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"FMYXCORRECTION": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYYCORRECTION": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYZCORRECTION": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYXCORRECTIONVELOCITY": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"FMYYCORRECTIONVELOCITY": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "FLOAT"
		},
		"FMYZCORRECTIONVELOCITY": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYCLOCKCORRECTION": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "FLOAT"
		},
		"FMYCLOCKCORRECTIONVELOCITY": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "FLOAT"
		},
		"FMYRANGESTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["20"],
		"CAAO": ["56"]
	},
	"PPPAPPLYDCBS": {
		"BMYAPPLYDCBS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BOOL"
		}
	},
	"PPPLOGGINGLEVEL": {
		"EMYLEVEL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "LOGGINGLEVELENUM"
		}
	},
	"PPPDYNAMICS": {
		"EMYDYNAMICS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PPPDYNAMICSENUM"
		}
	},
	"PPPINTEGRITYMONITORING": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"PPPFILTERINTERVAL": {
		"DMYINTERVAL": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"EMYINTERVALTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "PPPPROCESSINGINTERVALENUM"
		}
	},
	"PPPFILTERPOS": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"EMYDATUMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "DATUMENUM"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "66",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "67",
			"DATATYPE": "UCHAR"
		},
		"UCMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "1",
			"OFFSET": "68",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "69",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "70",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "71",
			"DATATYPE": "UCHAR"
		}
	},
	"PPPELEVMASK": {
		"FMYMASKANGLEINDEGREES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		}
	},
	"PPPEARTHTIDES": {
		"DMYMODEL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "EARTHTIDESMODELENUM"
		},
		"DMYEASTINGCORRECTION": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYNORTHINGCORRECTION": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHTCORRECTION": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["4"],
		"CAAO": ["28"]
	},
	"PPPFASTRESIDUALS": {
		"ACLMYDELTAPHASERESIDUALS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"FMYRESIDUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYVARIANCE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		}
	},
	"PPPRESIDUALS": {
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"EMYOBSERVATIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "PPPOBSERVATIONTYPEENUM"
		},
		"DMYVARIANCECOMPONENT": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"ACLMYRESIDUALS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "CLASSARRAY"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "SATELLITEID"
		},
		"FMYRESIDUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["20"],
		"CAAO": ["8"]
	},
	"PPPFASTLOGGINGLEVEL": {
		"EMYLEVEL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "LOGGINGLEVELENUM"
		}
	},
	"PPPTIMEOUT": {
		"ULMYTIMEOUT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"PPPCORRECTIONSDELAY": {
		"DMYDELAY": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"CABO": ["4"],
		"CAAO": ["8"]
	},
	"PPPSYSTEMBIASES": {
		"ACLMYSYSTEMBIASES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"FMYBIAS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYBIASSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		}
	},
	"PPPINTEGRITYEVENT": {
		"FMYGLOBALTHRESHOLD": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"FMYGLOBALSTATISTIC": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"ACLMYENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "SATELLITEID"
		},
		"EMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "PPPOBSERVATIONTYPEENUM"
		},
		"FMYRESIDUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYSTANDARDIZEDRESIDUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["4"],
		"CAAO": ["20"]
	},
	"PPPOUTLIERS": {
		"ACLMYENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"EMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "PPPOBSERVATIONTYPEENUM"
		},
		"FMYMISCLOSURE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"GROUPDELAYS": {
		"AMYHLASSPOSPOLY": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"ULMYIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"DMYTGD": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		}
	},
	"PPPCONVERGEDCRITERIA": {
		"EMYCRITERIA": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PPPCONVERGEDCRITERIAENUM"
		},
		"FMYTHRESHOLD": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		}
	},
	"PPPLOG": {
		"SZMYMESSAGE": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		}
	},
	"ASSIGNBIT": {
		"SVMYCHAN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SVCHAN"
		},
		"EMYASSIGNTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ASSIGNBITENUM"
		},
		"EMYFREQUENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "CWFREQUENCYENUM"
		},
		"ULMYSATID": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"LMYDOPPLER": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "LONG"
		},
		"ULMYDOPPLERWINDOW": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		}
	},
	"BDSB1RAWNAVSUBFRAME": {
		"ULMYSIGNALCHANNELNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSATELLITEID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYSUBFRAMEID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"AUCMYRAWSUBFRAMEDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"RTCAREFPVA": {
		"UCMYNOVATELDESIGNATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "UCHAR"
		},
		"UCMYSUBTYPEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "UCHAR"
		},
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "2",
			"DATATYPE": "ULONG"
		},
		"DMYRTCATIME": {
			"NOOFBYTES": "8",
			"OFFSET": "6",
			"DATATYPE": "DOUBLE"
		},
		"DMYUSERPOSX": {
			"NOOFBYTES": "8",
			"OFFSET": "14",
			"DATATYPE": "DOUBLE"
		},
		"DMYUSERPOSY": {
			"NOOFBYTES": "8",
			"OFFSET": "22",
			"DATATYPE": "DOUBLE"
		},
		"DMYUSERPOSZ": {
			"NOOFBYTES": "8",
			"OFFSET": "30",
			"DATATYPE": "DOUBLE"
		},
		"DMYUSERVELE": {
			"NOOFBYTES": "8",
			"OFFSET": "38",
			"DATATYPE": "DOUBLE"
		},
		"DMYUSERVELN": {
			"NOOFBYTES": "8",
			"OFFSET": "46",
			"DATATYPE": "DOUBLE"
		},
		"DMYUSERVELU": {
			"NOOFBYTES": "8",
			"OFFSET": "54",
			"DATATYPE": "DOUBLE"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "62",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "70",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "78",
			"DATATYPE": "DOUBLE"
		},
		"UCMYVELTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "86",
			"DATATYPE": "UCHAR"
		},
		"UCMYINSSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "87",
			"DATATYPE": "UCHAR"
		},
		"UCMYRESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "88",
			"DATATYPE": "UCHAR"
		}
	},
	"RTCAREFPVAIN": {
		"ULMESSAGEIDENTIFIER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULREFSTATION": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMESSAGETYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMESSAGELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"UCMYNOVATELDESIGNATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "UCHAR"
		},
		"UCMYSUBTYPEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "21",
			"DATATYPE": "UCHAR"
		},
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "ULONG"
		},
		"DMYRTCATIME": {
			"NOOFBYTES": "8",
			"OFFSET": "26",
			"DATATYPE": "DOUBLE"
		},
		"DMYUSERPOSX": {
			"NOOFBYTES": "8",
			"OFFSET": "34",
			"DATATYPE": "DOUBLE"
		},
		"DMYUSERPOSY": {
			"NOOFBYTES": "8",
			"OFFSET": "42",
			"DATATYPE": "DOUBLE"
		},
		"DMYUSERPOSZ": {
			"NOOFBYTES": "8",
			"OFFSET": "50",
			"DATATYPE": "DOUBLE"
		},
		"DMYUSERVELE": {
			"NOOFBYTES": "8",
			"OFFSET": "58",
			"DATATYPE": "DOUBLE"
		},
		"DMYUSERVELN": {
			"NOOFBYTES": "8",
			"OFFSET": "66",
			"DATATYPE": "DOUBLE"
		},
		"DMYUSERVELU": {
			"NOOFBYTES": "8",
			"OFFSET": "74",
			"DATATYPE": "DOUBLE"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "82",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "90",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "98",
			"DATATYPE": "DOUBLE"
		},
		"UCMYVELTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "106",
			"DATATYPE": "UCHAR"
		},
		"UCMYINSSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "107",
			"DATATYPE": "UCHAR"
		},
		"UCMYRESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "108",
			"DATATYPE": "UCHAR"
		}
	},
	"RELINSPVAIN": {
		"EMYRELINSOUTPUT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RELINSOUTPUTENUM"
		},
		"DMYDELTAPOSN": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAPOSE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAPOSU": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAVELN": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAVELE": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAVELU": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAHEADING": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "FLOAT"
		},
		"ACMYROVERID": {
			"NOOFBYTES": "1",
			"OFFSET": "80",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"EMYROVERINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "81",
			"DATATYPE": "INSSTATUSENUM"
		},
		"ACMYMASTERID": {
			"NOOFBYTES": "1",
			"OFFSET": "85",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"EMYMASTERINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "86",
			"DATATYPE": "INSSTATUSENUM"
		},
		"EMYRTKBASELINESTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "90",
			"DATATYPE": "SOLTYPEENUM"
		},
		"ULMYEXTENDEDSOLSTAT": {
			"NOOFBYTES": "4",
			"OFFSET": "94",
			"DATATYPE": "HEXULONG"
		}
	},
	"SETLOGGINGDEVICE": {
		"EMYSTORAGEMEDIUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "MASSSTORAGEDEVICEENUM"
		}
	},
	"NMEAVERSION": {
		"EMYNMEAVERSION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "NMEAVERSIONENUM"
		}
	},
	"IPSERVICE": {
		"EMYINETPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "IPSERVICEENUM"
		},
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"PASSCOM5": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PASSCOM6": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PASSBT1": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"SETADMINPASSWORD": {
		"SZMYOLDPASSWORD": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"SZMYNEWPASSWORD": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "STRING"
		}
	},
	"USERACCOUNTS": {
		"SZMYUSERNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		}
	},
	"SETFILECOPYMODE": {
		"EMYFILECOPYMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FILECOPYMODEENUM"
		},
		"EMYFILECOPYOPTIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FILECOPYOPTIONSENUM"
		}
	},
	"BDSECUTOFF": {
		"FMYELEVATIONCUTOFFANGLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		}
	},
	"BDSB1EPHEMERIS": {
		"ULMYSATELLITEID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYWN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"DMYURA": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"ULMYSATH1": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"DMYTGD1": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"ULMYIODC": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULMYTOC": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"DMYA0": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYA1": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYA2": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"ULMYIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"ULMYTOE": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ULONG"
		},
		"DMYROOTA": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYECCENTRICITY": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA": {
			"NOOFBYTES": "8",
			"OFFSET": "84",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAN": {
			"NOOFBYTES": "8",
			"OFFSET": "92",
			"DATATYPE": "DOUBLE"
		},
		"DMYM0": {
			"NOOFBYTES": "8",
			"OFFSET": "100",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA0": {
			"NOOFBYTES": "8",
			"OFFSET": "108",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGADOT": {
			"NOOFBYTES": "8",
			"OFFSET": "116",
			"DATATYPE": "DOUBLE"
		},
		"DMYI0": {
			"NOOFBYTES": "8",
			"OFFSET": "124",
			"DATATYPE": "DOUBLE"
		},
		"DMYIDOT": {
			"NOOFBYTES": "8",
			"OFFSET": "132",
			"DATATYPE": "DOUBLE"
		},
		"DMYCUC": {
			"NOOFBYTES": "8",
			"OFFSET": "140",
			"DATATYPE": "DOUBLE"
		},
		"DMYCUS": {
			"NOOFBYTES": "8",
			"OFFSET": "148",
			"DATATYPE": "DOUBLE"
		},
		"DMYCRC": {
			"NOOFBYTES": "8",
			"OFFSET": "156",
			"DATATYPE": "DOUBLE"
		},
		"DMYCRS": {
			"NOOFBYTES": "8",
			"OFFSET": "164",
			"DATATYPE": "DOUBLE"
		},
		"DMYCIC": {
			"NOOFBYTES": "8",
			"OFFSET": "172",
			"DATATYPE": "DOUBLE"
		},
		"DMYCIS": {
			"NOOFBYTES": "8",
			"OFFSET": "180",
			"DATATYPE": "DOUBLE"
		}
	},
	"BDSALMANAC": {
		"ULMYSATELLITEID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYWN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYTOA": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"DMYROOTA": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYECCENTRICITY": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYM0": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA0": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGADOT": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAI": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYA0": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYA1": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"ULMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "HEXULONG"
		}
	},
	"BDSALMANACHEALTH": {
		"ULMYSOURCESATELLITEID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYWN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYTOA": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ACLMYHEALTHS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"USMYSATELLITEID": {
			"NOOFBYTES": "2",
			"OFFSET": "16",
			"DATATYPE": "USHORT"
		},
		"USMYHEALTH": {
			"NOOFBYTES": "2",
			"OFFSET": "18",
			"DATATYPE": "USHORT"
		},
		"CABO": ["16"],
		"CAAO": ["4"]
	},
	"BDSIONO": {
		"ULMYTRANSMITTINGSATELLITEID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYALPHA0": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYALPHA1": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYALPHA2": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYALPHA3": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYBETA0": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYBETA1": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYBETA2": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYBETA3": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		}
	},
	"RTCM4093TYPE5": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1121": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1122": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1123": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1124": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1125": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1126": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1127": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"NOVATELXGPSOBS": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"NOVATELXGLOOBS": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"NOVATELXSBASOBS": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"NOVATELXGALOBS": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"NOVATELXQZSSOBS": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"NOVATELXBDSOBS": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"SETIONOMODEL": {
		"EMYMODEL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "IONOMODELENUM"
		}
	},
	"BDSCLOCK": {
		"DMYA0UTC": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYA1UTC": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"SMYDELTATLS": {
			"NOOFBYTES": "2",
			"OFFSET": "16",
			"DATATYPE": "SHORT"
		},
		"USMYWNLSF": {
			"NOOFBYTES": "2",
			"OFFSET": "18",
			"DATATYPE": "USHORT"
		},
		"USMYDN": {
			"NOOFBYTES": "2",
			"OFFSET": "20",
			"DATATYPE": "USHORT"
		},
		"SMYDELTATLSF": {
			"NOOFBYTES": "2",
			"OFFSET": "22",
			"DATATYPE": "SHORT"
		},
		"DMYA0GPS": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYA1GPS": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYA0GAL": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYA1GAL": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"DMYA0GLO": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		},
		"DMYA1GLO": {
			"NOOFBYTES": "8",
			"OFFSET": "64",
			"DATATYPE": "DOUBLE"
		}
	},
	"BLUETOOTHSTATUS": {
		"EMYBLUETOOTHSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BLUETOOTHSTATUSENUM"
		},
		"SMYBLUETOOTHINFO": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		},
		"SMYBLUETOOTHINFO1": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "STRING"
		},
		"SMYBLUETOOTHINFO2": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "STRING"
		}
	},
	"BLUETOOTHCONFIG": {
		"EMYBTCOMMAND": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BLUETOOTHCONFIGURATIONENUM"
		},
		"SZMYARG1": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		},
		"SZMYARG2": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "STRING"
		}
	},
	"PROGRAMSYNTH": {
		"ULMYSYNTH": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYFREQ": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		}
	},
	"WIFICLISTATUS": {
		"EMYSTATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "WIFICLIENTSTATEENUM"
		},
		"SMYMACADDRESS": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		},
		"BMYISSCANINPROGRESSS": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "BOOL"
		},
		"FMYLINKSPEED": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "FLOAT"
		},
		"FMYLINKSPEEDMAX": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "FLOAT"
		},
		"EMYNETWORKID": {
			"NOOFBYTES": "4",
			"OFFSET": "17",
			"DATATYPE": "WIFINETWORKIDENUM"
		},
		"SMYSSID": {
			"NOOFBYTES": "1",
			"OFFSET": "21",
			"DATATYPE": "STRING"
		},
		"SMYBSSID": {
			"NOOFBYTES": "1",
			"OFFSET": "57",
			"DATATYPE": "STRING"
		},
		"SMYFREQUENCYBAND": {
			"NOOFBYTES": "1",
			"OFFSET": "58",
			"DATATYPE": "STRING"
		},
		"UIMYCHANNEL": {
			"NOOFBYTES": "4",
			"OFFSET": "59",
			"DATATYPE": "UINT"
		},
		"IMYRSSI": {
			"NOOFBYTES": "4",
			"OFFSET": "63",
			"DATATYPE": "INT"
		},
		"EMYERROR": {
			"NOOFBYTES": "4",
			"OFFSET": "67",
			"DATATYPE": "WIFICLIENTERRORENUM"
		},
		"ULMYERRORCODE": {
			"NOOFBYTES": "4",
			"OFFSET": "71",
			"DATATYPE": "ULONG"
		}
	},
	"WIFICLICONFIG": {
		"EMYWIFINETWORKID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "WIFINETWORKIDENUM"
		},
		"EMYWIFICONFIG": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "WIFINETWORKCONFIGURATIONENUM"
		},
		"SMYWIFICONFIGVALUE": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "STRING"
		}
	},
	"WIFICLICONTROL": {
		"EMYCOMMAND": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "WIFICLIENTCONTROLENUM"
		},
		"SMYARGUMENT": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		},
		"CABO": ["4"],
		"CAAO": ["5"]
	},
	"WIFICLISCANRESULTS": {
		"ACLMYNETWORKS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYBSSTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "WIFIBSSTYPEENUM"
		},
		"SMYSSID": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "STRING"
		},
		"SMYBSSID": {
			"NOOFBYTES": "1",
			"OFFSET": "44",
			"DATATYPE": "STRING"
		},
		"SMYAUTHENTICATIONTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "45",
			"DATATYPE": "STRING"
		},
		"SMYENCRYPTIONPROTOCOL": {
			"NOOFBYTES": "1",
			"OFFSET": "46",
			"DATATYPE": "STRING"
		},
		"SMYFREQUENCYBAND": {
			"NOOFBYTES": "1",
			"OFFSET": "47",
			"DATATYPE": "STRING"
		},
		"UIMYCHANNEL": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "UINT"
		},
		"USMYNONHTRATES": {
			"NOOFBYTES": "2",
			"OFFSET": "52",
			"DATATYPE": "USHORT"
		},
		"AULMYHTRATES": {
			"NOOFBYTES": "4",
			"OFFSET": "54",
			"DATATYPE": "FIXEDULONGARRAY"
		},
		"IMYRSSI": {
			"NOOFBYTES": "4",
			"OFFSET": "58",
			"DATATYPE": "INT"
		}
	},
	"WIFICONFIG": {
		"EMYCONFIGURATION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "WIFICONFIGURATIONENUM"
		},
		"SZMYPARAMETER": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		},
		"SZMYPARAMETER1": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "STRING"
		}
	},
	"NOVATELXOBS": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"NOVATELXOBSIN": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"NOVATELXREF": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"NOVATELXREFIN": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		},
		"CABO": ["4"],
		"CAAO": ["800"]
	},
	"PPPTROPODELAYS": {
		"ACLMYTROPOSPHEREDELAYS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"FMYDELAY": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYDELAYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		}
	},
	"SETNOVATELXOBSFORMAT": {
		"ULMYNOOFSATS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"EMYMEAS1": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "MEASUREMENTENUM"
		},
		"EMYMEAS2": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "MEASUREMENTENUM"
		},
		"EMYMEAS3": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "MEASUREMENTENUM"
		},
		"EMYMEAS4": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "MEASUREMENTENUM"
		}
	},
	"DEBUGDATA": {
		"AUCBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		}
	},
	"MATCHEDLINEARCOMBINATION": {
		"EMYSYSTEMOFLINEARCOMBINATION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"EMYPRIMARYLINEARCOMBINATION": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "LINEARCOMBINATIONENUM"
		},
		"EMYSECONDARYLINEARCOMBINATION": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "LINEARCOMBINATIONENUM"
		},
		"EMYTERTIARYLINEARCOMBINATION": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "LINEARCOMBINATIONENUM"
		},
		"EMYQUATERNARYLINEARCOMBINATION": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "LINEARCOMBINATIONENUM"
		}
	},
	"USERACCURACYLEVEL": {
		"EMYSOLTYPEDEF": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYSTATISTICUPPERBOUND": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		}
	},
	"UALCONTROL": {
		"EMYUSERACCURACYLEVELACTION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "USERACCURACYLEVELCONTROLENUM"
		},
		"DMYUSERACCURACYLEVEL1UPPERBOUND": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYUSERACCURACYLEVEL2UPPERBOUND": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		}
	},
	"STICKYETHERPROXY_PRIV": {
		"ULMYVALUE1": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"NOVATELXREFTEMP": {
		"MESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"NOVATELXSTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"ITRFREALIZATIONYEAR": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_UINT6"
		},
		"GPSINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GLONASSINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"GALILEOINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "7",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"REFERENCESTATIONINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"ECEFX": {
			"NOOFBYTES": "8",
			"OFFSET": "9",
			"DATATYPE": "RTCMV3_INT38"
		},
		"SINGLERECEIVEROSCINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"RESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "18",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"ECEFY": {
			"NOOFBYTES": "8",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_INT38"
		},
		"QUARTERCYCLEINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "RTCMV3_BIT2"
		},
		"ECEFZ": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "RTCMV3_INT38"
		},
		"ANTENNAHEIGHT": {
			"NOOFBYTES": "2",
			"OFFSET": "36",
			"DATATYPE": "RTCMV3_UINT16"
		}
	},
	"RTCM1104BDS": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"ENCRYPTIONKEY": {
		"EMYENCRYPTIONKEYMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENCRYPTIONKEYMODEENUM"
		},
		"SZMYENCRYPTIONKEY": {
			"NOOFBYTES": "1",
			"OFFSET": "25",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"AMBIGUITYSEARCHLIMIT": {
		"UIMYMAXAMBIGUITIESTOSEARCH": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "UINT"
		}
	},
	"EVENTOUTCONTROL": {
		"EMYMARK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "MARKENUM"
		},
		"EMYENABLEDISABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ENABLEENUM"
		},
		"EMYPOLARITY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "POLARITYENUM"
		},
		"ULMYACTIVEPERIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYNOTACTIVEPERIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		}
	},
	"EVENTINCONTROL": {
		"EMYMARK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "MARKENUM"
		},
		"EMYEVENTINENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "EVENTINENABLEENUM"
		},
		"EMYPOLARITY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "POLARITYENUM"
		},
		"LMYTIMEBIAS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "LONG"
		},
		"ULMYTIMEGUARD": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		}
	},
	"CELLCONTROL": {
		"EMYCELLCTRL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CELLULARCONTROLENUM"
		},
		"SZMYARG1": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		},
		"SZMYARG2": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "STRING"
		}
	},
	"DUALANTENNAPOWER": {
		"EDUALANTENNAPOWER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "DUALANTENNAPOWERENUM"
		}
	},
	"GPIOCONFIG": {
		"ULMYGPIOPIN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"EMYGPIOPINLEVEL": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "GPIOLEVELENUM"
		}
	},
	"RTCM1101": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1102": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1103": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1104": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1105": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1106": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1107": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1111": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1112": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1113": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1114": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1115": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1116": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1117": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"RTCM1230": {
		"UIMYMESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"UIMYREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"UCMYGLOCPBIASINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"UCMYRESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"UCMYSIGNALMASK": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "RTCMV3_BIT4"
		},
		"SMYL1CABIAS": {
			"NOOFBYTES": "4",
			"OFFSET": "7",
			"DATATYPE": "RTCMV3_INT16"
		},
		"SMYL1PBIAS": {
			"NOOFBYTES": "4",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_INT16"
		},
		"SMYL2CABIAS": {
			"NOOFBYTES": "4",
			"OFFSET": "15",
			"DATATYPE": "RTCMV3_INT16"
		},
		"SMYL2PBIAS": {
			"NOOFBYTES": "4",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_INT16"
		}
	},
	"RTCM1230IN": {
		"ULMYMESSAGENUMBER": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "RTCMV3_INT12"
		},
		"UIMYREFERENCESTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "RTCMV3_UINT12"
		},
		"UCMYGLOCPBIASINDICATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "RTCMV3_BIT1"
		},
		"UCMYRESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "RTCMV3_BIT3"
		},
		"UCMYSIGNALMASK": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "RTCMV3_BIT4"
		},
		"SMYL1CABIAS": {
			"NOOFBYTES": "4",
			"OFFSET": "7",
			"DATATYPE": "RTCMV3_INT16"
		},
		"SMYL1PBIAS": {
			"NOOFBYTES": "4",
			"OFFSET": "11",
			"DATATYPE": "RTCMV3_INT16"
		},
		"SMYL2CABIAS": {
			"NOOFBYTES": "4",
			"OFFSET": "15",
			"DATATYPE": "RTCMV3_INT16"
		},
		"SMYL2PBIAS": {
			"NOOFBYTES": "4",
			"OFFSET": "19",
			"DATATYPE": "RTCMV3_INT16"
		}
	},
	"HEADING3": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYBLENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYHEADING": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYPITCH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"FMYHEADINGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"FMYPITCHSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "32",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "36",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "37",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "38",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "39",
			"DATATYPE": "UCHAR"
		},
		"UCMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "1",
			"OFFSET": "40",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "41",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "42",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "43",
			"DATATYPE": "UCHAR"
		}
	},
	"RFINPUTGAIN": {
		"EMYANTENNAPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RFINPUTGAINPORTENUM"
		},
		"EMYFREQUENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RFINPUTGAINFREQUENCYENUM"
		},
		"EMYMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "RFINPUTGAINMODEENUM"
		},
		"FMYGAIN": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		}
	},
	"DEBUGVAS": {
		"ULMYRESTARTCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"SZMYASNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		},
		"SZMYTASKNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "STRING"
		},
		"LMYERR": {
			"NOOFBYTES": "4",
			"OFFSET": "6",
			"DATATYPE": "LONG"
		},
		"LMYLINENUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "10",
			"DATATYPE": "LONG"
		},
		"ULMYPC": {
			"NOOFBYTES": "4",
			"OFFSET": "14",
			"DATATYPE": "ULONG"
		}
	},
	"DUALCARDCONFIG": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"ULMYRATEINHZ": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"HEADINGEXT2": {
		"ACMYROVERID": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ACMYMASTERID": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"HEADINGEXT2IN": {
		"ACMYROVERID": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ACMYMASTERID": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "2",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"IOCONFIG": {
		"EMYPMUX": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FPGAPMUXENUM"
		},
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ENABLEENUM"
		},
		"EMYCONTROL": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "USERIO2CONTROLENUM"
		}
	},
	"REVIVE": {
		"PORTNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		}
	},
	"WIFIAPCONFIG": {
		"EMYAPID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "WIFIAPIDENUM"
		},
		"EMYCONFIGURATION": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "WIFIAPCONFIGURATIONENUM"
		},
		"SMYVALUE": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "STRING"
		}
	},
	"WIFIAPSTATUS": {
		"EMYSTATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "WIFIAPSTATEENUM"
		},
		"SMYBSSID": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		},
		"EMYAPID": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "WIFIAPIDENUM"
		},
		"ACLMYSTATIONINFO": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "CLASSARRAY"
		},
		"SMYMACADDRESS": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "STRING"
		},
		"FMYLINKSPEED": {
			"NOOFBYTES": "4",
			"OFFSET": "33",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["13"],
		"CAAO": ["24"]
	},
	"BESTPOSIN": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"EMYDATUMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "DATUMENUM"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "66",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "67",
			"DATATYPE": "UCHAR"
		},
		"UCMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "1",
			"OFFSET": "68",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "69",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "70",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "71",
			"DATATYPE": "UCHAR"
		}
	},
	"HWCONFIGTABLERAW": {
		"ULMYNUMCLEAREDPACKETS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYNUMUNUSEDPACKETS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"CLMYHWCONFIGTABLEENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "CLASSARRAY"
		},
		"USMYTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "HEXBYTE"
		},
		"USMYDATA": {
			"NOOFBYTES": "2",
			"OFFSET": "13",
			"DATATYPE": "USHORT"
		},
		"CABO": ["4"],
		"CAAO": ["3"]
	},
	"IPSTATS": {
		"ACLMYIPINTERFACESTATISTICS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYPHYSICALINTERFACE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "PHYSICALINTERFACEENUM"
		},
		"ULMYCONNECTIONDURATION": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYRXCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYTXCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		}
	},
	"PCAPLOGCONFIG": {
		"EMYPHYSICALINTERFACE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PHYSICALINTERFACEENUM"
		},
		"EMYDESTINATION": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "DEBUGLOGDESTINATIONENUM"
		},
		"IMYSNAPSHOTLENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "INT"
		},
		"SMYDESTINATIONPATH": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "STRING"
		},
		"IMYMAXLOGFILELENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "INT"
		},
		"IMAXLOGFILENUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "17",
			"DATATYPE": "INT"
		}
	},
	"LOGIN": {
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		},
		"SZMYUSERNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		},
		"SZMYPASSWORD": {
			"NOOFBYTES": "1",
			"OFFSET": "36",
			"DATATYPE": "STRING"
		}
	},
	"LOGOUT": {
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		}
	},
	"SETWIFIREGULATORYDOMAIN": {
		"EMYREGULATORYDOMAIN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "WIFIREGULATORYDOMAINENUM"
		},
		"IMYRFPATHGAINDBM": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "INT"
		}
	},
	"AIRPLANEMODE": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"BLUETOOTHDATA": {
		"AUCBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"PPPTROPOMODEL": {
		"FMYZENITHTROPOTOTALDELAY": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		},
		"FMYZENITHTROPORESIDUALDELAY": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"FMYZENITHTROPORESIDUALDELAYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		}
	},
	"PPPTROPOMODELCONFIG": {
		"EMYMODEL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "TROPOSPHEREMODELENUM"
		},
		"FMYINITIALSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"FMYSPECTRALDENSITY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		}
	},
	"BESTVELTYPE": {
		"EMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BESTVELTYPEENUM"
		}
	},
	"SAVEETHERNETDATA": {
		"EMYINTERFACE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PHYSICALINTERFACEENUM"
		}
	},
	"CELLULARCONFIG": {
		"EMYCELLCFG": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CELLULARCONFIGURATIONENUM"
		},
		"SZMYARG1": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		},
		"SZMYARG2": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "STRING"
		}
	},
	"CELLULARCONTROL": {
		"EMYCELLCTRL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CELLULARCONTROLENUM"
		},
		"SZMYARG1": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		},
		"SZMYARG2": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "STRING"
		}
	},
	"CELLULARSTATUS": {
		"EMYMODEMSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RILPOWERSTATEENUM"
		},
		"EMYNETSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CELLNETREGISTRATIONSTATUSENUM"
		},
		"SZMYIPADDRESS": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "STRING"
		},
		"IMYSIGNAL": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "INT"
		},
		"IMYRSSI": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "INT"
		},
		"SZMYNETWORK": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "STRING"
		},
		"UIMYCELLID": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "UINT"
		},
		"IMYMODEMTEMPERATURE": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "INT"
		},
		"SZMYLASTERROR": {
			"NOOFBYTES": "1",
			"OFFSET": "26",
			"DATATYPE": "STRING"
		}
	},
	"CELLULARINFO": {
		"SZMYMAKE": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"SZMYMANUFACTURER": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "STRING"
		},
		"SZMYSERIALNUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "21",
			"DATATYPE": "STRING"
		},
		"SZMYSOFTWAREVERSION": {
			"NOOFBYTES": "1",
			"OFFSET": "22",
			"DATATYPE": "STRING"
		},
		"SZMYMOBILENUMBER": {
			"NOOFBYTES": "1",
			"OFFSET": "23",
			"DATATYPE": "STRING"
		},
		"SZMYMOBILESUBSCRIBERID": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "STRING"
		}
	},
	"SETPREFERREDNETIF": {
		"EMYPREFERREDNETIFMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "NETIFPREFERREDINTERFACEMODEENUM"
		},
		"EMYPRIMARYNETIF": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "PHYSICALINTERFACEENUM"
		},
		"EMYSECONDARYNETIF": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "PHYSICALINTERFACEENUM"
		},
		"EMYTERTIARYNETIF": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "PHYSICALINTERFACEENUM"
		},
		"EMYQUATERNARYNETIF": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "PHYSICALINTERFACEENUM"
		},
		"EMYQUINARYNETIF": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "PHYSICALINTERFACEENUM"
		},
		"EMYSENARYNETIF": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "PHYSICALINTERFACEENUM"
		},
		"EMYSEPTENARYNETIF": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "PHYSICALINTERFACEENUM"
		},
		"EMYOCTONARYNETIF": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "PHYSICALINTERFACEENUM"
		},
		"EMYNONARYNETIF": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "PHYSICALINTERFACEENUM"
		},
		"EMYDENARYNETIF": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "PHYSICALINTERFACEENUM"
		}
	},
	"BLUETOOTHDISCOVERABILITY": {
		"EMYDISCOVERABILITYON": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ONOFFENUM"
		},
		"ULMYTIMEOUTPERIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"BDSTGD2FROMRESERVEDBITS": {
		"BMYISENABLED": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BOOL"
		}
	},
	"BDSRAWNAVSUBFRAME": {
		"ULMYSIGNALCHANNELNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSATELLITEID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"EMYBDSDATASOURCE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "BDSDATASOURCEENUM"
		},
		"ULMYSUBFRAMEID": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"AUCMYRAWSUBFRAMEDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "FIXEDHEXBYTEARRAY"
		}
	},
	"BDSEPHEMERIS": {
		"ULMYSATELLITEID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYWN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"DMYURA": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"ULMYSATH1": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"DMYTGD1": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYTGD2": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"ULMYIODC": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"ULMYTOC": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"DMYA0": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYA1": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYA2": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"ULMYIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "ULONG"
		},
		"ULMYTOE": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "ULONG"
		},
		"DMYROOTA": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"DMYECCENTRICITY": {
			"NOOFBYTES": "8",
			"OFFSET": "84",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA": {
			"NOOFBYTES": "8",
			"OFFSET": "92",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAN": {
			"NOOFBYTES": "8",
			"OFFSET": "100",
			"DATATYPE": "DOUBLE"
		},
		"DMYM0": {
			"NOOFBYTES": "8",
			"OFFSET": "108",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGA0": {
			"NOOFBYTES": "8",
			"OFFSET": "116",
			"DATATYPE": "DOUBLE"
		},
		"DMYOMEGADOT": {
			"NOOFBYTES": "8",
			"OFFSET": "124",
			"DATATYPE": "DOUBLE"
		},
		"DMYI0": {
			"NOOFBYTES": "8",
			"OFFSET": "132",
			"DATATYPE": "DOUBLE"
		},
		"DMYIDOT": {
			"NOOFBYTES": "8",
			"OFFSET": "140",
			"DATATYPE": "DOUBLE"
		},
		"DMYCUC": {
			"NOOFBYTES": "8",
			"OFFSET": "148",
			"DATATYPE": "DOUBLE"
		},
		"DMYCUS": {
			"NOOFBYTES": "8",
			"OFFSET": "156",
			"DATATYPE": "DOUBLE"
		},
		"DMYCRC": {
			"NOOFBYTES": "8",
			"OFFSET": "164",
			"DATATYPE": "DOUBLE"
		},
		"DMYCRS": {
			"NOOFBYTES": "8",
			"OFFSET": "172",
			"DATATYPE": "DOUBLE"
		},
		"DMYCIC": {
			"NOOFBYTES": "8",
			"OFFSET": "180",
			"DATATYPE": "DOUBLE"
		},
		"DMYCIS": {
			"NOOFBYTES": "8",
			"OFFSET": "188",
			"DATATYPE": "DOUBLE"
		}
	},
	"DEBUGROUTETABLE": {
		"SZROUTETABLE": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		}
	},
	"HEADINGRATE": {
		"EMYSOLUTIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYSOLUTIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYBLENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYHEADING": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYPITCH": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"FMYBLENGTHSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"FMYHEADINGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"FMYPITCHSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FFLOAT": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"ACMYROVERID": {
			"NOOFBYTES": "1",
			"OFFSET": "40",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "41",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"UCMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "1",
			"OFFSET": "45",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "48",
			"DATATYPE": "UCHAR"
		}
	},
	"ALCRESOLUTION": {
		"EACTION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"GENERATEDEBUGLOGS": {
		"EMYDEBUGLOGGINGTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "DEBUGLOGTYPEENUM"
		},
		"DMYINTERVAL": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"EMYPORTADDRESS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "COMMPORTENUM"
		},
		"EMYLOGGINGLEVEL": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "DEBUGLOGLEVELENUM"
		},
		"EMYLOGFORMAT": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "DEBUGLOGFORMATENUM"
		}
	},
	"PASSCOM7": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PASSCOM8": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PASSCOM9": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PASSCOM10": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PPPESTIMATEWIDELANE": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "AUTOENABLEDISABLEENUM"
		}
	},
	"PPPESTIMATEIONOSPHERE": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "AUTOENABLEDISABLEENUM"
		}
	},
	"PPPSOURCE": {
		"EMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ORBITANDCLOCKCORRECTIONSSOURCEENUM"
		}
	},
	"SYNCHEAVE": {
		"DMYHEAVE": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEAVESTDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		}
	},
	"DELAYEDHEAVE": {
		"DMYHEAVE": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEAVESTDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		}
	},
	"DHCPCONFIG": {
		"EMYINTERFACE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PHYSICALINTERFACEENUM"
		},
		"EMYENABLED": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ENABLEENUM"
		},
		"ULMYSTARTADDRESS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYLEASETIME": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		}
	},
	"VERIPOSDEBUGSTATE": {
		"ULMYSTATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"VERIPOSDEBUGDATA": {
		"ACMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PPPAPPLYSATELLITEPCO": {
		"BMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BOOL"
		}
	},
	"PPPSEEDSTORE": {
		"DMYLATITUDEINDEGREES": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDEINDEGREES": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYELLIPSOIDALHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYNORTHINGSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYEASTINGSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHTSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "40",
			"DATATYPE": "DOUBLE"
		},
		"DMYNORTHINGEASTINGCOVARIANCE": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"DMYNORTHINGHEIGHTCOVARIANCE": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		},
		"DMYEASTINGHEIGHTCOVARIANCE": {
			"NOOFBYTES": "8",
			"OFFSET": "64",
			"DATATYPE": "DOUBLE"
		}
	},
	"RTCMV2DATAIN": {
		"AUCMYVARIABLEMESSAGE": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARHEXBYTETYPE"
		}
	},
	"RTCMV3DATAIN": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARHEXBYTETYPE"
		}
	},
	"NOVATELXRTCMV3SSRIN": {
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARHEXBYTETYPE"
		},
		"CABO": ["4"],
		"CAAO": ["1024"]
	},
	"LBANDBEAMTABLE": {
		"ACLMYENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"SZMYNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZMYREGIONID": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ULMYFREQUENCYINHZ": {
			"NOOFBYTES": "4",
			"OFFSET": "6",
			"DATATYPE": "ULONG"
		},
		"ULMYBAUDRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "10",
			"DATATYPE": "ULONG"
		},
		"FMYLONGITUDE": {
			"NOOFBYTES": "4",
			"OFFSET": "14",
			"DATATYPE": "FLOAT"
		},
		"ULMYBEAMACCESS": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "ULONG"
		}
	},
	"TERRASTARINFO": {
		"SZMYPAC": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"EMYONSHOREMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "1",
			"DATATYPE": "VERIPOSONSHOREOPERATINGMODEENUM"
		},
		"ULMYONSHORESUBSCRIPTIONDETAILS": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "ULONG"
		},
		"ULMYCONTRACTENDDAYOFYEAR": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "ULONG"
		},
		"ULMYCONTRACTENDYEAR": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "ULONG"
		},
		"ULMYTIMEDENABLEPERIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "17",
			"DATATYPE": "ULONG"
		},
		"EMYREGIONRESTRICTION": {
			"NOOFBYTES": "4",
			"OFFSET": "21",
			"DATATYPE": "VERIPOSREGIONRESTRICTIONENUM"
		},
		"FMYLOCALAREACENTERPOINTLATITUDE": {
			"NOOFBYTES": "4",
			"OFFSET": "25",
			"DATATYPE": "FLOAT"
		},
		"FMYLOCALAREACENTERPOINTLONGITUDE": {
			"NOOFBYTES": "4",
			"OFFSET": "29",
			"DATATYPE": "FLOAT"
		},
		"ULMYLOCALAREARADIUS": {
			"NOOFBYTES": "4",
			"OFFSET": "33",
			"DATATYPE": "ULONG"
		}
	},
	"DBGTTCP": {
		"IMYTESTID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INT"
		},
		"BMYUSETCP": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "BOOL"
		},
		"BMYTX": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "BOOL"
		},
		"IMYBUFLEN": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "INT"
		},
		"IMYBUFNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "INT"
		},
		"SZMYIPADDRESS": {
			"NOOFBYTES": "1",
			"OFFSET": "20",
			"DATATYPE": "STRING"
		},
		"IMYIPPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "21",
			"DATATYPE": "INT"
		},
		"BMYDISABLENAGLE": {
			"NOOFBYTES": "4",
			"OFFSET": "25",
			"DATATYPE": "BOOL"
		},
		"IMYTASKPRIORITY": {
			"NOOFBYTES": "4",
			"OFFSET": "29",
			"DATATYPE": "INT"
		}
	},
	"PPPFILTERSATS": {
		"ACLMYSATELLITEENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		},
		"ULMYSTATUSMASK": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"SETWHEELSOURCE": {
		"EMYWHEELSENSORINPUT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "WHEELSENSORINPUTENUM"
		},
		"EMYPOLARITY": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "POLARITYENUM"
		},
		"EMYRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		}
	},
	"VERIPOSMESSAGE": {
		"SZMYMESSAGE": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"VERIPOSRTCMDATA": {
		"ULMYSTREAM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "HEXULONG"
		},
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "VARHEXBYTETYPE"
		}
	},
	"VERIPOSMESSAGETYPES": {
		"AULMYALLOWEDMESSAGETYPES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEULONGARRAY"
		},
		"CABO": ["4"],
		"CAAO": ["4"]
	},
	"LBANDSTATIONLIST": {
		"ACLMYSTATIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"FMYLATITUDE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGITUDE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"EMYHEALTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "VERIPOSSTATIONHEALTHENUM"
		}
	},
	"VERIPOSINFO": {
		"ULMYSERIALNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"EMYOFFSHOREMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "VERIPOSOFFSHOREOPERATINGMODEENUM"
		},
		"ULMYOFFSHORESUBSCRIPTIONDETAILS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"SZMYSERVICECODE": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"TERRASTARSTATUS": {
		"EMYACCESSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"EMYDECODERSYNCSTATE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "VERIPOSDECODERSYNCSTATEENUM"
		},
		"ULMYTIMEDENABLEREMAININGTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"EMYLOCALAREASTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "VERIPOSLOCALAREASTATUSENUM"
		},
		"EMYGEOGATINGSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "VERIPOSGEOGATINGSTATUSENUM"
		}
	},
	"VERIPOSSTATUS": {
		"EMYACCESSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"EMYDECODERSYNCSTATE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "VERIPOSDECODERSYNCSTATEENUM"
		}
	},
	"VERIPOSEXTENDEDINFO": {
		"SZMYDECODERVERSION": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"ULMYSERIALNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"SZMYPAC": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"SZMYSTRING": {
			"NOOFBYTES": "1",
			"OFFSET": "25",
			"DATATYPE": "STRING"
		}
	},
	"DEBUGTXBUFFERS": {
		"EMYPORTID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		},
		"ULMYLOWBUFFERSPACELEFT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYLOWSPACELEFTMINIMUM": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYHIGHBUFFERSPACELEFT": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYHIGHSPACELEFTMINIMUM": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		}
	},
	"ASSIGNLBANDBEAM": {
		"EMYASSIGNMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "LBANDASSIGNENUM"
		},
		"SZMYBEAMNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ULMYFREQUENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "ULONG"
		},
		"ULMYBAUDRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "ULONG"
		},
		"ULMYDOPPLERWINDOW": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "ULONG"
		}
	},
	"RANGECMP3": {
		"AUCMYRANGEDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARHEXBYTETYPE"
		}
	},
	"ELEVATIONCUTOFF": {
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"FMYELEVATIONCUTOFFANGLE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"ULMYRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		}
	},
	"VERIPOSBUBBLE": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"VERIPOSNVMDATA": {
		"UCMYBLOCKID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INT"
		},
		"IMYLENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "INT"
		},
		"AUCMYBUF": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "FIXEDUCHARARRAY"
		}
	},
	"MARK3POS": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"EMYDATUMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "DATUMENUM"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "66",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "67",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "70",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "69",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "71",
			"DATATYPE": "UCHAR"
		}
	},
	"MARK4POS": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"EMYDATUMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "DATUMENUM"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "66",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "67",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "70",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "69",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "71",
			"DATATYPE": "UCHAR"
		}
	},
	"PPSCONTROL2": {
		"EMYENABLEDISABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PPSENABLEENUM"
		},
		"EMYPOLARITY": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "POLARITYENUM"
		},
		"DMYRATE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"ULMYPULSEWIDTH": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"LMYESTIMATEDERRORLIMIT": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "LONG"
		}
	},
	"ALLOWUNHEALTHYALM": {
		"EMYSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"BMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "BOOL"
		}
	},
	"SYNCRELINSPVA": {
		"EMYRELINSOUTPUT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RELINSOUTPUTENUM"
		},
		"DMYDELTAPOSN": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAPOSE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAPOSU": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAVELN": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAVELE": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAVELU": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYDELTAHEADING": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "FLOAT"
		},
		"ACMYROVERID": {
			"NOOFBYTES": "1",
			"OFFSET": "80",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"EMYROVERINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "81",
			"DATATYPE": "INSSTATUSENUM"
		},
		"ACMYMASTERID": {
			"NOOFBYTES": "1",
			"OFFSET": "85",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"EMYMASTERINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "86",
			"DATATYPE": "INSSTATUSENUM"
		},
		"EMYRTKBASELINESTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "90",
			"DATATYPE": "SOLTYPEENUM"
		},
		"ULMYEXTENDEDSOLSTAT": {
			"NOOFBYTES": "4",
			"OFFSET": "94",
			"DATATYPE": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["98"]
	},
	"DEBUGPROCESSRUNTIMES": {
		"ACLMYRUNTIMES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYPROCESSID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"SZMYPROCESSNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "STRING"
		},
		"ULMYRUNTIMECOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "9",
			"DATATYPE": "ULONG"
		},
		"FMYRUNTIMEPERCENT": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "FLOAT"
		}
	},
	"IMUCONFIGURATION": {
		"EMYIMUTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "IMUTYPEENUM"
		}
	},
	"DYNAMICCHANCONFIG": {
		"BMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BOOL"
		}
	},
	"SETSIGNALINDEPENDENT": {
		"EMYSIGNAL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SIGNALTYPEENUM"
		},
		"EMYACQINDEPENDENT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "INDEPENDENTSTATUSENUM"
		},
		"EMYTRACKINGINDEPENDENT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "INDEPENDENTSTATUSENUM"
		}
	},
	"EM3000": {
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INSSTATUSENUM"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEAVE": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		}
	},
	"TERRASTARPAYG": {
		"BMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"VERIPOSSIMULATEDPOSITION": {
		"DMYLATITUDEINDEGREES": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDEINDEGREES": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		}
	},
	"VERIPOSSIMULATEDINITIALTIME": {
		"ULMYYEAR": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYMONTH": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYDAY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYHOUR": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYMINUTE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYSECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		}
	},
	"TRACKSUMMARY": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"ULMYTOTALSATSTRACKED": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ACLMYTRACKEDGNSS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"ULMYNUMTRACKED": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"CABO": ["4"],
		"CAAO": ["8"]
	},
	"PPPSEEDSIGNALS": {
		"ACLMYDELTAPHASESEEDSIGNALS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"DMYPSEUDORANGE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYPHASERANGE": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"FMYLOCKTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"ULMYCSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"EMYSIGNAL": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "SIGNALTYPEENUM"
		}
	},
	"PPPDETECTEDDYNAMICS": {
		"EMYDETECTEDDYNAMICS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "MOTIONENUM"
		},
		"FMYHORIZONTALSPEED": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"FMYVERTICALSPEED": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"BMYISCREEPDETECTED": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "BOOL"
		}
	},
	"PPPFASTLOG": {
		"SZMYMESSAGE": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"CABO": ["4"],
		"CAAO": ["1024"]
	},
	"PPPFASTGROSSOUTLIERS": {
		"ACLMYGROSSOUTLIERSATELLITEIDS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		}
	},
	"PPPVEL": {
		"EMYVELOCITYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYVELOCITYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"DMYHORIZONTALSPEED": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYGROUNDTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"FFLOAT": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		}
	},
	"PPPVEL2": {
		"EMYVELOCITYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYVELOCITYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYXSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"FMYYSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"FMYZSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "44",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "53",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "54",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "55",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "56",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "57",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "58",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "59",
			"DATATYPE": "UCHAR"
		}
	},
	"GLIDEINITIALIZATIONPERIOD": {
		"DMYWAITDURATION": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		}
	},
	"DUALANTENNAALIGN": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"ULMYOBSRATEHZ": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYPOSRATEHZ": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		}
	},
	"DEBUGPROCESSMEMUSAGE": {
		"ULMYPROCESSID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYNUMALLOCATIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYNUMDEALLOCATIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYTOTALMEMREQUESTED": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYTOTALMEMDEALLOCATED": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMYTOTALMEMALLOCATED": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULMYMAXMEMALLOCATED": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"SZMYPROCESSNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "STRING"
		}
	},
	"RELINSAUTOMATION": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "COMMPORTENUM"
		},
		"ULMYBAUDRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYREQRATEINHZ": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"EMYSENDHEADINGEXT": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ONOFFENUM"
		},
		"EMYINTERFACEMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "INTERFACEMODEENUM"
		}
	},
	"GENERATEINSALIGNCORRECTIONS": {
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		},
		"ULMYBAUDRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYOBSRATEINHZ": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYREFRATEINHZ": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"EMYCORRECTIONINTERFACE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "INTERFACEMODEENUM"
		}
	},
	"SINGLEPOINTINTEGRITYCONFIG": {
		"ULMYINDIVIDUALISOLATIONATTEMPTS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ACLMYORDEREDSYSTEMISOLATIONSENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"CABO": ["8"],
		"CAAO": ["4"]
	},
	"PPPCLOCKINTERPOLATOR": {
		"EMYINTERPOLATOR": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PPPCLOCKINTERPOLATORENUM"
		}
	},
	"SETIMUPORTPROTOCOL": {
		"EMYPORTPROTOCOL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PORTPROTOCOLENUM"
		}
	},
	"GPHCD": {
		"ETALKERID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "NMEATALKERIDENUM"
		},
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SOLTYPEENUM"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "UCHAR"
		},
		"UCUTCDAY": {
			"NOOFBYTES": "1",
			"OFFSET": "14",
			"DATATYPE": "UCHAR"
		},
		"UCUTCMONTH": {
			"NOOFBYTES": "1",
			"OFFSET": "15",
			"DATATYPE": "UCHAR"
		},
		"ULUTCYEAR": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"FMYHEADING": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"FMYPITCH": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"DMYHORIZONTALSPEED": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYEASTING": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYNORTHING": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"ULMYGGAQUALITY": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "ULONG"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "80",
			"DATATYPE": "UCHAR"
		}
	},
	"BDXT1": {
		"ULUTCYEAR": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"UCUTCMONTH": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "UCHAR"
		},
		"UCUTCDAY": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "UCHAR"
		},
		"DMYNORTHING": {
			"NOOFBYTES": "8",
			"OFFSET": "6",
			"DATATYPE": "DOUBLE"
		},
		"DMYEASTING": {
			"NOOFBYTES": "8",
			"OFFSET": "14",
			"DATATYPE": "DOUBLE"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "FLOAT"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "26",
			"DATATYPE": "DOUBLE"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "55",
			"DATATYPE": "UCHAR"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "39",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYBLENGTH": {
			"NOOFBYTES": "4",
			"OFFSET": "43",
			"DATATYPE": "FLOAT"
		},
		"FMYHEADING": {
			"NOOFBYTES": "4",
			"OFFSET": "47",
			"DATATYPE": "FLOAT"
		},
		"FMYPITCH": {
			"NOOFBYTES": "4",
			"OFFSET": "51",
			"DATATYPE": "FLOAT"
		},
		"DMYHORIZONTALSPEED": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		},
		"DMYGROUNDTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "64",
			"DATATYPE": "DOUBLE"
		}
	},
	"PTNL": {
		"UCUTCDAY": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "UCHAR"
		},
		"UCUTCMONTH": {
			"NOOFBYTES": "1",
			"OFFSET": "1",
			"DATATYPE": "UCHAR"
		},
		"ULUTCYEAR": {
			"NOOFBYTES": "4",
			"OFFSET": "2",
			"DATATYPE": "ULONG"
		},
		"DMYNORTHING": {
			"NOOFBYTES": "8",
			"OFFSET": "6",
			"DATATYPE": "DOUBLE"
		},
		"DMYEASTING": {
			"NOOFBYTES": "8",
			"OFFSET": "14",
			"DATATYPE": "DOUBLE"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "SOLTYPEENUM"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "26",
			"DATATYPE": "UCHAR"
		},
		"FMYHDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "27",
			"DATATYPE": "FLOAT"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "31",
			"DATATYPE": "DOUBLE"
		}
	},
	"GPTRA": {
		"ETALKERID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "NMEATALKERIDENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "UCHAR"
		},
		"FMYHEADING": {
			"NOOFBYTES": "4",
			"OFFSET": "14",
			"DATATYPE": "FLOAT"
		},
		"FMYPITCH": {
			"NOOFBYTES": "4",
			"OFFSET": "18",
			"DATATYPE": "FLOAT"
		},
		"ULMYGGAQUALITY": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "ULONG"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "26",
			"DATATYPE": "UCHAR"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "27",
			"DATATYPE": "FIXEDCHARARRAY"
		}
	},
	"GPNTR": {
		"ETALKERID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "NMEATALKERIDENUM"
		},
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SOLTYPEENUM"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "13",
			"DATATYPE": "UCHAR"
		},
		"DMYEAST": {
			"NOOFBYTES": "8",
			"OFFSET": "14",
			"DATATYPE": "DOUBLE"
		},
		"DMYNORTHING": {
			"NOOFBYTES": "8",
			"OFFSET": "22",
			"DATATYPE": "DOUBLE"
		},
		"DMYUP": {
			"NOOFBYTES": "8",
			"OFFSET": "30",
			"DATATYPE": "DOUBLE"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "38",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ULMYGGAQUALITY": {
			"NOOFBYTES": "4",
			"OFFSET": "42",
			"DATATYPE": "ULONG"
		}
	},
	"UNASSIGN2": {
		"EMYSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"ULPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "PRN"
		},
		"LMYIDNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "LONG"
		}
	},
	"ASSIGN2": {
		"EMYSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"ULPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "PRN"
		},
		"LMYIDNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "LONG"
		},
		"LDOPPLER": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "LONG"
		},
		"ULDOPPLERWINDOW": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		}
	},
	"SETRELINSOUTPUTFRAME": {
		"EMYRELINSOUTPUT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "RELINSOUTPUTENUM"
		},
		"BMYFROMMASTER": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "BOOL"
		}
	},
	"IMUTIMINGMETHOD": {
		"EMYIMUTIMINGMETHOD": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "IMUTIMINGMETHODENUM"
		}
	},
	"UPTIME": {
		"ULMYUPTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		}
	},
	"IMURATEPVA": {
		"ULMYWEEK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"DMYSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "44",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "52",
			"DATATYPE": "DOUBLE"
		},
		"DMYROLL": {
			"NOOFBYTES": "8",
			"OFFSET": "60",
			"DATATYPE": "DOUBLE"
		},
		"DMYPITCH": {
			"NOOFBYTES": "8",
			"OFFSET": "68",
			"DATATYPE": "DOUBLE"
		},
		"DMYAZIMUTH": {
			"NOOFBYTES": "8",
			"OFFSET": "76",
			"DATATYPE": "DOUBLE"
		},
		"EMYINSSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "INSSTATUSENUM"
		}
	},
	"RTKFASTLOGGINGLEVEL": {
		"EMYLEVEL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "LOGGINGLEVELENUM"
		}
	},
	"RTKFASTLOG": {
		"SZMYMESSAGE": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		}
	},
	"BESTSEEDPOS": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"EMYDATUMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "DATUMENUM"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "66",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "67",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "68",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "69",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "70",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "71",
			"DATATYPE": "UCHAR"
		}
	},
	"STEADYLINEINTRATRANSITION": {
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "64",
			"DATATYPE": "DOUBLE"
		},
		"DMYTRANSITIONTIME": {
			"NOOFBYTES": "8",
			"OFFSET": "72",
			"DATATYPE": "DOUBLE"
		},
		"BMYISINTRANSITION": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "BOOL"
		}
	},
	"STEADYLINEINTERNALTRANSITION": {
		"DMYX": {
			"NOOFBYTES": "8",
			"OFFSET": "48",
			"DATATYPE": "DOUBLE"
		},
		"DMYY": {
			"NOOFBYTES": "8",
			"OFFSET": "56",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "64",
			"DATATYPE": "DOUBLE"
		},
		"DMYTRANSITIONTIME": {
			"NOOFBYTES": "8",
			"OFFSET": "72",
			"DATATYPE": "DOUBLE"
		},
		"BMYISINTRANSITION": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "BOOL"
		}
	},
	"SIGNAL2": {
		"EMYBLOCK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SIGNALBLOCKENUM"
		},
		"EMYSIGNALBLOCKTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SIGNALBLOCKTYPEENUM"
		},
		"AULMYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "VARIABLEULONGARRAY"
		}
	},
	"DEBUGCONTEXTSWITCH": {
		"ULMYSWITCHCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYSWITCHAVERAGETICKS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYFIQDURINGCB": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYIRQDURINGCB": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		}
	},
	"PPPESTIMATETROPOGRADIENTS": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"RTCMV3USECNESPHASEBIASES": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"PPPPLUS": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"PPPARSECONDARYSOLUTIONCHECK": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"PPPARFASTRECONVERGENCE": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"PPPARCONFIG": {
		"USMINNARROWLANEGROUPSIZE": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "USHORT"
		},
		"USTIMEWINDOWLENGHT ": {
			"NOOFBYTES": "2",
			"OFFSET": "2",
			"DATATYPE": "USHORT"
		},
		"FPPPARELEVATIONMASK": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"DCONFIDENCELEVELINITIALLY": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DCONFIDENCELEVEL": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DCONFIDENCELEVELRECONVERGENCE": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DCONFIDENCELEVELWIDELANERECONVERGENCE": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"USINITIALCONVERGENCELENGHT": {
			"NOOFBYTES": "2",
			"OFFSET": "40",
			"DATATYPE": "USHORT"
		},
		"CABO": ["4"],
		"CAAO": ["42"]
	},
	"PPPARSATS": {
		"ACLMYSATELLITEENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"ULMYSTATUSMASK": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "HEXULONG"
		}
	},
	"AUTOSURVEY": {
		"EMYSWITCH": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"ULMYMAXTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"FMYACCURACY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYHORIZTOL": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"ULMYRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		}
	},
	"SETINSROTATION_LEGACY": {
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		}
	},
	"RELINSCONFIG": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"EMYRELINSRX": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RELINSRXENUM"
		},
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "COMMPORTENUM"
		},
		"ULMYBAUDRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYREQRATEINHZ": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		}
	},
	"ALIGNSTATS": {
		"EMYSOLUTIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYSOLUTIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"ACMYROVERID": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ACMYMASTERID": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYUNITVARIANCE": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "FLOAT"
		},
		"FMYMAXEXTERNALRELIABILITY": {
			"NOOFBYTES": "4",
			"OFFSET": "17",
			"DATATYPE": "FLOAT"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "21",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "25",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "29",
			"DATATYPE": "FLOAT"
		},
		"DMYLATITUDELONGITUDECOVARIANCE": {
			"NOOFBYTES": "8",
			"OFFSET": "33",
			"DATATYPE": "DOUBLE"
		},
		"DMYLATITUDEUPCOVARIANCE": {
			"NOOFBYTES": "8",
			"OFFSET": "41",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDEUPCOVARIANCE": {
			"NOOFBYTES": "8",
			"OFFSET": "49",
			"DATATYPE": "DOUBLE"
		},
		"UCMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "1",
			"OFFSET": "57",
			"DATATYPE": "UCHAR"
		},
		"FFLOAT": {
			"NOOFBYTES": "4",
			"OFFSET": "58",
			"DATATYPE": "FLOAT"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "UCHAR"
		}
	},
	"SETRELIABILITYPARAMETERS": {
		"DMYALPHA": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYBETA": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		}
	},
	"SETMAXALIGNMENTTIME": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"ULMYMAXALIGNSECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"PAVCONFIG": {
		"EMYSTATESWITCH": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PAVSTATEENUM"
		},
		"EMYPAVPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "COMMPORTENUM"
		},
		"EMYPAVEVENTOUT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "MARKENUM"
		},
		"ULMYPAVBAUDRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYPAVUPDATERATE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		}
	},
	"PAVSTATUS": {
		"ETASKSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PAVTASKSTATUSENUM"
		},
		"EPAVROLLSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "PAVATTITUDESTATUSENUM"
		},
		"EPAVPITCHSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "PAVATTITUDESTATUSENUM"
		},
		"EPAVAZIMUTHSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "PAVATTITUDESTATUSENUM"
		},
		"EPAVTRACKSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "PAVATTITUDESTATUSENUM"
		},
		"BPAVRECEIVEGIMBALDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "BOOL"
		},
		"CABO": ["4"],
		"CAAO": ["24"]
	},
	"RTKSEEDSIGNALS": {
		"ACLMYDELTAPHASESEEDSIGNALS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"DMYPSEUDORANGE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYPHASERANGE": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"FMYLOCKTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"ULMYCSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"CABO": ["4"],
		"CAAO": ["32"]
	},
	"RTKFASTRESIDUALS": {
		"ACLMYDELTAPHASERESIDUALS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"FMYRESIDUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYVARIANCE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"RTKFASTIONO": {
		"ACLMYDELTAPHASEIONOSPHEREFILTERS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"FMYIONOSPHERERATE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYIONOSPHERERATEVARIANCE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYOBSERVEDIONOSPHERERATE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		}
	},
	"RTKBASELOGGINGLEVEL": {
		"EMYLEVEL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "LOGGINGLEVELENUM"
		},
		"CABO": ["4"],
		"CAAO": ["4"]
	},
	"RTKBASEIONO": {
		"ACLMYDELTAPHASEIONOSPHEREFILTERS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"FMYIONOSPHERERATE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYIONOSPHERERATEVARIANCE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYOBSERVEDIONOSPHERERATE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["4"],
		"CAAO": ["20"]
	},
	"RTKBASESATELLITECLOCKS": {
		"ACLMYSATELLITECLOCKRATES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"FMYFILTEREDRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYFILTEREDRATESTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYOBSERVEDRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		}
	},
	"RTKBASELOG": {
		"SZMYMESSAGE": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		}
	},
	"PDPFASTLOGGINGLEVEL": {
		"EMYLEVEL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "LOGGINGLEVELENUM"
		}
	},
	"PDPFASTLOG": {
		"SZMYMESSAGE": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"CABO": ["4"],
		"CAAO": ["1024"]
	},
	"PDPFASTIONO": {
		"ACLMYDELTAPHASEIONOSPHEREFILTERS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"FMYIONOSPHERERATE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYIONOSPHERERATEVARIANCE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYOBSERVEDIONOSPHERERATE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		}
	},
	"PDPFILTERPOS": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"EMYDATUMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "DATUMENUM"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "UCHAR"
		},
		"CCHARASINT": {
			"NOOFBYTES": "1",
			"OFFSET": "67",
			"DATATYPE": "UCHAR"
		},
		"UCMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "1",
			"OFFSET": "68",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "69",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "70",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "71",
			"DATATYPE": "UCHAR"
		},
		"CABO": ["4"],
		"CAAO": ["72"]
	},
	"PDPFASTRESIDUALS": {
		"ACLMYDELTAPHASERESIDUALS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"FMYRESIDUAL": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYVARIANCE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		}
	},
	"PDPFILTERSATS": {
		"ACLMYSATELLITEENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		},
		"ULMYSTATUSMASK": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"CANCONFIGRATE": {
		"EMYCANRATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CANOUTPUTRATEENUM"
		}
	},
	"CELLULARACTIVATE": {
		"SZMYOPERATOR": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"SZMYRESERVED1": {
			"NOOFBYTES": "1",
			"OFFSET": "32",
			"DATATYPE": "STRING"
		},
		"IMYRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "33",
			"DATATYPE": "INT"
		}
	},
	"CELLULARACTIVATESTATUS": {
		"SZMYSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"SZMYERROR": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "STRING"
		},
		"SZMYRESERVED": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "STRING"
		}
	},
	"CELLULARIPSTATUS": {
		"ULMYNETWORKID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "HEXULONG"
		},
		"EMYDATAREGSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CELLNETREGISTRATIONSTATUSENUM"
		},
		"BMYIPCONN": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "BOOL"
		},
		"EMYACCESSTECHNOLOGY": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "CELLULARACCESSTECHNOLOGYENUM"
		},
		"UIMYCELLID": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "UINT"
		},
		"IMYRAC": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "INT"
		},
		"UIMYCDMADATARETRYCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "UINT"
		},
		"SZMYIPADDRESS": {
			"NOOFBYTES": "1",
			"OFFSET": "28",
			"DATATYPE": "STRING"
		},
		"SZMYNETMASK": {
			"NOOFBYTES": "1",
			"OFFSET": "29",
			"DATATYPE": "STRING"
		},
		"SZMYGATEWAY": {
			"NOOFBYTES": "1",
			"OFFSET": "30",
			"DATATYPE": "STRING"
		},
		"SZMYDNS1": {
			"NOOFBYTES": "1",
			"OFFSET": "31",
			"DATATYPE": "STRING"
		},
		"SZMYDNS2": {
			"NOOFBYTES": "1",
			"OFFSET": "32",
			"DATATYPE": "STRING"
		},
		"UIMYTXBYTES": {
			"NOOFBYTES": "4",
			"OFFSET": "33",
			"DATATYPE": "UINT"
		},
		"UIMYRXBYTES": {
			"NOOFBYTES": "4",
			"OFFSET": "37",
			"DATATYPE": "UINT"
		},
		"ULNOOFIPDISCONNECTIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "41",
			"DATATYPE": "ULONG"
		},
		"IMYRESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "45",
			"DATATYPE": "INT"
		},
		"IMYRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "49",
			"DATATYPE": "INT"
		},
		"FMYRESERVED3": {
			"NOOFBYTES": "4",
			"OFFSET": "53",
			"DATATYPE": "FLOAT"
		},
		"FMYRESERVED4": {
			"NOOFBYTES": "4",
			"OFFSET": "57",
			"DATATYPE": "FLOAT"
		},
		"FMYRESERVED5": {
			"NOOFBYTES": "4",
			"OFFSET": "61",
			"DATATYPE": "FLOAT"
		},
		"ULMYRESERVED6": {
			"NOOFBYTES": "4",
			"OFFSET": "65",
			"DATATYPE": "HEXULONG"
		},
		"ULMYRESERVED7": {
			"NOOFBYTES": "4",
			"OFFSET": "69",
			"DATATYPE": "HEXULONG"
		},
		"ULMYRESERVED8": {
			"NOOFBYTES": "4",
			"OFFSET": "73",
			"DATATYPE": "HEXULONG"
		},
		"ULMYRESERVED9": {
			"NOOFBYTES": "4",
			"OFFSET": "77",
			"DATATYPE": "HEXULONG"
		}
	},
	"SETINSUPDATE": {
		"EMYINSUPDATE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INSUPDATEENUM"
		},
		"EMYTRIGGER": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"POSAVEUPDATEINTERVAL": {
		"EMYCOMMANDTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "POSAVEINTERVALTYPEENUM"
		},
		"ULMYUPDATEINTERVAL": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"PDPFILTERSTAT": {
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PDPFILTERCOMMANDENUM"
		},
		"EMYMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "PDPFILTERMODEENUM"
		},
		"EMYDYNAMICS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "PDPFILTERDYNAMICSENUM"
		},
		"UINUMPSRUSED": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "UINT"
		},
		"UINUMPHASEUSED": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "UINT"
		},
		"DMYSECONDSCONTRELOP": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYESTIMATEDNORTHING900SECSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		},
		"DMYESTIMATEDEASTING900SECSTDDEV": {
			"NOOFBYTES": "8",
			"OFFSET": "36",
			"DATATYPE": "DOUBLE"
		}
	},
	"PDPFILTERVEL": {
		"EMYVELOCITYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYVELOCITYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"DMYHORIZONTALSPEED": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYGROUNDTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"LMYRSVDFIELDFORVELOCITYLOGS": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "LONG"
		}
	},
	"INSUPDATESTATUS": {
		"EMYPOSTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLTYPEENUM"
		},
		"IMYNUMPSR": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "INT"
		},
		"IMYNUMPHASE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "INT"
		},
		"IMYNUMDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "INT"
		},
		"EMYWHEELSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "WHEELSTATUSENUM"
		},
		"EMYHEADINGUPDATESTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "HEADINGUPDATESTATUSENUM"
		},
		"ULMYEXTSOLUTIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "HEXULONG"
		},
		"ULMYINSUPDATEOPTIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "HEXULONG"
		}
	},
	"PDPINTEGRITYMONITORING": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"FMYPFA": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		}
	},
	"PDPDETECTEDDYNAMICS": {
		"EMYDETECTEDDYNAMICS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "MOTIONENUM"
		},
		"FMYHORIZONTALSPEED": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"FMYVERTICALSPEED": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"BMYISCREEPDETECTED": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "BOOL"
		}
	},
	"SETINSSMOOTH": {
		"EMYINSSMOOTH": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INSSMOOTHENUM"
		},
		"EMYTRIGGER": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ENABLEENUM"
		},
		"ULMYSMOOTHSEC": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		}
	},
	"DECODEDBASESTATIONREF": {
		"EMYMESSAGEENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BASESTATIONMESSAGEENUM"
		},
		"ACMYDIFFSTATIONID": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "5",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "13",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "21",
			"DATATYPE": "DOUBLE"
		}
	},
	"PDPDELTAPHASEVEL": {
		"EMYVELOCITYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYVELOCITYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"DMYHORIZONTALSPEED": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYGROUNDTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"DMYZ": {
			"NOOFBYTES": "8",
			"OFFSET": "32",
			"DATATYPE": "DOUBLE"
		},
		"LMYRSVDFIELDFORVELOCITYLOGS": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "LONG"
		}
	},
	"LIMITCHANNEL": {
		"AULMYCHANNELNUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEULONGARRAY"
		}
	},
	"GLIDERECOVERY": {
		"EMYTIMEMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PDPGLIDERECOVERYTIMEENUM"
		},
		"ULMYTIME": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"PPPFASTFEEDBACK": {
		"EMYDETECTEDDYNAMICS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "MOTIONENUM"
		},
		"FMYHORIZONTALSPEED": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"FMYVERTICALSPEED": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"BMYISCREEPDETECTED": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "BOOL"
		},
		"ACLMYGROSSOUTLIERSATELLITEIDS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "SATELLITEID"
		},
		"CABO": ["20"],
		"CAAO": ["8"]
	},
	"BLOCKSKY": {
		"EMYBLOCK": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SIGNALBLOCKENUM"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"FMYAZIMUTHLOWERLIMIT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"FMYAZIMUTHUPPERLIMIT": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYELEVATIONLOWERLIMIT": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYELEVATIONUPPERLIMIT": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		}
	},
	"GPRMCALTITUDE": {
		"EMYENABLEGPRMCALTITUDE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"VERIPOSSTANDARDCONFIG": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"FMYMAXIMUMDISTANCE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"ULMYMAXIMUMNUMBEROFSTATIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYTIMEOUT": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		}
	},
	"DECODEDDIFFERENTIALCORRECTIONS": {
		"EMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "DGPSTYPEENUM"
		},
		"SZMYID": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"BMYISPARTIALSET": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "BOOL"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"ACLMYCORRECTIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYSYSTEMID": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"FMYCORRECTION": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FLOAT"
		},
		"FMYCORRECTIONSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"ULMYIODE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"CABO": ["20"],
		"CAAO": ["16"]
	},
	"DECODEDBASESTATION": {
		"EMYMESSAGEENUM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BASESTATIONMESSAGEENUM"
		},
		"ACMYDIFFSTATIONID": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "5",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "13",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "21",
			"DATATYPE": "DOUBLE"
		}
	},
	"PSRDIFFCONFIG": {
		"EMYMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "DIFFERENTIALMODEENUM"
		},
		"FMYMAXIMUMDISTANCE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"ULMYMAXIMUMNUMBEROFSTATIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		}
	},
	"NMEAFORMAT": {
		"EMYFIELD": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "NMEAFIELD"
		},
		"SZMYFORMAT": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"CABO": ["4"],
		"CAAO": ["5"]
	},
	"VERIPOSPERSISTENTSTATIONS": {
		"ACLMYSTATIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"USMYSTATIONID": {
			"NOOFBYTES": "2",
			"OFFSET": "4",
			"DATATYPE": "USHORT"
		},
		"USMYWEEK": {
			"NOOFBYTES": "2",
			"OFFSET": "6",
			"DATATYPE": "USHORT"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"LMYSCALEDXCOORDINATE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "LONG"
		},
		"LMYSCALEDYCOORDINATE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "LONG"
		},
		"LMYSCALEDZCOORDINATE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "LONG"
		}
	},
	"PSRDIFFSTATIONS": {
		"EMYTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "DGPSTYPEENUM"
		},
		"ACMYSTATIONID": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"ACLMYSTATIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "5",
			"DATATYPE": "CLASSARRAY"
		},
		"SZMYID": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "13",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "21",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "29",
			"DATATYPE": "DOUBLE"
		},
		"FMYDISTANCE": {
			"NOOFBYTES": "4",
			"OFFSET": "37",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["9"],
		"CAAO": ["32"]
	},
	"VERIPOSRTCMPORTDATA": {
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		},
		"AUCMYDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "VARHEXBYTETYPE"
		}
	},
	"VERIPOSDECODERMODE": {
		"EMYMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "VERIPOSDECODERMODEENUM"
		}
	},
	"PSRELEVMASK": {
		"FMYMASKANGLEINDEGREES": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "FLOAT"
		}
	},
	"ORBITANDCLOCKCORRECTIONSINFO": {
		"EMYSOURCE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ORBITANDCLOCKCORRECTIONSSOURCEENUM"
		},
		"ULMYSOLUTIONID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		}
	},
	"RTKPERMISSIVEMODE": {
		"EACTION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"GPGNS": {
		"ETALKERID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "NMEATALKERIDENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "FLOAT"
		},
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "SOLTYPEENUM"
		},
		"ACLMYSATELLITEENTRIES": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "SATELLITEID"
		},
		"EMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "OBSERVATIONSTATUSENUM"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "56",
			"DATATYPE": "UCHAR"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "57",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "61",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYHDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "65",
			"DATATYPE": "FLOAT"
		},
		"EMYNMEAVERSION": {
			"NOOFBYTES": "4",
			"OFFSET": "69",
			"DATATYPE": "NMEAVERSIONENUM"
		},
		"CABO": ["44"],
		"CAAO": ["29"]
	},
	"NMEAINCLUDESBAS": {
		"EMYINCLUDESBAS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"NMEASATELLITESOURCE": {
		"EMYSOURCE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "NMEASATELLITESOURCEENUM"
		}
	},
	"SAMPLEBUFFERREQUEST": {
		"EMYDATATYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "MINOSSAMPLEBUFFERTYPEENUM"
		},
		"ULMYSOURCE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYNUMSAMPLES": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		}
	},
	"SAMPLEBUFFERDATA": {
		"ULMYSEQNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ASMYDATA": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "VARIABLESHORTARRAY"
		}
	},
	"HIGHRESBINCONFIG": {
		"BMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BOOL"
		},
		"ULMYADC": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULMYBOTTOMBIT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"BMYDPBENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "BOOL"
		},
		"EMYDPBMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "MINOSDPBMODEENUM"
		}
	},
	"HIGHRESBINDATA": {
		"AUSMYBINS": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "FIXEDUSHORTARRAY"
		},
		"CABO": ["4"],
		"CAAO": ["64"]
	},
	"CORRECTIONSQUALITY": {
		"CLMYCORRECTIONQUALITYENTRY": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYCORRECTIONSOURCE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CORRECTIONSOURCEENUM"
		},
		"EMYINTERFACEMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "INTERFACEMODEENUM"
		},
		"SZMYSTATIONID": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYQUALITY": {
			"NOOFBYTES": "4",
			"OFFSET": "13",
			"DATATYPE": "FLOAT"
		},
		"FMYLATENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "17",
			"DATATYPE": "FLOAT"
		}
	},
	"RADARSTATUS": {
		"HULMYSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "HEXULONG"
		},
		"EMYSOLUTIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYSOLUTIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYHORIZONTALSPEEDMPS": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYSMOOTHEDHORIZONTALSPEEDMPS": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		},
		"DMYFREQUENCY": {
			"NOOFBYTES": "8",
			"OFFSET": "28",
			"DATATYPE": "DOUBLE"
		}
	},
	"RADARCONFIG": {
		"EMYSWITCH": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"DMYFREQUENCYSTEPHZPERKPH": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"EMYUPDATERATE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "EMULATEDRADARUPDATERATEENUM"
		},
		"EMYRESPONSEMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "EMULATEDRADARRESPONSEMODEENUM"
		},
		"DMYRESPONSETHRESHOLDKPH": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		}
	},
	"PPPMODE": {
		"EMYMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PPPMODEENUM"
		}
	},
	"CANDATA": {
		"BMYISEXTENDED": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BOOL"
		},
		"ULMYMESSAGEID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"AUCMYCANDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "FIXEDUCHARARRAY"
		}
	},
	"COARSETIMEOFFSET": {
		"ULMYWEEKS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"BMYISNEGATIVE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "BOOL"
		}
	},
	"INSCALIBRATE": {
		"EMYOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INSOFFSETENUM"
		},
		"EMYTRIGGER": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "INSCALIBRATETRIGGERENUM"
		},
		"FMYSTDEVTHRESHOLD": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "FLOAT"
		},
		"CABO": ["4"],
		"CAAO": ["12"]
	},
	"PPPFASTIONO": {
		"ACLMYDELTAPHASEIONOSPHEREFILTERS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "SATELLITEID"
		},
		"FMYIONOSPHERERATE": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "FLOAT"
		},
		"FMYIONOSPHERERATEVARIANCE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FLOAT"
		},
		"FMYOBSERVEDIONOSPHERERATE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FLOAT"
		}
	},
	"PGN129025": {
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		}
	},
	"PGN129026": {
		"DMYGROUNDTRACK": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYHORIZONTALSPEED": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "SOLTYPEENUM"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		}
	},
	"PGN129027": {
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "0",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "SOLTYPEENUM"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		}
	},
	"PGN129029": {
		"ULMYGGAQUALITY": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "40",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYHDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYPDOP": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "UCHAR"
		},
		"BMYHASGPS": {
			"NOOFBYTES": "4",
			"OFFSET": "53",
			"DATATYPE": "BOOL"
		},
		"BMYHASSBAS": {
			"NOOFBYTES": "4",
			"OFFSET": "57",
			"DATATYPE": "BOOL"
		},
		"BMYHASGLONASS": {
			"NOOFBYTES": "4",
			"OFFSET": "61",
			"DATATYPE": "BOOL"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "65",
			"DATATYPE": "ULONG"
		}
	},
	"PGN126992": {
		"ULUTCYEAR": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"UCUTCMONTH": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "UCHAR"
		},
		"UCUTCHOUR": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "UCHAR"
		},
		"UCUTCDAY": {
			"NOOFBYTES": "1",
			"OFFSET": "6",
			"DATATYPE": "UCHAR"
		},
		"UCUTCMINUTE": {
			"NOOFBYTES": "1",
			"OFFSET": "7",
			"DATATYPE": "UCHAR"
		},
		"ULUTCMILLISECOND": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"UTCTIMESTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "UTCTIMESTATUS"
		},
		"BMYHASGPS": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "BOOL"
		},
		"BMYHASGLONASS": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "BOOL"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "SOLTYPEENUM"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		}
	},
	"INSPVACMP": {
		"ULMYWEEKMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ULONG"
		},
		"UCMYINSSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "UCHAR"
		},
		"UCMYGNSSPOSITIONTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "5",
			"DATATYPE": "UCHAR"
		},
		"LLMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "6",
			"DATATYPE": "LONGLONG"
		},
		"LLMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "14",
			"DATATYPE": "LONGLONG"
		},
		"LMYHEIGHT": {
			"NOOFBYTES": "4",
			"OFFSET": "22",
			"DATATYPE": "LONG"
		},
		"SMYVELOCITYNORTH": {
			"NOOFBYTES": "2",
			"OFFSET": "26",
			"DATATYPE": "SHORT"
		},
		"SMYVELOCITYEAST": {
			"NOOFBYTES": "2",
			"OFFSET": "28",
			"DATATYPE": "SHORT"
		},
		"SMYVELOCITYUP": {
			"NOOFBYTES": "2",
			"OFFSET": "30",
			"DATATYPE": "SHORT"
		},
		"SMYROLL": {
			"NOOFBYTES": "2",
			"OFFSET": "32",
			"DATATYPE": "SHORT"
		},
		"SMYPITCH": {
			"NOOFBYTES": "2",
			"OFFSET": "34",
			"DATATYPE": "SHORT"
		},
		"SMYAZIMUTH": {
			"NOOFBYTES": "2",
			"OFFSET": "36",
			"DATATYPE": "SHORT"
		},
		"SMYAZIMUTHRATE": {
			"NOOFBYTES": "2",
			"OFFSET": "38",
			"DATATYPE": "SHORT"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		}
	},
	"INSPVASDCMP": {
		"USMYWEEK": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "USHORT"
		},
		"ULMYWEEKMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "2",
			"DATATYPE": "ULONG"
		},
		"USMYLATITUDESTDDEV": {
			"NOOFBYTES": "2",
			"OFFSET": "6",
			"DATATYPE": "USHORT"
		},
		"USMYLONGITUDESTDDEV": {
			"NOOFBYTES": "2",
			"OFFSET": "8",
			"DATATYPE": "USHORT"
		},
		"USMYHEIGHTSTDDEV": {
			"NOOFBYTES": "2",
			"OFFSET": "10",
			"DATATYPE": "USHORT"
		},
		"USMYVELOCITYNORTHSTDDEV": {
			"NOOFBYTES": "2",
			"OFFSET": "12",
			"DATATYPE": "USHORT"
		},
		"USMYVELOCITYEASTSTDDEV": {
			"NOOFBYTES": "2",
			"OFFSET": "14",
			"DATATYPE": "USHORT"
		},
		"USMYVELOCITYUPSTDDEV": {
			"NOOFBYTES": "2",
			"OFFSET": "16",
			"DATATYPE": "USHORT"
		},
		"USMYROLLSTDDEV": {
			"NOOFBYTES": "2",
			"OFFSET": "18",
			"DATATYPE": "USHORT"
		},
		"USMYPITCHSTDDEV": {
			"NOOFBYTES": "2",
			"OFFSET": "20",
			"DATATYPE": "USHORT"
		},
		"USMYAZIMUTHSTDDEV": {
			"NOOFBYTES": "2",
			"OFFSET": "22",
			"DATATYPE": "USHORT"
		},
		"UCMYTIMESINCEPOSUPDATE": {
			"NOOFBYTES": "1",
			"OFFSET": "24",
			"DATATYPE": "UCHAR"
		},
		"UCMYGNSSPOSITIONUPDATETYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "25",
			"DATATYPE": "UCHAR"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "26",
			"DATATYPE": "ULONG"
		}
	},
	"PGNCONFIG": {
		"ULMYMESSAGEID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "MESSAGEIDTYPE"
		},
		"ULMYPGN": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"UCMYPRIORITY": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "UCHAR"
		}
	},
	"PASSCCOM1": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PASSCCOM2": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PASSCCOM3": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"DEBUGPOOLSTATISTICS": {
		"ULMYSIZE": {
			"NOOFBYTES": "4",
			"OFFSET": "112",
			"DATATYPE": "ULONG"
		},
		"ULMYHIGHWATERMARK": {
			"NOOFBYTES": "4",
			"OFFSET": "116",
			"DATATYPE": "ULONG"
		},
		"CABO": ["4"],
		"CAAO": ["120"]
	},
	"DEBUGEXHAUSTEDBROKERS": {
		"ACLMYBROKERIDS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"SZMYPACKETNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "4",
			"DATATYPE": "STRING"
		},
		"ULMYSIBLING": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "ULONG"
		},
		"ULMYDOMAIN": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "ULONG"
		}
	},
	"DEBUGBROKER": {
		"SZMYPACKETNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"ULMYSIBLING": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "ULONG"
		},
		"ULMYDOMAIN": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "ULONG"
		}
	},
	"DEBUGPACKETPOOL": {
		"SZMYPACKETNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"ULMYSIBLING": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "ULONG"
		},
		"ULMYDOMAIN": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "ULONG"
		},
		"ULMYSIZE": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "ULONG"
		},
		"ULMYHIGHWATERMARK": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "ULONG"
		},
		"ULMYCURRENTUSAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "ULONG"
		}
	},
	"DEBUGBROKERINFO": {
		"SZMYPACKETNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"ULMYSIBLING": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "ULONG"
		},
		"ULMYDOMAIN": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "ULONG"
		},
		"SZMYPACKETTYPE": {
			"NOOFBYTES": "1",
			"OFFSET": "88",
			"DATATYPE": "STRING"
		},
		"BMYISCOLLECTION": {
			"NOOFBYTES": "4",
			"OFFSET": "89",
			"DATATYPE": "BOOL"
		},
		"SZMYNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "161",
			"DATATYPE": "STRING"
		},
		"ACLMYSUBSCRIBERS": {
			"NOOFBYTES": "4",
			"OFFSET": "157",
			"DATATYPE": "CLASSARRAY"
		},
		"CABO": ["161"],
		"CAAO": ["32"]
	},
	"DEBUGPACKETUSAGE": {
		"SZMYPACKETNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"ULMYSIBLING": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "ULONG"
		},
		"ULMYDOMAIN": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "ULONG"
		},
		"ACLMYUSAGERECORDS": {
			"NOOFBYTES": "4",
			"OFFSET": "88",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYPACKETINDEX": {
			"NOOFBYTES": "4",
			"OFFSET": "92",
			"DATATYPE": "ULONG"
		},
		"ACLMYUSERS": {
			"NOOFBYTES": "4",
			"OFFSET": "96",
			"DATATYPE": "CLASSARRAY"
		},
		"SZMYNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "100",
			"DATATYPE": "STRING"
		},
		"CABO": ["100"],
		"CAAO": ["32"]
	},
	"CCOMCONFIG": {
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		},
		"EMYNODE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "J1939NODEENUM"
		},
		"EMYPROTOCOL": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "CANPROTOCOLENUM"
		},
		"ULMYPGN": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"UCMYPRIORITY": {
			"NOOFBYTES": "1",
			"OFFSET": "16",
			"DATATYPE": "UCHAR"
		},
		"UCMYADDRESS": {
			"NOOFBYTES": "1",
			"OFFSET": "17",
			"DATATYPE": "UCHAR"
		}
	},
	"J1939CONFIG": {
		"EMYJ1939NODE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "J1939NODEENUM"
		},
		"ECANPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CANPORTENUM"
		},
		"ULPREFERREDADDRESS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULMYALTERNATEADDRESSRANGESTART": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULMYALTERNATEADDRESSRANGEEND": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULMANUFACTURERCODE": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULINDUSTRYGROUP": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULDEVICECLASS": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULDEVICECLASSINSTANCE": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULFUNCTION": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"ULFUNCTIONINSTANCE": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULECUINSTANCE": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		}
	},
	"PPPFASTSEEDPOS": {
		"EMYPOSITIONSTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLSTATUSENUM"
		},
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SOLTYPEENUM"
		},
		"DMYLATITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "DOUBLE"
		},
		"DMYLONGITUDE": {
			"NOOFBYTES": "8",
			"OFFSET": "16",
			"DATATYPE": "DOUBLE"
		},
		"DMYHEIGHT": {
			"NOOFBYTES": "8",
			"OFFSET": "24",
			"DATATYPE": "DOUBLE"
		},
		"FMYUNDULATION": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "FLOAT"
		},
		"EMYDATUMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "DATUMENUM"
		},
		"FMYLATSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "FLOAT"
		},
		"FMYLONGSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"FMYHGTSTDDEV": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "FLOAT"
		},
		"ACMYBASEID": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "FIXEDCHARARRAY"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "FLOAT"
		},
		"FMYSOLUTIONAGE": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "FLOAT"
		},
		"UCMYNUMTRACKED": {
			"NOOFBYTES": "1",
			"OFFSET": "64",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTION": {
			"NOOFBYTES": "1",
			"OFFSET": "65",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONSINGLEFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "66",
			"DATATYPE": "UCHAR"
		},
		"UCMYNUMINSOLUTIONDUALFREQ": {
			"NOOFBYTES": "1",
			"OFFSET": "67",
			"DATATYPE": "UCHAR"
		},
		"UCMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "1",
			"OFFSET": "68",
			"DATATYPE": "UCHAR"
		},
		"UCMYEXTENDEDSOLUTIONSTATUS": {
			"NOOFBYTES": "1",
			"OFFSET": "69",
			"DATATYPE": "UCHAR"
		},
		"UCMYGALANDBDSSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "70",
			"DATATYPE": "UCHAR"
		},
		"UCMYGPSANDGLOSIGNALS": {
			"NOOFBYTES": "1",
			"OFFSET": "71",
			"DATATYPE": "UCHAR"
		}
	},
	"INITIALINSSTATEINFO": {
		"BMYISVALID": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BOOL"
		},
		"BMYSAVENVM": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "BOOL"
		},
		"ADMYLLH": {
			"NOOFBYTES": "8",
			"OFFSET": "8",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"AFMYATT": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "FIXEDFLOATARRAY"
		},
		"AFMYGYROBIASES": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "FIXEDFLOATARRAY"
		},
		"AFMYACCELBIASES": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "FIXEDFLOATARRAY"
		}
	},
	"INSSEED": {
		"EMYENABLED": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"EMYACTIVITY": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "INITIALINSSTATEENUM"
		}
	},
	"J1939STATUS": {
		"EMYJ1939NODE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "J1939NODEENUM"
		},
		"EMYJ1939NODESTATUS": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "J1939NODESTATUSENUM"
		},
		"ULMYADDRESSCLAIMCOUNT": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"UCMYCLAIMEDADDRESS": {
			"NOOFBYTES": "1",
			"OFFSET": "12",
			"DATATYPE": "HEXBYTE"
		}
	},
	"STEADYLINENUDGE": {
		"EMYNUDGEFRAME": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "STEADYLINENUDGEFRAME"
		},
		"DMYNUDGEVALUE1": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYNUDGEVALUE2": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYNUDGEVALUE3": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		}
	},
	"PDPLOGGINGLEVEL": {
		"EMYLEVEL": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "LOGGINGLEVELENUM"
		}
	},
	"PDPLOG": {
		"SZMYMESSAGE": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		}
	},
	"SATELLITEPCV": {
		"EMYSYSTEMTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SYSTEMTYPEENUM"
		},
		"IDMYID": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SATELLITEID"
		},
		"EMYFREQUENCY": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ANTEXFREQUENCYENUM"
		},
		"AFMYPCV": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "VARIABLEFLOATARRAY"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"DEBUGMEMUSAGE": {
		"ACLADDRESSSPACEMEMSTATS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"ULOSPOOLSIZEPAGES": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "ULONG"
		},
		"ULOSPOOLFREEPAGES": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		},
		"ULRESERVED0": {
			"NOOFBYTES": "4",
			"OFFSET": "12",
			"DATATYPE": "ULONG"
		},
		"ULRESERVED1": {
			"NOOFBYTES": "4",
			"OFFSET": "16",
			"DATATYPE": "ULONG"
		},
		"ULRESERVED2": {
			"NOOFBYTES": "4",
			"OFFSET": "20",
			"DATATYPE": "ULONG"
		},
		"ULHEAPSIZEBYTES": {
			"NOOFBYTES": "4",
			"OFFSET": "24",
			"DATATYPE": "ULONG"
		},
		"ULTOTALNUMALLOCATIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "28",
			"DATATYPE": "ULONG"
		},
		"ULTOTALNUMDEALLOCATIONS": {
			"NOOFBYTES": "4",
			"OFFSET": "32",
			"DATATYPE": "ULONG"
		},
		"ULTOTALBYTESREQUESTED": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "ULONG"
		},
		"ULTOTALBYTESDEALLOCATED": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"ULCURRBYTESALLOCATED": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "ULONG"
		},
		"ULMAXBYTESALLOCATED": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"SZADDRESSSPACENAME": {
			"NOOFBYTES": "1",
			"OFFSET": "52",
			"DATATYPE": "STRING"
		}
	},
	"DEBUGIDLESTATS": {
		"FMYIDLEPERCENT": {
			"NOOFBYTES": "4",
			"OFFSET": "44",
			"DATATYPE": "FLOAT"
		},
		"ULMYSPARE1": {
			"NOOFBYTES": "4",
			"OFFSET": "48",
			"DATATYPE": "ULONG"
		},
		"ULMYSPARE2": {
			"NOOFBYTES": "4",
			"OFFSET": "52",
			"DATATYPE": "ULONG"
		},
		"ULMYSAPRE3": {
			"NOOFBYTES": "4",
			"OFFSET": "56",
			"DATATYPE": "ULONG"
		},
		"ULMYSPARE4": {
			"NOOFBYTES": "4",
			"OFFSET": "60",
			"DATATYPE": "ULONG"
		},
		"ULMYSPARE5": {
			"NOOFBYTES": "4",
			"OFFSET": "64",
			"DATATYPE": "ULONG"
		},
		"ULMYSPARE6": {
			"NOOFBYTES": "4",
			"OFFSET": "68",
			"DATATYPE": "ULONG"
		},
		"ULMYSPARE7": {
			"NOOFBYTES": "4",
			"OFFSET": "72",
			"DATATYPE": "ULONG"
		},
		"ULMYSPARE8": {
			"NOOFBYTES": "4",
			"OFFSET": "76",
			"DATATYPE": "ULONG"
		},
		"ACLMYPERCOREIDLESTATS": {
			"NOOFBYTES": "4",
			"OFFSET": "36",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYCOREINDEX": {
			"NOOFBYTES": "4",
			"OFFSET": "40",
			"DATATYPE": "ULONG"
		},
		"CABO": ["40"],
		"CAAO": ["40"]
	},
	"DEBUGBROKEREVENTS": {
		"SZMYPACKETNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"ULMYSIBLING": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "ULONG"
		},
		"ULMYDOMAIN": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "ULONG"
		}
	},
	"DEBUGCOLLABEVENTS": {
		"SZMYCOLLABORATORNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		}
	},
	"DEBUGEVENTSCONFIG": {
		"EMYENABLED": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		},
		"EMYEVENTTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "CCFEVENTTYPEENUM"
		},
		"SZMYCOLLABORATORNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "8",
			"DATATYPE": "STRING"
		},
		"SZMYPACKETNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "9",
			"DATATYPE": "STRING"
		},
		"ULMYSIBLING": {
			"NOOFBYTES": "4",
			"OFFSET": "89",
			"DATATYPE": "ULONG"
		},
		"ULMYDOMAIN": {
			"NOOFBYTES": "4",
			"OFFSET": "93",
			"DATATYPE": "ULONG"
		}
	},
	"DEBUGEVENTS": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"DEBUGEVENTTYPE": {
		"EMYEVENTTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CCFEVENTTYPEENUM"
		}
	},
	"DEBUGGERMODE": {
		"EMYENABLE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "ENABLEENUM"
		}
	},
	"SETINSTRANSLATION": {
		"EMYOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INSOFFSETENUM"
		},
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "7",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"EMYINPUTFRAME": {
			"NOOFBYTES": "4",
			"OFFSET": "10",
			"DATATYPE": "INSOFFSETFRAMEENUM"
		}
	},
	"SETINSROTATION": {
		"EMYOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INSOFFSETENUM"
		},
		"ADMYELEMENTS": {
			"NOOFBYTES": "8",
			"OFFSET": "7",
			"DATATYPE": "FIXEDDOUBLEARRAY"
		},
		"ULRESERVED": {
			"NOOFBYTES": "4",
			"OFFSET": "10",
			"DATATYPE": "ULONG"
		}
	},
	"DEBUGPROVIDERINFO": {
		"SZMYPACKETNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		},
		"ULMYSIBLING": {
			"NOOFBYTES": "4",
			"OFFSET": "80",
			"DATATYPE": "ULONG"
		},
		"ULMYDOMAIN": {
			"NOOFBYTES": "4",
			"OFFSET": "84",
			"DATATYPE": "ULONG"
		},
		"SZMYNAME": {
			"NOOFBYTES": "1",
			"OFFSET": "132",
			"DATATYPE": "STRING"
		},
		"ULMYPROVIDERPERIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "120",
			"DATATYPE": "ULONG"
		},
		"ULMYPROVIDERMINIMUMPERIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "124",
			"DATATYPE": "ULONG"
		},
		"ACLMYREQUESTLIST": {
			"NOOFBYTES": "4",
			"OFFSET": "128",
			"DATATYPE": "CLASSARRAY"
		},
		"ULMYREQUESTEDPERIOD": {
			"NOOFBYTES": "4",
			"OFFSET": "164",
			"DATATYPE": "ULONG"
		},
		"ULMYREQUESTEDOFFSET": {
			"NOOFBYTES": "4",
			"OFFSET": "168",
			"DATATYPE": "ULONG"
		},
		"BMYUSEMINIMUM": {
			"NOOFBYTES": "4",
			"OFFSET": "172",
			"DATATYPE": "BOOL"
		},
		"CABO": ["132"],
		"CAAO": ["44"]
	},
	"PGN129551": {
		"EMYPOSITIONTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SOLTYPEENUM"
		},
		"FMYDIFFERENTIALLAG": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "FLOAT"
		},
		"ULMYMILLISECONDS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		}
	},
	"TRACKSTACKHWM": {
		"BMYTRACKSTACKHWM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BOOL"
		}
	},
	"PASSCCOM4": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		},
		"CABO": ["4"],
		"CAAO": ["80"]
	},
	"SORTEDSIGCHANMAP": {
		"ACLMYSIGCHANGROUPS": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "CLASSARRAY"
		},
		"EMYMEASUREMENTSOURCE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "MEASUREMENTSOURCEENUM"
		},
		"AULMYSIGCHANS": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "VARIABLEULONGARRAY"
		}
	},
	"INSSEEDOPTIONS": {
		"BMYCHECKPOSITION": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "BOOL"
		},
		"BMYCHECKVELOCITY": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "BOOL"
		},
		"BMYCHECKATTITUDE": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "BOOL"
		}
	},
	"LBANDDECODEDFRAME": {
		"USSERVICEID": {
			"NOOFBYTES": "2",
			"OFFSET": "0",
			"DATATYPE": "USHORT"
		},
		"UCSPARE": {
			"NOOFBYTES": "1",
			"OFFSET": "504",
			"DATATYPE": "UCHAR"
		},
		"AUCUSERDATA": {
			"NOOFBYTES": "1",
			"OFFSET": "505",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"LBANDENCODEDFRAME": {
		"AUCFRAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"LBANDSOFTSYMFRAME": {
		"AUCFRAME": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLEUCHARARRAY"
		}
	},
	"PASSCCOM5": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PASSCCOM6": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PASSCCOM7": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"PASSCCOM8": {
		"SZBUFFER": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "VARIABLECHARARRAY"
		}
	},
	"DEBUGPHASE": {
		"ULMYPRN": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "PRN"
		},
		"EMYSIGNALTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "SIGNALTYPEENUM"
		},
		"ULMYIDNUMBER": {
			"NOOFBYTES": "4",
			"OFFSET": "8",
			"DATATYPE": "ULONG"
		}
	},
	"FORCECHANNELTYPE": {
		"EMYSIGNALTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "SIGNALTYPEENUM"
		},
		"EMYHWCHANNELTYPE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "HWCHANNELTYPEENUM"
		}
	},
	"CLOCKSTEERINGINPUT": {
		"EMYLASTSYSTEM": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "TIMINGSYSTEMENUM"
		},
		"DMYLASTOFFSETSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "4",
			"DATATYPE": "DOUBLE"
		},
		"DMYLASTOFFSETSTDDEVSECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "12",
			"DATATYPE": "DOUBLE"
		},
		"DMYLASTRATESECONDS": {
			"NOOFBYTES": "8",
			"OFFSET": "20",
			"DATATYPE": "DOUBLE"
		}
	},
	"RTKPORTMODE": {
		"EMYPORT": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "COMMPORTENUM"
		},
		"EMYPORTMODE": {
			"NOOFBYTES": "4",
			"OFFSET": "4",
			"DATATYPE": "RTKPORTMODEENUM"
		}
	},
	"PDPVELLOG": {
		"SZMYMESSAGE": {
			"NOOFBYTES": "1",
			"OFFSET": "0",
			"DATATYPE": "STRING"
		}
	},
	"INSUPDATESOURCE": {
		"EMYSOURCE": {
			"NOOFBYTES": "4",
			"OFFSET": "0",
			"DATATYPE": "INSUPDATESOURCEENUM"
		}
	}
};