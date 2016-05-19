offsetMap =
{
	"LOG": {
		"LogPortAddress": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PortAddressEnum"
		},
		"MessageId": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "MessageIdType"
		},
		"Trigger": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "LogTriggerEnum"
		},
		"OnTime": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"Offset": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"Hold": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "HoldEnum"
		}
	},
	"BREAK": {
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		}
	},
	"INTERFACEMODE": {
		"Port": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		},
		"ReceiveInterfaceMode": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "InterfaceModeEnum"
		},
		"TransmitInterfaceMode": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "InterfaceModeEnum"
		},
		"Responses": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "OnOffEnum"
		}
	},
	"COM": {
		"Port": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		},
		"ulMyBaudRate": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"eMyParity": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "OEM4_ParityEnum"
		},
		"ulMyDataBits": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyStopBits": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"eMyHandShaking": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "HandShakeEnum"
		},
		"eMyEcho": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "OnOffEnum"
		},
		"eMyBreaks": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "OnOffEnum"
		},
		"CABO": ["4"],
		"CAAO": ["32"]
	},
	"LOGLIST": {
		"LogList": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"LogPortAddress": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "PortAddressEnum"
		},
		"MessageId": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "MessageIdType"
		},
		"Trigger": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "LogTriggerEnum"
		},
		"OnTime": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"Offset": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"Hold": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "HoldEnum"
		}
	},
	"RTCAOBS": {
		"NovAtelDesignator": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "UCHAR"
		},
		"SubtypeIndicator": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "UCHAR"
		},
		"MinimumPseudorange": {
			"NoOfBytes": "8",
			"Offset": "2",
			"DataType": "DOUBLE"
		},
		"Seconds": {
			"NoOfBytes": "4",
			"Offset": "10",
			"DataType": "FLOAT"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "53",
			"DataType": "UCHAR"
		},
		"TransmitterData": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "ClassArray"
		},
		"TransmitterID": {
			"NoOfBytes": "1",
			"Offset": "22",
			"DataType": "UCHAR"
		},
		"L1LockFlag": {
			"NoOfBytes": "1",
			"Offset": "23",
			"DataType": "UCHAR"
		},
		"L2LockFlag": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "UCHAR"
		},
		"L1PseudorangeOffset": {
			"NoOfBytes": "8",
			"Offset": "25",
			"DataType": "DOUBLE"
		},
		"L2PseudorangeOffset": {
			"NoOfBytes": "8",
			"Offset": "33",
			"DataType": "DOUBLE"
		},
		"L1ADROffset": {
			"NoOfBytes": "4",
			"Offset": "41",
			"DataType": "FLOAT"
		},
		"L2ADROffset": {
			"NoOfBytes": "4",
			"Offset": "45",
			"DataType": "FLOAT"
		},
		"L2NotEncrypted": {
			"NoOfBytes": "4",
			"Offset": "49",
			"DataType": "BOOL"
		},
		"CABO": ["22"],
		"CAAO": ["32"]
	},
	"GPSEPHEM": {
		"ulMySatelliteID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMyTOW": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"ulMyHealth6": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyIODE1": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyIODE2": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyWN": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMyZWN": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"dMyTOE": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyA": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMyDeltaN": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"dMyM0": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		},
		"dMyEcc": {
			"NoOfBytes": "8",
			"Offset": "64",
			"DataType": "DOUBLE"
		},
		"dMyOmega": {
			"NoOfBytes": "8",
			"Offset": "72",
			"DataType": "DOUBLE"
		},
		"dMyCuc": {
			"NoOfBytes": "8",
			"Offset": "80",
			"DataType": "DOUBLE"
		},
		"dMyCus": {
			"NoOfBytes": "8",
			"Offset": "88",
			"DataType": "DOUBLE"
		},
		"dMyCrc": {
			"NoOfBytes": "8",
			"Offset": "96",
			"DataType": "DOUBLE"
		},
		"dMyCrs": {
			"NoOfBytes": "8",
			"Offset": "104",
			"DataType": "DOUBLE"
		},
		"dMyCic": {
			"NoOfBytes": "8",
			"Offset": "112",
			"DataType": "DOUBLE"
		},
		"dMyCis": {
			"NoOfBytes": "8",
			"Offset": "120",
			"DataType": "DOUBLE"
		},
		"dMyI0": {
			"NoOfBytes": "8",
			"Offset": "128",
			"DataType": "DOUBLE"
		},
		"dMyIDot": {
			"NoOfBytes": "8",
			"Offset": "136",
			"DataType": "DOUBLE"
		},
		"dMyOmega0": {
			"NoOfBytes": "8",
			"Offset": "144",
			"DataType": "DOUBLE"
		},
		"dMyOmegaDot": {
			"NoOfBytes": "8",
			"Offset": "152",
			"DataType": "DOUBLE"
		},
		"ulMyIODC": {
			"NoOfBytes": "4",
			"Offset": "160",
			"DataType": "ULONG"
		},
		"dMyTOC": {
			"NoOfBytes": "8",
			"Offset": "164",
			"DataType": "DOUBLE"
		},
		"dMyTGD": {
			"NoOfBytes": "8",
			"Offset": "172",
			"DataType": "DOUBLE"
		},
		"dMyAf0": {
			"NoOfBytes": "8",
			"Offset": "180",
			"DataType": "DOUBLE"
		},
		"dMyAf1": {
			"NoOfBytes": "8",
			"Offset": "188",
			"DataType": "DOUBLE"
		},
		"dMyAf2": {
			"NoOfBytes": "8",
			"Offset": "196",
			"DataType": "DOUBLE"
		},
		"bMyAntiSpoofing": {
			"NoOfBytes": "4",
			"Offset": "204",
			"DataType": "BOOL"
		},
		"dMyN": {
			"NoOfBytes": "8",
			"Offset": "208",
			"DataType": "DOUBLE"
		},
		"dMyEphVar": {
			"NoOfBytes": "8",
			"Offset": "216",
			"DataType": "DOUBLE"
		}
	},
	"IONUTC": {
		"dMyA0": {
			"NoOfBytes": "8",
			"Offset": "72",
			"DataType": "DOUBLE"
		},
		"dMyA1": {
			"NoOfBytes": "8",
			"Offset": "80",
			"DataType": "DOUBLE"
		},
		"dMyA2": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyA3": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyB0": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyB1": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMyB2": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"dMyB3": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		},
		"ulMyWNt": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ULONG"
		},
		"ulMyTot": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "ULONG"
		},
		"ulMyWNlsf": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "ULONG"
		},
		"ulMyDN": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "ULONG"
		},
		"lMyDeltaTls": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "LONG"
		},
		"lMyDeltaTlsf": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "LONG"
		},
		"ulMyDeltaTUTC": {
			"NoOfBytes": "4",
			"Offset": "104",
			"DataType": "ULONG"
		}
	},
	"OBSERVATIONS": {
		"ulMyWN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMyRecTime": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"aclMyObs": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"usMySvPrn": {
			"NoOfBytes": "2",
			"Offset": "16",
			"DataType": "USHORT"
		},
		"usMySvFreq": {
			"NoOfBytes": "2",
			"Offset": "18",
			"DataType": "USHORT"
		},
		"dMyPsr": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"fMyVPsr": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"dMyAdr": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"fMyVAdr": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyDop": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyCNo": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"fMyLockTime": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "FLOAT"
		},
		"ulMyCStatus": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "HEXULONG"
		},
		"dMyDIon": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyVDIon": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"fMyDAcc": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "FLOAT"
		},
		"dMyVOpn": {
			"NoOfBytes": "8",
			"Offset": "80",
			"DataType": "DOUBLE"
		},
		"fMyCodeError": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "FLOAT"
		},
		"fMyDLLBandWidth": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "FLOAT"
		},
		"fMyVDop": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "FLOAT"
		},
		"eMyFreq": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "FrequencyEnum"
		},
		"ulMyState6ID": {
			"NoOfBytes": "4",
			"Offset": "104",
			"DataType": "ULONG"
		},
		"sigMyChan": {
			"NoOfBytes": "4",
			"Offset": "108",
			"DataType": "INT"
		},
		"fMyUserCNo": {
			"NoOfBytes": "4",
			"Offset": "112",
			"DataType": "FLOAT"
		},
		"CABO": ["16"],
		"CAAO": ["100"]
	},
	"RTCA1": {
		"ModifiedZCount": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"AEB": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "AccelerationErrorBound"
		},
		"Corrections": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "UCHAR"
		},
		"PseudorangeCorrection": {
			"NoOfBytes": "8",
			"Offset": "17",
			"DataType": "DOUBLE"
		},
		"IssueofData": {
			"NoOfBytes": "1",
			"Offset": "25",
			"DataType": "UCHAR"
		},
		"RangeRateCorrection": {
			"NoOfBytes": "8",
			"Offset": "26",
			"DataType": "DOUBLE"
		},
		"UDRE": {
			"NoOfBytes": "4",
			"Offset": "34",
			"DataType": "FLOAT"
		},
		"CABO": ["16"],
		"CAAO": ["22"]
	},
	"RTCAREF": {
		"ucMyNovAtelDesignator": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "UCHAR"
		},
		"ucMySubTypeIndicator": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "UCHAR"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "2",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "10",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "18",
			"DataType": "DOUBLE"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "26",
			"DataType": "UCHAR"
		}
	},
	"MSGDEF": {
		"MsgId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "UINT"
		},
		"MessageCRC": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"MessageName": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "STRING"
		},
		"MessageType": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "MessageType"
		},
		"MessageHelp": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "STRING"
		},
		"Input": {
			"NoOfBytes": "4",
			"Offset": "14",
			"DataType": "BOOL"
		},
		"Output": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "BOOL"
		},
		"MessageStyle": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "UINT"
		},
		"SaveConfigable": {
			"NoOfBytes": "4",
			"Offset": "26",
			"DataType": "ULONG"
		},
		"ParamArray": {
			"NoOfBytes": "4",
			"Offset": "30",
			"DataType": "MsgParamArray"
		},
		"AlternateId": {
			"NoOfBytes": "4",
			"Offset": "34",
			"DataType": "ULONG"
		},
		"AccessString": {
			"NoOfBytes": "1",
			"Offset": "38",
			"DataType": "STRING"
		},
		"Hidden": {
			"NoOfBytes": "4",
			"Offset": "39",
			"DataType": "BOOL"
		},
		"Throttled": {
			"NoOfBytes": "4",
			"Offset": "43",
			"DataType": "BOOL"
		},
		"Restriction": {
			"NoOfBytes": "4",
			"Offset": "47",
			"DataType": "LogRestrictRateEnum"
		}
	},
	"DEBUG": {
		"TokenName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"ActivateFlag": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "BOOL"
		}
	},
	"STEERING": {
		"ulMyModulus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyPulseWidth": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"dMyModelStepAdjustment": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyBandwidth": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		}
	},
	"CLOCKADJUST": {
		"eMyCommand": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClockAdjustCommandEnum"
		}
	},
	"CLOCKMODEL": {
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClockModelStatusEnum"
		},
		"ulMyRejectCount": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"adMyPar": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "FixedDOUBLEArray"
		},
		"adMyData": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "FixedDOUBLEArray"
		},
		"dMyInstRangeBias": {
			"NoOfBytes": "8",
			"Offset": "33",
			"DataType": "DOUBLE"
		},
		"dMyInstDrift": {
			"NoOfBytes": "8",
			"Offset": "41",
			"DataType": "DOUBLE"
		},
		"bMyConstellationChange": {
			"NoOfBytes": "4",
			"Offset": "49",
			"DataType": "BOOL"
		}
	},
	"CRESET": {
		"bMyConstellationChange": {
			"NoOfBytes": "0",
			"Offset": "0",
			"DataType": ""
		}
	},
	"RESET": {
		"ulMyDelay": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"SAVECONFIG": {
		"ulMyDelay": {
			"NoOfBytes": "0",
			"Offset": "0",
			"DataType": ""
		}
	},
	"FRESET": {
		"eType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "NVM_DataTypeEnum"
		},
		"CABO": ["4"],
		"CAAO": ["4"]
	},
	"CHANCONFIG": {
		"aclMyChanConfig": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"ulMyNumSVChans": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"eMySignal": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ChanConfigSignalEnum"
		},
		"eMyMeasurementSource": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "MeasurementSourceEnum"
		}
	},
	"MODEL": {
		"ModelName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		}
	},
	"DECODERCMDS": {
		"ulMySignalChannelNumber": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyPrn": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"eMyCommandRequest": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FrameDecoderCommandEnum"
		},
		"eMyNavMssgDataType": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "NavigationMssgTypeEnum"
		},
		"uiMyMaxNumberOfParityFailures": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "UINT"
		}
	},
	"RAWNAVDATA": {
		"ulMySigChan": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMySatID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"eMySignalType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SignalTypeEnum"
		},
		"bMyNewData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "BOOL"
		},
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"aclMyRawNavData": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ClassArray"
		},
		"cMyDataBit": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "CHAR"
		},
		"ucMyPowerStatus": {
			"NoOfBytes": "1",
			"Offset": "29",
			"DataType": "UCHAR"
		},
		"ulMyResetLockCount": {
			"NoOfBytes": "4",
			"Offset": "30",
			"DataType": "ULONG"
		},
		"bMyPublishFrame": {
			"NoOfBytes": "4",
			"Offset": "34",
			"DataType": "BOOL"
		},
		"CABO": ["28"],
		"CAAO": ["10"]
	},
	"RAWGPSSUBFRAME": {
		"iMyFrameDecoderNumber": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INT"
		},
		"ulMySatelliteID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMySubFrameID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"aucMyRawSubFrameData": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "FixedHEXBYTEArray"
		},
		"ulMySignalChannelNumber": {
			"NoOfBytes": "4",
			"Offset": "42",
			"DataType": "ULONG"
		}
	},
	"CLOCKSTEERING": {
		"eMySteeringSource": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClockSourceEnum"
		},
		"eMySteeringState": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ClockSteeringStateEnum"
		},
		"ulMyModulus": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"dMyEffectivePulseWidth": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyBandwidth": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"fMySlope": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"dMyLastOffset": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyLastRate": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		}
	},
	"ASSIGN": {
		"svChan": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SVCHAN"
		},
		"eAssignState": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "AssignStateEnum"
		},
		"ulPrn": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "PRN"
		},
		"lDoppler": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "LONG"
		},
		"ulDopplerWindow": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		}
	},
	"ASSIGNALL": {
		"eSystem": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "AssignSystemEnum"
		},
		"eAssignState": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "AssignStateEnum"
		},
		"ulPrn": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "PRN"
		},
		"lDoppler": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "LONG"
		},
		"ulDopplerWindow": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		}
	},
	"UNASSIGN": {
		"svChan": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SVCHAN"
		},
		"eAssignState": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "AssignStateEnum"
		}
	},
	"UNASSIGNALL": {
		"eMySystem": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "AssignSystemEnum"
		}
	},
	"GPSOL_CTS": {
		"ePositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"fMyTrackingElevationCutoff": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyRTKElevationCutoff": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"ChanStatus": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ClassArray"
		},
		"usPrn": {
			"NoOfBytes": "2",
			"Offset": "20",
			"DataType": "USHORT"
		},
		"usFreq": {
			"NoOfBytes": "2",
			"Offset": "22",
			"DataType": "USHORT"
		},
		"ulChannelStatus": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"dPsr": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"fDoppler": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fCNo": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fLockTime": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyPSRResidual": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"eMyPSRRangeReject": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ObservationStatusEnum"
		},
		"fMyPSRFilterWeighting": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMyRTKResidual": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"eMyRTKAmbiguity": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "AmbiguityEnum"
		},
		"fMyRTKFilterWeighting": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "FLOAT"
		},
		"bMyIsAzElAvail": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "BOOL"
		},
		"fMyAzimuth": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "FLOAT"
		},
		"fMyElevation": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "FLOAT"
		},
		"CABO": ["20"],
		"CAAO": ["64"]
	},
	"CHANDEBUG": {
		"ulChanTrackingStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"usPrn": {
			"NoOfBytes": "2",
			"Offset": "4",
			"DataType": "USHORT"
		},
		"usFreq": {
			"NoOfBytes": "2",
			"Offset": "6",
			"DataType": "USHORT"
		},
		"eDataFormat": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "DebugDataFormatEnum"
		},
		"acData": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "VariableUcharArray"
		}
	},
	"GPSOL_MON": {
		"iRow": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INT"
		},
		"iColumn": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "INT"
		},
		"iColor": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "INT"
		},
		"eScreenCode": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "MonitorScreenCodeEnum"
		},
		"asMessage": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "STRING"
		}
	},
	"GPSOL_POS": {
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"eMyDatumType": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "DatumEnum"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"dDouble": {
			"NoOfBytes": "8",
			"Offset": "84",
			"DataType": "DOUBLE"
		},
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "SolStatusEnum"
		},
		"iInt": {
			"NoOfBytes": "4",
			"Offset": "103",
			"DataType": "INT"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "SolTypeEnum"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "100",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "101",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "102",
			"DataType": "UCHAR"
		}
	},
	"DEBUGCHANNEL": {
		"eDataFormat": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "DebugDataFormatEnum"
		},
		"sigChan1": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SIGCHAN"
		},
		"sigChan2": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SIGCHAN"
		},
		"sigChan3": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "SIGCHAN"
		},
		"sigChan4": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "SIGCHAN"
		},
		"sigChan5": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "SIGCHAN"
		}
	},
	"UNLOG": {
		"LogPortAddress": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PortAddressEnum"
		},
		"MessageId": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "MessageIdType"
		},
		"CABO": ["4"],
		"CAAO": ["8"]
	},
	"VERSION": {
		"aclVersions": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eComponentType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ComponentEnum"
		},
		"szModelName": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "FixedCharArray"
		},
		"szPSN": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "FixedCharArray"
		},
		"szHardwareVersion": {
			"NoOfBytes": "1",
			"Offset": "25",
			"DataType": "FixedCharArray"
		},
		"szSoftwareVersion": {
			"NoOfBytes": "1",
			"Offset": "26",
			"DataType": "FixedCharArray"
		},
		"szBootVersion": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "FixedCharArray"
		},
		"szCompileDate": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "FixedCharArray"
		},
		"szCompileTime": {
			"NoOfBytes": "1",
			"Offset": "29",
			"DataType": "FixedCharArray"
		}
	},
	"UNLOGALL": {
		"Port": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PortAddressEnum"
		},
		"RemoveHeld": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "BOOL"
		}
	},
	"DEBUGMEMORY": {
		"eMemoryTestResult": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "MemoryTestEnum"
		},
		"ulMemoryBlock": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMemoryHighWater": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMaxMemory": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		}
	},
	"DEBUGPROCESS": {
		"eStackStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ProcessStackStatusEnum"
		},
		"ulStackPointer": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulStackSize": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulStackUsed": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMemoryInUse": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulProgramCounter": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"dProfile": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"ulNumMsgQs": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulNumMsgsPending": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"ulNumRequestors": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulProcessID": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"szProcessName": {
			"NoOfBytes": "1",
			"Offset": "48",
			"DataType": "STRING"
		}
	},
	"RAWEPHEM": {
		"ulMySatelliteID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyTOE": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"aucMySubframe1": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "FixedHEXBYTEArray"
		},
		"aucMySubframe2": {
			"NoOfBytes": "1",
			"Offset": "42",
			"DataType": "FixedHEXBYTEArray"
		},
		"aucMySubframe3": {
			"NoOfBytes": "1",
			"Offset": "43",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"BESTPOS": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"eMyDatumType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "DatumEnum"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "FixedCharArray"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "66",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "67",
			"DataType": "UCHAR"
		},
		"ucMyMeasurementSource": {
			"NoOfBytes": "1",
			"Offset": "68",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "69",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "70",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "71",
			"DataType": "UCHAR"
		}
	},
	"RANGE": {
		"aclMyObs": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"usMySvPrn": {
			"NoOfBytes": "2",
			"Offset": "4",
			"DataType": "USHORT"
		},
		"usMySvFreq": {
			"NoOfBytes": "2",
			"Offset": "6",
			"DataType": "USHORT"
		},
		"dMyPsr": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"fMySDPsr": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"dMyAdr": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"fMySDAdr": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"fMyDop": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyUserCNo": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyLockTime": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"ulMyCStatus": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["44"]
	},
	"FIX": {
		"eMyFixCmd": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FixCmdEnum"
		},
		"dMyParam1": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyParam2": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyParam3": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		}
	},
	"DECODERSTATUS": {
		"sigMyChan": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SIGCHAN"
		},
		"bMyParityFailed": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "BOOL"
		},
		"bMyBitsFlipped": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "BOOL"
		},
		"bMyParityKnown": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "BOOL"
		},
		"ulMyResetLockCount": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		}
	},
	"REALTIME": {
		"eMyRealtime": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RealtimeEnum"
		}
	},
	"PSRPOS": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"eMyDatumType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "DatumEnum"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "FixedCharArray"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "67",
			"DataType": "UCHAR"
		},
		"ucMyMeasurementSource": {
			"NoOfBytes": "1",
			"Offset": "68",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "69",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "70",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "71",
			"DataType": "UCHAR"
		}
	},
	"SATVIS": {
		"bMyIsSatVisValid": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BOOL"
		},
		"bMyWasGPSAlmanacUsed": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "BOOL"
		},
		"aclMySatVisList": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ClassArray"
		},
		"usMyPrn": {
			"NoOfBytes": "2",
			"Offset": "12",
			"DataType": "USHORT"
		},
		"usMyFreq": {
			"NoOfBytes": "2",
			"Offset": "14",
			"DataType": "USHORT"
		},
		"ulMySatHealth": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"dMyElevation": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyTrueDoppler": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyApparentDoppler": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"CABO": ["12"],
		"CAAO": ["40"]
	},
	"AUTH": {
		"eAuthState": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SecurityEnum"
		},
		"acAuthData1": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		},
		"acAuthData2": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "STRING"
		},
		"acAuthData3": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "STRING"
		},
		"acAuthData4": {
			"NoOfBytes": "1",
			"Offset": "7",
			"DataType": "STRING"
		},
		"acAuthData5": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "STRING"
		},
		"acModelName": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "STRING"
		},
		"acExpiryDate": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "STRING"
		}
	},
	"ECUTOFF": {
		"fMyElevationCutoffAngle": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		}
	},
	"ACKNOWLEDGE": {
		"MsgIDAcked": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ResponseId": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ResponseString": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "STRING"
		}
	},
	"BATTERY": {
		"BatteryAction": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BatteryActionEnum"
		},
		"BatteryMode": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "PDC_BatteryModeEnum"
		},
		"MaxCutoff": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		}
	},
	"DEL": {
		"DeleteTarget": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "DeleteTargetEnum"
		},
		"FileName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		}
	},
	"GROUP": {
		"Action": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "GroupActionEnum"
		},
		"GroupName1": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"GroupName2": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "FixedCharArray"
		}
	},
	"GROUPANTSN": {
		"ParamUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"GroupName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"Asn": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "FixedCharArray"
		}
	},
	"GROUPECUTOFF": {
		"ParamUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"GroupName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"Ecutoff": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "FLOAT"
		}
	},
	"GROUPMODE": {
		"ParamUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"GroupName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"Mode": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "GroupModeEnum"
		}
	},
	"GROUPFIXPOS": {
		"ParamUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"GroupName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"Latitude": {
			"NoOfBytes": "8",
			"Offset": "5",
			"DataType": "DOUBLE"
		},
		"Longitude": {
			"NoOfBytes": "8",
			"Offset": "13",
			"DataType": "DOUBLE"
		},
		"Height": {
			"NoOfBytes": "8",
			"Offset": "21",
			"DataType": "DOUBLE"
		},
		"StationId": {
			"NoOfBytes": "4",
			"Offset": "29",
			"DataType": "INT"
		},
		"Reserved": {
			"NoOfBytes": "4",
			"Offset": "33",
			"DataType": "INT"
		}
	},
	"GROUPSITENAME": {
		"ParamUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"GroupName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"SiteName": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "FixedCharArray"
		}
	},
	"METS": {
		"Target1": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "MetTargetEnum"
		},
		"Value1": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"Target2": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "MetTargetEnum"
		},
		"Value2": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"Target3": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "MetTargetEnum"
		},
		"Value3": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		}
	},
	"GROUPSITENUMBER": {
		"ParamUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"GroupName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"SiteNumber": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "FixedCharArray"
		}
	},
	"GROUPSATLIMIT": {
		"ParamUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"GroupName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"SatLimit": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "INT"
		}
	},
	"GROUPPOSAVE": {
		"ParamUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"GroupName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"MaxTime": {
			"NoOfBytes": "8",
			"Offset": "5",
			"DataType": "DOUBLE"
		},
		"MaxHorz": {
			"NoOfBytes": "8",
			"Offset": "13",
			"DataType": "DOUBLE"
		},
		"MaxVert": {
			"NoOfBytes": "8",
			"Offset": "21",
			"DataType": "DOUBLE"
		}
	},
	"GROUPLOG": {
		"Action": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "GroupActionEnum"
		},
		"GroupName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"ComPort": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "PortAddressEnum"
		},
		"MsgId": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "MessageIdType"
		},
		"Trigger": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "LogTriggerEnum"
		},
		"Period": {
			"NoOfBytes": "4",
			"Offset": "17",
			"DataType": "FLOAT"
		}
	},
	"GROUPANTTYPE": {
		"ParamUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"GroupName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"AType": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "FixedCharArray"
		}
	},
	"GROUPANTHEIGHT": {
		"ParamUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"GroupName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"Height": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "FLOAT"
		}
	},
	"CHANFREQTYPE": {
		"svChan": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SVCHAN"
		},
		"eMyFrequency": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FrequencyEnum"
		},
		"eMyTrackMode": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ChanTrackModeEnum"
		}
	},
	"BAT": {
		"Source": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PDC_BatteryEnum"
		},
		"BattA": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "INT"
		},
		"BattB": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "INT"
		}
	},
	"CLOCKTYPE": {
		"eMyClockType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClockTypeEnum"
		},
		"dMyH0": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyHm1": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyHm2": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		}
	},
	"PROPAGATEDCLOCKMODEL": {
		"dMyRangeBias": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyDrift": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyRangeBiasVariance": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ClockModelStatusEnum"
		},
		"CABO": ["4"],
		"CAAO": ["28"]
	},
	"PORTSTATS": {
		"aclMyPortStatistics": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "CommPortEnum"
		},
		"ulMyRXChars": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyTXChars": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyGoodRXChars": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyDroppedChars": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyInterrupts": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMyBreaks": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyParityErrors": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMyFramingErrors": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"ulMyOverRuns": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"CABO": ["4"],
		"CAAO": ["40"]
	},
	"ALMANAC": {
		"aclMySVAlmData": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"ulPRN": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyWn": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"dMyTOA": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyEcc": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyOmegaDot": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyOmega0": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyOmega": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyMo": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyAf0": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyAf1": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyN": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"dMyA": {
			"NoOfBytes": "8",
			"Offset": "84",
			"DataType": "DOUBLE"
		},
		"dMyDi": {
			"NoOfBytes": "8",
			"Offset": "92",
			"DataType": "DOUBLE"
		},
		"ulMySvConfiguration": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "ULONG"
		},
		"ulMyHealth6": {
			"NoOfBytes": "4",
			"Offset": "104",
			"DataType": "ULONG"
		},
		"ulMyHealth8": {
			"NoOfBytes": "4",
			"Offset": "108",
			"DataType": "ULONG"
		},
		"bMyAntiSpoofingSet": {
			"NoOfBytes": "4",
			"Offset": "112",
			"DataType": "BOOL"
		}
	},
	"RAWALM": {
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"aclMySubFramePages": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ClassArray"
		},
		"usSVID": {
			"NoOfBytes": "2",
			"Offset": "12",
			"DataType": "USHORT"
		},
		"aucMyPageRawData": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "FixedHEXBYTEArray"
		},
		"CABO": ["12"],
		"CAAO": ["32"]
	},
	"HACK": {
		"ulHack1": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulHack2": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulHack3": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulHack4": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		}
	},
	"SIGNAL": {
		"eBlock": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SignalBlockEnum"
		},
		"ulMyChannel": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"GPSOL_VEL": {
		"eMyVelocityStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"ulULONG": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"dMySpeed": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyHorizontalSpeed": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyGroundTrack": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dDouble": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		}
	},
	"USERDATUM": {
		"dMySemiMajorAxis": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyInverseFlattening": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		},
		"dMyScale": {
			"NoOfBytes": "8",
			"Offset": "64",
			"DataType": "DOUBLE"
		}
	},
	"RTCAOBSIN": {
		"ulMessageIdentifier": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefStation": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMessageType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulReserved": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMessageLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"NovAtelDesignator": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "UCHAR"
		},
		"SubtypeIndicator": {
			"NoOfBytes": "1",
			"Offset": "21",
			"DataType": "UCHAR"
		},
		"MinimumPseudorange": {
			"NoOfBytes": "8",
			"Offset": "22",
			"DataType": "DOUBLE"
		},
		"Seconds": {
			"NoOfBytes": "4",
			"Offset": "30",
			"DataType": "FLOAT"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "73",
			"DataType": "UCHAR"
		},
		"TransmitterData": {
			"NoOfBytes": "4",
			"Offset": "38",
			"DataType": "ClassArray"
		},
		"TransmitterID": {
			"NoOfBytes": "1",
			"Offset": "42",
			"DataType": "UCHAR"
		},
		"L1LockFlag": {
			"NoOfBytes": "1",
			"Offset": "43",
			"DataType": "UCHAR"
		},
		"L2LockFlag": {
			"NoOfBytes": "1",
			"Offset": "44",
			"DataType": "UCHAR"
		},
		"L1PseudorangeOffset": {
			"NoOfBytes": "8",
			"Offset": "45",
			"DataType": "DOUBLE"
		},
		"L2PseudorangeOffset": {
			"NoOfBytes": "8",
			"Offset": "53",
			"DataType": "DOUBLE"
		},
		"L1ADROffset": {
			"NoOfBytes": "4",
			"Offset": "61",
			"DataType": "FLOAT"
		},
		"L2ADROffset": {
			"NoOfBytes": "4",
			"Offset": "65",
			"DataType": "FLOAT"
		},
		"L2NotEncrypted": {
			"NoOfBytes": "4",
			"Offset": "69",
			"DataType": "BOOL"
		},
		"CABO": ["42"],
		"CAAO": ["32"]
	},
	"RTCAREFIN": {
		"ulMessageIdentifier": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefStation": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMessageType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulReserved": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMessageLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ucMyNovAtelDesignator": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "UCHAR"
		},
		"ucMySubTypeIndicator": {
			"NoOfBytes": "1",
			"Offset": "21",
			"DataType": "UCHAR"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "22",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "30",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "38",
			"DataType": "DOUBLE"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "46",
			"DataType": "UCHAR"
		}
	},
	"FORCEAS": {
		"svChan": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SVCHAN"
		},
		"eValue": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ForceASEnum"
		}
	},
	"GPSOL_AZEL": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"fMyTrackingElevationCutoff": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyRTKElevationCutoff": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyGDOP": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyPDOP": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"fMyHDOP": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"fMyTDOP": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"aclMySatelliteStatus": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ClassArray"
		},
		"usMyPrn": {
			"NoOfBytes": "2",
			"Offset": "36",
			"DataType": "USHORT"
		},
		"usMyFreq": {
			"NoOfBytes": "2",
			"Offset": "38",
			"DataType": "USHORT"
		},
		"bMyHasPrimary": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "BOOL"
		},
		"bMyHasSecondary": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "BOOL"
		},
		"ulMyPrimaryTrackingStatus": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "HEXULONG"
		},
		"ulMySecondaryTrackingStatus": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "HEXULONG"
		},
		"dMyPrimaryPsr": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		},
		"dMySecondaryPsr": {
			"NoOfBytes": "8",
			"Offset": "64",
			"DataType": "DOUBLE"
		},
		"fMyPrimaryDoppler": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "FLOAT"
		},
		"fMySecondaryDoppler": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "FLOAT"
		},
		"fMyPrimaryCNo": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "FLOAT"
		},
		"fMySecondaryCNo": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "FLOAT"
		},
		"fMyPrimaryLockTime": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "FLOAT"
		},
		"fMySecondaryLockTime": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "FLOAT"
		},
		"fMyPrimaryPSRResidual": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "FLOAT"
		},
		"fMySecondaryPSRResidual": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "FLOAT"
		},
		"eMyPrimaryRangeReject": {
			"NoOfBytes": "4",
			"Offset": "104",
			"DataType": "ObservationStatusEnum"
		},
		"eMySecondaryRangeReject": {
			"NoOfBytes": "4",
			"Offset": "108",
			"DataType": "ObservationStatusEnum"
		},
		"fMyPrimaryPSRFWgt": {
			"NoOfBytes": "4",
			"Offset": "112",
			"DataType": "FLOAT"
		},
		"fMySecondaryPSRFWgt": {
			"NoOfBytes": "4",
			"Offset": "116",
			"DataType": "FLOAT"
		},
		"fMyPrimaryRTKResid": {
			"NoOfBytes": "4",
			"Offset": "120",
			"DataType": "FLOAT"
		},
		"fMySecondaryRTKResid": {
			"NoOfBytes": "4",
			"Offset": "124",
			"DataType": "FLOAT"
		},
		"eMyPrimaryRTKAmb": {
			"NoOfBytes": "4",
			"Offset": "128",
			"DataType": "AmbiguityEnum"
		},
		"eMySecondaryRTKAmb": {
			"NoOfBytes": "4",
			"Offset": "132",
			"DataType": "AmbiguityEnum"
		},
		"fMyPrimaryRTKFWgt": {
			"NoOfBytes": "4",
			"Offset": "136",
			"DataType": "FLOAT"
		},
		"fMySecondaryRTKFWgt": {
			"NoOfBytes": "4",
			"Offset": "140",
			"DataType": "FLOAT"
		},
		"bMyIsAzElAvail": {
			"NoOfBytes": "4",
			"Offset": "144",
			"DataType": "BOOL"
		},
		"fMyAzimuth": {
			"NoOfBytes": "4",
			"Offset": "148",
			"DataType": "FLOAT"
		},
		"fMyElevation": {
			"NoOfBytes": "4",
			"Offset": "152",
			"DataType": "FLOAT"
		},
		"CABO": ["36"],
		"CAAO": ["120"]
	},
	"TRACKSTAT": {
		"ePositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"fMyTrackingElevationCutoff": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"ChanStatus": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"usPrn": {
			"NoOfBytes": "2",
			"Offset": "16",
			"DataType": "USHORT"
		},
		"usFreq": {
			"NoOfBytes": "2",
			"Offset": "18",
			"DataType": "USHORT"
		},
		"ulChannelStatus": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"dPsr": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fDoppler": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fCNo": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fLockTime": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyPSRResidual": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"eMyPSRRangeReject": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ObservationStatusEnum"
		},
		"fMyPSRFilterWeighting": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "FLOAT"
		},
		"CABO": ["16"],
		"CAAO": ["40"]
	},
	"SATSTAT": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"fMyTrackingElevationCutoff": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyRTKElevationCutoff": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"aclMySatelliteStatus": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ClassArray"
		},
		"usMyPrn": {
			"NoOfBytes": "2",
			"Offset": "20",
			"DataType": "USHORT"
		},
		"usMyFreq": {
			"NoOfBytes": "2",
			"Offset": "22",
			"DataType": "USHORT"
		},
		"bMyHasPrimary": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "BOOL"
		},
		"bMyHasSecondary": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "BOOL"
		},
		"ulMyPrimaryTrackingStatus": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "HEXULONG"
		},
		"ulMySecondaryTrackingStatus": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "HEXULONG"
		},
		"dMyPrimaryPsr": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMySecondaryPsr": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"fMyPrimaryDoppler": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMySecondaryDoppler": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"fMyPrimaryCNo": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "FLOAT"
		},
		"fMySecondaryCNo": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "FLOAT"
		},
		"fMyPrimaryLockTime": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "FLOAT"
		},
		"fMySecondaryLockTime": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "FLOAT"
		},
		"fMyPrimaryPSRResidual": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "FLOAT"
		},
		"fMySecondaryPSRResidual": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "FLOAT"
		},
		"eMyPrimaryRangeReject": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "ObservationStatusEnum"
		},
		"eMySecondaryRangeReject": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "ObservationStatusEnum"
		},
		"fMyPrimaryPSRFWgt": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "FLOAT"
		},
		"fMySecondaryPSRFWgt": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "FLOAT"
		},
		"fMyPrimaryRTKResid": {
			"NoOfBytes": "4",
			"Offset": "104",
			"DataType": "FLOAT"
		},
		"fMySecondaryRTKResid": {
			"NoOfBytes": "4",
			"Offset": "108",
			"DataType": "FLOAT"
		},
		"eMyPrimaryRTKAmb": {
			"NoOfBytes": "4",
			"Offset": "112",
			"DataType": "AmbiguityEnum"
		},
		"eMySecondaryRTKAmb": {
			"NoOfBytes": "4",
			"Offset": "116",
			"DataType": "AmbiguityEnum"
		},
		"fMyPrimaryRTKFWgt": {
			"NoOfBytes": "4",
			"Offset": "120",
			"DataType": "FLOAT"
		},
		"fMySecondaryRTKFWgt": {
			"NoOfBytes": "4",
			"Offset": "124",
			"DataType": "FLOAT"
		},
		"bMyIsAzElAvail": {
			"NoOfBytes": "4",
			"Offset": "128",
			"DataType": "BOOL"
		},
		"fMyAzimuth": {
			"NoOfBytes": "4",
			"Offset": "132",
			"DataType": "FLOAT"
		},
		"fMyElevation": {
			"NoOfBytes": "4",
			"Offset": "136",
			"DataType": "FLOAT"
		},
		"fMyGDOP": {
			"NoOfBytes": "4",
			"Offset": "140",
			"DataType": "FLOAT"
		},
		"fMyPDOP": {
			"NoOfBytes": "4",
			"Offset": "144",
			"DataType": "FLOAT"
		},
		"fMyHDOP": {
			"NoOfBytes": "4",
			"Offset": "148",
			"DataType": "FLOAT"
		},
		"fMyTDOP": {
			"NoOfBytes": "4",
			"Offset": "152",
			"DataType": "FLOAT"
		},
		"CABO": ["4"],
		"CAAO": ["136"]
	},
	"LOOPACCUM": {
		"aclMyChannelLoopAccum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"ulMyAccumPeriodMS": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyIQAccumTimeUS": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyCarrierAccumTimeUS": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyCodeAccumTimeUS": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"LOOPGAINS": {
		"aclMyChannelLoopGains": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"fMyPhaseBand": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"fMyPhaseGain": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyPhaseRateGain": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyPhaseAccGain": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyCodeBand": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"fMyCodeGain": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"fMyCodeRateGain": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		}
	},
	"RTCARXSTATION": {
		"acMyRtcaStnID": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		}
	},
	"RTCATXSTATION": {
		"acMyRtcaStnID": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		}
	},
	"RTCMRXSTATION": {
		"ulMyRTCMRxStn": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"RTCMTXSTATION": {
		"ulMyRTCMTxStn": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"RTKELEVMASK": {
		"eMyElevMaskType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RTKElevMaskTypeEnum"
		},
		"fMyAngle": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		}
	},
	"RTKSVENTRIES": {
		"ulMyMaxSv": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"RXSTATUS": {
		"ulMyRxError": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "HEXULONG"
		},
		"aclMyStatusWords": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ClassArray"
		},
		"ulMyStatusWord": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "HEXULONG"
		},
		"ulMyPriorityMask": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "HEXULONG"
		},
		"ulMyEventSetMask": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "HEXULONG"
		},
		"ulMyEventClearMask": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "HEXULONG"
		},
		"CABO": ["8"],
		"CAAO": ["16"]
	},
	"RXSTATUSEVENT": {
		"eMyWord": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RxEventWordEnum"
		},
		"ulMyBitPosition": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"eMyEvent": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "RxStatusFlag"
		},
		"szDescription": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "FixedCharArray"
		}
	},
	"STATUSCONFIG": {
		"eMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RxStatusConfigType"
		},
		"eMyWord": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RxEventWordEnum"
		},
		"ulMyMask": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "HEXULONG"
		}
	},
	"MATCHEDPOS": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"eMyDatumType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "DatumEnum"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "FixedCharArray"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "66",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "67",
			"DataType": "UCHAR"
		},
		"ucMyMeasurementSource": {
			"NoOfBytes": "1",
			"Offset": "68",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "69",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "70",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "71",
			"DataType": "UCHAR"
		}
	},
	"RTKCOMMAND": {
		"eMyCommand": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RTKCommandEnum"
		}
	},
	"ANTENNAPOWER": {
		"eAntennaPower": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "AntennaPowerEnum"
		}
	},
	"BESTVEL": {
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"fMyLatency": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"dMyHorizontalSpeed": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyGroundTrack": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"lMyRsvdFieldForVelocityLogs": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "LONG"
		}
	},
	"PSRVEL": {
		"eMyVelocityStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyVelocityType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"fMyLatency": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"dMyHorizontalSpeed": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyGroundTrack": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"lMyRsvdFieldForVelocityLogs": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "LONG"
		}
	},
	"TIME": {
		"eClockModelStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClockModelStatusEnum"
		},
		"dOffset": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dOffsetStd": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dUTCOffset": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"ulUTCYear": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ucUTCMonth": {
			"NoOfBytes": "1",
			"Offset": "32",
			"DataType": "UCHAR"
		},
		"ucUTCDay": {
			"NoOfBytes": "1",
			"Offset": "33",
			"DataType": "UCHAR"
		},
		"ucUTCHour": {
			"NoOfBytes": "1",
			"Offset": "34",
			"DataType": "UCHAR"
		},
		"ucUTCMinute": {
			"NoOfBytes": "1",
			"Offset": "35",
			"DataType": "UCHAR"
		},
		"ulUTCMillisecond": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"UTCTimeStatus": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "UTCTimeStatus"
		}
	},
	"SETAPPROXTIME": {
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		}
	},
	"CMROBS": {
		"ulMyCMRSync": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyLength": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyVersion": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyStationID": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMessageType": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMyNumberofSv": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyEpochTime": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMyClockBiasValid": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"lMyClockOffset": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "LONG"
		},
		"aclMyCMRBody": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ClassArray"
		},
		"ulMySlotNumber": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"bMyCodeFlag": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "BOOL"
		},
		"bMyL1PhaseValid": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "BOOL"
		},
		"bMyIsL2Present": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "BOOL"
		},
		"ulMyL1Psr": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ULONG"
		},
		"lMyL1CarrierOffset": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "LONG"
		},
		"ulMyL1Snr": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "ULONG"
		},
		"ulMyL1SlipCount": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "ULONG"
		},
		"bMyIsL2Code": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "BOOL"
		},
		"bMyCodeType": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "BOOL"
		},
		"bMyIsL2CodeValid": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "BOOL"
		},
		"bMyIsL2PhaseValid": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "BOOL"
		},
		"bMyPhaseFull": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "BOOL"
		},
		"ulMyReserved": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "ULONG"
		},
		"lMyL2RangeOffset": {
			"NoOfBytes": "4",
			"Offset": "104",
			"DataType": "LONG"
		},
		"lMyL2CarrierOffset": {
			"NoOfBytes": "4",
			"Offset": "108",
			"DataType": "LONG"
		},
		"ulMyL2Snr": {
			"NoOfBytes": "4",
			"Offset": "112",
			"DataType": "ULONG"
		},
		"ulMyL2SlipCount": {
			"NoOfBytes": "4",
			"Offset": "116",
			"DataType": "ULONG"
		},
		"CABO": ["48"],
		"CAAO": ["72"]
	},
	"CMROBSIN": {
		"ulMyCMRSync": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyLength": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyVersion": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyStationID": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMessageType": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMyNumberofSv": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyEpochTime": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMyClockBiasValid": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"lMyClockOffset": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "LONG"
		},
		"aclMyCMRBody": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ClassArray"
		},
		"ulMySlotNumber": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"bMyCodeFlag": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "BOOL"
		},
		"bMyL1PhaseValid": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "BOOL"
		},
		"bMyIsL2Present": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "BOOL"
		},
		"ulMyL1Psr": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ULONG"
		},
		"lMyL1CarrierOffset": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "LONG"
		},
		"ulMyL1Snr": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "ULONG"
		},
		"ulMyL1SlipCount": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "ULONG"
		},
		"bMyIsL2Code": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "BOOL"
		},
		"bMyCodeType": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "BOOL"
		},
		"bMyIsL2CodeValid": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "BOOL"
		},
		"bMyIsL2PhaseValid": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "BOOL"
		},
		"bMyPhaseFull": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "BOOL"
		},
		"ulMyReserved": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "ULONG"
		},
		"lMyL2RangeOffset": {
			"NoOfBytes": "4",
			"Offset": "104",
			"DataType": "LONG"
		},
		"lMyL2CarrierOffset": {
			"NoOfBytes": "4",
			"Offset": "108",
			"DataType": "LONG"
		},
		"ulMyL2Snr": {
			"NoOfBytes": "4",
			"Offset": "112",
			"DataType": "ULONG"
		},
		"ulMyL2SlipCount": {
			"NoOfBytes": "4",
			"Offset": "116",
			"DataType": "ULONG"
		},
		"CABO": ["48"],
		"CAAO": ["72"]
	},
	"CMRREF": {
		"ulMyCMRSync": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyLength": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyVersion": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyStationID": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyMessageType": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"bMyIsBatteryLow": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "BOOL"
		},
		"bMyIsMemLow": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "BOOL"
		},
		"ulMyReserved": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "ULONG"
		},
		"bMyIsL2Enabled": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "BOOL"
		},
		"ulMyReserved2": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulMyEpochTime": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMyMotionState": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"ulMyAntennaNumber": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"dMyECEF_X": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"ulMyAntennaH": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "ULONG"
		},
		"dMyECEF_Y": {
			"NoOfBytes": "8",
			"Offset": "72",
			"DataType": "DOUBLE"
		},
		"ulMyEastOffset": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "ULONG"
		},
		"dMyECEF_Z": {
			"NoOfBytes": "8",
			"Offset": "84",
			"DataType": "DOUBLE"
		},
		"ulMyNorthOffset": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "ULONG"
		},
		"ulMyPosAccuracy": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "ULONG"
		}
	},
	"CMRREFIN": {
		"ulMyCMRSync": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyLength": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyVersion": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyStationID": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyMessageType": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"bMyIsBatteryLow": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "BOOL"
		},
		"bMyIsMemLow": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "BOOL"
		},
		"ulMyReserved": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "ULONG"
		},
		"bMyIsL2Enabled": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "BOOL"
		},
		"ulMyReserved2": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulMyEpochTime": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMyMotionState": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"ulMyAntennaNumber": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"dMyECEF_X": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"ulMyAntennaH": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "ULONG"
		},
		"dMyECEF_Y": {
			"NoOfBytes": "8",
			"Offset": "72",
			"DataType": "DOUBLE"
		},
		"ulMyEastOffset": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "ULONG"
		},
		"dMyECEF_Z": {
			"NoOfBytes": "8",
			"Offset": "84",
			"DataType": "DOUBLE"
		},
		"ulMyNorthOffset": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "ULONG"
		},
		"ulMyPosAccuracy": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "ULONG"
		}
	},
	"RTCM1": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"aclMyDiffData": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ClassArray"
		},
		"ulMyScale": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyUDRE": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMySvPrn": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"iMyCor": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "INT"
		},
		"iMyCorRate": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "INT"
		},
		"ulMyIODE": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["24"]
	},
	"RTCM18OUT": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyFreq": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMySpare": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"lMyTime": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "LONG"
		},
		"aclMyRTCMBody": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ClassArray"
		},
		"ulMultipleMsg": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulMyCode": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulMyConstellation": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMySv": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"ulMyDataQual": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"ulMyInits": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"lMyAdr": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "LONG"
		},
		"CABO": ["40"],
		"CAAO": ["28"]
	},
	"RTCM19OUT": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyFreq": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMySmoothingInterval": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"lMyTime": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "LONG"
		},
		"aclMyRTCMBody": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ClassArray"
		},
		"ulMultipleMsg": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulMyCode": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulMyConstellation": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMySv": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"ulMyDataQual": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"ulMyMultipath": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"ulMyPsr": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ULONG"
		},
		"CABO": ["40"],
		"CAAO": ["28"]
	},
	"RTCM1IN": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"aclMyDiffData": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ClassArray"
		},
		"ulMyScale": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyUDRE": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMySvPrn": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"iMyCor": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "INT"
		},
		"iMyCorRate": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "INT"
		},
		"ulMyIODE": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["24"]
	},
	"RTCM20IN": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyFreq": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulSpare": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"lMyTime": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "LONG"
		},
		"aclMyRTCMBody": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ClassArray"
		},
		"ulMultipleMsg": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulMyCode": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulMyConstellation": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMySv": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"ulMyDataQual": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"ulMyInits": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"ulIODE": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ULONG"
		},
		"lPhaseCorr": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "LONG"
		},
		"CABO": ["40"],
		"CAAO": ["32"]
	},
	"RTCM21IN": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyFreq": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMySmoothingInterval": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"lMyTime": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "LONG"
		},
		"aclMyRTCMBody": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ClassArray"
		},
		"ulMultipleMsg": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulMyCode": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulMyConstellation": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMySv": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"ulMyRateCorrSF": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"ulMyDataQual": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"ulMyPsrCorrSF": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ULONG"
		},
		"ulMyMultipath": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "ULONG"
		},
		"ulMyIODE": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "ULONG"
		},
		"lMyPsrCorr": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "LONG"
		},
		"lMyPsrCorrRate": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "LONG"
		},
		"CABO": ["40"],
		"CAAO": ["44"]
	},
	"RTCM22IN": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"lMyL1AntDeltaX": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "LONG"
		},
		"lMyL1AntDeltaY": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "LONG"
		},
		"lMyL1AntDeltaZ": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "LONG"
		},
		"clMyRTCM22AntHgtL1": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ClassArray"
		},
		"ulSpareBits": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulMyConstellation": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"CABO": ["40"],
		"CAAO": ["8"]
	},
	"RTCM3IN": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"dMyECEF_X": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyECEF_Y": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyECEF_Z": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		}
	},
	"RTCM59IN": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ucMySubType": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "UCHAR"
		},
		"lMyMinPsr": {
			"NoOfBytes": "4",
			"Offset": "25",
			"DataType": "LONG"
		},
		"lTimeOffset": {
			"NoOfBytes": "4",
			"Offset": "29",
			"DataType": "LONG"
		},
		"ulSpareBits": {
			"NoOfBytes": "4",
			"Offset": "33",
			"DataType": "ULONG"
		},
		"clMyRTCMBody": {
			"NoOfBytes": "4",
			"Offset": "37",
			"DataType": "ClassArray"
		},
		"ulMySv": {
			"NoOfBytes": "4",
			"Offset": "41",
			"DataType": "ULONG"
		},
		"ulMyLock": {
			"NoOfBytes": "4",
			"Offset": "45",
			"DataType": "ULONG"
		},
		"ulMyPsr": {
			"NoOfBytes": "4",
			"Offset": "49",
			"DataType": "ULONG"
		},
		"lMyAdrCor": {
			"NoOfBytes": "4",
			"Offset": "53",
			"DataType": "LONG"
		},
		"CABO": ["41"],
		"CAAO": ["16"]
	},
	"RTCM59": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ucMySubType": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "UCHAR"
		},
		"lMyMinPsr": {
			"NoOfBytes": "4",
			"Offset": "25",
			"DataType": "LONG"
		},
		"lTimeOffset": {
			"NoOfBytes": "4",
			"Offset": "29",
			"DataType": "LONG"
		},
		"ulSpareBits": {
			"NoOfBytes": "4",
			"Offset": "33",
			"DataType": "ULONG"
		},
		"clMyRTCMBody": {
			"NoOfBytes": "4",
			"Offset": "37",
			"DataType": "ClassArray"
		},
		"ulMySv": {
			"NoOfBytes": "4",
			"Offset": "41",
			"DataType": "ULONG"
		},
		"ulMyLock": {
			"NoOfBytes": "4",
			"Offset": "45",
			"DataType": "ULONG"
		},
		"ulMyPsr": {
			"NoOfBytes": "4",
			"Offset": "49",
			"DataType": "ULONG"
		},
		"lMyAdrCor": {
			"NoOfBytes": "4",
			"Offset": "53",
			"DataType": "LONG"
		},
		"CABO": ["41"],
		"CAAO": ["16"]
	},
	"RTCM3": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"dMyECEF_X": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyECEF_Y": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyECEF_Z": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		}
	},
	"RTCM22": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"lMyL1AntDeltaX": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "LONG"
		},
		"lMyL1AntDeltaY": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "LONG"
		},
		"lMyL1AntDeltaZ": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "LONG"
		},
		"clMyRTCM22AntHgtL1": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ClassArray"
		},
		"ulSpareBits": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulMyConstellation": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulMyAntennaType": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMyAntennaRefPoint": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"bNoHeight": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "BOOL"
		},
		"ulAntennaPhaseHeight": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"clMyRTCM22AntInfL2": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ClassArray"
		},
		"lMyL2AntDeltaX": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "LONG"
		},
		"lMyL2AntDeltaY": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "LONG"
		},
		"lMyL2AntDeltaZ": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "LONG"
		},
		"CABO": ["68"],
		"CAAO": ["12"]
	},
	"RTCM21OUT": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyFreq": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMySmoothingInterval": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"lMyTime": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "LONG"
		},
		"aclMyRTCMBody": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ClassArray"
		},
		"ulMultipleMsg": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulMyCode": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulMyConstellation": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMySv": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"ulMyRateCorrSF": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"ulMyDataQual": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"ulMyPsrCorrSF": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ULONG"
		},
		"ulMyMultipath": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "ULONG"
		},
		"ulMyIODE": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "ULONG"
		},
		"lMyPsrCorr": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "LONG"
		},
		"lMyPsrCorrRate": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "LONG"
		},
		"CABO": ["40"],
		"CAAO": ["44"]
	},
	"RTCM20OUT": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyFreq": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulSpare": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"lMyTime": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "LONG"
		},
		"aclMyRTCMBody": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ClassArray"
		},
		"ulMultipleMsg": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulMyCode": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulMyConstellation": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMySv": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"ulMyDataQual": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"ulMyInits": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"ulIODE": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ULONG"
		},
		"lPhaseCorr": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "LONG"
		},
		"CABO": ["40"],
		"CAAO": ["32"]
	},
	"RTCM19IN": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyFreq": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMySmoothingInterval": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"lMyTime": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "LONG"
		},
		"aclMyRTCMBody": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ClassArray"
		},
		"ulMultipleMsg": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulMyCode": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulMyConstellation": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMySv": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"ulMyDataQual": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"ulMyMultipath": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"ulMyPsr": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ULONG"
		},
		"CABO": ["40"],
		"CAAO": ["28"]
	},
	"RTCM18IN": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyFreq": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMySpare": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"lMyTime": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "LONG"
		},
		"aclMyRTCMBody": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ClassArray"
		},
		"ulMultipleMsg": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulMyCode": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulMyConstellation": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMySv": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"ulMyDataQual": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"ulMyInits": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"lMyAdr": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "LONG"
		},
		"CABO": ["40"],
		"CAAO": ["28"]
	},
	"BREAKPOINT": {
		"eType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BreakPointTypeEnum"
		},
		"eSet": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "BreakPointSetEnum"
		},
		"ulAddress": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"eReadWrite": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "BreakPointRWEnum"
		},
		"ulData": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMask": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		}
	},
	"PEEKABOO": {
		"eMyOutputPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		},
		"eMyMemoryType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "MemTypeEnum"
		},
		"ulAddress": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulSize": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		}
	},
	"POKEABOO": {
		"eMemType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "MemTypeEnum"
		},
		"ulAddress": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulPokeValue": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		}
	},
	"RANGEPN": {
		"fFloat": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		},
		"aclMyObs": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ClassArray"
		},
		"usMySvPrn": {
			"NoOfBytes": "2",
			"Offset": "8",
			"DataType": "USHORT"
		},
		"usMySvFreq": {
			"NoOfBytes": "2",
			"Offset": "10",
			"DataType": "USHORT"
		},
		"dMyPsr": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"fMySDPsr": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"dMyAdr": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMySDAdr": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyDop": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyUserCNo": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyLockTime": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"ulMyCStatus": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "HEXULONG"
		},
		"CABO": ["8"],
		"CAAO": ["44"]
	},
	"DGPSTIMEOUT": {
		"ulMyTimeOut": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"RXCONFIG": {
		"MessageId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"MessageLength": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"MessageBuffer": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "FixedUCHARArray"
		}
	},
	"RTCM16": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"aucMyRTCM16Text": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM16IN": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"aucMyRTCM16Text": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "VariableUcharArray"
		}
	},
	"SETRTCM16": {
		"aucMyText": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedUCHARArray"
		}
	},
	"DEBUGETHERS": {
		"szMyEtherName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"ulMyEtherNum": {
			"NoOfBytes": "4",
			"Offset": "1",
			"DataType": "ULONG"
		},
		"ulMyEtherSiblingNum": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "ULONG"
		},
		"ulMyNumPackets": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "ULONG"
		},
		"ulMyNumRequestors": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "ULONG"
		},
		"bMyIsCommMsgQTaken": {
			"NoOfBytes": "4",
			"Offset": "17",
			"DataType": "BOOL"
		},
		"ulMyCommMsgQID": {
			"NoOfBytes": "4",
			"Offset": "21",
			"DataType": "ULONG"
		},
		"ulMyProviderTaskID": {
			"NoOfBytes": "4",
			"Offset": "25",
			"DataType": "ULONG"
		}
	},
	"DEBUGMSGQS": {
		"ulMyProcessID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyQueueID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyNumMsgs": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyMaxMsgs": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		}
	},
	"RX_SLEEP": {
		"ulSleepTime": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"LOCKOUT": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PRN"
		}
	},
	"UNLOCKOUT": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PRN"
		}
	},
	"UNLOCKOUTALL": {
		"ulMyPRN": {
			"NoOfBytes": "0",
			"Offset": "0",
			"DataType": ""
		},
		"CABO": ["4"],
		"CAAO": ["0"]
	},
	"RANGECMP": {
		"aclMyRangeCEntry": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"aucRangeCData": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"RTKPOS": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"eMyDatumType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "DatumEnum"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "FixedCharArray"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "66",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "67",
			"DataType": "UCHAR"
		},
		"ucMyMeasurementSource": {
			"NoOfBytes": "1",
			"Offset": "68",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "69",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "70",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "71",
			"DataType": "UCHAR"
		}
	},
	"DGPSEPHEMDELAY": {
		"ulEPHEMDelay": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"DGPSRXID": {
		"eMyDGPSType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "DGPSTypeEnum"
		},
		"sMyDGPSId": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		}
	},
	"DGPSTXID": {
		"eMyDGPSType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "DGPSTypeEnum"
		},
		"sMyDGPSId": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		}
	},
	"DEBUGPDC": {
		"Val0": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INT"
		},
		"Val1": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "INT"
		},
		"Val2": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "INT"
		},
		"Val3": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"DebugText": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "FixedCharArray"
		}
	},
	"FILEDUMP": {
		"PacketId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"DataBytes": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "VarHEXBYTEType"
		}
	},
	"FILEHDR": {
		"Name32769": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		},
		"FileSize": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"MinSats": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"StartWeek": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"StopWeek": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"StartSec": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"StopSec": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"Reserved1": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "INT"
		},
		"Reserved2": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"Reserved3": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"Reserved4": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"FileStatus": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"VersionP": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"TimeP": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ULONG"
		},
		"ProjectP": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "ULONG"
		},
		"GroupP": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "ULONG"
		},
		"SiteP": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "ULONG"
		},
		"MetP": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "ULONG"
		},
		"WriteOutP": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "ULONG"
		},
		"Reserved6": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "ULONG"
		},
		"Reserved7": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "ULONG"
		},
		"Reserved8": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "ULONG"
		},
		"Reserved9": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "ULONG"
		}
	},
	"GROUPDEF": {
		"GroupName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		},
		"SessionName": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "FixedCharArray"
		},
		"AntSN": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "FixedCharArray"
		},
		"AntType": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "FixedCharArray"
		},
		"AntHeight": {
			"NoOfBytes": "4",
			"Offset": "15",
			"DataType": "FLOAT"
		},
		"Name32774": {
			"NoOfBytes": "4",
			"Offset": "19",
			"DataType": "FLOAT"
		},
		"SatLimit": {
			"NoOfBytes": "4",
			"Offset": "23",
			"DataType": "INT"
		},
		"GroupStatus": {
			"NoOfBytes": "4",
			"Offset": "27",
			"DataType": "HEXULONG"
		},
		"GroupStatus2": {
			"NoOfBytes": "4",
			"Offset": "31",
			"DataType": "HEXULONG"
		},
		"LatTime": {
			"NoOfBytes": "8",
			"Offset": "35",
			"DataType": "DOUBLE"
		},
		"LongHorz": {
			"NoOfBytes": "8",
			"Offset": "43",
			"DataType": "DOUBLE"
		},
		"HeightVert": {
			"NoOfBytes": "8",
			"Offset": "51",
			"DataType": "DOUBLE"
		},
		"SiteNum": {
			"NoOfBytes": "1",
			"Offset": "59",
			"DataType": "FixedCharArray"
		},
		"SiteName": {
			"NoOfBytes": "1",
			"Offset": "60",
			"DataType": "FixedCharArray"
		},
		"DGPSTxIdType": {
			"NoOfBytes": "4",
			"Offset": "61",
			"DataType": "DGPSTypeEnum"
		},
		"DGPSTxId": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "FixedCharArray"
		},
		"Reserved5": {
			"NoOfBytes": "1",
			"Offset": "66",
			"DataType": "UCHAR"
		},
		"Reserved6": {
			"NoOfBytes": "2",
			"Offset": "67",
			"DataType": "USHORT"
		},
		"InterfaceModes": {
			"NoOfBytes": "4",
			"Offset": "69",
			"DataType": "HEXULONG"
		},
		"Reserved3": {
			"NoOfBytes": "1",
			"Offset": "111",
			"DataType": "UCHAR"
		},
		"Reserved4": {
			"NoOfBytes": "1",
			"Offset": "112",
			"DataType": "UCHAR"
		},
		"LogSpecs": {
			"NoOfBytes": "4",
			"Offset": "85",
			"DataType": "ClassArray"
		},
		"MessageId": {
			"NoOfBytes": "4",
			"Offset": "89",
			"DataType": "ULONG"
		},
		"Trigger": {
			"NoOfBytes": "4",
			"Offset": "93",
			"DataType": "LogTriggerEnum"
		},
		"Rate": {
			"NoOfBytes": "4",
			"Offset": "97",
			"DataType": "FLOAT"
		},
		"PortChannel": {
			"NoOfBytes": "4",
			"Offset": "101",
			"DataType": "PortAddressEnum"
		},
		"Reserved1": {
			"NoOfBytes": "4",
			"Offset": "105",
			"DataType": "FLOAT"
		},
		"Reserved2": {
			"NoOfBytes": "2",
			"Offset": "109",
			"DataType": "USHORT"
		},
		"CABO": ["89"],
		"CAAO": ["24"]
	},
	"GROUPUSE": {
		"Action": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "GroupUseActionEnum"
		},
		"GroupName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"PortChannel": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "PortAddressEnum"
		},
		"FileName": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "FixedCharArray"
		}
	},
	"METDEF": {
		"MetP": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"MetStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "HEXULONG"
		},
		"Temp": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"Press": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"Humid": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		}
	},
	"SCHDEF": {
		"Index": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"Group": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"StartTime": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "FixedCharArray"
		},
		"StopTime": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "FixedCharArray"
		},
		"FileName": {
			"NoOfBytes": "1",
			"Offset": "7",
			"DataType": "FixedCharArray"
		}
	},
	"SCHEDULEADD": {
		"GroupName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		},
		"StartTime": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "FixedCharArray"
		},
		"EndTime": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "FixedCharArray"
		},
		"FileName": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "FixedCharArray"
		}
	},
	"SITEDEF": {
		"SiteP": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"SiteNum": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"SiteName": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "FixedCharArray"
		},
		"Attrib": {
			"NoOfBytes": "4",
			"Offset": "6",
			"DataType": "INT"
		},
		"AntHeight": {
			"NoOfBytes": "4",
			"Offset": "10",
			"DataType": "FLOAT"
		},
		"Name32774": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "FixedCharArray"
		},
		"FirstGPSWeek": {
			"NoOfBytes": "4",
			"Offset": "15",
			"DataType": "ULONG"
		},
		"LastGPSWeek": {
			"NoOfBytes": "4",
			"Offset": "19",
			"DataType": "ULONG"
		},
		"FirstGPSSec": {
			"NoOfBytes": "4",
			"Offset": "23",
			"DataType": "ULONG"
		},
		"LastGPSSec": {
			"NoOfBytes": "4",
			"Offset": "27",
			"DataType": "ULONG"
		},
		"SiteStatus": {
			"NoOfBytes": "4",
			"Offset": "31",
			"DataType": "HEXULONG"
		},
		"Reserved": {
			"NoOfBytes": "4",
			"Offset": "35",
			"DataType": "ULONG"
		}
	},
	"SCHEDULEDEL": {
		"Entry": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"SCHEDULE": {
		"Mode": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ScheduleModeEnum"
		}
	},
	"PROJECTDEF": {
		"Project": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		},
		"Agency": {
			"NoOfBytes": "1",
			"Offset": "32",
			"DataType": "FixedCharArray"
		},
		"Observer": {
			"NoOfBytes": "1",
			"Offset": "33",
			"DataType": "FixedCharArray"
		}
	},
	"LOGFILE": {
		"eMyAction": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PDC_FileActionEnum"
		},
		"acMyFilename": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		}
	},
	"FILECHANNEL": {
		"DiskSpace": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"FlashCardModel": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"FlashVersion": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "FixedCharArray"
		},
		"Reserved1": {
			"NoOfBytes": "4",
			"Offset": "23",
			"DataType": "ULONG"
		},
		"Reserved2": {
			"NoOfBytes": "4",
			"Offset": "27",
			"DataType": "ULONG"
		},
		"ChannelEntries": {
			"NoOfBytes": "4",
			"Offset": "11",
			"DataType": "ClassArray"
		},
		"PortChannel": {
			"NoOfBytes": "4",
			"Offset": "15",
			"DataType": "PortAddressEnum"
		},
		"SatLimit": {
			"NoOfBytes": "4",
			"Offset": "19",
			"DataType": "INT"
		},
		"FileName": {
			"NoOfBytes": "1",
			"Offset": "31",
			"DataType": "FixedCharArray"
		},
		"CABO": ["15"],
		"CAAO": ["17"]
	},
	"DIRENT": {
		"FileName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		},
		"SizeBytes": {
			"NoOfBytes": "4",
			"Offset": "128",
			"DataType": "ULONG"
		},
		"SizePackets": {
			"NoOfBytes": "4",
			"Offset": "132",
			"DataType": "ULONG"
		},
		"LastChangeDate": {
			"NoOfBytes": "4",
			"Offset": "136",
			"DataType": "ULONG"
		},
		"LastChangeTime": {
			"NoOfBytes": "4",
			"Offset": "140",
			"DataType": "ULONG"
		}
	},
	"DATUM": {
		"eMyDatumType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "DatumEnum"
		}
	},
	"NAVIGATE": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"eMyVelocityStatus": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SolStatusEnum"
		},
		"eMyNavStatus": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "NavStatusEnum"
		},
		"dMyDistance": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyBearing": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyAlongTrack": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyXTrack": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"ulMyETAWeeks": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"dMyETASeconds": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		}
	},
	"SETNAV": {
		"dMyFromLatitude": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyFromLongitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyToLatitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyToLongitude": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyTrackOffset": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"szMyFromPoint": {
			"NoOfBytes": "1",
			"Offset": "40",
			"DataType": "STRING"
		},
		"szMyToPoint": {
			"NoOfBytes": "1",
			"Offset": "41",
			"DataType": "STRING"
		}
	},
	"METHUMID": {
		"ParamUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"Humidity": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		}
	},
	"METPRESS": {
		"ParamUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"Pressure": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		}
	},
	"METTEMP": {
		"ParamUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"Temperature": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		}
	},
	"SITE": {
		"SiteMode": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PDC_SiteModeEnum"
		},
		"SiteName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"Reserved1": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "FixedCharArray"
		},
		"Reserved2": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "FixedCharArray"
		},
		"Reserved3": {
			"NoOfBytes": "1",
			"Offset": "7",
			"DataType": "FixedCharArray"
		},
		"Reserved4": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "FixedCharArray"
		},
		"Reserved5": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "FixedCharArray"
		}
	},
	"SITEUPDATEANTHEIGHT": {
		"ParamUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"AntHeight": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "FixedCharArray"
		}
	},
	"SITEUPDATEANTTYPE": {
		"ParamUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"AntType": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "FixedCharArray"
		}
	},
	"SITEUPDATEATTRIBUTE": {
		"ParamUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"Attribute": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "INT"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "FixedCharArray"
		}
	},
	"SITEUPDATENAME": {
		"ParamUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"SiteName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "FixedCharArray"
		}
	},
	"SITEUPDATENUMBER": {
		"UpdateEnum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"Number": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "FixedCharArray"
		}
	},
	"AVEPOS": {
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyMSLHeight": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"eMyAveStatus": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "PosAveStatusEnum"
		},
		"ulMyAveTime": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulMyNumSample": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		}
	},
	"POSAVE": {
		"eMyCommand": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PosAveCommandEnum"
		},
		"fMyMaxTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"fMyMaxHoriz": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyMaxHeight": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		}
	},
	"PSRDOP": {
		"fMyGDOP": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		},
		"fMyPDOP": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"fMyHDOP": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyHTDOP": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyTDOP": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyGPSElevMask": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"aulMySats": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "VariableULONGArray"
		}
	},
	"REFSTATION": {
		"ulMyRefStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMyECEF_X": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyECEF_Y": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyECEF_Z": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"eMyRefType": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "RefStationEnum"
		},
		"sMyRefID": {
			"NoOfBytes": "1",
			"Offset": "36",
			"DataType": "STRING"
		}
	},
	"EXTVERSION": {
		"eComponentType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ComponentEnum"
		},
		"szModelName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"szPSN": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "FixedCharArray"
		},
		"szHardwareVersion": {
			"NoOfBytes": "1",
			"Offset": "21",
			"DataType": "FixedCharArray"
		},
		"szSoftwareVersion": {
			"NoOfBytes": "1",
			"Offset": "22",
			"DataType": "FixedCharArray"
		},
		"szBootVersion": {
			"NoOfBytes": "1",
			"Offset": "23",
			"DataType": "FixedCharArray"
		},
		"szCompileDate": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "FixedCharArray"
		},
		"szCompileTime": {
			"NoOfBytes": "1",
			"Offset": "25",
			"DataType": "FixedCharArray"
		}
	},
	"SEND": {
		"PortAddress": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		},
		"Text": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		}
	},
	"SENDHEX": {
		"PortAddress": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		},
		"Text": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "VarHEXBYTEType"
		}
	},
	"RTCMHEALTH": {
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"MAGVAR": {
		"eMyMagVarType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "MagVarTypeEnum"
		},
		"fMyCorrection": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"fMyCorrectionStdDev": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		}
	},
	"MARKPOS": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"eMyDatumType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "DatumEnum"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "FixedCharArray"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "66",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "67",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "70",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "69",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "71",
			"DataType": "UCHAR"
		}
	},
	"RTKBASELINE": {
		"eMyBaselineType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RTKBaselineTypeEnum"
		},
		"adMyVector": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "FixedDOUBLEArray"
		},
		"fMy2Sigma": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		}
	},
	"RTKDYNAMICS": {
		"eMyDynamics": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RTKDynamicsEnum"
		}
	},
	"RTKSOLUTION": {
		"eMySolutionType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RTKSolutionEnum"
		}
	},
	"CURRENTFILE": {
		"Filename": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		},
		"DumpMode": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "PDC_DumpModeEnum"
		},
		"PacketId": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		}
	},
	"CURRENTGROUP": {
		"GroupName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		}
	},
	"CURRENTSET": {
		"FileName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		},
		"FilePacket": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"DumpMode": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "PDC_DumpModeEnum"
		},
		"Group": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "FixedCharArray"
		}
	},
	"PDCSTATUS": {
		"PDCError": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"PDCStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"BattA": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"BattB": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"BattExt": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"Temp": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"DiskSpace": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"Reserved1": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"Reserved2": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		}
	},
	"PDC_ENABLE": {
		"EnablePDC": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PDC_EnableEnum"
		},
		"CABO": ["4"],
		"CAAO": ["4"]
	},
	"HIGHRATEL1DATA": {
		"aclObservations": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"usMyPRN": {
			"NoOfBytes": "2",
			"Offset": "4",
			"DataType": "USHORT"
		},
		"dMyWideBandADR": {
			"NoOfBytes": "8",
			"Offset": "6",
			"DataType": "DOUBLE"
		}
	},
	"DEBUGPROCESSCOLMODE": {
		"eMyColumnsMode": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "DebugProcessColGroupEnum"
		},
		"eMyCountMode": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "DebugProcessColCountEnum"
		}
	},
	"DEBUGPROCESSIDLES": {
		"adMyIdleTimes": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "VariableDOUBLEArray"
		},
		"CABO": ["4"],
		"CAAO": ["480"]
	},
	"DEBUGPROCESSNAMES": {
		"aclMyProcessNameArray": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"ulMyProcessPriority": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"szMyProcessorBinding": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "STRING"
		},
		"szMyProcessName": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "STRING"
		}
	},
	"RXHWLEVELS": {
		"fMyTemperature": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		},
		"fMyAntennaCurrent": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"fMyLowVoltage": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMySupplyVoltage": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyRFVoltage": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyInternalLNAVoltage": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"fMyReserved1": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"fMyReserved2": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"fMyReserved3": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyLNAOutputVoltage": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		}
	},
	"RTCAIN": {
		"ulMessageIdentifier": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefStation": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMessageType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulReserved": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMessageLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ModifiedZCount": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"AEB": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "AccelerationErrorBound"
		},
		"Corrections": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "36",
			"DataType": "UCHAR"
		},
		"PseudorangeCorrection": {
			"NoOfBytes": "8",
			"Offset": "37",
			"DataType": "DOUBLE"
		},
		"IssueofData": {
			"NoOfBytes": "1",
			"Offset": "45",
			"DataType": "UCHAR"
		},
		"RangeRateCorrection": {
			"NoOfBytes": "8",
			"Offset": "46",
			"DataType": "DOUBLE"
		},
		"UDRE": {
			"NoOfBytes": "4",
			"Offset": "54",
			"DataType": "FLOAT"
		},
		"CABO": ["36"],
		"CAAO": ["22"]
	},
	"NVMRESTORE": {
		"UDRE": {
			"NoOfBytes": "0",
			"Offset": "0",
			"DataType": ""
		}
	},
	"NVMSTATS": {
		"ulBlockInUse": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulVersion": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulEraseCycles1": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulBytesLeft1": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "HEXULONG"
		},
		"ulNextAvailAddr1": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "HEXULONG"
		},
		"ulEraseCycles2": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulBytesLeft2": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "HEXULONG"
		},
		"ulNextAvailAddr2": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "HEXULONG"
		},
		"DataTable": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ClassArray"
		},
		"eType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "NVM_DataTypeEnum"
		},
		"ulSubType": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"CABO": ["36"],
		"CAAO": ["8"]
	},
	"CTRLSUM": {
		"dOffset": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dOffsetStd": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dUTCOffset": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"ulUTCYear": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ucUTCMonth": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "UCHAR"
		},
		"ucUTCDay": {
			"NoOfBytes": "1",
			"Offset": "29",
			"DataType": "UCHAR"
		},
		"ucUTCHour": {
			"NoOfBytes": "1",
			"Offset": "30",
			"DataType": "UCHAR"
		},
		"ucUTCMinute": {
			"NoOfBytes": "1",
			"Offset": "31",
			"DataType": "UCHAR"
		},
		"ulUTCMillisecond": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"UTCTimeStatus": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "UTCTimeStatus"
		},
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "64",
			"DataType": "DOUBLE"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "72",
			"DataType": "FixedCharArray"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "76",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "77",
			"DataType": "UCHAR"
		},
		"ucMyNumHighSats": {
			"NoOfBytes": "1",
			"Offset": "78",
			"DataType": "UCHAR"
		},
		"ucMyNumHighL2Sats": {
			"NoOfBytes": "1",
			"Offset": "79",
			"DataType": "UCHAR"
		},
		"fMyElevationCutoffAngle": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "FLOAT"
		},
		"fMyAngle": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "FLOAT"
		},
		"PDCStatus": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "ULONG"
		},
		"PDCError": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "ULONG"
		},
		"fFloat": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "FLOAT"
		}
	},
	"READNVM": {
		"BlockNumber": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INT"
		},
		"DataString": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"RENAME": {
		"SourceName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		},
		"DestName": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "FixedCharArray"
		}
	},
	"WRITENVM": {
		"BlockNum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INT"
		},
		"DataString": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"VOUT": {
		"PowerEnum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PDC_PowerEnum"
		},
		"Enable": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "OnOffEnum"
		},
		"Persist": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "OnOffEnum"
		}
	},
	"WRITEFILE": {
		"FileName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		},
		"WriteData": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "VariableCHARArray"
		}
	},
	"WRITEHEX": {
		"Previous": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"WriteType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"WriteData": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "VarHEXBYTEType"
		},
		"CABO": ["4"],
		"CAAO": ["9"]
	},
	"VALIDMODELS": {
		"Models": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"szModel": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		},
		"ulMyExpiryYear": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ucMyExpiryMonth": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ucMyExpiryDay": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		}
	},
	"SAVEDERROR": {
		"ScafString": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		}
	},
	"AUDIO": {
		"ParamUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"AudioEvent": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "PDC_AudioEnum"
		},
		"Volume": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"Pitch": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"AUDIODEF": {
		"EventArray": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"AudioEvent": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "PDC_AudioEnum"
		},
		"Volume": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"Pitch": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		}
	},
	"HWLEVELS": {
		"fMyTemperature": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		},
		"fMyAntennaCurrent": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"fMyLowVoltage": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMySupplyVoltage": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyRFVoltage": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyInternalLNAVoltage": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"fMyReserved1": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"fMyReserved2": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"fMyReserved3": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyLNAOutputVoltage": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"BatA": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"BatB": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"BatExt": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"CTemp": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "FLOAT"
		},
		"DiskSpace": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"Reserved4": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"Reserved5": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "FLOAT"
		}
	},
	"PROJECT": {
		"Action": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PDC_ProjActionEnum"
		},
		"ProjectName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"Agency": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "FixedCharArray"
		},
		"Observer": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "FixedCharArray"
		}
	},
	"SATLIMIT": {
		"UpdateParam": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"FilePort": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "PortAddressEnum"
		},
		"SatLimit": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "INT"
		}
	},
	"SOFTPOWER": {
		"Priority": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PDC_PriorityEnum"
		}
	},
	"UNDULATION": {
		"eMyUndulationType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "UndulationTypeEnum"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		}
	},
	"RTKDATA": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"ulMyRTKInfo": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "15",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "19",
			"DataType": "UCHAR"
		},
		"eMySearchStatus": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "RTKSearchEnum"
		},
		"ulMyNumLanes": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"afMyCovariance": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FixedFLOATArray"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"fMyXStdDev": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMyYStdDev": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"fMyZStdDev": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "FLOAT"
		},
		"ulMyRefPrn": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "ULONG"
		},
		"aclMyRTKSatInfo": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "ClassArray"
		},
		"ulMyPrn": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "SATELLITEID"
		},
		"eMyAmbiguityType": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "AmbiguityEnum"
		},
		"fMyResidual": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "FLOAT"
		},
		"CABO": ["76"],
		"CAAO": ["12"]
	},
	"RTKVEL": {
		"eMyVelocityStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyVelocityType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"fMyLatency": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"dMyHorizontalSpeed": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyGroundTrack": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"lMyRsvdFieldForVelocityLogs": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "LONG"
		},
		"CABO": ["4"],
		"CAAO": ["44"]
	},
	"GPALM": {
		"aclMySVAlmData": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"ulPRN": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyWn": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyHealth8": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"dMyEcc": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyTOA": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyDi": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyOmegaDot": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMyA": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"dMyOmega": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		},
		"dMyOmega0": {
			"NoOfBytes": "8",
			"Offset": "64",
			"DataType": "DOUBLE"
		},
		"dMyMo": {
			"NoOfBytes": "8",
			"Offset": "72",
			"DataType": "DOUBLE"
		},
		"dMyAf0": {
			"NoOfBytes": "8",
			"Offset": "80",
			"DataType": "DOUBLE"
		},
		"dMyAf1": {
			"NoOfBytes": "8",
			"Offset": "88",
			"DataType": "DOUBLE"
		}
	},
	"GPGGA": {
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "SolTypeEnum"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "36",
			"DataType": "UCHAR"
		},
		"fMyHDOP": {
			"NoOfBytes": "4",
			"Offset": "37",
			"DataType": "FLOAT"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "41",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "45",
			"DataType": "FixedCharArray"
		},
		"ulMyGGAQuality": {
			"NoOfBytes": "4",
			"Offset": "49",
			"DataType": "ULONG"
		}
	},
	"GPGLL": {
		"eTalkerID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "NMEATalkerIDEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "SolTypeEnum"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "29",
			"DataType": "UCHAR"
		}
	},
	"GPGRS": {
		"eTalkerID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "NMEATalkerIDEnum"
		},
		"aclMyEntries": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "SATELLITEID"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ObservationStatusEnum"
		},
		"dMyResidual": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"aclMySatelliteEntries": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ClassArray"
		},
		"eMyNMEAVersion": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "NMEAVersionEnum"
		},
		"eMyIncludeSBAS": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "EnableEnum"
		},
		"eMySource": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "NMEASatelliteSourceEnum"
		},
		"CABO": ["32"],
		"CAAO": ["24"]
	},
	"GPGSA": {
		"eTalkerID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "NMEATalkerIDEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "SolTypeEnum"
		},
		"aclMySatelliteEntries": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "SATELLITEID"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ObservationStatusEnum"
		},
		"fMyPDOP": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyHDOP": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"fMyVDOP": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "FLOAT"
		},
		"eMyFixCmd": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FixCmdEnum"
		},
		"eMyNMEAVersion": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "NMEAVersionEnum"
		},
		"eMyIncludeSBAS": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "EnableEnum"
		},
		"eMySource": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "NMEASatelliteSourceEnum"
		},
		"CABO": ["32"],
		"CAAO": ["40"]
	},
	"GPGST": {
		"eTalkerID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "NMEATalkerIDEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SolStatusEnum"
		},
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "FixedDOUBLEArray"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "21",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "22",
			"DataType": "UCHAR"
		},
		"aclMyEntries": {
			"NoOfBytes": "4",
			"Offset": "23",
			"DataType": "ClassArray"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "27",
			"DataType": "ObservationStatusEnum"
		},
		"dMyObsStdDev": {
			"NoOfBytes": "8",
			"Offset": "31",
			"DataType": "DOUBLE"
		},
		"CABO": ["27"],
		"CAAO": ["12"]
	},
	"GPGSV": {
		"eTalkerID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "NMEATalkerIDEnum"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "SystemTypeEnum"
		},
		"aclMySatVisList": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ClassArray"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "SATELLITEID"
		},
		"dMyElevation": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"aclMyObs": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ClassArray"
		},
		"usMySvPrn": {
			"NoOfBytes": "2",
			"Offset": "40",
			"DataType": "USHORT"
		},
		"fMyUserCNo": {
			"NoOfBytes": "4",
			"Offset": "42",
			"DataType": "FLOAT"
		},
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "46",
			"DataType": "EnableEnum"
		},
		"bMyHasGPS": {
			"NoOfBytes": "4",
			"Offset": "50",
			"DataType": "BOOL"
		},
		"eMyIncludeSBAS": {
			"NoOfBytes": "4",
			"Offset": "54",
			"DataType": "EnableEnum"
		},
		"CABO": ["40"],
		"CAAO": ["18"]
	},
	"GPRMB": {
		"eTalkerID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "NMEATalkerIDEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "UCHAR"
		},
		"eMyNavStatus": {
			"NoOfBytes": "4",
			"Offset": "10",
			"DataType": "NavStatusEnum"
		},
		"dMyXTrack": {
			"NoOfBytes": "8",
			"Offset": "14",
			"DataType": "DOUBLE"
		},
		"szMyFromPoint": {
			"NoOfBytes": "1",
			"Offset": "22",
			"DataType": "STRING"
		},
		"szMyToPoint": {
			"NoOfBytes": "1",
			"Offset": "23",
			"DataType": "STRING"
		},
		"dMyToLatitude": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyToLongitude": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyDistance": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMyBearing": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"dMyAlongTrackVelocity": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		},
		"fMyDeclination": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "FLOAT"
		}
	},
	"GPRMC": {
		"eTalkerID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "NMEATalkerIDEnum"
		},
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"eMyVelocityStatus": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "SolStatusEnum"
		},
		"dMyHorizontalSpeed": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMyGroundTrack": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "56",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "57",
			"DataType": "UCHAR"
		},
		"ucUTCDay": {
			"NoOfBytes": "1",
			"Offset": "58",
			"DataType": "UCHAR"
		},
		"ucUTCMonth": {
			"NoOfBytes": "1",
			"Offset": "59",
			"DataType": "UCHAR"
		},
		"ulUTCYear": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"UTCTimeStatus": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "UTCTimeStatus"
		},
		"fMyDeclination": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "FLOAT"
		},
		"eMyEnableGPRMCAltitude": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "EnableEnum"
		}
	},
	"GPVTG": {
		"eTalkerID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "NMEATalkerIDEnum"
		},
		"eMyType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SolStatusEnum"
		},
		"dMyGroundTrack": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyHorizontalSpeed": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "29",
			"DataType": "UCHAR"
		},
		"fMyDeclination": {
			"NoOfBytes": "4",
			"Offset": "30",
			"DataType": "FLOAT"
		},
		"eMyNMEAVersion": {
			"NoOfBytes": "4",
			"Offset": "34",
			"DataType": "NMEAVersionEnum"
		}
	},
	"GPZDA": {
		"ucUTCDay": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "UCHAR"
		},
		"ucUTCMonth": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "UCHAR"
		},
		"ulUTCYear": {
			"NoOfBytes": "4",
			"Offset": "2",
			"DataType": "ULONG"
		},
		"UTCTimeStatus": {
			"NoOfBytes": "4",
			"Offset": "6",
			"DataType": "UTCTimeStatus"
		}
	},
	"FRONTENDSETUP": {
		"ulMyFrontEnd": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyADCBottomBit": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"lMyReserved": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "LONG"
		}
	},
	"AGCMODE": {
		"ulMyFrontEnd": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"eMyMode": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FrontEndModeEnum"
		},
		"ulMyPulseWidth": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyLoadValue": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		}
	},
	"EXTERNALCLOCK": {
		"eMyClockType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClockTypeEnum"
		},
		"eMyFrequency": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ExtClockFreq"
		},
		"dMyH0": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyHm1": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHm2": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		}
	},
	"MARKTIME": {
		"lMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "LONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyOffset": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyOffsetStd": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyUTCOffset": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ClockModelStatusEnum"
		}
	},
	"FREQUENCYOUT": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FreqOutEnableEnum"
		},
		"ulMyPulseWidth": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyPeriod": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		}
	},
	"PASSCOM1": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PASSCOM2": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PASSCOM3": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PASSUSB": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"SLEEP": {
		"eSubsystem": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SleepSubSystemEnum"
		},
		"eAction": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SleepAction"
		},
		"ulTimeOut": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		}
	},
	"SLEEPMASK": {
		"eUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"eSubsystem": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SleepSubSystemEnum"
		},
		"eSource": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "PDC_ActivitySrcEnum"
		}
	},
	"SLEEPMODE": {
		"eSubsystem": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SleepSubSystemEnum"
		},
		"eSleepStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SleepAction"
		},
		"ulTimeOut": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulActivity": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "HEXULONG"
		}
	},
	"WRITEFILEHEX": {
		"FileName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		},
		"WriteData": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "VarHEXBYTEType"
		}
	},
	"BESTXYZ": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"fMyXStdDev": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "FLOAT"
		},
		"fMyYStdDev": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "FLOAT"
		},
		"fMyZStdDev": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "FLOAT"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "SolStatusEnum"
		},
		"eMyType": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "SolTypeEnum"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "88",
			"DataType": "FixedCharArray"
		},
		"fMyLatency": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "FLOAT"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "104",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "105",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "106",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "107",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "108",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "109",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "110",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "111",
			"DataType": "UCHAR"
		}
	},
	"MATCHEDXYZ": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyXStdDev": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyYStdDev": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyZStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "44",
			"DataType": "FixedCharArray"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "48",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "49",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "50",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "51",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "53",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "54",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "55",
			"DataType": "UCHAR"
		}
	},
	"PSRXYZ": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"fMyXStdDev": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "FLOAT"
		},
		"fMyYStdDev": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "FLOAT"
		},
		"fMyZStdDev": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "FLOAT"
		},
		"eMyVelocityStatus": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "SolStatusEnum"
		},
		"eMyVelocityType": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "SolTypeEnum"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "88",
			"DataType": "FixedCharArray"
		},
		"fMyLatency": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "FLOAT"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "104",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "105",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "108",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "109",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "110",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "111",
			"DataType": "UCHAR"
		}
	},
	"RTKXYZ": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"fMyXStdDev": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "FLOAT"
		},
		"fMyYStdDev": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "FLOAT"
		},
		"fMyZStdDev": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "FLOAT"
		},
		"eMyVelocityStatus": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "SolStatusEnum"
		},
		"eMyVelocityType": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "SolTypeEnum"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "88",
			"DataType": "FixedCharArray"
		},
		"fMyLatency": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "FLOAT"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "104",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "105",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "106",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "107",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "108",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "109",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "110",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "111",
			"DataType": "UCHAR"
		}
	},
	"AUXBUF": {
		"Update": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"ulSize": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"TBA-COMMAND247": {
		"Update": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"ulBPS": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"eParity": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "OEM4_ParityEnum"
		},
		"ulData": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulStop": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"eHandshake": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "HandShakeEnum"
		},
		"eEcho": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "OnOffEnum"
		}
	},
	"AUXDEF": {
		"ulBPS": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"eParity": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "OEM4_ParityEnum"
		},
		"ulData": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulStop": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"eHandshake": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "HandShakeEnum"
		},
		"eEcho": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "OnOffEnum"
		},
		"cStartLength": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "UCHAR"
		},
		"szStart": {
			"NoOfBytes": "1",
			"Offset": "25",
			"DataType": "FixedHEXBYTEArray"
		},
		"cStopLength": {
			"NoOfBytes": "1",
			"Offset": "26",
			"DataType": "UCHAR"
		},
		"szStop": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "FixedHEXBYTEArray"
		},
		"ulTimeOut": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulPacketSize": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"eMark": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "OnOffEnum"
		}
	},
	"AUXMARK": {
		"eUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		}
	},
	"AUXSTART": {
		"eUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"ulSize": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"szSequence": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"AUXSTOP": {
		"eUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"ulSize": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"szSequence": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"AUXTIME": {
		"eUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"ulTimeout": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"BATSTATUS": {
		"ulBatStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"fBatAVolt": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"fBatBVolt": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fExtVolt": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fBatALife": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fBatBLife": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"ulAux2": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulAux3": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulBatACutoff": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulBatBCutoff": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"ulExtCutoff": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulRes4": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulRes5": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulRes6": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		}
	},
	"CLEARNVM": {
		"iBlockNum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INT"
		}
	},
	"PDCSTATS": {
		"ulError": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "HEXULONG"
		},
		"ulStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "HEXULONG"
		},
		"fBatALife": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fBatBLife": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fExtVolt": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fTemp": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"ulDiskSpace": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulExtError": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "HEXULONG"
		},
		"ulExtStatus": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "HEXULONG"
		},
		"ulMinStack": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"ulMinTask": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "HEXULONG"
		},
		"ulHeap": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulGPSStatus": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "HEXULONG"
		},
		"fBatAVolt": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "FLOAT"
		},
		"fBatBVolt": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"Res1": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "LONG"
		},
		"Res2": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ULONG"
		},
		"Res3": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "HEXULONG"
		},
		"Res4": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "FLOAT"
		},
		"Res5": {
			"NoOfBytes": "1",
			"Offset": "76",
			"DataType": "FixedCharArray"
		}
	},
	"WRITE": {
		"Previous": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"WriteType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"WriteData": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "VariableCHARArray"
		}
	},
	"DYNAMICS": {
		"eValue": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "DynamicsEnum"
		}
	},
	"GPGGARTK": {
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "SolTypeEnum"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "36",
			"DataType": "UCHAR"
		},
		"fMyHDOP": {
			"NoOfBytes": "4",
			"Offset": "37",
			"DataType": "FLOAT"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "41",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "45",
			"DataType": "FixedCharArray"
		},
		"ulMyGGAQuality": {
			"NoOfBytes": "4",
			"Offset": "49",
			"DataType": "ULONG"
		}
	},
	"RTCM1819": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "ULONG"
		},
		"ulMyFreq": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "ULONG"
		},
		"ulMySpare": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"lMyTime": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "LONG"
		},
		"aclMyRTCMBody": {
			"NoOfBytes": "4",
			"Offset": "104",
			"DataType": "ClassArray"
		},
		"ulMultipleMsg": {
			"NoOfBytes": "4",
			"Offset": "108",
			"DataType": "ULONG"
		},
		"ulMyCode": {
			"NoOfBytes": "4",
			"Offset": "112",
			"DataType": "ULONG"
		},
		"ulMyConstellation": {
			"NoOfBytes": "4",
			"Offset": "116",
			"DataType": "ULONG"
		},
		"ulMySv": {
			"NoOfBytes": "4",
			"Offset": "120",
			"DataType": "ULONG"
		},
		"ulMyDataQual": {
			"NoOfBytes": "4",
			"Offset": "124",
			"DataType": "ULONG"
		},
		"ulMyInits": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"lMyAdr": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "LONG"
		},
		"ulMySmoothingInterval": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "ULONG"
		},
		"ulMyMultipath": {
			"NoOfBytes": "4",
			"Offset": "128",
			"DataType": "ULONG"
		},
		"ulMyPsr": {
			"NoOfBytes": "4",
			"Offset": "132",
			"DataType": "ULONG"
		},
		"CABO": ["108"],
		"CAAO": ["28"]
	},
	"OPTIONS": {
		"ulMyLowBits": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "HEXULONG"
		},
		"ulMyHighBits": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "HEXULONG"
		}
	},
	"INSATT": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "INSStatusEnum"
		}
	},
	"INSCOV": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "30",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"INSPOS": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "INSStatusEnum"
		}
	},
	"INSSPD": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyGroundTrack": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyHorizontalSpeed": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "INSStatusEnum"
		}
	},
	"INSVEL": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "INSStatusEnum"
		}
	},
	"RAWIMU": {
		"ulMyGPSWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMyGPSSeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"ulMyIMUStatus": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "HEXULONG"
		},
		"lMyDelVelBodyZ": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "LONG"
		},
		"lMyDelVelBodyY": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "LONG"
		},
		"lMyDelVelBodyX": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "LONG"
		},
		"lMyDelAngBodyZ": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "LONG"
		},
		"lMyDelAngBodyY": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "LONG"
		},
		"lMyDelAngBodyX": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "LONG"
		}
	},
	"CSMOOTH": {
		"ulL1TimeConstant": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulL2TimeConstant": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"SATXYZ": {
		"dDouble": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"aclMySats": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ClassArray"
		},
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "PRN"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyRB": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMyIonoCorr": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"dMyTropoCorr": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		},
		"dMyDummy": {
			"NoOfBytes": "8",
			"Offset": "72",
			"DataType": "DOUBLE"
		},
		"CABO": ["12"],
		"CAAO": ["68"]
	},
	"GROUPDGPSTXID": {
		"ParamUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"GroupName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"Type": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "DGPSTypeEnum"
		},
		"Id": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "FixedCharArray"
		}
	},
	"CHANDEBUGFFTPHASE": {
		"afMyPhase": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "VariableFLOATArray"
		}
	},
	"CHANDEBUGFFTPOWER": {
		"afMyPower": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "VariableFLOATArray"
		},
		"CABO": ["4"],
		"CAAO": ["4"]
	},
	"ISMR": {
		"aclMyReducedDataEntries": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"ulMyPrn": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"fMyAzimuth": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyAltitude": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"dMyCNo": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyS4": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyS4Correction": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMy1SecStdDev": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMy3SecStdDev": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"dMy10SecStdDev": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		},
		"dMy30SecStdDev": {
			"NoOfBytes": "8",
			"Offset": "64",
			"DataType": "DOUBLE"
		},
		"dMy60SecStdDev": {
			"NoOfBytes": "8",
			"Offset": "72",
			"DataType": "DOUBLE"
		},
		"dMyAverageIonDivergence": {
			"NoOfBytes": "8",
			"Offset": "80",
			"DataType": "DOUBLE"
		},
		"dMyAverageIonDivergenceStdDev": {
			"NoOfBytes": "8",
			"Offset": "88",
			"DataType": "DOUBLE"
		},
		"fMyTOW15TEC": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "FLOAT"
		},
		"fMyTOW15DeltaTEC": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "FLOAT"
		},
		"fMyTOW30TEC": {
			"NoOfBytes": "4",
			"Offset": "104",
			"DataType": "FLOAT"
		},
		"fMyTOW30DeltaTEC": {
			"NoOfBytes": "4",
			"Offset": "108",
			"DataType": "FLOAT"
		},
		"fMyTOW45TEC": {
			"NoOfBytes": "4",
			"Offset": "112",
			"DataType": "FLOAT"
		},
		"fMyTOW45DeltaTEC": {
			"NoOfBytes": "4",
			"Offset": "116",
			"DataType": "FLOAT"
		},
		"fMyTOWTEC": {
			"NoOfBytes": "4",
			"Offset": "120",
			"DataType": "FLOAT"
		},
		"fMyTOWDeltaTEC": {
			"NoOfBytes": "4",
			"Offset": "124",
			"DataType": "FLOAT"
		},
		"dMyLockTime": {
			"NoOfBytes": "8",
			"Offset": "128",
			"DataType": "DOUBLE"
		},
		"ulMyStatus": {
			"NoOfBytes": "4",
			"Offset": "136",
			"DataType": "ULONG"
		},
		"dMyL2LockTime": {
			"NoOfBytes": "8",
			"Offset": "140",
			"DataType": "DOUBLE"
		},
		"dMyL2CNo": {
			"NoOfBytes": "8",
			"Offset": "148",
			"DataType": "DOUBLE"
		}
	},
	"RTCM9": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"aclMyDiffData": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ClassArray"
		},
		"ulMyScale": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyUDRE": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMySvPrn": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"iMyCor": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "INT"
		},
		"iMyCorRate": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "INT"
		},
		"ulMyIODE": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["24"]
	},
	"RTCM9IN": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"aclMyDiffData": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ClassArray"
		},
		"ulMyScale": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyUDRE": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMySvPrn": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"iMyCor": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "INT"
		},
		"iMyCorRate": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "INT"
		},
		"ulMyIODE": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["24"]
	},
	"POINT": {
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		},
		"ucMyNumObsUsedInSol": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "UCHAR"
		},
		"ucMyNumHighL1Sats": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "UCHAR"
		},
		"ucMyNumHighL2Sats": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "UCHAR"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "7",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "15",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "23",
			"DataType": "DOUBLE"
		},
		"dMyDeltaNorth": {
			"NoOfBytes": "8",
			"Offset": "31",
			"DataType": "DOUBLE"
		},
		"dMyDeltaEast": {
			"NoOfBytes": "8",
			"Offset": "39",
			"DataType": "DOUBLE"
		},
		"dMyDeltaUp": {
			"NoOfBytes": "8",
			"Offset": "47",
			"DataType": "DOUBLE"
		},
		"fMySDev2D": {
			"NoOfBytes": "4",
			"Offset": "55",
			"DataType": "FLOAT"
		},
		"fMySDev3D": {
			"NoOfBytes": "4",
			"Offset": "59",
			"DataType": "FLOAT"
		},
		"fMySDev1D": {
			"NoOfBytes": "4",
			"Offset": "63",
			"DataType": "FLOAT"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "67",
			"DataType": "DOUBLE"
		},
		"dMyElevation": {
			"NoOfBytes": "8",
			"Offset": "75",
			"DataType": "DOUBLE"
		},
		"fMySlopeDistance": {
			"NoOfBytes": "4",
			"Offset": "83",
			"DataType": "FLOAT"
		},
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "87",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "91",
			"DataType": "SolTypeEnum"
		},
		"acMyStationID": {
			"NoOfBytes": "1",
			"Offset": "95",
			"DataType": "FixedCharArray"
		}
	},
	"BASESTATIONOBS": {
		"eMyMessageEnum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BaseStationMessageEnum"
		},
		"acMyDiffStationID": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "5",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "13",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "21",
			"DataType": "DOUBLE"
		},
		"ulMyWN": {
			"NoOfBytes": "4",
			"Offset": "29",
			"DataType": "ULONG"
		},
		"dMyRecTime": {
			"NoOfBytes": "8",
			"Offset": "33",
			"DataType": "DOUBLE"
		},
		"aclMyObs": {
			"NoOfBytes": "4",
			"Offset": "41",
			"DataType": "ClassArray"
		},
		"usMySvPrn": {
			"NoOfBytes": "2",
			"Offset": "45",
			"DataType": "USHORT"
		},
		"usMySvFreq": {
			"NoOfBytes": "2",
			"Offset": "47",
			"DataType": "USHORT"
		},
		"dMyPsr": {
			"NoOfBytes": "8",
			"Offset": "49",
			"DataType": "DOUBLE"
		},
		"fMyVPsr": {
			"NoOfBytes": "4",
			"Offset": "57",
			"DataType": "FLOAT"
		},
		"dMyAdr": {
			"NoOfBytes": "8",
			"Offset": "61",
			"DataType": "DOUBLE"
		},
		"fMyVAdr": {
			"NoOfBytes": "4",
			"Offset": "69",
			"DataType": "FLOAT"
		},
		"fMyDop": {
			"NoOfBytes": "4",
			"Offset": "73",
			"DataType": "FLOAT"
		},
		"fMyLockTime": {
			"NoOfBytes": "4",
			"Offset": "77",
			"DataType": "FLOAT"
		},
		"ulMyCStatus": {
			"NoOfBytes": "4",
			"Offset": "81",
			"DataType": "HEXULONG"
		},
		"fMyDAcc": {
			"NoOfBytes": "4",
			"Offset": "85",
			"DataType": "FLOAT"
		},
		"eMyFreq": {
			"NoOfBytes": "4",
			"Offset": "89",
			"DataType": "FrequencyEnum"
		},
		"sigMyChan": {
			"NoOfBytes": "4",
			"Offset": "93",
			"DataType": "INT"
		},
		"fMyUserCNo": {
			"NoOfBytes": "4",
			"Offset": "97",
			"DataType": "FLOAT"
		},
		"CABO": ["4"],
		"CAAO": ["56"]
	},
	"SATXYZOCC": {
		"aclMySats": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "PRN"
		},
		"fMyElevation": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyIonoCorr": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"fMyLockTimeL1": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyLockTimeL2": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		}
	},
	"RTKBASELINETHRESHOLD": {
		"dMyWidelaneThreshold": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyIonoFreeThreshold": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyNarrowlaneThreshold": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		}
	},
	"TIMEWARP": {
		"dMyTimeWarpFactor": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		}
	},
	"RTCM16T": {
		"aucMyText": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedUCHARArray"
		}
	},
	"BASERANGE": {
		"aclMyObs": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"usMySvPrn": {
			"NoOfBytes": "2",
			"Offset": "4",
			"DataType": "USHORT"
		},
		"usMySvFreq": {
			"NoOfBytes": "2",
			"Offset": "6",
			"DataType": "USHORT"
		},
		"dMyPsr": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"fMySDPsr": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"dMyAdr": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"fMySDAdr": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"fMyDop": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyUserCNo": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyLockTime": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"ulMyCStatus": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["44"]
	},
	"DISK": {
		"DiskEnum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PDC_DiskEnum"
		}
	},
	"BESTPVC": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "64",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "72",
			"DataType": "DOUBLE"
		},
		"fMyXStdDev": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyYStdDev": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyZStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"eMyVelocityStatus": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "SolStatusEnum"
		},
		"eMyVelocityType": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "SolTypeEnum"
		},
		"fMyLatency": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "80",
			"DataType": "FixedCharArray"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "92",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "93",
			"DataType": "UCHAR"
		}
	},
	"POSVELNAVDOP": {
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolTypeEnum"
		},
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolStatusEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"dMyGroundTrack": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"fMyXStdDev": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"dMyHorizontalSpeed": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"fMyYStdDev": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "FLOAT"
		},
		"fMyZStdDev": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "FLOAT"
		},
		"eMyNavStatus": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "NavStatusEnum"
		},
		"dMyLatOrigin": {
			"NoOfBytes": "8",
			"Offset": "88",
			"DataType": "DOUBLE"
		},
		"dMyLonOrigin": {
			"NoOfBytes": "8",
			"Offset": "96",
			"DataType": "DOUBLE"
		},
		"dMyLatDestination": {
			"NoOfBytes": "8",
			"Offset": "104",
			"DataType": "DOUBLE"
		},
		"dMyLonDestination": {
			"NoOfBytes": "8",
			"Offset": "112",
			"DataType": "DOUBLE"
		},
		"dMyXTrack": {
			"NoOfBytes": "8",
			"Offset": "120",
			"DataType": "DOUBLE"
		},
		"dMyAlongTrack": {
			"NoOfBytes": "8",
			"Offset": "128",
			"DataType": "DOUBLE"
		},
		"fMyXTrackStdDev": {
			"NoOfBytes": "4",
			"Offset": "136",
			"DataType": "FLOAT"
		},
		"fMyAlongTrackStdDev": {
			"NoOfBytes": "4",
			"Offset": "140",
			"DataType": "FLOAT"
		},
		"fMyPDOP": {
			"NoOfBytes": "4",
			"Offset": "144",
			"DataType": "FLOAT"
		},
		"fMyHDOP": {
			"NoOfBytes": "4",
			"Offset": "148",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "152",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "153",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "154",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "155",
			"DataType": "UCHAR"
		}
	},
	"RAWWAASFRAME": {
		"iMyFrameDecoderNum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INT"
		},
		"ulMyPrn": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyWAASMsgId": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"aucMyRawFrameData": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "FixedHEXBYTEArray"
		},
		"ulMySignalChannelNum": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "ULONG"
		}
	},
	"WAAS0": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"WAAS1": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"aucMyPRNMask": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedHEXBYTEArray"
		},
		"ulMyIODP": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "ULONG"
		}
	},
	"WAAS10": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyBrrc": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyCltc_lsb": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyCltc_v1": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyIltc_v1": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyCltc_v0": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyIltc_v0": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMyCgeo_lsb": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyCgeo_v": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMyIgeo": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"ulMyCer": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulMyCiono_step": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulMyIiono": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMyCiono_ramp": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"ulMyRSSUDRE": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"ulMyRSSIono": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"aulMySpareBits": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"WAAS12": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMyA1": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyA0": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"ulMyt0t": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"usMyWN": {
			"NoOfBytes": "2",
			"Offset": "24",
			"DataType": "USHORT"
		},
		"sMyDtLS": {
			"NoOfBytes": "2",
			"Offset": "26",
			"DataType": "SHORT"
		},
		"usMyWNLSF": {
			"NoOfBytes": "2",
			"Offset": "28",
			"DataType": "USHORT"
		},
		"usMyDN": {
			"NoOfBytes": "2",
			"Offset": "30",
			"DataType": "USHORT"
		},
		"usMyDtLSF": {
			"NoOfBytes": "2",
			"Offset": "32",
			"DataType": "SHORT"
		},
		"usMyUTCID": {
			"NoOfBytes": "2",
			"Offset": "34",
			"DataType": "USHORT"
		},
		"ulMyGPSTOW": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"ulMyGPSWN": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"bMyGlonassIndicator": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "BOOL"
		},
		"aucMyReservedBits": {
			"NoOfBytes": "1",
			"Offset": "48",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"WAAS17": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"aclMyEntries": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ClassArray"
		},
		"usMyDataID": {
			"NoOfBytes": "2",
			"Offset": "8",
			"DataType": "USHORT"
		},
		"usMyPRN": {
			"NoOfBytes": "2",
			"Offset": "10",
			"DataType": "USHORT"
		},
		"usMyHealth": {
			"NoOfBytes": "2",
			"Offset": "12",
			"DataType": "USHORT"
		},
		"lMyX": {
			"NoOfBytes": "4",
			"Offset": "14",
			"DataType": "LONG"
		},
		"lMyY": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "LONG"
		},
		"lMyZ": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "LONG"
		},
		"lMyXVel": {
			"NoOfBytes": "4",
			"Offset": "26",
			"DataType": "LONG"
		},
		"lMyYVel": {
			"NoOfBytes": "4",
			"Offset": "30",
			"DataType": "LONG"
		},
		"lMyZVel": {
			"NoOfBytes": "4",
			"Offset": "34",
			"DataType": "LONG"
		},
		"ulMyt0": {
			"NoOfBytes": "4",
			"Offset": "38",
			"DataType": "ULONG"
		},
		"CABO": ["8"],
		"CAAO": ["34"]
	},
	"WAAS18": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyNumBands": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyBandNum": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyIODI": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"aucMyIGPMask": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "FixedHEXBYTEArray"
		},
		"ulMySpareBit": {
			"NoOfBytes": "4",
			"Offset": "17",
			"DataType": "ULONG"
		}
	},
	"WAAS2": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"IODF": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"IODP": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"alMyPRC": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FixedLONGArray"
		},
		"aulMyUDREI": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FixedULONGArray"
		}
	},
	"WAAS24": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"alMyPRC": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FixedLONGArray"
		},
		"aulMyUDREI": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FixedULONGArray"
		},
		"ulMyIODP": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "ULONG"
		},
		"ulMyBlockID": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyIODF": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMySpare": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "ULONG"
		},
		"ulMyVelocityCode": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyPRNMaskNumber1": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMyIODE1": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"lMyDX1": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "LONG"
		},
		"lMyDY1": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "LONG"
		},
		"lMyDZ1": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "LONG"
		},
		"lMyaF01": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "LONG"
		},
		"ulMyPRNMaskNumber2": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"ulMyIODE2": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"lMyDX2orDDX": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "LONG"
		},
		"lMyDY2orDDY": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "LONG"
		},
		"lMyDZ2orDDZ": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "LONG"
		},
		"lMyaF02oraF1": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "LONG"
		},
		"ulMyTOD": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "ULONG"
		}
	},
	"WAAS25": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyVelocityCode": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "ULONG"
		},
		"ulMyPRNMaskNumber1": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "ULONG"
		},
		"ulMyIODE1": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "ULONG"
		},
		"lMyDX1": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "LONG"
		},
		"lMyDY1": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "LONG"
		},
		"lMyDZ1": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "LONG"
		},
		"lMyaF01": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "LONG"
		},
		"ulMyPRNMaskNumber2": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "ULONG"
		},
		"ulMyIODE2": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "ULONG"
		},
		"lMyDX2orDDX": {
			"NoOfBytes": "4",
			"Offset": "104",
			"DataType": "LONG"
		},
		"lMyDY2orDDY": {
			"NoOfBytes": "4",
			"Offset": "108",
			"DataType": "LONG"
		},
		"lMyDZ2orDDZ": {
			"NoOfBytes": "4",
			"Offset": "112",
			"DataType": "LONG"
		},
		"lMyaF02oraF1": {
			"NoOfBytes": "4",
			"Offset": "116",
			"DataType": "LONG"
		},
		"ulMyTOD": {
			"NoOfBytes": "4",
			"Offset": "120",
			"DataType": "ULONG"
		},
		"ulMyIODP": {
			"NoOfBytes": "4",
			"Offset": "124",
			"DataType": "ULONG"
		},
		"ulMySpare": {
			"NoOfBytes": "4",
			"Offset": "128",
			"DataType": "ULONG"
		}
	},
	"WAAS26": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyBandNum": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyBlockID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"aclMyGridPointData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"ulMyIGPVDE": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyGIVEI": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyIODI": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMySpareBits": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"CABO": ["16"],
		"CAAO": ["16"]
	},
	"WAAS27": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyIODS": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyNumServiceMsgs": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyServiceMsgNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyPriorityCode": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyUDREInside": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyUDREOutside": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"aclMyRegions": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ClassArray"
		},
		"lMyLat1": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "LONG"
		},
		"lMyLong1": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "LONG"
		},
		"lMyLat2": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "LONG"
		},
		"lMyLong2": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "LONG"
		},
		"ulMyShape": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMyt0": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"CABO": ["32"],
		"CAAO": ["24"]
	},
	"WAAS3": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"IODF": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"IODP": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"alMyPRC": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FixedLONGArray"
		},
		"aulMyUDREI": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FixedULONGArray"
		}
	},
	"WAAS4": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"IODF": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"IODP": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"alMyPRC": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FixedLONGArray"
		},
		"aulMyUDREI": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FixedULONGArray"
		}
	},
	"WAAS5": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"IODF": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"IODP": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"alMyPRC": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FixedLONGArray"
		},
		"aulMyUDREI": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FixedULONGArray"
		}
	},
	"WAAS6": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyIODF2": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyIODF3": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyIODF4": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyIODF5": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"aulMyUDREI": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FixedULONGArray"
		}
	},
	"WAAS7": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMySystemLatency": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyIODP": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySpareBits": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"aulMyDegradationFactor": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FixedULONGArray"
		}
	},
	"WAAS9": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyIODN": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyt0": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyURA": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyXVel": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMyYVel": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"dMyZVel": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		},
		"dMyXAccel": {
			"NoOfBytes": "8",
			"Offset": "64",
			"DataType": "DOUBLE"
		},
		"dMyYAccel": {
			"NoOfBytes": "8",
			"Offset": "72",
			"DataType": "DOUBLE"
		},
		"dMyZAccel": {
			"NoOfBytes": "8",
			"Offset": "80",
			"DataType": "DOUBLE"
		},
		"dMyaf0": {
			"NoOfBytes": "8",
			"Offset": "88",
			"DataType": "DOUBLE"
		},
		"dMyaf1": {
			"NoOfBytes": "8",
			"Offset": "96",
			"DataType": "DOUBLE"
		}
	},
	"RTCM15": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"acMyIonData": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ClassArray"
		},
		"ulMyReserved": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyGpsGlonass": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMySvPrn": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"ulMyCor": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"iMyCorrate": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "INT"
		},
		"CABO": ["28"],
		"CAAO": ["20"]
	},
	"RTCM15IN": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"acMyIonData": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ClassArray"
		},
		"ulMyReserved": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyGpsGlonass": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMySvPrn": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"ulMyCor": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"iMyCorrate": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "INT"
		},
		"CABO": ["28"],
		"CAAO": ["20"]
	},
	"ENVIRONMENT": {
		"fMyAntennaCurrent": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		},
		"fMyLowVoltage": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"fMySupplyVoltage": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyRFVoltage": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyInternalLNAVoltage": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyLNAOutputVoltage": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"fMyReserved1": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"fMyReserved2": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"fMyReserved3": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyTemperature": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyExternalTemperature": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyAirPressure": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyHumidity": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"fMyWindSpeed": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "FLOAT"
		},
		"fMyWindDirection": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		}
	},
	"CMRDESC": {
		"ulMyCMRSync": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyLength": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyVersion": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyStationID": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyMessageType": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"bMyIsBatteryLow": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "BOOL"
		},
		"bMyIsMemLow": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "BOOL"
		},
		"ulMyReserved1": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"bMyIsL2Enabled": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "BOOL"
		},
		"ulMyReserved2": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulMyEpochTime": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMyMotionState": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"ulMyAntennaNumber": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"ulMyRecLength": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"aucMyShortID": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "FixedUCHARArray"
		},
		"aucMyCOGOCode": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "FixedUCHARArray"
		},
		"aucMyLongID": {
			"NoOfBytes": "1",
			"Offset": "66",
			"DataType": "VariableUcharArray"
		}
	},
	"POSVELNAV": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"eMyDatumType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "DatumEnum"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "FixedCharArray"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "66",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "67",
			"DataType": "UCHAR"
		},
		"eMyVelocityStatus": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "SolStatusEnum"
		},
		"eMyVelocityType": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "SolTypeEnum"
		},
		"fMyLatency": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "FLOAT"
		},
		"dMyGroundTrack": {
			"NoOfBytes": "8",
			"Offset": "80",
			"DataType": "DOUBLE"
		},
		"dMyHorizontalSpeed": {
			"NoOfBytes": "8",
			"Offset": "88",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "96",
			"DataType": "DOUBLE"
		},
		"eMyNavStatus": {
			"NoOfBytes": "4",
			"Offset": "104",
			"DataType": "NavStatusEnum"
		},
		"dMyDistance": {
			"NoOfBytes": "8",
			"Offset": "108",
			"DataType": "DOUBLE"
		},
		"dMyBearing": {
			"NoOfBytes": "8",
			"Offset": "116",
			"DataType": "DOUBLE"
		},
		"dMyAlongTrack": {
			"NoOfBytes": "8",
			"Offset": "124",
			"DataType": "DOUBLE"
		},
		"dMyXTrack": {
			"NoOfBytes": "8",
			"Offset": "132",
			"DataType": "DOUBLE"
		},
		"ulMyETAWeeks": {
			"NoOfBytes": "4",
			"Offset": "140",
			"DataType": "ULONG"
		},
		"dMyETASeconds": {
			"NoOfBytes": "8",
			"Offset": "144",
			"DataType": "DOUBLE"
		}
	},
	"WAASCORRECTION": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"eMyMode": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "LBandTestModeEnum"
		},
		"CABO": ["4"],
		"CAAO": ["12"]
	},
	"WAASCORR": {
		"aclMyEntries": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyIODE": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"fMyCorrection": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyStdDev": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		}
	},
	"PAUSE": {
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		},
		"eMyState": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "OnOffEnum"
		}
	},
	"PING": {
		"ulMyTimeoutSeconds": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"PINGSETUP": {
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		},
		"szMyScript": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		},
		"CABO": ["4"],
		"CAAO": ["5"]
	},
	"COMCONFIG": {
		"aclMyComConfig": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "CommPortEnum"
		},
		"ulMyBaud": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"eMyParity": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "OEM4_ParityEnum"
		},
		"ulMyDataBits": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyStopBits": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"eMyHandshake": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "HandShakeEnum"
		},
		"eMyEcho": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "OnOffEnum"
		},
		"eMyBreaks": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "OnOffEnum"
		},
		"eMyRXType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "InterfaceModeEnum"
		},
		"eMyTXType": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "InterfaceModeEnum"
		},
		"eMyResponses": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "OnOffEnum"
		}
	},
	"GROUPINTERFACEMODE": {
		"eMyUpdateParam": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"szMyGroupName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "CommPortEnum"
		},
		"eMyRXType": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "InterfaceModeEnum"
		},
		"eMyTXType": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "InterfaceModeEnum"
		},
		"eMyResponses": {
			"NoOfBytes": "4",
			"Offset": "17",
			"DataType": "OnOffEnum"
		}
	},
	"INSATTS": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "INSStatusEnum"
		}
	},
	"INSCOVS": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "30",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"INSPOSS": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "INSStatusEnum"
		}
	},
	"INSPOSSYNC": {
		"dSeconds": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"adEcefCovariance": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"INSSPDS": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyGroundTrack": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyHorizontalSpeed": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "INSStatusEnum"
		}
	},
	"INSVELS": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "INSStatusEnum"
		}
	},
	"RAWIMUS": {
		"ulMyGPSWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMyGPSSeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"ulMyIMUStatus": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "HEXULONG"
		},
		"lMyDelVelBodyZ": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "LONG"
		},
		"lMyDelVelBodyY": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "LONG"
		},
		"lMyDelVelBodyX": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "LONG"
		},
		"lMyDelAngBodyZ": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "LONG"
		},
		"lMyDelAngBodyY": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "LONG"
		},
		"lMyDelAngBodyX": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "LONG"
		},
		"CABO": ["4"],
		"CAAO": ["40"]
	},
	"DETRSIN": {
		"aclMyScintillationData": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"usMyPrn": {
			"NoOfBytes": "2",
			"Offset": "4",
			"DataType": "USHORT"
		},
		"usMyFrequency": {
			"NoOfBytes": "2",
			"Offset": "6",
			"DataType": "USHORT"
		},
		"fMyTEC": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMy1SecondDeltaTEC": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"dMyFirstADR": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"alMyScintillationData": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FixedLONGArray"
		},
		"CABO": ["4"],
		"CAAO": ["24"]
	},
	"RAWSIN": {
		"aclMyScintillationData": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"usMyPrn": {
			"NoOfBytes": "2",
			"Offset": "4",
			"DataType": "USHORT"
		},
		"usMyFrequency": {
			"NoOfBytes": "2",
			"Offset": "6",
			"DataType": "USHORT"
		},
		"fMyTEC": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMy1SecondDeltaTEC": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"dMyFirstADR": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"alMyScintillationData": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FixedLONGArray"
		}
	},
	"SINBANDWIDTH": {
		"dMyPhaseBandWidth": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyAmplitudeBandWidth": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		}
	},
	"SINTECCALIBRATION": {
		"dMyTECCalibration": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		}
	},
	"CLASSELEMLOG": {
		"ClassId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ElementId": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"TypeId": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"Length": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"Offset": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ChildClassId": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"Description": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "FixedCharArray"
		},
		"ElementType": {
			"NoOfBytes": "4",
			"Offset": "25",
			"DataType": "ULONG"
		},
		"ArraySize": {
			"NoOfBytes": "4",
			"Offset": "29",
			"DataType": "ULONG"
		},
		"ArrayOffset": {
			"NoOfBytes": "4",
			"Offset": "33",
			"DataType": "ULONG"
		},
		"ConvertStr": {
			"NoOfBytes": "1",
			"Offset": "37",
			"DataType": "FixedCharArray"
		},
		"DefaultValue": {
			"NoOfBytes": "8",
			"Offset": "38",
			"DataType": "DOUBLE"
		},
		"MinValue": {
			"NoOfBytes": "8",
			"Offset": "46",
			"DataType": "DOUBLE"
		},
		"MaxValue": {
			"NoOfBytes": "8",
			"Offset": "54",
			"DataType": "DOUBLE"
		}
	},
	"CLASSELEMREQ": {
		"Index": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"CLASSLIST": {
		"ClassIdArray": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "VariableULONGArray"
		}
	},
	"CLASSREQ": {
		"ClassId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"CLASSREQLOG": {
		"ClassId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"NumElements": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"ENUMLIST": {
		"EnumArray": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "VariableULONGArray"
		}
	},
	"ENUMREQ": {
		"EnumReq": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"ENUMREQLOG": {
		"Name": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		},
		"CABO": ["4"],
		"CAAO": ["40"]
	},
	"MSGIDLIST": {
		"MsgIdArray": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"MessageId": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"MsgCrc": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		}
	},
	"MSGREQ": {
		"RequestedId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"MSGREQLOG": {
		"MessageId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "MessageIdType"
		},
		"MessageName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"Help": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "FixedCharArray"
		},
		"MsgCRC": {
			"NoOfBytes": "4",
			"Offset": "6",
			"DataType": "ULONG"
		},
		"Hidden": {
			"NoOfBytes": "4",
			"Offset": "10",
			"DataType": "BOOL"
		},
		"ParamArray": {
			"NoOfBytes": "4",
			"Offset": "14",
			"DataType": "MsgParamArray"
		}
	},
	"TYPELIST": {
		"TypeArray": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "VariableULONGArray"
		}
	},
	"TYPEREQ": {
		"TypeId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"TYPEREQLOG": {
		"TypeId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"Name": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"Length": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "ULONG"
		},
		"BaseType": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "ULONG"
		},
		"Description": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "FixedCharArray"
		},
		"Default": {
			"NoOfBytes": "8",
			"Offset": "14",
			"DataType": "DOUBLE"
		},
		"ElementType": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "ULONG"
		}
	},
	"USERMSG": {
		"aucMyBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"HEIGHTMODEL": {
		"eMyMode": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"dMyAntennaHeight": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyWeighting": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		}
	},
	"RTCAEPHEM": {
		"NovAtelDesignator": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "UCHAR"
		},
		"ucSubtype": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "UCHAR"
		},
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "2",
			"DataType": "ULONG"
		},
		"ulMySeconds": {
			"NoOfBytes": "4",
			"Offset": "6",
			"DataType": "ULONG"
		},
		"ulMyPrn": {
			"NoOfBytes": "4",
			"Offset": "10",
			"DataType": "ULONG"
		},
		"ucMyReserved": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "UCHAR"
		},
		"aucMyRawData": {
			"NoOfBytes": "1",
			"Offset": "15",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"RTCAEPHEMIN": {
		"ulMessageIdentifier": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefStation": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMessageType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulReserved": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMessageLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"NovAtelDesignator": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "UCHAR"
		},
		"ucSubtype": {
			"NoOfBytes": "1",
			"Offset": "21",
			"DataType": "UCHAR"
		},
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "ULONG"
		},
		"ulMySeconds": {
			"NoOfBytes": "4",
			"Offset": "26",
			"DataType": "ULONG"
		},
		"ulMyPrn": {
			"NoOfBytes": "4",
			"Offset": "30",
			"DataType": "ULONG"
		},
		"ucMyReserved": {
			"NoOfBytes": "1",
			"Offset": "34",
			"DataType": "UCHAR"
		},
		"aucMyRawData": {
			"NoOfBytes": "1",
			"Offset": "35",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"MSGRANGE": {
		"MinMsgId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"MaxMsgId": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"NUMMSGS": {
		"MaxMsgId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"HEIGHTMODELSTATUS": {
		"eMode": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"szDescription": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		},
		"szDate": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "STRING"
		},
		"iNumPoints": {
			"NoOfBytes": "4",
			"Offset": "6",
			"DataType": "INT"
		},
		"iNumTriangles": {
			"NoOfBytes": "4",
			"Offset": "10",
			"DataType": "INT"
		},
		"iNumTrianglePointers": {
			"NoOfBytes": "4",
			"Offset": "14",
			"DataType": "INT"
		},
		"iByteSize": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "INT"
		}
	},
	"RTCM2021": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "ULONG"
		},
		"ulMyFreq": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "ULONG"
		},
		"ulSpare": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"lMyTime": {
			"NoOfBytes": "4",
			"Offset": "104",
			"DataType": "LONG"
		},
		"aclMyRTCMBody": {
			"NoOfBytes": "4",
			"Offset": "108",
			"DataType": "ClassArray"
		},
		"ulMultipleMsg": {
			"NoOfBytes": "4",
			"Offset": "112",
			"DataType": "ULONG"
		},
		"ulMyCode": {
			"NoOfBytes": "4",
			"Offset": "116",
			"DataType": "ULONG"
		},
		"ulMyConstellation": {
			"NoOfBytes": "4",
			"Offset": "120",
			"DataType": "ULONG"
		},
		"ulMySv": {
			"NoOfBytes": "4",
			"Offset": "124",
			"DataType": "ULONG"
		},
		"ulMyDataQual": {
			"NoOfBytes": "4",
			"Offset": "132",
			"DataType": "ULONG"
		},
		"ulMyInits": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"ulIODE": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ULONG"
		},
		"lPhaseCorr": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "LONG"
		},
		"ulMySmoothingInterval": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "ULONG"
		},
		"ulMyRateCorrSF": {
			"NoOfBytes": "4",
			"Offset": "128",
			"DataType": "ULONG"
		},
		"ulMyPsrCorrSF": {
			"NoOfBytes": "4",
			"Offset": "136",
			"DataType": "ULONG"
		},
		"ulMyMultipath": {
			"NoOfBytes": "4",
			"Offset": "140",
			"DataType": "ULONG"
		},
		"ulMyIODE": {
			"NoOfBytes": "4",
			"Offset": "144",
			"DataType": "ULONG"
		},
		"lMyPsrCorr": {
			"NoOfBytes": "4",
			"Offset": "148",
			"DataType": "LONG"
		},
		"lMyPsrCorrRate": {
			"NoOfBytes": "4",
			"Offset": "152",
			"DataType": "LONG"
		},
		"CABO": ["112"],
		"CAAO": ["44"]
	},
	"NOISEFLOOR": {
		"f1MSNoiseFloorE1": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		},
		"f1MSNoiseFloorE2": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"f1MSNoiseFloorE3": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"f1MSNoiseChannelNoiseFloorE1": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"f1MSNoiseChannelNoiseFloorE2": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"f1MSNoiseChannelNoiseFloorE3": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		}
	},
	"SETAPPROXPOS": {
		"dMyLat": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyLon": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyHgt": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		}
	},
	"INSBIASES": {
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"fMyXStdDev": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"fMyYStdDev": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "FLOAT"
		},
		"fMyZStdDev": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "FLOAT"
		}
	},
	"INSCOMMAND": {
		"eMyCommand": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INSCommandEnum"
		}
	},
	"INSINITRTK": {
		"eMyData": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"INSLIGHTS": {
		"ulLeds": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "HEXULONG"
		}
	},
	"INSZUPT": {
		"bMyPerformZUPT": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BOOL"
		}
	},
	"SETIMUTOANTOFFSET": {
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "3",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"INSKCOV": {
		"mdMyEcefPosCov": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "FixedDOUBLEArray"
		},
		"mdMyVelCov": {
			"NoOfBytes": "8",
			"Offset": "9",
			"DataType": "FixedDOUBLEArray"
		},
		"mdMyAttCov": {
			"NoOfBytes": "8",
			"Offset": "17",
			"DataType": "FixedDOUBLEArray"
		},
		"mdMyLocPosCov": {
			"NoOfBytes": "8",
			"Offset": "25",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"INSKINIT": {
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "18",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"INSKSTATE": {
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "180",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "188",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "196",
			"DataType": "DOUBLE"
		},
		"fMyXStdDev": {
			"NoOfBytes": "4",
			"Offset": "204",
			"DataType": "FLOAT"
		},
		"fMyYStdDev": {
			"NoOfBytes": "4",
			"Offset": "208",
			"DataType": "FLOAT"
		},
		"fMyZStdDev": {
			"NoOfBytes": "4",
			"Offset": "212",
			"DataType": "FLOAT"
		}
	},
	"INSSYSTEM": {
		"dMyGPSSeconds": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"adMyX": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "FixedDOUBLEArray"
		},
		"mdMyAtMidInsEpochRbe": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "FixedDOUBLEArray"
		},
		"mdMyEpochRbe": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "FixedDOUBLEArray"
		},
		"adMyGe": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "FixedDOUBLEArray"
		},
		"adMyWEpoch": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "FixedDOUBLEArray"
		},
		"bMyDoZUPT": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "BOOL"
		},
		"mdMyRle": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "FixedDOUBLEArray"
		},
		"iMyLastUpdateID": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "INT"
		},
		"dMyAccSize": {
			"NoOfBytes": "8",
			"Offset": "64",
			"DataType": "DOUBLE"
		},
		"dMyGyroSize": {
			"NoOfBytes": "8",
			"Offset": "72",
			"DataType": "DOUBLE"
		}
	},
	"WLANENABLE": {
		"eMyOnOffEnum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "OnOffEnum"
		}
	},
	"CMRDATADESC": {
		"ulMyCMRSync": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyLength": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyVersion": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyStationID": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyMessageType": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"bMyIsBatteryLow": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "BOOL"
		},
		"bMyIsMemLow": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "BOOL"
		},
		"ulMyReserved1": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"bMyIsL2Enabled": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "BOOL"
		},
		"ulMyReserved2": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulMyEpochTime": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMyMotionState": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"ulMyAntennaNumber": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"ulMyRecLength": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"aucMyShortID": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "FixedUCHARArray"
		},
		"aucMyCOGOCode": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "FixedUCHARArray"
		},
		"aucMyLongID": {
			"NoOfBytes": "1",
			"Offset": "66",
			"DataType": "VariableUcharArray"
		}
	},
	"CMRDATAOBS": {
		"ulMyCMRSync": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyLength": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyVersion": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyStationID": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMessageType": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMyNumberofSv": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyEpochTime": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMyClockBiasValid": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"lMyClockOffset": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "LONG"
		},
		"aclMyCMRBody": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ClassArray"
		},
		"ulMySlotNumber": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"bMyCodeFlag": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "BOOL"
		},
		"bMyL1PhaseValid": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "BOOL"
		},
		"bMyIsL2Present": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "BOOL"
		},
		"ulMyL1Psr": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ULONG"
		},
		"lMyL1CarrierOffset": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "LONG"
		},
		"ulMyL1Snr": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "ULONG"
		},
		"ulMyL1SlipCount": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "ULONG"
		},
		"bMyIsL2Code": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "BOOL"
		},
		"bMyCodeType": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "BOOL"
		},
		"bMyIsL2CodeValid": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "BOOL"
		},
		"bMyIsL2PhaseValid": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "BOOL"
		},
		"bMyPhaseFull": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "BOOL"
		},
		"ulMyReserved": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "ULONG"
		},
		"lMyL2RangeOffset": {
			"NoOfBytes": "4",
			"Offset": "104",
			"DataType": "LONG"
		},
		"lMyL2CarrierOffset": {
			"NoOfBytes": "4",
			"Offset": "108",
			"DataType": "LONG"
		},
		"ulMyL2Snr": {
			"NoOfBytes": "4",
			"Offset": "112",
			"DataType": "ULONG"
		},
		"ulMyL2SlipCount": {
			"NoOfBytes": "4",
			"Offset": "116",
			"DataType": "ULONG"
		},
		"CABO": ["48"],
		"CAAO": ["72"]
	},
	"CMRDATAREF": {
		"ulMyCMRSync": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyLength": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyVersion": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyStationID": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyMessageType": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"bMyIsBatteryLow": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "BOOL"
		},
		"bMyIsMemLow": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "BOOL"
		},
		"ulMyReserved": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "ULONG"
		},
		"bMyIsL2Enabled": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "BOOL"
		},
		"ulMyReserved2": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulMyEpochTime": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMyMotionState": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"ulMyAntennaNumber": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"dMyECEF_X": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"ulMyAntennaH": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "ULONG"
		},
		"dMyECEF_Y": {
			"NoOfBytes": "8",
			"Offset": "72",
			"DataType": "DOUBLE"
		},
		"ulMyEastOffset": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "ULONG"
		},
		"dMyECEF_Z": {
			"NoOfBytes": "8",
			"Offset": "84",
			"DataType": "DOUBLE"
		},
		"ulMyNorthOffset": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "ULONG"
		},
		"ulMyPosAccuracy": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "ULONG"
		}
	},
	"RTCADATA1": {
		"ModifiedZCount": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"AEB": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "AccelerationErrorBound"
		},
		"Corrections": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "UCHAR"
		},
		"PseudorangeCorrection": {
			"NoOfBytes": "8",
			"Offset": "17",
			"DataType": "DOUBLE"
		},
		"IssueofData": {
			"NoOfBytes": "1",
			"Offset": "25",
			"DataType": "UCHAR"
		},
		"RangeRateCorrection": {
			"NoOfBytes": "8",
			"Offset": "26",
			"DataType": "DOUBLE"
		},
		"UDRE": {
			"NoOfBytes": "4",
			"Offset": "34",
			"DataType": "FLOAT"
		},
		"CABO": ["16"],
		"CAAO": ["22"]
	},
	"RTCADATAEPHEM": {
		"NovAtelDesignator": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "UCHAR"
		},
		"ucSubtype": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "UCHAR"
		},
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "2",
			"DataType": "ULONG"
		},
		"ulMySeconds": {
			"NoOfBytes": "4",
			"Offset": "6",
			"DataType": "ULONG"
		},
		"ulMyPrn": {
			"NoOfBytes": "4",
			"Offset": "10",
			"DataType": "ULONG"
		},
		"ucMyReserved": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "UCHAR"
		},
		"aucMyRawData": {
			"NoOfBytes": "1",
			"Offset": "15",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"RTCADATAOBS": {
		"NovAtelDesignator": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "UCHAR"
		},
		"SubtypeIndicator": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "UCHAR"
		},
		"MinimumPseudorange": {
			"NoOfBytes": "8",
			"Offset": "2",
			"DataType": "DOUBLE"
		},
		"Seconds": {
			"NoOfBytes": "4",
			"Offset": "10",
			"DataType": "FLOAT"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "53",
			"DataType": "UCHAR"
		},
		"TransmitterData": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "ClassArray"
		},
		"TransmitterID": {
			"NoOfBytes": "1",
			"Offset": "22",
			"DataType": "UCHAR"
		},
		"L1LockFlag": {
			"NoOfBytes": "1",
			"Offset": "23",
			"DataType": "UCHAR"
		},
		"L2LockFlag": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "UCHAR"
		},
		"L1PseudorangeOffset": {
			"NoOfBytes": "8",
			"Offset": "25",
			"DataType": "DOUBLE"
		},
		"L2PseudorangeOffset": {
			"NoOfBytes": "8",
			"Offset": "33",
			"DataType": "DOUBLE"
		},
		"L1ADROffset": {
			"NoOfBytes": "4",
			"Offset": "41",
			"DataType": "FLOAT"
		},
		"L2ADROffset": {
			"NoOfBytes": "4",
			"Offset": "45",
			"DataType": "FLOAT"
		},
		"L2NotEncrypted": {
			"NoOfBytes": "4",
			"Offset": "49",
			"DataType": "BOOL"
		},
		"CABO": ["22"],
		"CAAO": ["32"]
	},
	"RTCADATAREF": {
		"ucMyNovAtelDesignator": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "UCHAR"
		},
		"ucMySubTypeIndicator": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "UCHAR"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "2",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "10",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "18",
			"DataType": "DOUBLE"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "26",
			"DataType": "UCHAR"
		}
	},
	"RTCMDATA1": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"aclMyDiffData": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ClassArray"
		},
		"ulMyScale": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyUDRE": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMySvPrn": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"iMyCor": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "INT"
		},
		"iMyCorRate": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "INT"
		},
		"ulMyIODE": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["24"]
	},
	"RTCMDATA15": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"acMyIonData": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ClassArray"
		},
		"ulMyReserved": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyGpsGlonass": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMySvPrn": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"ulMyCor": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"iMyCorrate": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "INT"
		},
		"CABO": ["28"],
		"CAAO": ["20"]
	},
	"RTCMDATA16": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"aucMyRTCM16Text": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCMDATA1819": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "ULONG"
		},
		"ulMyFreq": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "ULONG"
		},
		"ulMySpare": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"lMyTime": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "LONG"
		},
		"aclMyRTCMBody": {
			"NoOfBytes": "4",
			"Offset": "104",
			"DataType": "ClassArray"
		},
		"ulMultipleMsg": {
			"NoOfBytes": "4",
			"Offset": "108",
			"DataType": "ULONG"
		},
		"ulMyCode": {
			"NoOfBytes": "4",
			"Offset": "112",
			"DataType": "ULONG"
		},
		"ulMyConstellation": {
			"NoOfBytes": "4",
			"Offset": "116",
			"DataType": "ULONG"
		},
		"ulMySv": {
			"NoOfBytes": "4",
			"Offset": "120",
			"DataType": "ULONG"
		},
		"ulMyDataQual": {
			"NoOfBytes": "4",
			"Offset": "124",
			"DataType": "ULONG"
		},
		"ulMyInits": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"lMyAdr": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "LONG"
		},
		"ulMySmoothingInterval": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "ULONG"
		},
		"ulMyMultipath": {
			"NoOfBytes": "4",
			"Offset": "128",
			"DataType": "ULONG"
		},
		"ulMyPsr": {
			"NoOfBytes": "4",
			"Offset": "132",
			"DataType": "ULONG"
		},
		"CABO": ["108"],
		"CAAO": ["28"]
	},
	"RTCMDATA2021": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "ULONG"
		},
		"ulMyFreq": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "ULONG"
		},
		"ulSpare": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"lMyTime": {
			"NoOfBytes": "4",
			"Offset": "104",
			"DataType": "LONG"
		},
		"aclMyRTCMBody": {
			"NoOfBytes": "4",
			"Offset": "108",
			"DataType": "ClassArray"
		},
		"ulMultipleMsg": {
			"NoOfBytes": "4",
			"Offset": "112",
			"DataType": "ULONG"
		},
		"ulMyCode": {
			"NoOfBytes": "4",
			"Offset": "116",
			"DataType": "ULONG"
		},
		"ulMyConstellation": {
			"NoOfBytes": "4",
			"Offset": "120",
			"DataType": "ULONG"
		},
		"ulMySv": {
			"NoOfBytes": "4",
			"Offset": "124",
			"DataType": "ULONG"
		},
		"ulMyDataQual": {
			"NoOfBytes": "4",
			"Offset": "132",
			"DataType": "ULONG"
		},
		"ulMyInits": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"ulIODE": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ULONG"
		},
		"lPhaseCorr": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "LONG"
		},
		"ulMySmoothingInterval": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "ULONG"
		},
		"ulMyRateCorrSF": {
			"NoOfBytes": "4",
			"Offset": "128",
			"DataType": "ULONG"
		},
		"ulMyPsrCorrSF": {
			"NoOfBytes": "4",
			"Offset": "136",
			"DataType": "ULONG"
		},
		"ulMyMultipath": {
			"NoOfBytes": "4",
			"Offset": "140",
			"DataType": "ULONG"
		},
		"ulMyIODE": {
			"NoOfBytes": "4",
			"Offset": "144",
			"DataType": "ULONG"
		},
		"lMyPsrCorr": {
			"NoOfBytes": "4",
			"Offset": "148",
			"DataType": "LONG"
		},
		"lMyPsrCorrRate": {
			"NoOfBytes": "4",
			"Offset": "152",
			"DataType": "LONG"
		},
		"CABO": ["112"],
		"CAAO": ["44"]
	},
	"RTCMDATA22": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"lMyL1AntDeltaX": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "LONG"
		},
		"lMyL1AntDeltaY": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "LONG"
		},
		"lMyL1AntDeltaZ": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "LONG"
		},
		"clMyRTCM22AntHgtL1": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ClassArray"
		},
		"ulSpareBits": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"bNoHeight": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "BOOL"
		},
		"ulAntennaPhaseHeight": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"clMyRTCM22AntInfL2": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ClassArray"
		},
		"lMyL2AntDeltaX": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "LONG"
		},
		"lMyL2AntDeltaY": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "LONG"
		},
		"lMyL2AntDeltaZ": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "LONG"
		},
		"CABO": ["56"],
		"CAAO": ["12"]
	},
	"RTCMDATA3": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"dMyECEF_X": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyECEF_Y": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyECEF_Z": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		}
	},
	"RTCMDATA59": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ucMySubType": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "UCHAR"
		},
		"lMyMinPsr": {
			"NoOfBytes": "4",
			"Offset": "25",
			"DataType": "LONG"
		},
		"lTimeOffset": {
			"NoOfBytes": "4",
			"Offset": "29",
			"DataType": "LONG"
		},
		"ulSpareBits": {
			"NoOfBytes": "4",
			"Offset": "33",
			"DataType": "ULONG"
		},
		"clMyRTCMBody": {
			"NoOfBytes": "4",
			"Offset": "37",
			"DataType": "ClassArray"
		},
		"ulMySv": {
			"NoOfBytes": "4",
			"Offset": "41",
			"DataType": "ULONG"
		},
		"ulMyLock": {
			"NoOfBytes": "4",
			"Offset": "45",
			"DataType": "ULONG"
		},
		"ulMyPsr": {
			"NoOfBytes": "4",
			"Offset": "49",
			"DataType": "ULONG"
		},
		"lMyAdrCor": {
			"NoOfBytes": "4",
			"Offset": "53",
			"DataType": "LONG"
		},
		"CABO": ["41"],
		"CAAO": ["16"]
	},
	"RTCMDATA9": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"aclMyDiffData": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ClassArray"
		},
		"ulMyScale": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyUDRE": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMySvPrn": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"iMyCor": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "INT"
		},
		"iMyCorRate": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "INT"
		},
		"ulMyIODE": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["24"]
	},
	"PASSXCOM1": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PASSXCOM2": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"RAWGPSWORD": {
		"ulMyPrn": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyRawWord": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"CABO": ["4"],
		"CAAO": ["8"]
	},
	"PDC_VERSIONDATA": {
		"aclVersions": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"szPSN": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"szSoftwareVersion": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "FixedCharArray"
		},
		"szModelName": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "FixedCharArray"
		},
		"CABO": ["4"],
		"CAAO": ["18"]
	},
	"PDC_SATDATA": {
		"ChanStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"usPrn": {
			"NoOfBytes": "2",
			"Offset": "4",
			"DataType": "USHORT"
		},
		"fCNo": {
			"NoOfBytes": "4",
			"Offset": "6",
			"DataType": "FLOAT"
		},
		"eMyPSRRangeReject": {
			"NoOfBytes": "4",
			"Offset": "10",
			"DataType": "ObservationStatusEnum"
		}
	},
	"PLLBANDWIDTH": {
		"eMySignal": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SignalTypeEnum"
		},
		"fMyBandWidth": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		}
	},
	"APPLICATION": {
		"eStartEnum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "AppStartEnum"
		},
		"ulParameter": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"iPriority": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "INT"
		},
		"iStackSize": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "INT"
		}
	},
	"POINTM": {
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		},
		"ucMyNumObsUsedInSol": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "UCHAR"
		},
		"ucMyNumHighL1Sats": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "UCHAR"
		},
		"ucMyNumHighL2Sats": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "UCHAR"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "7",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "15",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "23",
			"DataType": "DOUBLE"
		},
		"dMyDeltaNorth": {
			"NoOfBytes": "8",
			"Offset": "31",
			"DataType": "DOUBLE"
		},
		"dMyDeltaEast": {
			"NoOfBytes": "8",
			"Offset": "39",
			"DataType": "DOUBLE"
		},
		"dMyDeltaUp": {
			"NoOfBytes": "8",
			"Offset": "47",
			"DataType": "DOUBLE"
		},
		"fMySDev2D": {
			"NoOfBytes": "4",
			"Offset": "55",
			"DataType": "FLOAT"
		},
		"fMySDev3D": {
			"NoOfBytes": "4",
			"Offset": "59",
			"DataType": "FLOAT"
		},
		"fMySDev1D": {
			"NoOfBytes": "4",
			"Offset": "63",
			"DataType": "FLOAT"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "67",
			"DataType": "DOUBLE"
		},
		"dMyElevation": {
			"NoOfBytes": "8",
			"Offset": "75",
			"DataType": "DOUBLE"
		},
		"fMySlopeDistance": {
			"NoOfBytes": "4",
			"Offset": "83",
			"DataType": "FLOAT"
		},
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "87",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "91",
			"DataType": "SolTypeEnum"
		},
		"acMyStationID": {
			"NoOfBytes": "1",
			"Offset": "95",
			"DataType": "FixedCharArray"
		}
	},
	"BESTGPSPOS": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"eMyDatumType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "DatumEnum"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "FixedCharArray"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "66",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "67",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "68",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "69",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "70",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "71",
			"DataType": "UCHAR"
		}
	},
	"PDPFILTER": {
		"eMyCommand": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PDPFilterCommandEnum"
		}
	},
	"ADJUST1PPS": {
		"eMode": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "Adjust1PPSModeEnum"
		},
		"ePeriod": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "Adjust1PPSPeriodEnum"
		},
		"lTime": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "LONG"
		}
	},
	"CLOCKCALIBRATE": {
		"eSetting": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClockCalibrateEnum"
		},
		"ulModulus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulCenter": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"fSlope": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fBandwidth": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		}
	},
	"COMCONTROL": {
		"ePort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		},
		"eSignal": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ComSignalEnum"
		},
		"eControl": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ComSignalCtrlEnum"
		}
	},
	"RTKIFTHRESH": {
		"dIonoFreeThresh": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		}
	},
	"PSRDIFFIN": {
		"eMyDGPSType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "DGPSTypeEnum"
		},
		"acMyDiffStationID": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"aclMyDiffCorrections": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "SATELLITEID"
		},
		"dMyDiffCor": {
			"NoOfBytes": "8",
			"Offset": "17",
			"DataType": "DOUBLE"
		},
		"dMyDiffCorRate": {
			"NoOfBytes": "8",
			"Offset": "25",
			"DataType": "DOUBLE"
		},
		"CABO": ["4"],
		"CAAO": ["24"]
	},
	"PSRDIFFOUT": {
		"aclMyDiffCorDatBase": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"ulMySVPRN": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyIODE": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"dMyCor": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyCorRate": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		}
	},
	"RTKFIXRATE": {
		"dFixRate": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		}
	},
	"PDPPOS": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"eMyDatumType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "DatumEnum"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "FixedCharArray"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "67",
			"DataType": "UCHAR"
		},
		"ucMyMeasurementSource": {
			"NoOfBytes": "1",
			"Offset": "68",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "69",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "70",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "71",
			"DataType": "UCHAR"
		}
	},
	"PDPVEL": {
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"fMyLatency": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"dMyHorizontalSpeed": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyGroundTrack": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"ulULONG": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		}
	},
	"PDPXYZ": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"fMyXStdDev": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "FLOAT"
		},
		"fMyYStdDev": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "FLOAT"
		},
		"fMyZStdDev": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "FLOAT"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "SolStatusEnum"
		},
		"eMyType": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "SolTypeEnum"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "88",
			"DataType": "FixedCharArray"
		},
		"fMyLatency": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "FLOAT"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "104",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "105",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "108",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "109",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "110",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "111",
			"DataType": "UCHAR"
		}
	},
	"SOFTLOADCOMMIT": {
		"eMySrc": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SoftLoadSourceEnum"
		}
	},
	"SOFTLOADRESET": {
		"eMySrc": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SoftLoadSourceEnum"
		}
	},
	"SOFTLOADSREC": {
		"szMySREC": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"eMySrc": {
			"NoOfBytes": "4",
			"Offset": "515",
			"DataType": "SoftLoadSourceEnum"
		}
	},
	"TIMESYNC": {
		"ulGPSWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"eTimeStatus": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "GPSTimeStatusEnum"
		}
	},
	"PSRDIFFSOURCE": {
		"eMyCorrType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "DGPSTypeEnum"
		},
		"szMyStationId": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		}
	},
	"RTKSOURCE": {
		"eMyCorrType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "DGPSTypeEnum"
		},
		"szMyStationId": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		}
	},
	"MEMSINSGPS": {
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INSStatusEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyNorthVelocity": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyEastVelocity": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyUpVelocity": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyElevation": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyPitchRate": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"dMyRollRate": {
			"NoOfBytes": "8",
			"Offset": "84",
			"DataType": "DOUBLE"
		},
		"dMyYawRate": {
			"NoOfBytes": "8",
			"Offset": "92",
			"DataType": "DOUBLE"
		},
		"dMyLongitudinalAcc": {
			"NoOfBytes": "8",
			"Offset": "100",
			"DataType": "DOUBLE"
		},
		"dMyLateralAcc": {
			"NoOfBytes": "8",
			"Offset": "108",
			"DataType": "DOUBLE"
		},
		"dMyVerticalAcc": {
			"NoOfBytes": "8",
			"Offset": "116",
			"DataType": "DOUBLE"
		}
	},
	"WHEELVELOCITY": {
		"usMyLatency": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "USHORT"
		},
		"usMyTickCount": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "USHORT"
		},
		"usMyWheelVelocity": {
			"NoOfBytes": "2",
			"Offset": "4",
			"DataType": "USHORT"
		},
		"usReserved1": {
			"NoOfBytes": "2",
			"Offset": "6",
			"DataType": "USHORT"
		},
		"fMyWheelVelocity": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"ulReserved2": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulReserved3": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"lMyCumulativeTicksPerSecond": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "LONG"
		}
	},
	"WAASECUTOFF": {
		"fMyElevationCutoffAngle": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		}
	},
	"BESTGPSVEL": {
		"eMyVelocityStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyVelocityType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"fMyLatency": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"dMyHorizontalSpeed": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyGroundTrack": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"fFloat": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		}
	},
	"INSPVA": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "INSStatusEnum"
		}
	},
	"INSPVAS": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "INSStatusEnum"
		}
	},
	"RAWIMUSUMS": {
		"ulMyGpsWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMyGpsTime": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"ulMyImuStatus": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "HEXULONG"
		},
		"ulMyAngBodyX": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyAngBodyY": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyAngBodyZ": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMyVelBodyX": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyVelBodyY": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMyVelBodyZ": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		}
	},
	"SETDEBUGPROCESS": {
		"eType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "DebugProcessType"
		}
	},
	"APPLICATIONSTATUS": {
		"ulAPIVersion": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"bRunning": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "BOOL"
		},
		"ulBaseAddress": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulSize": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"szName": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "FixedCharArray"
		},
		"szVersion": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "FixedCharArray"
		},
		"szCompileDate": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "FixedCharArray"
		},
		"szCompileTime": {
			"NoOfBytes": "1",
			"Offset": "19",
			"DataType": "FixedCharArray"
		}
	},
	"GPGGALONG": {
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "SolTypeEnum"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "36",
			"DataType": "UCHAR"
		},
		"fMyHDOP": {
			"NoOfBytes": "4",
			"Offset": "37",
			"DataType": "FLOAT"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "41",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "45",
			"DataType": "FixedCharArray"
		},
		"ulMyGGAQuality": {
			"NoOfBytes": "4",
			"Offset": "49",
			"DataType": "ULONG"
		}
	},
	"SETIMUORIENTATION": {
		"iMyOrientation": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INT"
		}
	},
	"SETIMUTYPE": {
		"eMyIMUType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "IMUTypeEnum"
		}
	},
	"SETHEALTH": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"eMyEnableDisable": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "EnableEnum"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		}
	},
	"SETALMHEALTH": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"eMyEnableDisable": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "EnableEnum"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		}
	},
	"SETEPHEMHEALTH": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"eMyEnableDisable": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "EnableEnum"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		}
	},
	"FORCEPRNAS": {
		"ulPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PRN"
		},
		"eValue": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ForceASEnum"
		}
	},
	"MAXTRACK": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"CLOCKOFFSET": {
		"lMyClockOffset": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "LONG"
		}
	},
	"PASSTOPASSMODE": {
		"eEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"eMeasSmooth": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "OnOffEnum"
		},
		"eCorrSmooth": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "OnOffEnum"
		},
		"eDeweight": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "PassToPassDeweightEnum"
		},
		"dDeweightScale": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		}
	},
	"INSHOTSTART": {
		"eStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"INSSTATENVM": {
		"eImuType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "IMUTypeEnum"
		},
		"iMapping": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "INT"
		},
		"adPosEcef": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "FixedDOUBLEArray"
		},
		"adAccelBias": {
			"NoOfBytes": "8",
			"Offset": "11",
			"DataType": "FixedDOUBLEArray"
		},
		"adGyroBias": {
			"NoOfBytes": "8",
			"Offset": "19",
			"DataType": "FixedDOUBLEArray"
		},
		"mdRlb": {
			"NoOfBytes": "8",
			"Offset": "27",
			"DataType": "FixedDOUBLEArray"
		},
		"dWheelScale": {
			"NoOfBytes": "8",
			"Offset": "35",
			"DataType": "DOUBLE"
		},
		"mdP": {
			"NoOfBytes": "8",
			"Offset": "43",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"TYPEENUMS": {
		"ulMyTypeId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"aulMyEnumList": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "VariableULONGArray"
		}
	},
	"PASSUSB1": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PASSUSB2": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PASSUSB3": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"POSTIMEOUT": {
		"ulTimeOut": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"PPSCONTROL": {
		"eMyEnableDisable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PPSEnableEnum"
		},
		"eMyPolarity": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "PolarityEnum"
		},
		"dMyRate": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"ulMyPulseWidth": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		}
	},
	"MARKCONTROL": {
		"eMyMark": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "MarkEnum"
		},
		"eMyEnableDisable": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "EnableEnum"
		},
		"eMyPolarity": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "PolarityEnum"
		},
		"lMyTimeBias": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "LONG"
		},
		"ulMyTimeGuard": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		}
	},
	"MARK2POS": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"eMyDatumType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "DatumEnum"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "FixedCharArray"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "66",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "67",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "70",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "69",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "71",
			"DataType": "UCHAR"
		}
	},
	"MARK2TIME": {
		"lMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "LONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyOffset": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyOffsetStd": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyUTCOffset": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ClockModelStatusEnum"
		}
	},
	"SRESET": {
		"eType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SpecialResetTypeEnum"
		}
	},
	"TIMEDWHEELDATA": {
		"usMyTicksPerRev": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "USHORT"
		},
		"usMyWheelVelocity": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "USHORT"
		},
		"fMyWheelVelocity": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"ulMyReserved1": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyReserved2": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"lMyCumulativeTicksPerSecond": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "LONG"
		},
		"CABO": ["4"],
		"CAAO": ["20"]
	},
	"RANGEGPSL1": {
		"aclMyObs": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"usMySvPrn": {
			"NoOfBytes": "2",
			"Offset": "4",
			"DataType": "USHORT"
		},
		"usMySvFreq": {
			"NoOfBytes": "2",
			"Offset": "6",
			"DataType": "USHORT"
		},
		"dMyPsr": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"fMySDPsr": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"dMyAdr": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"fMySDAdr": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"fMyDop": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyUserCNo": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyLockTime": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"ulMyCStatus": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "HEXULONG"
		}
	},
	"INSPHASEUPDATE": {
		"eMyTrigger": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"INSPSRUPDATE": {
		"eMyTrigger": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"RVBCALIBRATE": {
		"eMyCmd": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RvbCompEnum"
		}
	},
	"VEHICLEBODYROTATION": {
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "3",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"CBITHINT": {
		"eMyHint": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CBITHintEnum"
		},
		"ulMyParam1": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyParam2": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyParam3": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		}
	},
	"DEBUGETHERRSRC": {
		"ulMyInUseRequestors": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyHighWaterMarkRequestors": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyMaxRequestors": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyInUseRateRequests": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyHighWaterMarkRateRequests": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyMaxRateRequests": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		}
	},
	"TIMEDMAGDATA": {
		"usMagId": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "USHORT"
		},
		"usMagStatus": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "USHORT"
		},
		"sXMag": {
			"NoOfBytes": "2",
			"Offset": "4",
			"DataType": "SHORT"
		},
		"sYMag": {
			"NoOfBytes": "2",
			"Offset": "6",
			"DataType": "SHORT"
		},
		"sZMag": {
			"NoOfBytes": "2",
			"Offset": "8",
			"DataType": "SHORT"
		}
	},
	"WHEELSIZE": {
		"dMyWheelScale": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyWheelCircumference": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyWheelVariance": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		}
	},
	"INSWHEELUPDATE": {
		"eMyTrigger": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"MAGDATA": {
		"usMagId": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "USHORT"
		},
		"usLatency": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "USHORT"
		},
		"usMagStatus": {
			"NoOfBytes": "2",
			"Offset": "4",
			"DataType": "USHORT"
		},
		"sXMag": {
			"NoOfBytes": "2",
			"Offset": "6",
			"DataType": "SHORT"
		},
		"sYMag": {
			"NoOfBytes": "2",
			"Offset": "8",
			"DataType": "SHORT"
		},
		"sZMag": {
			"NoOfBytes": "2",
			"Offset": "10",
			"DataType": "SHORT"
		}
	},
	"INTEGRITYCHECKING": {
		"eDoIntegrityChecking": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "OnOffEnum"
		},
		"dScale": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		}
	},
	"SATVISSYS": {
		"bMyIsSatVisValid": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BOOL"
		},
		"bMyWasGPSAlmanacUsed": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "BOOL"
		},
		"aclMySatVisList": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ClassArray"
		},
		"bMyPosVelValid": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "BOOL"
		},
		"usMyPrn": {
			"NoOfBytes": "2",
			"Offset": "16",
			"DataType": "USHORT"
		},
		"usMyFreq": {
			"NoOfBytes": "2",
			"Offset": "18",
			"DataType": "USHORT"
		},
		"ulMySatHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"dMyElevation": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyTrueDoppler": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMyApparentDoppler": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "SystemTypeEnum"
		},
		"eMySystemVariant": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "SystemVariantEnum"
		},
		"CABO": ["12"],
		"CAAO": ["52"]
	},
	"SBASCONTROL": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"eMySystem": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SBASSystemEnum"
		},
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "PRN"
		},
		"eMyTestMode": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "SBASTestModeEnum"
		}
	},
	"RTCMDATA59FKP": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulInstitutionId1": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulInstitutionId2": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulInstitutionId3": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulSubID": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"ulReserve": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulDataSetNumber": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulSatIdBitMask": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"aclMyRTCMBody": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ClassArray"
		},
		"ulMyIOD": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"ulMyReserve": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"ulMySL0": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ULONG"
		},
		"ulMySLI": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "ULONG"
		},
		"ulMyN0": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "LONG"
		},
		"ulMyNI": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "LONG"
		},
		"ulMyE0": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "LONG"
		},
		"ulMyEI": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "LONG"
		},
		"CABO": ["56"],
		"CAAO": ["32"]
	},
	"RTCM59FKPIN": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulInstitutionId1": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulInstitutionId2": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulInstitutionId3": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulSubID": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"ulReserve": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulDataSetNumber": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulSatIdBitMask": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"aclMyRTCMBody": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ClassArray"
		},
		"ulMyIOD": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"ulMyReserve": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"ulMySL0": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ULONG"
		},
		"ulMySLI": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "ULONG"
		},
		"ulMyN0": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "LONG"
		},
		"ulMyNI": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "LONG"
		},
		"ulMyE0": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "LONG"
		},
		"ulMyEI": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "LONG"
		},
		"CABO": ["56"],
		"CAAO": ["32"]
	},
	"RTCM59FKP": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulInstitutionId1": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulInstitutionId2": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulInstitutionId3": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulSubID": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"ulReserve": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulDataSetNumber": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulSatIdBitMask": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"aclMyRTCMBody": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ClassArray"
		},
		"ulMyIOD": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"ulMyReserve": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"ulMySL0": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ULONG"
		},
		"ulMySLI": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "ULONG"
		},
		"ulMyN0": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "LONG"
		},
		"ulMyNI": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "LONG"
		},
		"ulMyE0": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "LONG"
		},
		"ulMyEI": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "LONG"
		},
		"CABO": ["56"],
		"CAAO": ["32"]
	},
	"RTCMDATA23": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyReserved1": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMyAR": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMySF": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"szMyAntennaDescription": {
			"NoOfBytes": "1",
			"Offset": "36",
			"DataType": "VariableCHARArray"
		},
		"ulMySetupID": {
			"NoOfBytes": "4",
			"Offset": "67",
			"DataType": "ULONG"
		},
		"ulMyReserved2": {
			"NoOfBytes": "4",
			"Offset": "71",
			"DataType": "ULONG"
		},
		"szMyAntennaSerialNumber": {
			"NoOfBytes": "1",
			"Offset": "75",
			"DataType": "VariableCHARArray"
		}
	},
	"RTCMDATA24": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"dMyECEF_X": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"ulMyReserved1": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"dMyECEF_Y": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"ulMyReserved2": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"dMyECEF_Z": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"ulMySystemIndicator": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"ulMyAntennaHtFlag": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"clMyAntHgtInf": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ClassArray"
		},
		"ulMyAntHgt": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "ULONG"
		},
		"ulMyAntRsr": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "ULONG"
		},
		"CABO": ["68"],
		"CAAO": ["8"]
	},
	"RTCM23": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyReserved1": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMyAR": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMySF": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"szMyAntennaDescription": {
			"NoOfBytes": "1",
			"Offset": "36",
			"DataType": "VariableCHARArray"
		},
		"ulMySetupID": {
			"NoOfBytes": "4",
			"Offset": "67",
			"DataType": "ULONG"
		},
		"ulMyReserved2": {
			"NoOfBytes": "4",
			"Offset": "71",
			"DataType": "ULONG"
		},
		"szMyAntennaSerialNumber": {
			"NoOfBytes": "1",
			"Offset": "75",
			"DataType": "VariableCHARArray"
		}
	},
	"RTCM23IN": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyReserved1": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMyAR": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMySF": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"szMyAntennaDescription": {
			"NoOfBytes": "1",
			"Offset": "36",
			"DataType": "VariableCHARArray"
		},
		"ulMySetupID": {
			"NoOfBytes": "4",
			"Offset": "67",
			"DataType": "ULONG"
		},
		"ulMyReserved2": {
			"NoOfBytes": "4",
			"Offset": "71",
			"DataType": "ULONG"
		},
		"szMyAntennaSerialNumber": {
			"NoOfBytes": "1",
			"Offset": "75",
			"DataType": "VariableCHARArray"
		}
	},
	"RTCM24": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"dMyECEF_X": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"ulMyReserved1": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"dMyECEF_Y": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"ulMyReserved2": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"dMyECEF_Z": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"ulMySystemIndicator": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"ulMyAntennaHtFlag": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"clMyAntHgtInf": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ClassArray"
		},
		"ulMyAntHgt": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "ULONG"
		},
		"ulMyAntRsr": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "ULONG"
		},
		"CABO": ["68"],
		"CAAO": ["8"]
	},
	"RTCM24IN": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"dMyECEF_X": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"ulMyReserved1": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"dMyECEF_Y": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"ulMyReserved2": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"dMyECEF_Z": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"ulMySystemIndicator": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"ulMyAntennaHtFlag": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"clMyAntHgtInf": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ClassArray"
		},
		"ulMyAntHgt": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "ULONG"
		},
		"ulMyAntRsr": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "ULONG"
		},
		"CABO": ["68"],
		"CAAO": ["8"]
	},
	"RAWIMUIFCARDPACKET": {
		"ucMyIMUIFCardMsgID": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "UCHAR"
		},
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "FixedUCHARArray"
		},
		"usMyIMUIFCardCksum": {
			"NoOfBytes": "2",
			"Offset": "65",
			"DataType": "USHORT"
		}
	},
	"IMUCONTROL": {
		"eMyIMUIFCardControlCmd": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ImuIFCardControlEnum"
		},
		"aucMyIMUIFCardControlData": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedUCHARArray"
		}
	},
	"IMUCARDDEBUG": {
		"aucMyDebugBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		}
	},
	"IMUCARDSTATUS": {
		"ulMySDLCCntRcvCRCFrameOK": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMySDLCCntRcvInertialMsg": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"usMySDLCCntRcvAbortError": {
			"NoOfBytes": "2",
			"Offset": "8",
			"DataType": "USHORT"
		},
		"usMySDLCCntRcvCRCError": {
			"NoOfBytes": "2",
			"Offset": "10",
			"DataType": "USHORT"
		},
		"usMySDLCCntRcvBufferOverRun": {
			"NoOfBytes": "2",
			"Offset": "12",
			"DataType": "USHORT"
		},
		"usMySDLCReserved1": {
			"NoOfBytes": "2",
			"Offset": "14",
			"DataType": "USHORT"
		},
		"usMySDLCReserved2": {
			"NoOfBytes": "2",
			"Offset": "16",
			"DataType": "USHORT"
		},
		"usMySDLCReserved3": {
			"NoOfBytes": "2",
			"Offset": "18",
			"DataType": "USHORT"
		},
		"usMyUARTRcvBufferOverRun": {
			"NoOfBytes": "2",
			"Offset": "20",
			"DataType": "USHORT"
		},
		"usMyUARTRcvOverRunError": {
			"NoOfBytes": "2",
			"Offset": "22",
			"DataType": "USHORT"
		},
		"usMyUARTRcvFrameError": {
			"NoOfBytes": "2",
			"Offset": "24",
			"DataType": "USHORT"
		},
		"usMyUARTRcvParityError": {
			"NoOfBytes": "2",
			"Offset": "26",
			"DataType": "USHORT"
		},
		"usMyUARTRcvArbitrationError": {
			"NoOfBytes": "2",
			"Offset": "28",
			"DataType": "USHORT"
		},
		"usMyUARTReserved1": {
			"NoOfBytes": "2",
			"Offset": "30",
			"DataType": "USHORT"
		},
		"ulMyTIMERTmrOutofBoundsShort": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMyTIMERTmrOutofBoundsLong": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"ulMyTIMERTmrReserved": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulMyNONINTError": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulMyNONINTRcvMsgCRCError": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMyNONINTRcvIdleTime": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"ulMyNONINTReserved4": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"ulMyNONINTReserved5": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		}
	},
	"IMUCARDVERSION": {
		"acMyBuildDate": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		},
		"acMyBuildTime": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "FixedCharArray"
		},
		"acMyVersion": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "FixedCharArray"
		},
		"aucMyReserved": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "FixedUCHARArray"
		}
	},
	"BESTLEVERARM": {
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "3",
			"DataType": "FixedDOUBLEArray"
		},
		"iMyMapping": {
			"NoOfBytes": "4",
			"Offset": "6",
			"DataType": "INT"
		}
	},
	"LEVERARMCALIBRATE": {
		"eMyTrigger": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "OnOffEnum"
		},
		"dMyMaxTime": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyMaxOffsetStd": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		}
	},
	"SETINSOFFSET": {
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"SOLVEDLEVERARM": {
		"adMyRgib": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "FixedDOUBLEArray"
		},
		"adMyRgib_Accuracy": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"BSLNXYZ": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyXStdDev": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyYStdDev": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyZStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "44",
			"DataType": "FixedCharArray"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "48",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "49",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "50",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "51",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "53",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "54",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "55",
			"DataType": "UCHAR"
		}
	},
	"SETDIFFCODEBIASES": {
		"eMyCodePair": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CodePairEnum"
		},
		"afMyBiases": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FixedFLOATArray"
		}
	},
	"PASSAUX": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		},
		"CABO": ["4"],
		"CAAO": ["80"]
	},
	"GGAQUALITY": {
		"aclMyMappings": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySolType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"ulMyGGAQuality": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		}
	},
	"DEBUGETHERRSRC2": {
		"ulMyInUseRequestors": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyHighWaterMarkRequestors": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyMaxRequestors": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyInUseRateRequests": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyHighWaterMarkRateRequests": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyMaxRateRequests": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyInUseTaskHandles": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMyHighWaterMarkTaskHandles": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		}
	},
	"DEBUGETHERS2": {
		"szMyEtherName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"ulMyEtherNum": {
			"NoOfBytes": "4",
			"Offset": "1",
			"DataType": "ULONG"
		},
		"ulMyEtherSiblingNum": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "ULONG"
		},
		"ulMyNumPackets": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "ULONG"
		},
		"ulMyHighWaterPackets": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "ULONG"
		},
		"ulMyPacketCap": {
			"NoOfBytes": "4",
			"Offset": "17",
			"DataType": "ULONG"
		},
		"ulMyNumRequestors": {
			"NoOfBytes": "4",
			"Offset": "21",
			"DataType": "ULONG"
		},
		"bMyIsCommMsgQTaken": {
			"NoOfBytes": "4",
			"Offset": "25",
			"DataType": "BOOL"
		},
		"ulMyCommMsgQID": {
			"NoOfBytes": "4",
			"Offset": "29",
			"DataType": "ULONG"
		},
		"ulMyProviderTaskID": {
			"NoOfBytes": "4",
			"Offset": "33",
			"DataType": "ULONG"
		}
	},
	"WAAS32": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"IODP": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"alMyPRC": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FixedLONGArray"
		},
		"aulMyUDREI": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FixedULONGArray"
		}
	},
	"WAAS33": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"IODP": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"alMyPRC": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FixedLONGArray"
		},
		"aulMyUDREI": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FixedULONGArray"
		}
	},
	"WAAS34": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"IODP": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"alMyPRC": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FixedLONGArray"
		},
		"aulMyUDREI": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FixedULONGArray"
		}
	},
	"WAAS35": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"IODP": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"alMyPRC": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FixedLONGArray"
		},
		"aulMyUDREI": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FixedULONGArray"
		}
	},
	"WAAS45": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyPRNMaskNumber": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulMyIODE": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"lMyDX": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "LONG"
		},
		"lMyDY": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "LONG"
		},
		"lMyDZ": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "LONG"
		},
		"lMyDDX": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "LONG"
		},
		"lMyDDY": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "LONG"
		},
		"lMyDDZ": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "LONG"
		},
		"lMyDAF0": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "LONG"
		},
		"ulMyTOD": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "ULONG"
		},
		"ulMyIODP": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "ULONG"
		}
	},
	"FKP": {
		"eValue": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FKPEnum"
		}
	},
	"FKPCORRECTIONS": {
		"ulMyFKPPRNMask": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"aMyFKPCorrection": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ClassArray"
		},
		"dMyNonDispersiveErrorL1": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyDispersiveErrorL1": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"CABO": ["8"],
		"CAAO": ["16"]
	},
	"SETPASSCOMTO": {
		"ulMyTimeOutMS": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"SETIONOTYPE": {
		"eModel": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "IonoCorrTypeEnum"
		}
	},
	"CMRPLUSIN": {
		"ulMyCMRSync": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyLength": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyStationID": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyPage": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyNumPages": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "VariableUcharArray"
		}
	},
	"VISIONACCUMTIME": {
		"ulMyAccumTimeUS": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"VISIONBINSPACING": {
		"sigMyChan": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SIGCHAN"
		},
		"ausMyEndpoints": {
			"NoOfBytes": "2",
			"Offset": "4",
			"DataType": "FixedUSHORTArray"
		}
	},
	"VISIONCOUNTERENABLE": {
		"sigMyAccumChan": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SIGCHAN"
		},
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "EnableEnum"
		},
		"sigMyCountChan": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SIGCHAN"
		}
	},
	"RAWVISIONDATA": {
		"sigMyChan": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SIGCHAN"
		},
		"ulMyPrn": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "PRN"
		},
		"aclMyBins": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ClassArray"
		},
		"lMyI": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "LONG"
		},
		"lMyQ": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "LONG"
		},
		"lMyCount": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "LONG"
		},
		"lMyEndpoint": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "LONG"
		},
		"CABO": ["12"],
		"CAAO": ["32"]
	},
	"CMRPLUS": {
		"ulMyCMRSync": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyLength": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyStationID": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyPage": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyNumPages": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "VariableUcharArray"
		},
		"CABO": ["4"],
		"CAAO": ["29"]
	},
	"GLOALMANAC": {
		"aclMySatAlmData": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ucMySlot": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "UCHAR"
		},
		"cMyFrequency": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "CHAR"
		},
		"ucMySatType": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "UCHAR"
		},
		"ucMyHealth": {
			"NoOfBytes": "1",
			"Offset": "15",
			"DataType": "UCHAR"
		},
		"dMyTLambdaN": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyLambdaN": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyDeltaI": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyEcc": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMyArgPerig": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"dMyDeltaT": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		},
		"dMyDeltaTD": {
			"NoOfBytes": "8",
			"Offset": "64",
			"DataType": "DOUBLE"
		},
		"dMyTau": {
			"NoOfBytes": "8",
			"Offset": "72",
			"DataType": "DOUBLE"
		}
	},
	"GLOCLOCK": {
		"ulMyNominalOffset": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMyResidualOffset": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyResidualOffsetVar": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"ucMySatType": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "UCHAR"
		},
		"ucMyN4": {
			"NoOfBytes": "1",
			"Offset": "21",
			"DataType": "UCHAR"
		},
		"dMyTauGPS": {
			"NoOfBytes": "8",
			"Offset": "22",
			"DataType": "DOUBLE"
		},
		"usMyNA": {
			"NoOfBytes": "2",
			"Offset": "30",
			"DataType": "USHORT"
		},
		"dMyTauC": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyB1": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMyB2": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"ucMyKP": {
			"NoOfBytes": "1",
			"Offset": "56",
			"DataType": "UCHAR"
		}
	},
	"GLORAWALM": {
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"aclMyStrings": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ClassArray"
		},
		"aucMyString": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "FixedHEXBYTEArray"
		},
		"ucMyReserved": {
			"NoOfBytes": "1",
			"Offset": "23",
			"DataType": "UCHAR"
		},
		"CABO": ["12"],
		"CAAO": ["12"]
	},
	"GLORAWFRAME": {
		"ulMyFrameNumber": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"usMySloto": {
			"NoOfBytes": "2",
			"Offset": "4",
			"DataType": "USHORT"
		},
		"usMyFreqo": {
			"NoOfBytes": "2",
			"Offset": "6",
			"DataType": "USHORT"
		},
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameDecoderNumber": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMySignalChannelNumber": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"aclMyRawString": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ClassArray"
		},
		"aucMyString": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "FixedHEXBYTEArray"
		},
		"ucMyReserved": {
			"NoOfBytes": "1",
			"Offset": "39",
			"DataType": "UCHAR"
		},
		"CABO": ["28"],
		"CAAO": ["12"]
	},
	"GLORAWSTRING": {
		"ucMySlot": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "UCHAR"
		},
		"cMyFreq": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "CHAR"
		},
		"aucMyString": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "FixedHEXBYTEArray"
		},
		"ucMyReserved": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "UCHAR"
		}
	},
	"GLOEPHEMERIS": {
		"usMySloto": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "USHORT"
		},
		"usMyFreqo": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "USHORT"
		},
		"ucMySatType": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "UCHAR"
		},
		"ucMyFalseIOD": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "UCHAR"
		},
		"usMyEphemWeek": {
			"NoOfBytes": "2",
			"Offset": "6",
			"DataType": "USHORT"
		},
		"ulMyEphemTime": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyTimeOffset": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"usMyNt": {
			"NoOfBytes": "2",
			"Offset": "16",
			"DataType": "USHORT"
		},
		"ucMyReserved": {
			"NoOfBytes": "1",
			"Offset": "19",
			"DataType": "UCHAR"
		},
		"ulMyIssue": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyBroadcastHealth": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"dMyPosX": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyPosY": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyPosZ": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyVelX": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyVelY": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyVelZ": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyLSAccX": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"dMyLSAccY": {
			"NoOfBytes": "8",
			"Offset": "84",
			"DataType": "DOUBLE"
		},
		"dMyLSAccZ": {
			"NoOfBytes": "8",
			"Offset": "92",
			"DataType": "DOUBLE"
		},
		"dMyTau": {
			"NoOfBytes": "8",
			"Offset": "100",
			"DataType": "DOUBLE"
		},
		"dMyDeltaTau": {
			"NoOfBytes": "8",
			"Offset": "108",
			"DataType": "DOUBLE"
		},
		"dMyGamma": {
			"NoOfBytes": "8",
			"Offset": "116",
			"DataType": "DOUBLE"
		},
		"ulMyTk": {
			"NoOfBytes": "4",
			"Offset": "124",
			"DataType": "ULONG"
		},
		"ulMyP": {
			"NoOfBytes": "4",
			"Offset": "128",
			"DataType": "ULONG"
		},
		"ulMyFt": {
			"NoOfBytes": "4",
			"Offset": "132",
			"DataType": "ULONG"
		},
		"ulMyAge": {
			"NoOfBytes": "4",
			"Offset": "136",
			"DataType": "ULONG"
		},
		"ulMyFlags": {
			"NoOfBytes": "4",
			"Offset": "140",
			"DataType": "ULONG"
		}
	},
	"BESTUTM": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"ulMyZoneNumber": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyZoneLetter": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"dMyNorthing": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyEasting": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"eMyDatum": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "DatumEnum"
		},
		"fMyNorthingStdDev": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"fMyEastingStdDev": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"acMyStnId": {
			"NoOfBytes": "1",
			"Offset": "60",
			"DataType": "FixedCharArray"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "61",
			"DataType": "FLOAT"
		},
		"fMyOldPositionTimeDelta": {
			"NoOfBytes": "4",
			"Offset": "65",
			"DataType": "FLOAT"
		},
		"ucMyNumObsTracked": {
			"NoOfBytes": "1",
			"Offset": "69",
			"DataType": "UCHAR"
		},
		"ucMyNumGPSL1": {
			"NoOfBytes": "1",
			"Offset": "70",
			"DataType": "UCHAR"
		},
		"ucMyNumHighSats": {
			"NoOfBytes": "1",
			"Offset": "71",
			"DataType": "UCHAR"
		},
		"ucMyNumHighL2Sats": {
			"NoOfBytes": "1",
			"Offset": "72",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "75",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "74",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "76",
			"DataType": "UCHAR"
		}
	},
	"VISIONCALDATA": {
		"ulMyPrn": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"aclMyBins": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ClassArray"
		},
		"lMyI": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "LONG"
		},
		"lMyQ": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "LONG"
		},
		"lMyCount": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "LONG"
		},
		"lMyEndpoint": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "LONG"
		},
		"CABO": ["8"],
		"CAAO": ["32"]
	},
	"VISIONCALIBRATE": {
		"eMyCalEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "MMTCalEnum"
		},
		"eMyFreq": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FrequencyEnum"
		},
		"szMyRefName": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "STRING"
		},
		"ulMyCalibrateSecs": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "ULONG"
		},
		"ulMyPrn": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "PRN"
		},
		"lMyDoppler": {
			"NoOfBytes": "4",
			"Offset": "17",
			"DataType": "LONG"
		},
		"ulMyDopWindow": {
			"NoOfBytes": "4",
			"Offset": "21",
			"DataType": "ULONG"
		}
	},
	"RAWLBANDFRAME": {
		"usMyServiceID": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "USHORT"
		},
		"usMyReserved": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "USHORT"
		},
		"aucData": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "VariableUcharArray"
		}
	},
	"RAWLBANDPACKET": {
		"aucData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"SETSYSTEMRANGEBIAS": {
		"ulExpiryWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"eSystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RangeBiasSystemEnum"
		},
		"eCodetype": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "RangeBiasCodetypeEnum"
		},
		"eFrequency": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "RangeBiasFrequencyEnum"
		},
		"aclEntry": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ClassArray"
		},
		"ulMyPrn": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"fCorrection": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"CABO": ["20"],
		"CAAO": ["8"]
	},
	"GLOECUTOFF": {
		"fMyElevationCutoffAngle": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		}
	},
	"RAWNAVMSGDATA": {
		"ulMyPicoseconds": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"bMyIsNegative": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "BOOL"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"eMyTimeStatus": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "GPSTimeStatusEnum"
		},
		"ulMyNumRawBits": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"aucMyRawBits": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "FixedHEXBYTEArray"
		},
		"aucMyBadPowerBitIndex": {
			"NoOfBytes": "1",
			"Offset": "25",
			"DataType": "FixedHEXBYTEArray"
		},
		"ulMySignalChannelNumber": {
			"NoOfBytes": "4",
			"Offset": "26",
			"DataType": "ULONG"
		},
		"ulMyBitPeriodUS": {
			"NoOfBytes": "4",
			"Offset": "30",
			"DataType": "ULONG"
		},
		"aucMyPhaseLocked": {
			"NoOfBytes": "1",
			"Offset": "34",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"SETDATE": {
		"ulMyYear": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyMonth": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyDay": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		}
	},
	"UTMZONE": {
		"eMyUTMZoneCommand": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "UTMZoneCommandEnum"
		},
		"lMyParam": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "LONG"
		}
	},
	"DBGLOGFILE": {
		"Action": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PDC_DbgFileActionEnum"
		},
		"ReportingLevel1": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "PDC_ReportingLevelEnum"
		},
		"ReportingLevel2": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "PDC_ReportingLevelEnum"
		},
		"ReportingLevel3": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "PDC_ReportingLevelEnum"
		},
		"ReportingLevel4": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "PDC_ReportingLevelEnum"
		},
		"ReportingLevel5": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "PDC_ReportingLevelEnum"
		},
		"ReportingLevel6": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "PDC_ReportingLevelEnum"
		}
	},
	"GROUPCOMVOUT": {
		"eMyParamUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"acMyGroupName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "CommPortEnum"
		},
		"eMyComVoutAction": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "PDC_ComVoutActionEnum"
		},
		"ulMyReserved": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "ULONG"
		}
	},
	"GROUPCOMCONFIG": {
		"acMyGroupName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		},
		"aclMyComConfigs": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "CommPortEnum"
		},
		"ulMyStatus": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "HEXULONG"
		},
		"ulMyBaud": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"eMyParity": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "OEM4_ParityEnum"
		},
		"ulMyDataBits": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMyStopBits": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"eMyHandshake": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "HandShakeEnum"
		},
		"eMyEcho": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "OnOffEnum"
		},
		"eMyBreaks": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "OnOffEnum"
		},
		"eMyRXType": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "InterfaceModeEnum"
		},
		"eMyTXType": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "InterfaceModeEnum"
		},
		"eMyResponses": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "OnOffEnum"
		},
		"eMyComVoutAction": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "PDC_ComVoutActionEnum"
		},
		"ulMyReserved": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "ULONG"
		},
		"CABO": ["16"],
		"CAAO": ["56"]
	},
	"GROUPCOM": {
		"eMyParamUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ParamUpdateEnum"
		},
		"acMyGroupName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "CommPortEnum"
		},
		"ulMyBaud": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "ULONG"
		},
		"eMyParity": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "OEM4_ParityEnum"
		},
		"ulMyDataBits": {
			"NoOfBytes": "4",
			"Offset": "17",
			"DataType": "ULONG"
		},
		"ulMyStopBits": {
			"NoOfBytes": "4",
			"Offset": "21",
			"DataType": "ULONG"
		},
		"eMyHandshake": {
			"NoOfBytes": "4",
			"Offset": "25",
			"DataType": "HandShakeEnum"
		},
		"eMyEcho": {
			"NoOfBytes": "4",
			"Offset": "29",
			"DataType": "OnOffEnum"
		},
		"eMyBreaks": {
			"NoOfBytes": "4",
			"Offset": "33",
			"DataType": "OnOffEnum"
		}
	},
	"INSUTM": {
		"ulWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dSeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"ulMyZoneNumber": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyZoneLetter": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"dMyNorthing": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyEasting": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"eStatus": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "INSStatusEnum"
		}
	},
	"INSUPDATE": {
		"eMyPosType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolTypeEnum"
		},
		"iMyNumPSR": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "INT"
		},
		"iMyNumPhase": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "INT"
		},
		"iMyNumDOP": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "INT"
		},
		"bMyZuptEpoch": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "BOOL"
		},
		"eMyWheelStatus": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "WheelStatusEnum"
		},
		"eMyHeadingUpdateStatus": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "HeadingUpdateStatusEnum"
		}
	},
	"INSRB": {
		"dMyRB": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyRBR": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyRBstd": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyRBRstd": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"bMyConstChg": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "BOOL"
		},
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "SolStatusEnum"
		}
	},
	"VISIONREFFUNC": {
		"szMyRefName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		},
		"ulMyRefStatus": {
			"NoOfBytes": "4",
			"Offset": "1",
			"DataType": "HEXULONG"
		},
		"aclMyRefPoints": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "ClassArray"
		},
		"fMyI": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "FLOAT"
		},
		"fMyQ": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "FLOAT"
		},
		"CABO": ["4"],
		"CAAO": ["8"]
	},
	"VISIONSOL": {
		"clMyMMTSolvedParams": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"usMyChannel": {
			"NoOfBytes": "2",
			"Offset": "4",
			"DataType": "USHORT"
		},
		"usMyPrn": {
			"NoOfBytes": "2",
			"Offset": "6",
			"DataType": "USHORT"
		},
		"bMyHaveMP": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "BOOL"
		},
		"fMyTau1": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyPhi1": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyAmp1": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"fMyTau2": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"fMyPhi2": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"fMyAmp2": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyLKF": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		}
	},
	"FIXPOSDATUM": {
		"eMyPosDatum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "DatumEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		}
	},
	"SETVERSIONINFO": {
		"eComponentType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ComponentEnum"
		},
		"szModelName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"szPSN": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "FixedCharArray"
		},
		"szHardwareVersion": {
			"NoOfBytes": "1",
			"Offset": "21",
			"DataType": "FixedCharArray"
		},
		"szSoftwareVersion": {
			"NoOfBytes": "1",
			"Offset": "22",
			"DataType": "FixedCharArray"
		},
		"szBootVersion": {
			"NoOfBytes": "1",
			"Offset": "23",
			"DataType": "FixedCharArray"
		},
		"szCompileDate": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "FixedCharArray"
		},
		"szCompileTime": {
			"NoOfBytes": "1",
			"Offset": "25",
			"DataType": "FixedCharArray"
		}
	},
	"MOVINGBASESTATION": {
		"MovingBaseStationEnum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"RTCM1005IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"ITRFRealizationYear": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_UINT6"
		},
		"GPSIndicator": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "RTCMV3_BIT1"
		},
		"GLONASSIndicator": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "RTCMV3_BIT1"
		},
		"GalileoIndicator": {
			"NoOfBytes": "1",
			"Offset": "7",
			"DataType": "RTCMV3_BIT1"
		},
		"ReferenceStationIndicator": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"ECEFX": {
			"NoOfBytes": "8",
			"Offset": "9",
			"DataType": "RTCMV3_INT38"
		},
		"SingleReceiverOscIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_BIT1"
		},
		"ECEFY": {
			"NoOfBytes": "8",
			"Offset": "19",
			"DataType": "RTCMV3_INT38"
		},
		"QuarterCycleIndicator": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_BIT2"
		},
		"ECEFZ": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "RTCMV3_INT38"
		}
	},
	"RTCM1005": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"ITRFRealizationYear": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_UINT6"
		},
		"GPSIndicator": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "RTCMV3_BIT1"
		},
		"GLONASSIndicator": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "RTCMV3_BIT1"
		},
		"GalileoIndicator": {
			"NoOfBytes": "1",
			"Offset": "7",
			"DataType": "RTCMV3_BIT1"
		},
		"ReferenceStationIndicator": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"ECEFX": {
			"NoOfBytes": "8",
			"Offset": "9",
			"DataType": "RTCMV3_INT38"
		},
		"SingleReceiverOscIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_BIT1"
		},
		"ECEFY": {
			"NoOfBytes": "8",
			"Offset": "19",
			"DataType": "RTCMV3_INT38"
		},
		"QuarterCycleIndicator": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_BIT2"
		},
		"ECEFZ": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "RTCMV3_INT38"
		}
	},
	"RTCM1006IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"ITRFRealizationYear": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_UINT6"
		},
		"GPSIndicator": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "RTCMV3_BIT1"
		},
		"GLONASSIndicator": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "RTCMV3_BIT1"
		},
		"GalileoIndicator": {
			"NoOfBytes": "1",
			"Offset": "7",
			"DataType": "RTCMV3_BIT1"
		},
		"ReferenceStationIndicator": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"ECEFX": {
			"NoOfBytes": "8",
			"Offset": "9",
			"DataType": "RTCMV3_INT38"
		},
		"SingleReceiverOscIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_BIT1"
		},
		"ECEFY": {
			"NoOfBytes": "8",
			"Offset": "19",
			"DataType": "RTCMV3_INT38"
		},
		"QuarterCycleIndicator": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_BIT2"
		},
		"ECEFZ": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "RTCMV3_INT38"
		},
		"AntennaHeight": {
			"NoOfBytes": "2",
			"Offset": "36",
			"DataType": "RTCMV3_UINT16"
		}
	},
	"RTCM1006": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"ITRFRealizationYear": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_UINT6"
		},
		"GPSIndicator": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "RTCMV3_BIT1"
		},
		"GLONASSIndicator": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "RTCMV3_BIT1"
		},
		"GalileoIndicator": {
			"NoOfBytes": "1",
			"Offset": "7",
			"DataType": "RTCMV3_BIT1"
		},
		"ReferenceStationIndicator": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"ECEFX": {
			"NoOfBytes": "8",
			"Offset": "9",
			"DataType": "RTCMV3_INT38"
		},
		"SingleReceiverOscIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_BIT1"
		},
		"ECEFY": {
			"NoOfBytes": "8",
			"Offset": "19",
			"DataType": "RTCMV3_INT38"
		},
		"QuarterCycleIndicator": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_BIT2"
		},
		"ECEFZ": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "RTCMV3_INT38"
		},
		"AntennaHeight": {
			"NoOfBytes": "2",
			"Offset": "36",
			"DataType": "RTCMV3_UINT16"
		}
	},
	"RTCM1004IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT30"
		},
		"GNSSMessageFlag": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"NumSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT5"
		},
		"SmoothingIndicator": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"SmoothingInterval": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_BIT3"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "RTCMV3_UINT6"
		},
		"L1CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"L1PSR": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "RTCMV3_UINT24"
		},
		"L1PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "RTCMV3_INT20"
		},
		"L1LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "26",
			"DataType": "RTCMV3_UINT7"
		},
		"IntegerL1PSRModulusAmb": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_UINT8"
		},
		"L1CNR": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "RTCMV3_UINT8"
		},
		"L2CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "29",
			"DataType": "RTCMV3_BIT2"
		},
		"L1L2PSRDiff": {
			"NoOfBytes": "2",
			"Offset": "30",
			"DataType": "RTCMV3_INT14"
		},
		"L2PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "RTCMV3_INT20"
		},
		"L2LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "36",
			"DataType": "RTCMV3_UINT7"
		},
		"L2CNR": {
			"NoOfBytes": "1",
			"Offset": "37",
			"DataType": "RTCMV3_UINT8"
		},
		"CABO": ["16"],
		"CAAO": ["22"]
	},
	"RTCM1004": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT30"
		},
		"GNSSMessageFlag": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"NumSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT5"
		},
		"SmoothingIndicator": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"SmoothingInterval": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_BIT3"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "RTCMV3_UINT6"
		},
		"L1CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"L1PSR": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "RTCMV3_UINT24"
		},
		"L1PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "RTCMV3_INT20"
		},
		"L1LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "26",
			"DataType": "RTCMV3_UINT7"
		},
		"IntegerL1PSRModulusAmb": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_UINT8"
		},
		"L1CNR": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "RTCMV3_UINT8"
		},
		"L2CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "29",
			"DataType": "RTCMV3_BIT2"
		},
		"L1L2PSRDiff": {
			"NoOfBytes": "2",
			"Offset": "30",
			"DataType": "RTCMV3_INT14"
		},
		"L2PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "RTCMV3_INT20"
		},
		"L2LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "36",
			"DataType": "RTCMV3_UINT7"
		},
		"L2CNR": {
			"NoOfBytes": "1",
			"Offset": "37",
			"DataType": "RTCMV3_UINT8"
		},
		"CABO": ["16"],
		"CAAO": ["22"]
	},
	"RTCM1001IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT30"
		},
		"GNSSMessageFlag": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"NumSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT5"
		},
		"SmoothingIndicator": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"SmoothingInterval": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_BIT3"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "RTCMV3_UINT6"
		},
		"L1CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"L1PSR": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "RTCMV3_UINT24"
		},
		"L1PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "RTCMV3_INT20"
		},
		"L1LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "26",
			"DataType": "RTCMV3_UINT7"
		},
		"CABO": ["16"],
		"CAAO": ["11"]
	},
	"RTCM1001": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT30"
		},
		"GNSSMessageFlag": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"NumSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT5"
		},
		"SmoothingIndicator": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"SmoothingInterval": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_BIT3"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "RTCMV3_UINT6"
		},
		"L1CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"L1PSR": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "RTCMV3_UINT24"
		},
		"L1PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "RTCMV3_INT20"
		},
		"L1LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "26",
			"DataType": "RTCMV3_UINT7"
		},
		"CABO": ["16"],
		"CAAO": ["11"]
	},
	"RTCM1002IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT30"
		},
		"GNSSMessageFlag": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"NumSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT5"
		},
		"SmoothingIndicator": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"SmoothingInterval": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_BIT3"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "RTCMV3_UINT6"
		},
		"L1CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"L1PSR": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "RTCMV3_UINT24"
		},
		"L1PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "RTCMV3_INT20"
		},
		"L1LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "26",
			"DataType": "RTCMV3_UINT7"
		},
		"IntegerL1PSRModulusAmb": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_UINT8"
		},
		"L1CNR": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "RTCMV3_UINT8"
		},
		"CABO": ["16"],
		"CAAO": ["13"]
	},
	"RTCM1002": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT30"
		},
		"GNSSMessageFlag": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"NumSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT5"
		},
		"SmoothingIndicator": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"SmoothingInterval": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_BIT3"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "RTCMV3_UINT6"
		},
		"L1CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"L1PSR": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "RTCMV3_UINT24"
		},
		"L1PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "RTCMV3_INT20"
		},
		"L1LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "26",
			"DataType": "RTCMV3_UINT7"
		},
		"IntegerL1PSRModulusAmb": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_UINT8"
		},
		"L1CNR": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "RTCMV3_UINT8"
		},
		"CABO": ["16"],
		"CAAO": ["13"]
	},
	"RTCM1003IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT30"
		},
		"GNSSMessageFlag": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"NumSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT5"
		},
		"SmoothingIndicator": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"SmoothingInterval": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_BIT3"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "RTCMV3_UINT6"
		},
		"L1CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"L1PSR": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "RTCMV3_UINT24"
		},
		"L1PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "RTCMV3_INT20"
		},
		"L1LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "26",
			"DataType": "RTCMV3_UINT7"
		},
		"L2CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_BIT2"
		},
		"L1L2PSRDiff": {
			"NoOfBytes": "2",
			"Offset": "28",
			"DataType": "RTCMV3_INT14"
		},
		"L2PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "30",
			"DataType": "RTCMV3_INT20"
		},
		"L2LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "34",
			"DataType": "RTCMV3_UINT7"
		},
		"CABO": ["16"],
		"CAAO": ["19"]
	},
	"RTCM1003": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT30"
		},
		"GNSSMessageFlag": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"NumSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT5"
		},
		"SmoothingIndicator": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"SmoothingInterval": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_BIT3"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "RTCMV3_UINT6"
		},
		"L1CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"L1PSR": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "RTCMV3_UINT24"
		},
		"L1PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "RTCMV3_INT20"
		},
		"L1LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "26",
			"DataType": "RTCMV3_UINT7"
		},
		"L2CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_BIT2"
		},
		"L1L2PSRDiff": {
			"NoOfBytes": "2",
			"Offset": "28",
			"DataType": "RTCMV3_INT14"
		},
		"L2PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "30",
			"DataType": "RTCMV3_INT20"
		},
		"L2LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "34",
			"DataType": "RTCMV3_UINT7"
		},
		"CABO": ["16"],
		"CAAO": ["19"]
	},
	"AUDIOCFG": {
		"eAudioAction": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "AudioActionEnum"
		},
		"eAudioEvent": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "AudioEventEnum"
		},
		"ulVolume": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulPitch": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"usFileSetIndex": {
			"NoOfBytes": "2",
			"Offset": "16",
			"DataType": "USHORT"
		}
	},
	"SETMSG": {
		"MessageName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"MessageID": {
			"NoOfBytes": "4",
			"Offset": "1",
			"DataType": "UINT"
		},
		"MessageParams": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "ClassArray"
		},
		"DataType": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "STRING"
		},
		"ConvertString": {
			"NoOfBytes": "1",
			"Offset": "42",
			"DataType": "STRING"
		},
		"ArraySize": {
			"NoOfBytes": "4",
			"Offset": "43",
			"DataType": "UINT"
		},
		"MinValue": {
			"NoOfBytes": "4",
			"Offset": "47",
			"DataType": "LONG"
		},
		"MaxValue": {
			"NoOfBytes": "4",
			"Offset": "51",
			"DataType": "LONG"
		},
		"CABO": ["9"],
		"CAAO": ["46"]
	},
	"COMVOUT": {
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		},
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "OnOffEnum"
		}
	},
	"APPCONTROL": {
		"eMyAppControlEnum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "AppControlEnum"
		},
		"lMyAppControlParam1": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "LONG"
		},
		"ulMyAppControlParam2": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyAppControlParam3": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyAppControlParam4": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		}
	},
	"USEREXPDATUM": {
		"dMySemiMajorAxis": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyInverseFlattening": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "96",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "104",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "112",
			"DataType": "DOUBLE"
		},
		"dMyScale": {
			"NoOfBytes": "8",
			"Offset": "64",
			"DataType": "DOUBLE"
		},
		"dMyScaleRate": {
			"NoOfBytes": "8",
			"Offset": "120",
			"DataType": "DOUBLE"
		},
		"dMyReferenceDate": {
			"NoOfBytes": "8",
			"Offset": "128",
			"DataType": "DOUBLE"
		}
	},
	"RTCMDATA1001": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT30"
		},
		"GNSSMessageFlag": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"NumSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT5"
		},
		"SmoothingIndicator": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"SmoothingInterval": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_BIT3"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "RTCMV3_UINT6"
		},
		"L1CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"L1PSR": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "RTCMV3_UINT24"
		},
		"L1PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "RTCMV3_INT20"
		},
		"L1LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "26",
			"DataType": "RTCMV3_UINT7"
		},
		"CABO": ["16"],
		"CAAO": ["11"]
	},
	"RTCMDATA1002": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT30"
		},
		"GNSSMessageFlag": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"NumSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT5"
		},
		"SmoothingIndicator": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"SmoothingInterval": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_BIT3"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "RTCMV3_UINT6"
		},
		"L1CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"L1PSR": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "RTCMV3_UINT24"
		},
		"L1PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "RTCMV3_INT20"
		},
		"L1LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "26",
			"DataType": "RTCMV3_UINT7"
		},
		"IntegerL1PSRModulusAmb": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_UINT8"
		},
		"L1CNR": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "RTCMV3_UINT8"
		},
		"CABO": ["16"],
		"CAAO": ["13"]
	},
	"RTCMDATA1003": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT30"
		},
		"GNSSMessageFlag": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"NumSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT5"
		},
		"SmoothingIndicator": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"SmoothingInterval": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_BIT3"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "RTCMV3_UINT6"
		},
		"L1CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"L1PSR": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "RTCMV3_UINT24"
		},
		"L1PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "RTCMV3_INT20"
		},
		"L1LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "26",
			"DataType": "RTCMV3_UINT7"
		},
		"L2CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_BIT2"
		},
		"L1L2PSRDiff": {
			"NoOfBytes": "2",
			"Offset": "28",
			"DataType": "RTCMV3_INT14"
		},
		"L2PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "30",
			"DataType": "RTCMV3_INT20"
		},
		"L2LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "34",
			"DataType": "RTCMV3_UINT7"
		},
		"CABO": ["16"],
		"CAAO": ["19"]
	},
	"RTCMDATA1004": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT30"
		},
		"GNSSMessageFlag": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"NumSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT5"
		},
		"SmoothingIndicator": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"SmoothingInterval": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_BIT3"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "RTCMV3_UINT6"
		},
		"L1CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"L1PSR": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "RTCMV3_UINT24"
		},
		"L1PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "RTCMV3_INT20"
		},
		"L1LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "26",
			"DataType": "RTCMV3_UINT7"
		},
		"IntegerL1PSRModulusAmb": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_UINT8"
		},
		"L1CNR": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "RTCMV3_UINT8"
		},
		"L2CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "29",
			"DataType": "RTCMV3_BIT2"
		},
		"L1L2PSRDiff": {
			"NoOfBytes": "2",
			"Offset": "30",
			"DataType": "RTCMV3_INT14"
		},
		"L2PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "RTCMV3_INT20"
		},
		"L2LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "36",
			"DataType": "RTCMV3_UINT7"
		},
		"L2CNR": {
			"NoOfBytes": "1",
			"Offset": "37",
			"DataType": "RTCMV3_UINT8"
		},
		"CABO": ["16"],
		"CAAO": ["22"]
	},
	"RTCMDATA1005": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"ITRFRealizationYear": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_UINT6"
		},
		"GPSIndicator": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "RTCMV3_BIT1"
		},
		"GLONASSIndicator": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "RTCMV3_BIT1"
		},
		"GalileoIndicator": {
			"NoOfBytes": "1",
			"Offset": "7",
			"DataType": "RTCMV3_BIT1"
		},
		"ReferenceStationIndicator": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"ECEFX": {
			"NoOfBytes": "8",
			"Offset": "9",
			"DataType": "RTCMV3_INT38"
		},
		"SingleReceiverOscIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_BIT1"
		},
		"ECEFY": {
			"NoOfBytes": "8",
			"Offset": "19",
			"DataType": "RTCMV3_INT38"
		},
		"QuarterCycleIndicator": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_BIT2"
		},
		"ECEFZ": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "RTCMV3_INT38"
		}
	},
	"RTCMDATA1006": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"ITRFRealizationYear": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_UINT6"
		},
		"GPSIndicator": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "RTCMV3_BIT1"
		},
		"GLONASSIndicator": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "RTCMV3_BIT1"
		},
		"GalileoIndicator": {
			"NoOfBytes": "1",
			"Offset": "7",
			"DataType": "RTCMV3_BIT1"
		},
		"ReferenceStationIndicator": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"ECEFX": {
			"NoOfBytes": "8",
			"Offset": "9",
			"DataType": "RTCMV3_INT38"
		},
		"SingleReceiverOscIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_BIT1"
		},
		"ECEFY": {
			"NoOfBytes": "8",
			"Offset": "19",
			"DataType": "RTCMV3_INT38"
		},
		"QuarterCycleIndicator": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_BIT2"
		},
		"ECEFZ": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "RTCMV3_INT38"
		},
		"AntennaHeight": {
			"NoOfBytes": "2",
			"Offset": "36",
			"DataType": "RTCMV3_UINT16"
		}
	},
	"SETCORRTYPE": {
		"eMySignal": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SignalTypeEnum"
		},
		"eMyChanCorrType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "CorrelatorTypeEnum"
		}
	},
	"GLORAWEPHEM": {
		"usMySloto": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "USHORT"
		},
		"usMyFreqo": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "USHORT"
		},
		"ulMySignalChannelNumber": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"aclGloRawEphem": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ClassArray"
		},
		"aucMyString": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "FixedHEXBYTEArray"
		},
		"ucMyReserved": {
			"NoOfBytes": "1",
			"Offset": "31",
			"DataType": "UCHAR"
		},
		"CABO": ["20"],
		"CAAO": ["12"]
	},
	"AUDIOCFGINDEX": {
		"ucMyIndex": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "UCHAR"
		}
	},
	"PRXSTATUS": {
		"aulMyTemperature": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FixedULONGArray"
		},
		"aulMyFiller": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FixedULONGArray"
		}
	},
	"PASSXCOM3": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"FORCEGPSL2CODE": {
		"eMyCodeType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "L2CodeTypeEnum"
		}
	},
	"AUDIOCFGDEF": {
		"acMyAudioBlock": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		},
		"usMyAudioIndex": {
			"NoOfBytes": "2",
			"Offset": "8",
			"DataType": "USHORT"
		},
		"usMyReserved": {
			"NoOfBytes": "2",
			"Offset": "10",
			"DataType": "USHORT"
		},
		"ulMyNumEvents": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"eAudioEvent": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "AudioEventEnum"
		},
		"ulMyVolume": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"CABO": ["16"],
		"CAAO": ["8"]
	},
	"EXTLEVELS": {
		"fMyGPSTemperature": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		},
		"fMyAntennaCurrent": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"fMyCoreVoltage": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMySupplyVoltage": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyRFVoltage": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyIntLNAVoltage": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"fMyLNAVoltage": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"ulMyBattLife": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"fMyBattVolt": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyBattTemp": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"ulMyDiskSpace": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"fMyReserved1": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyReserved2": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"fMyReserved3": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "FLOAT"
		},
		"fMyReserved4": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMyReserved5": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		}
	},
	"PWRSTATUS": {
		"ulMyPortPowerStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "HEXULONG"
		},
		"ulMyRxStatusWord2": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "HEXULONG"
		},
		"ulMyRxStatusWord3": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "HEXULONG"
		},
		"fMyBattVolt": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyChargeVolt": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyExtVolt": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"ulMyBattLife": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMyChargeTime": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyRelativeSOC": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMyAbsoluteSOC": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"ulMyReserved1": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulMyReserved2": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulMyReserved3": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		}
	},
	"RTCAOBS2": {
		"NovAtelDesignator": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "UCHAR"
		},
		"SubtypeIndicator": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "UCHAR"
		},
		"ReceiverTimeBias": {
			"NoOfBytes": "8",
			"Offset": "2",
			"DataType": "DOUBLE"
		},
		"Seconds": {
			"NoOfBytes": "4",
			"Offset": "10",
			"DataType": "FLOAT"
		},
		"GloCalibrationQual": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "UCHAR"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "43",
			"DataType": "UCHAR"
		},
		"Transmitter2Data": {
			"NoOfBytes": "4",
			"Offset": "19",
			"DataType": "ClassArray"
		},
		"TransmitterID": {
			"NoOfBytes": "1",
			"Offset": "23",
			"DataType": "UCHAR"
		},
		"L1LockTime": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "UCHAR"
		},
		"L1PsrOffset": {
			"NoOfBytes": "8",
			"Offset": "25",
			"DataType": "DOUBLE"
		},
		"L1ADROffset": {
			"NoOfBytes": "8",
			"Offset": "33",
			"DataType": "DOUBLE"
		},
		"FreqAvail": {
			"NoOfBytes": "1",
			"Offset": "41",
			"DataType": "UCHAR"
		},
		"CodeType": {
			"NoOfBytes": "1",
			"Offset": "42",
			"DataType": "UCHAR"
		},
		"L2LockTime": {
			"NoOfBytes": "1",
			"Offset": "44",
			"DataType": "UCHAR"
		},
		"L2PsrOffset": {
			"NoOfBytes": "8",
			"Offset": "45",
			"DataType": "DOUBLE"
		},
		"L2ADROffset": {
			"NoOfBytes": "8",
			"Offset": "53",
			"DataType": "DOUBLE"
		},
		"CodeType2": {
			"NoOfBytes": "1",
			"Offset": "61",
			"DataType": "UCHAR"
		},
		"Reserved2": {
			"NoOfBytes": "1",
			"Offset": "62",
			"DataType": "UCHAR"
		},
		"CABO": ["23"],
		"CAAO": ["40"]
	},
	"RTCAOBS2IN": {
		"ulMessageIdentifier": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefStation": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMessageType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulReserved": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMessageLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"NovAtelDesignator": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "UCHAR"
		},
		"SubtypeIndicator": {
			"NoOfBytes": "1",
			"Offset": "21",
			"DataType": "UCHAR"
		},
		"ReceiverTimeBias": {
			"NoOfBytes": "8",
			"Offset": "22",
			"DataType": "DOUBLE"
		},
		"Seconds": {
			"NoOfBytes": "4",
			"Offset": "30",
			"DataType": "FLOAT"
		},
		"GloCalibrationQual": {
			"NoOfBytes": "1",
			"Offset": "34",
			"DataType": "UCHAR"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "63",
			"DataType": "UCHAR"
		},
		"Transmitter2Data": {
			"NoOfBytes": "4",
			"Offset": "39",
			"DataType": "ClassArray"
		},
		"TransmitterID": {
			"NoOfBytes": "1",
			"Offset": "43",
			"DataType": "UCHAR"
		},
		"L1LockTime": {
			"NoOfBytes": "1",
			"Offset": "44",
			"DataType": "UCHAR"
		},
		"L1PsrOffset": {
			"NoOfBytes": "8",
			"Offset": "45",
			"DataType": "DOUBLE"
		},
		"L1ADROffset": {
			"NoOfBytes": "8",
			"Offset": "53",
			"DataType": "DOUBLE"
		},
		"FreqAvail": {
			"NoOfBytes": "1",
			"Offset": "61",
			"DataType": "UCHAR"
		},
		"CodeType": {
			"NoOfBytes": "1",
			"Offset": "62",
			"DataType": "UCHAR"
		},
		"L2LockTime": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "UCHAR"
		},
		"L2PsrOffset": {
			"NoOfBytes": "8",
			"Offset": "65",
			"DataType": "DOUBLE"
		},
		"L2ADROffset": {
			"NoOfBytes": "8",
			"Offset": "73",
			"DataType": "DOUBLE"
		},
		"CodeType2": {
			"NoOfBytes": "1",
			"Offset": "81",
			"DataType": "UCHAR"
		},
		"Reserved2": {
			"NoOfBytes": "1",
			"Offset": "82",
			"DataType": "UCHAR"
		},
		"CABO": ["43"],
		"CAAO": ["40"]
	},
	"RTCA2IN": {
		"ulMessageIdentifier": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefStation": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMessageType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulReserved": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMessageLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ModifiedZCount": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"AEB": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "AccelerationErrorBound"
		},
		"Corrections": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "36",
			"DataType": "UCHAR"
		},
		"PseudorangeCorrection": {
			"NoOfBytes": "8",
			"Offset": "37",
			"DataType": "DOUBLE"
		},
		"IssueofData": {
			"NoOfBytes": "1",
			"Offset": "45",
			"DataType": "UCHAR"
		},
		"RangeRateCorrection": {
			"NoOfBytes": "8",
			"Offset": "46",
			"DataType": "DOUBLE"
		},
		"UDRE": {
			"NoOfBytes": "4",
			"Offset": "54",
			"DataType": "FLOAT"
		},
		"CABO": ["36"],
		"CAAO": ["22"]
	},
	"RTCADATA2OBS": {
		"NovAtelDesignator": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "UCHAR"
		},
		"SubtypeIndicator": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "UCHAR"
		},
		"ReceiverTimeBias": {
			"NoOfBytes": "8",
			"Offset": "2",
			"DataType": "DOUBLE"
		},
		"Seconds": {
			"NoOfBytes": "4",
			"Offset": "10",
			"DataType": "FLOAT"
		},
		"GloCalibrationQual": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "UCHAR"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "43",
			"DataType": "UCHAR"
		},
		"Transmitter2Data": {
			"NoOfBytes": "4",
			"Offset": "19",
			"DataType": "ClassArray"
		},
		"TransmitterID": {
			"NoOfBytes": "1",
			"Offset": "23",
			"DataType": "UCHAR"
		},
		"L1LockTime": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "UCHAR"
		},
		"L1PsrOffset": {
			"NoOfBytes": "8",
			"Offset": "25",
			"DataType": "DOUBLE"
		},
		"L1ADROffset": {
			"NoOfBytes": "8",
			"Offset": "33",
			"DataType": "DOUBLE"
		},
		"FreqAvail": {
			"NoOfBytes": "1",
			"Offset": "41",
			"DataType": "UCHAR"
		},
		"CodeType": {
			"NoOfBytes": "1",
			"Offset": "42",
			"DataType": "UCHAR"
		},
		"L2LockTime": {
			"NoOfBytes": "1",
			"Offset": "44",
			"DataType": "UCHAR"
		},
		"L2PsrOffset": {
			"NoOfBytes": "8",
			"Offset": "45",
			"DataType": "DOUBLE"
		},
		"L2ADROffset": {
			"NoOfBytes": "8",
			"Offset": "53",
			"DataType": "DOUBLE"
		},
		"CodeType2": {
			"NoOfBytes": "1",
			"Offset": "61",
			"DataType": "UCHAR"
		},
		"Reserved2": {
			"NoOfBytes": "1",
			"Offset": "62",
			"DataType": "UCHAR"
		},
		"CABO": ["23"],
		"CAAO": ["40"]
	},
	"VISION": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "MMTEnableEnum"
		},
		"szMyAntennaName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		}
	},
	"CORRIMUDATA": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"adMyCorr_wb_ib": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "FixedDOUBLEArray"
		},
		"adMyCorr_fb": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"CORRIMUDATAS": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"adMyCorr_wb_ib": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "FixedDOUBLEArray"
		},
		"adMyCorr_fb": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "FixedDOUBLEArray"
		},
		"CABO": ["4"],
		"CAAO": ["28"]
	},
	"VISIONREFLIST": {
		"aclMyRefList": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"szMyRefName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		},
		"ulMyReserved": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		}
	},
	"SETRTCMFKP": {
		"eMyFKPFormat": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RTCMFKPTypeEnum"
		}
	},
	"CMRSTATIONINFO": {
		"ucMyAntennaNumber": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "UCHAR"
		},
		"ucMyPosCoordAccuracy": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "UCHAR"
		},
		"szMyShortStationID": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "FixedCharArray"
		},
		"szMyCOGOCode": {
			"NoOfBytes": "1",
			"Offset": "3",
			"DataType": "FixedCharArray"
		},
		"szMyLongStationID": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		}
	},
	"SETANTOFFSETS": {
		"dMyAntennaHeight": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyEastOffset": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyNorthOffset": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyUpOffset": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		}
	},
	"SETATXTYPE": {
		"ulMyKey1": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyKey2": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ucMyAntennaType": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "UCHAR"
		},
		"usMyAntennaProfile": {
			"NoOfBytes": "2",
			"Offset": "9",
			"DataType": "USHORT"
		}
	},
	"NVMCLEAR": {
		"eMyNVMType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "NVM_DataTypeEnum"
		}
	},
	"GLOCSMOOTH": {
		"ulMyL1TimeConstant": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyL2TimeConstant": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"GLOLOOPSBANDWIDTH": {
		"fMyL1BandWidth": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		},
		"fMyL2BandWidth": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		}
	},
	"RAWLBANDPREVITERBI": {
		"aucData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1014": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"NetworkID": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "RTCMV3_UINT8"
		},
		"SubNetworkID": {
			"NoOfBytes": "1",
			"Offset": "3",
			"DataType": "RTCMV3_UINT4"
		},
		"NumAuxStationsTransmitted": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_UINT5"
		},
		"MasterReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "5",
			"DataType": "RTCMV3_UINT12"
		},
		"AuxReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "7",
			"DataType": "RTCMV3_UINT12"
		},
		"AuxMasterDeltaLat": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "RTCMV3_INT20"
		},
		"AuxMasterDeltaLon": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "RTCMV3_INT21"
		},
		"AuxMasterDeltaHeight": {
			"NoOfBytes": "4",
			"Offset": "17",
			"DataType": "RTCMV3_INT23"
		}
	},
	"RTCM1014IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"NetworkID": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "RTCMV3_UINT8"
		},
		"SubNetworkID": {
			"NoOfBytes": "1",
			"Offset": "3",
			"DataType": "RTCMV3_UINT4"
		},
		"NumAuxStationsTransmitted": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_UINT5"
		},
		"MasterReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "5",
			"DataType": "RTCMV3_UINT12"
		},
		"AuxReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "7",
			"DataType": "RTCMV3_UINT12"
		},
		"AuxMasterDeltaLat": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "RTCMV3_INT20"
		},
		"AuxMasterDeltaLon": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "RTCMV3_INT21"
		},
		"AuxMasterDeltaHeight": {
			"NoOfBytes": "4",
			"Offset": "17",
			"DataType": "RTCMV3_INT23"
		}
	},
	"SETBESTPOSCRITERIA": {
		"eMySelectionType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SetBestPosCriteriaEnum"
		},
		"ulMyNumEpochs": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"BITSYNTHPWR": {
		"ulMyPowerLevel": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"ANTENNAMODEL": {
		"arAntennaName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"arSerialNumber": {
			"NoOfBytes": "1",
			"Offset": "32",
			"DataType": "STRING"
		},
		"ulSetupID": {
			"NoOfBytes": "4",
			"Offset": "33",
			"DataType": "ULONG"
		},
		"eAntennaType": {
			"NoOfBytes": "4",
			"Offset": "37",
			"DataType": "AntennaModelEnum"
		},
		"arL1Offset": {
			"NoOfBytes": "8",
			"Offset": "41",
			"DataType": "FixedDOUBLEArray"
		},
		"arL1PCV": {
			"NoOfBytes": "8",
			"Offset": "49",
			"DataType": "FixedDOUBLEArray"
		},
		"arL2Offset": {
			"NoOfBytes": "8",
			"Offset": "57",
			"DataType": "FixedDOUBLEArray"
		},
		"arL2PCV": {
			"NoOfBytes": "8",
			"Offset": "65",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"EXTRXHWLEVELS": {
		"fMySystemVoltage": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		},
		"fMyMinosVoltage": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"fMyRF2Voltage": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyRF3Voltage": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyCurrentSense": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyExtReserved1": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"fMyExtReserved2": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"fMyExtReserved3": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"fMyExtReserved4": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyExtReserved5": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		}
	},
	"RTKQUALITYLEVEL": {
		"eMyRTKQualityLevel": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RTKQualityEnum"
		}
	},
	"RTKENGINESOURCE": {
		"eMyRTKEngine": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RTKEngineEnum"
		}
	},
	"SETWHEELPARAMETERS": {
		"usMyTicksPerRev": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "USHORT"
		},
		"dMyWheelCircumference": {
			"NoOfBytes": "8",
			"Offset": "2",
			"DataType": "DOUBLE"
		},
		"dMyWheelResolution": {
			"NoOfBytes": "8",
			"Offset": "10",
			"DataType": "DOUBLE"
		}
	},
	"CNOUPDATE": {
		"eCNoUpdateRate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CNoUpdateRateEnum"
		}
	},
	"CDGPSTIMEOUT": {
		"eTimeOutEnum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "TimeOutEnum"
		},
		"dTimeOut": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dReserved": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		}
	},
	"WAASTIMEOUT": {
		"eMyTimeOutEnum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "TimeOutEnum"
		},
		"dMyTimeOut": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dReserved": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		}
	},
	"RTCM1007": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"DescriptorCounter": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_UINT8"
		},
		"AntennaDescriptor": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		},
		"AntennaSetupID": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "RTCMV3_UINT8"
		}
	},
	"RTCM1007IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"DescriptorCounter": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_UINT8"
		},
		"AntennaDescriptor": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		},
		"AntennaSetupID": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "RTCMV3_UINT8"
		}
	},
	"RTCM1008": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"DescriptorCounter": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_UINT8"
		},
		"AntennaDescriptor": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		},
		"AntennaSetupID": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "RTCMV3_UINT8"
		},
		"SerialNumberCounter": {
			"NoOfBytes": "1",
			"Offset": "7",
			"DataType": "RTCMV3_UINT8"
		},
		"AntennaSerialNumber": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		}
	},
	"RTCM1008IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"DescriptorCounter": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_UINT8"
		},
		"AntennaDescriptor": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		},
		"AntennaSetupID": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "RTCMV3_UINT8"
		},
		"SerialNumberCounter": {
			"NoOfBytes": "1",
			"Offset": "7",
			"DataType": "RTCMV3_UINT8"
		},
		"AntennaSerialNumber": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		}
	},
	"RTCMDATA1007": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"AntennaDescriptor": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		},
		"AntennaSetupID": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "RTCMV3_UINT8"
		}
	},
	"RTCMDATA1008": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"AntennaDescriptor": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		},
		"AntennaSetupID": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "RTCMV3_UINT8"
		},
		"AntennaSerialNumber": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		}
	},
	"RTKANTENNA": {
		"ePositionReferenceEnum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PositionReferenceEnum"
		},
		"ePCVModelEnum": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "PCVModelingEnum"
		},
		"bReserved1": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "BOOL"
		},
		"bReserved2": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "BOOL"
		}
	},
	"GLMLA": {
		"ulMyNA": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMyTauC": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"aclMySatAlmData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"ucMySlot": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "UCHAR"
		},
		"ucMyHealth": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "UCHAR"
		},
		"cMyFrequency": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "CHAR"
		},
		"dMyEcc": {
			"NoOfBytes": "8",
			"Offset": "19",
			"DataType": "DOUBLE"
		},
		"dMyDeltaTD": {
			"NoOfBytes": "8",
			"Offset": "27",
			"DataType": "DOUBLE"
		},
		"dMyArgPerig": {
			"NoOfBytes": "8",
			"Offset": "35",
			"DataType": "DOUBLE"
		},
		"dMyDeltaT": {
			"NoOfBytes": "8",
			"Offset": "43",
			"DataType": "DOUBLE"
		},
		"dMyTLambdaN": {
			"NoOfBytes": "8",
			"Offset": "51",
			"DataType": "DOUBLE"
		},
		"dMyLambdaN": {
			"NoOfBytes": "8",
			"Offset": "59",
			"DataType": "DOUBLE"
		},
		"dMyDeltaI": {
			"NoOfBytes": "8",
			"Offset": "67",
			"DataType": "DOUBLE"
		},
		"dMyTau": {
			"NoOfBytes": "8",
			"Offset": "75",
			"DataType": "DOUBLE"
		},
		"CABO": ["16"],
		"CAAO": ["67"]
	},
	"NMEATALKER": {
		"eTalkerID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "NMEATalkerIDEnum"
		}
	},
	"SETINITATTITUDE": {
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"fMyPitchStdDev": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"fMyRollStdDev": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"fMyAzimuthStdDev": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		}
	},
	"SETINITAZIMUTH": {
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"fMyAzimuthStdDev": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		}
	},
	"RTCM31": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"aclMyDiffData": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ClassArray"
		},
		"ulMyScale": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyUDRE": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMySvPrn": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"iMyCor": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "INT"
		},
		"iMyCorRate": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "INT"
		},
		"ulMyChangeBit": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMyTk": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["28"]
	},
	"RTCM31IN": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"aclMyDiffData": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ClassArray"
		},
		"ulMyScale": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyUDRE": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMySvPrn": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"iMyCor": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "INT"
		},
		"iMyCorRate": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "INT"
		},
		"ulMyChangeBit": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMyTk": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["28"]
	},
	"RTCM34": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"aclMyDiffData": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ClassArray"
		},
		"ulMyScale": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyUDRE": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMySvPrn": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"iMyCor": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "INT"
		},
		"iMyCorRate": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "INT"
		},
		"ulMyChangeBit": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMyTk": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["28"]
	},
	"RTCM34IN": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"aclMyDiffData": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ClassArray"
		},
		"ulMyScale": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyUDRE": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMySvPrn": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"iMyCor": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "INT"
		},
		"iMyCorRate": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "INT"
		},
		"ulMyChangeBit": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMyTk": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["28"]
	},
	"RTCMDATA31": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"aclMyDiffData": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ClassArray"
		},
		"ulMyScale": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyUDRE": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMySvPrn": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"iMyCor": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "INT"
		},
		"iMyCorRate": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "INT"
		},
		"ulMyChangeBit": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMyTk": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["28"]
	},
	"RTCMDATA34": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"aclMyDiffData": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ClassArray"
		},
		"ulMyScale": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyUDRE": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMySvPrn": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"iMyCor": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "INT"
		},
		"iMyCorRate": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "INT"
		},
		"ulMyChangeBit": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMyTk": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["28"]
	},
	"BASEANTENNAMODEL": {
		"arAntennaName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"arSerialNumber": {
			"NoOfBytes": "1",
			"Offset": "32",
			"DataType": "STRING"
		},
		"ulSetupID": {
			"NoOfBytes": "4",
			"Offset": "33",
			"DataType": "ULONG"
		},
		"eAntennaType": {
			"NoOfBytes": "4",
			"Offset": "37",
			"DataType": "AntennaModelEnum"
		},
		"arL1Offset": {
			"NoOfBytes": "8",
			"Offset": "41",
			"DataType": "FixedDOUBLEArray"
		},
		"arL1PCV": {
			"NoOfBytes": "8",
			"Offset": "49",
			"DataType": "FixedDOUBLEArray"
		},
		"arL2Offset": {
			"NoOfBytes": "8",
			"Offset": "57",
			"DataType": "FixedDOUBLEArray"
		},
		"arL2PCV": {
			"NoOfBytes": "8",
			"Offset": "65",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"LOCKOUTSYSTEM": {
		"eMySystem": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SystemTypeEnum"
		}
	},
	"RTCM32": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"dMyECEF_X": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyECEF_Y": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyECEF_Z": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		}
	},
	"RTCM32IN": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"dMyECEF_X": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyECEF_Y": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyECEF_Z": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		}
	},
	"RTCM36": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"aucMyRTCM36Text": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM36IN": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"aucMyRTCM36Text": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM36T": {
		"aucMyText": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedUCHARArray"
		}
	},
	"RTCMDATA32": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"dMyECEF_X": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyECEF_Y": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyECEF_Z": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		}
	},
	"RTCMDATA36": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"aucMyRTCM36Text": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "VariableUcharArray"
		}
	},
	"SETRTCM36": {
		"aucMyText": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedUCHARArray"
		}
	},
	"PSRTIME": {
		"aclMySystemOffsets": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystem": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "TimingSystemEnum"
		},
		"dMyBias": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyBiasStdDev": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"CABO": ["4"],
		"CAAO": ["20"]
	},
	"CMRGLOOBS": {
		"ulMyCMRSync": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyLength": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyVersion": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyStationID": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMessageType": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMyNumberofSv": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyEpochTime": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMyClockBiasValid": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"lMyClockOffset": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "LONG"
		},
		"aclMyCMRBody": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ClassArray"
		},
		"ulMySlotNumber": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"bMyCodeFlag": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "BOOL"
		},
		"bMyL1PhaseValid": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "BOOL"
		},
		"bMyIsL2Present": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "BOOL"
		},
		"ulMyL1Psr": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ULONG"
		},
		"lMyL1CarrierOffset": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "LONG"
		},
		"ulMyL1Snr": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "ULONG"
		},
		"ulMyL1SlipCount": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "ULONG"
		},
		"bMyIsL2Code": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "BOOL"
		},
		"bMyCodeType": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "BOOL"
		},
		"bMyIsL2CodeValid": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "BOOL"
		},
		"bMyIsL2PhaseValid": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "BOOL"
		},
		"bMyPhaseFull": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "BOOL"
		},
		"ulMyReserved": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "ULONG"
		},
		"lMyL2RangeOffset": {
			"NoOfBytes": "4",
			"Offset": "104",
			"DataType": "LONG"
		},
		"lMyL2CarrierOffset": {
			"NoOfBytes": "4",
			"Offset": "108",
			"DataType": "LONG"
		},
		"ulMyL2Snr": {
			"NoOfBytes": "4",
			"Offset": "112",
			"DataType": "ULONG"
		},
		"ulMyL2SlipCount": {
			"NoOfBytes": "4",
			"Offset": "116",
			"DataType": "ULONG"
		},
		"CABO": ["48"],
		"CAAO": ["72"]
	},
	"CMRGLOOBSIN": {
		"ulMyCMRSync": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyLength": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyVersion": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyStationID": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMessageType": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMyNumberofSv": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyEpochTime": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMyClockBiasValid": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"lMyClockOffset": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "LONG"
		},
		"aclMyCMRBody": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ClassArray"
		},
		"ulMySlotNumber": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"bMyCodeFlag": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "BOOL"
		},
		"bMyL1PhaseValid": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "BOOL"
		},
		"bMyIsL2Present": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "BOOL"
		},
		"ulMyL1Psr": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ULONG"
		},
		"lMyL1CarrierOffset": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "LONG"
		},
		"ulMyL1Snr": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "ULONG"
		},
		"ulMyL1SlipCount": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "ULONG"
		},
		"bMyIsL2Code": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "BOOL"
		},
		"bMyCodeType": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "BOOL"
		},
		"bMyIsL2CodeValid": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "BOOL"
		},
		"bMyIsL2PhaseValid": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "BOOL"
		},
		"bMyPhaseFull": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "BOOL"
		},
		"ulMyReserved": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "ULONG"
		},
		"lMyL2RangeOffset": {
			"NoOfBytes": "4",
			"Offset": "104",
			"DataType": "LONG"
		},
		"lMyL2CarrierOffset": {
			"NoOfBytes": "4",
			"Offset": "108",
			"DataType": "LONG"
		},
		"ulMyL2Snr": {
			"NoOfBytes": "4",
			"Offset": "112",
			"DataType": "ULONG"
		},
		"ulMyL2SlipCount": {
			"NoOfBytes": "4",
			"Offset": "116",
			"DataType": "ULONG"
		},
		"CABO": ["48"],
		"CAAO": ["72"]
	},
	"CANCONFIG": {
		"eMyCANPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CanPortEnum"
		},
		"eMyOnOff": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "OnOffEnum"
		},
		"eMyBitrate": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "CanBitRateEnum"
		}
	},
	"RTCM1009": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT27"
		},
		"GNSSMessageFlag": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"NumSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT5"
		},
		"SmoothingIndicator": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"SmoothingInterval": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_BIT3"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "RTCMV3_UINT6"
		},
		"L1CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"FreqChannelNumber": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_UINT5"
		},
		"L1PSR": {
			"NoOfBytes": "4",
			"Offset": "19",
			"DataType": "RTCMV3_UINT25"
		},
		"L1PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "23",
			"DataType": "RTCMV3_INT20"
		},
		"L1LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_UINT7"
		},
		"CABO": ["16"],
		"CAAO": ["12"]
	},
	"RTCM1009IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT27"
		},
		"GNSSMessageFlag": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"NumSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT5"
		},
		"SmoothingIndicator": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"SmoothingInterval": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_BIT3"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "RTCMV3_UINT6"
		},
		"L1CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"FreqChannelNumber": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_UINT5"
		},
		"L1PSR": {
			"NoOfBytes": "4",
			"Offset": "19",
			"DataType": "RTCMV3_UINT25"
		},
		"L1PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "23",
			"DataType": "RTCMV3_INT20"
		},
		"L1LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_UINT7"
		},
		"CABO": ["16"],
		"CAAO": ["12"]
	},
	"RTCM1010": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT27"
		},
		"GNSSMessageFlag": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"NumSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT5"
		},
		"SmoothingIndicator": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"SmoothingInterval": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_BIT3"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "RTCMV3_UINT6"
		},
		"L1CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"FreqChannelNumber": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_UINT5"
		},
		"L1PSR": {
			"NoOfBytes": "4",
			"Offset": "19",
			"DataType": "RTCMV3_UINT25"
		},
		"L1PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "23",
			"DataType": "RTCMV3_INT20"
		},
		"L1LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_UINT7"
		},
		"IntegerL1PSRModulusAmb": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "RTCMV3_UINT7"
		},
		"L1CNR": {
			"NoOfBytes": "1",
			"Offset": "29",
			"DataType": "RTCMV3_UINT8"
		},
		"CABO": ["16"],
		"CAAO": ["14"]
	},
	"RTCM1010IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT27"
		},
		"GNSSMessageFlag": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"NumSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT5"
		},
		"SmoothingIndicator": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"SmoothingInterval": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_BIT3"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "RTCMV3_UINT6"
		},
		"L1CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"FreqChannelNumber": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_UINT5"
		},
		"L1PSR": {
			"NoOfBytes": "4",
			"Offset": "19",
			"DataType": "RTCMV3_UINT25"
		},
		"L1PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "23",
			"DataType": "RTCMV3_INT20"
		},
		"L1LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_UINT7"
		},
		"IntegerL1PSRModulusAmb": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "RTCMV3_UINT7"
		},
		"L1CNR": {
			"NoOfBytes": "1",
			"Offset": "29",
			"DataType": "RTCMV3_UINT8"
		},
		"CABO": ["16"],
		"CAAO": ["14"]
	},
	"RTCM1011": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT27"
		},
		"GNSSMessageFlag": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"NumSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT5"
		},
		"SmoothingIndicator": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"SmoothingInterval": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_BIT3"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "RTCMV3_UINT6"
		},
		"L1CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"FreqChannelNumber": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_UINT5"
		},
		"L1PSR": {
			"NoOfBytes": "4",
			"Offset": "19",
			"DataType": "RTCMV3_UINT25"
		},
		"L1PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "23",
			"DataType": "RTCMV3_INT20"
		},
		"L1LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_UINT7"
		},
		"L2CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "RTCMV3_BIT2"
		},
		"L1L2PSRDiff": {
			"NoOfBytes": "2",
			"Offset": "29",
			"DataType": "RTCMV3_INT14"
		},
		"L2PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "31",
			"DataType": "RTCMV3_INT20"
		},
		"L2LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "35",
			"DataType": "RTCMV3_UINT7"
		},
		"CABO": ["16"],
		"CAAO": ["20"]
	},
	"RTCM1011IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT27"
		},
		"GNSSMessageFlag": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"NumSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT5"
		},
		"SmoothingIndicator": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"SmoothingInterval": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_BIT3"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "RTCMV3_UINT6"
		},
		"L1CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"FreqChannelNumber": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_UINT5"
		},
		"L1PSR": {
			"NoOfBytes": "4",
			"Offset": "19",
			"DataType": "RTCMV3_UINT25"
		},
		"L1PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "23",
			"DataType": "RTCMV3_INT20"
		},
		"L1LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_UINT7"
		},
		"L2CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "RTCMV3_BIT2"
		},
		"L1L2PSRDiff": {
			"NoOfBytes": "2",
			"Offset": "29",
			"DataType": "RTCMV3_INT14"
		},
		"L2PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "31",
			"DataType": "RTCMV3_INT20"
		},
		"L2LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "35",
			"DataType": "RTCMV3_UINT7"
		},
		"CABO": ["16"],
		"CAAO": ["20"]
	},
	"RTCM1012": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT27"
		},
		"GNSSMessageFlag": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"NumSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT5"
		},
		"SmoothingIndicator": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"SmoothingInterval": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_BIT3"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "RTCMV3_UINT6"
		},
		"L1CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"FreqChannelNumber": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_UINT5"
		},
		"L1PSR": {
			"NoOfBytes": "4",
			"Offset": "19",
			"DataType": "RTCMV3_UINT25"
		},
		"L1PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "23",
			"DataType": "RTCMV3_INT20"
		},
		"L1LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_UINT7"
		},
		"IntegerL1PSRModulusAmb": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "RTCMV3_UINT7"
		},
		"L1CNR": {
			"NoOfBytes": "1",
			"Offset": "29",
			"DataType": "RTCMV3_UINT8"
		},
		"L2CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "30",
			"DataType": "RTCMV3_BIT2"
		},
		"L1L2PSRDiff": {
			"NoOfBytes": "2",
			"Offset": "31",
			"DataType": "RTCMV3_INT14"
		},
		"L2PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "33",
			"DataType": "RTCMV3_INT20"
		},
		"L2LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "37",
			"DataType": "RTCMV3_UINT7"
		},
		"L2CNR": {
			"NoOfBytes": "1",
			"Offset": "38",
			"DataType": "RTCMV3_UINT8"
		},
		"CABO": ["16"],
		"CAAO": ["23"]
	},
	"RTCM1012IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT27"
		},
		"GNSSMessageFlag": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"NumSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT5"
		},
		"SmoothingIndicator": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"SmoothingInterval": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_BIT3"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "RTCMV3_UINT6"
		},
		"L1CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"FreqChannelNumber": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_UINT5"
		},
		"L1PSR": {
			"NoOfBytes": "4",
			"Offset": "19",
			"DataType": "RTCMV3_UINT25"
		},
		"L1PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "23",
			"DataType": "RTCMV3_INT20"
		},
		"L1LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_UINT7"
		},
		"IntegerL1PSRModulusAmb": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "RTCMV3_UINT7"
		},
		"L1CNR": {
			"NoOfBytes": "1",
			"Offset": "29",
			"DataType": "RTCMV3_UINT8"
		},
		"L2CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "30",
			"DataType": "RTCMV3_BIT2"
		},
		"L1L2PSRDiff": {
			"NoOfBytes": "2",
			"Offset": "31",
			"DataType": "RTCMV3_INT14"
		},
		"L2PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "33",
			"DataType": "RTCMV3_INT20"
		},
		"L2LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "37",
			"DataType": "RTCMV3_UINT7"
		},
		"L2CNR": {
			"NoOfBytes": "1",
			"Offset": "38",
			"DataType": "RTCMV3_UINT8"
		},
		"CABO": ["16"],
		"CAAO": ["23"]
	},
	"RTCM1019": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"GPSSatelliteID": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "RTCMV3_UINT6"
		},
		"GPSWeekNumber": {
			"NoOfBytes": "2",
			"Offset": "3",
			"DataType": "RTCMV3_UINT10"
		},
		"GPSSVAccuracy": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "RTCMV3_UINT4"
		},
		"GPSCodeOnL2": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "RTCMV3_BIT2"
		},
		"GPSIDOT": {
			"NoOfBytes": "2",
			"Offset": "7",
			"DataType": "RTCMV3_INT14"
		},
		"GPSIODE": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT8"
		},
		"GPSToc": {
			"NoOfBytes": "2",
			"Offset": "10",
			"DataType": "RTCMV3_UINT16"
		},
		"GPSAf2": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "RTCMV3_INT8"
		},
		"GPSAf1": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "RTCMV3_INT16"
		},
		"GPSAf0": {
			"NoOfBytes": "4",
			"Offset": "17",
			"DataType": "RTCMV3_INT22"
		},
		"GPSIODC": {
			"NoOfBytes": "2",
			"Offset": "21",
			"DataType": "RTCMV3_UINT10"
		},
		"GPSCrs": {
			"NoOfBytes": "4",
			"Offset": "23",
			"DataType": "RTCMV3_INT16"
		},
		"GPSDeltaN": {
			"NoOfBytes": "4",
			"Offset": "27",
			"DataType": "RTCMV3_INT16"
		},
		"GPSM0": {
			"NoOfBytes": "4",
			"Offset": "31",
			"DataType": "RTCMV3_INT32"
		},
		"GPSCuc": {
			"NoOfBytes": "4",
			"Offset": "35",
			"DataType": "RTCMV3_INT16"
		},
		"GPSEcc": {
			"NoOfBytes": "4",
			"Offset": "39",
			"DataType": "RTCMV3_UINT32"
		},
		"GPSCus": {
			"NoOfBytes": "4",
			"Offset": "43",
			"DataType": "RTCMV3_INT16"
		},
		"GPSSqrRootA": {
			"NoOfBytes": "4",
			"Offset": "47",
			"DataType": "RTCMV3_UINT32"
		},
		"GPSToe": {
			"NoOfBytes": "2",
			"Offset": "51",
			"DataType": "RTCMV3_UINT16"
		},
		"GPSCic": {
			"NoOfBytes": "4",
			"Offset": "53",
			"DataType": "RTCMV3_INT16"
		},
		"GPSOmega0": {
			"NoOfBytes": "4",
			"Offset": "57",
			"DataType": "RTCMV3_INT32"
		},
		"GPSCis": {
			"NoOfBytes": "4",
			"Offset": "61",
			"DataType": "RTCMV3_INT16"
		},
		"GPSI0": {
			"NoOfBytes": "4",
			"Offset": "65",
			"DataType": "RTCMV3_INT32"
		},
		"GPSCrc": {
			"NoOfBytes": "4",
			"Offset": "69",
			"DataType": "RTCMV3_INT16"
		},
		"GPSOmega": {
			"NoOfBytes": "4",
			"Offset": "73",
			"DataType": "RTCMV3_INT32"
		},
		"GPSOmegaDot": {
			"NoOfBytes": "4",
			"Offset": "77",
			"DataType": "RTCMV3_INT24"
		},
		"GPSTgd": {
			"NoOfBytes": "1",
			"Offset": "81",
			"DataType": "RTCMV3_INT8"
		},
		"GPSSVHealth": {
			"NoOfBytes": "1",
			"Offset": "82",
			"DataType": "RTCMV3_UINT6"
		},
		"GPSL2PDataFlag": {
			"NoOfBytes": "1",
			"Offset": "83",
			"DataType": "RTCMV3_BIT1"
		},
		"GPSFitInterval": {
			"NoOfBytes": "1",
			"Offset": "84",
			"DataType": "RTCMV3_BIT1"
		}
	},
	"RTCM1019IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"GPSSatelliteID": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "RTCMV3_UINT6"
		},
		"GPSWeekNumber": {
			"NoOfBytes": "2",
			"Offset": "3",
			"DataType": "RTCMV3_UINT10"
		},
		"GPSSVAccuracy": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "RTCMV3_UINT4"
		},
		"GPSCodeOnL2": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "RTCMV3_BIT2"
		},
		"GPSIDOT": {
			"NoOfBytes": "2",
			"Offset": "7",
			"DataType": "RTCMV3_INT14"
		},
		"GPSIODE": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT8"
		},
		"GPSToc": {
			"NoOfBytes": "2",
			"Offset": "10",
			"DataType": "RTCMV3_UINT16"
		},
		"GPSAf2": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "RTCMV3_INT8"
		},
		"GPSAf1": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "RTCMV3_INT16"
		},
		"GPSAf0": {
			"NoOfBytes": "4",
			"Offset": "17",
			"DataType": "RTCMV3_INT22"
		},
		"GPSIODC": {
			"NoOfBytes": "2",
			"Offset": "21",
			"DataType": "RTCMV3_UINT10"
		},
		"GPSCrs": {
			"NoOfBytes": "4",
			"Offset": "23",
			"DataType": "RTCMV3_INT16"
		},
		"GPSDeltaN": {
			"NoOfBytes": "4",
			"Offset": "27",
			"DataType": "RTCMV3_INT16"
		},
		"GPSM0": {
			"NoOfBytes": "4",
			"Offset": "31",
			"DataType": "RTCMV3_INT32"
		},
		"GPSCuc": {
			"NoOfBytes": "4",
			"Offset": "35",
			"DataType": "RTCMV3_INT16"
		},
		"GPSEcc": {
			"NoOfBytes": "4",
			"Offset": "39",
			"DataType": "RTCMV3_UINT32"
		},
		"GPSCus": {
			"NoOfBytes": "4",
			"Offset": "43",
			"DataType": "RTCMV3_INT16"
		},
		"GPSSqrRootA": {
			"NoOfBytes": "4",
			"Offset": "47",
			"DataType": "RTCMV3_UINT32"
		},
		"GPSToe": {
			"NoOfBytes": "2",
			"Offset": "51",
			"DataType": "RTCMV3_UINT16"
		},
		"GPSCic": {
			"NoOfBytes": "4",
			"Offset": "53",
			"DataType": "RTCMV3_INT16"
		},
		"GPSOmega0": {
			"NoOfBytes": "4",
			"Offset": "57",
			"DataType": "RTCMV3_INT32"
		},
		"GPSCis": {
			"NoOfBytes": "4",
			"Offset": "61",
			"DataType": "RTCMV3_INT16"
		},
		"GPSI0": {
			"NoOfBytes": "4",
			"Offset": "65",
			"DataType": "RTCMV3_INT32"
		},
		"GPSCrc": {
			"NoOfBytes": "4",
			"Offset": "69",
			"DataType": "RTCMV3_INT16"
		},
		"GPSOmega": {
			"NoOfBytes": "4",
			"Offset": "73",
			"DataType": "RTCMV3_INT32"
		},
		"GPSOmegaDot": {
			"NoOfBytes": "4",
			"Offset": "77",
			"DataType": "RTCMV3_INT24"
		},
		"GPSTgd": {
			"NoOfBytes": "1",
			"Offset": "81",
			"DataType": "RTCMV3_INT8"
		},
		"GPSSVHealth": {
			"NoOfBytes": "1",
			"Offset": "82",
			"DataType": "RTCMV3_UINT6"
		},
		"GPSL2PDataFlag": {
			"NoOfBytes": "1",
			"Offset": "83",
			"DataType": "RTCMV3_BIT1"
		},
		"GPSFitInterval": {
			"NoOfBytes": "1",
			"Offset": "84",
			"DataType": "RTCMV3_BIT1"
		}
	},
	"RTCM1020": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"GLOSatelliteID": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "RTCMV3_UINT6"
		},
		"GLOSatelliteFreqChanNumber": {
			"NoOfBytes": "1",
			"Offset": "3",
			"DataType": "RTCMV3_UINT5"
		},
		"GLOAlmanacHealth": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_BIT1"
		},
		"GLOAlmanacHealthAvailability": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "RTCMV3_BIT1"
		},
		"GLOP1": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "RTCMV3_BIT2"
		},
		"GLOTk": {
			"NoOfBytes": "2",
			"Offset": "7",
			"DataType": "RTCMV3_BIT12"
		},
		"GLOMSBBn": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_BIT1"
		},
		"GLOP2": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"GLOTb": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_UINT7"
		},
		"GLOXnTbFirstDerivative": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "RTCMV3_INTS24"
		},
		"GLOXnTb": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "RTCMV3_INTS27"
		},
		"GLOXnTbSecondDerivative": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "RTCMV3_INTS5"
		},
		"GLOYnTbFirstDerivative": {
			"NoOfBytes": "4",
			"Offset": "21",
			"DataType": "RTCMV3_INTS24"
		},
		"GLOYnTb": {
			"NoOfBytes": "4",
			"Offset": "25",
			"DataType": "RTCMV3_INTS27"
		},
		"GLOYnTbSecondDerivative": {
			"NoOfBytes": "1",
			"Offset": "29",
			"DataType": "RTCMV3_INTS5"
		},
		"GLOZnTbFirstDerivative": {
			"NoOfBytes": "4",
			"Offset": "30",
			"DataType": "RTCMV3_INTS24"
		},
		"GLOZnTb": {
			"NoOfBytes": "4",
			"Offset": "34",
			"DataType": "RTCMV3_INTS27"
		},
		"GLOZnTbSecondDerivative": {
			"NoOfBytes": "1",
			"Offset": "38",
			"DataType": "RTCMV3_INTS5"
		},
		"GLOP3": {
			"NoOfBytes": "1",
			"Offset": "39",
			"DataType": "RTCMV3_BIT1"
		},
		"GLOGammaTb": {
			"NoOfBytes": "2",
			"Offset": "40",
			"DataType": "RTCMV3_INTS11"
		},
		"GLOMP": {
			"NoOfBytes": "1",
			"Offset": "42",
			"DataType": "RTCMV3_BIT2"
		},
		"GLOM1ThirdString": {
			"NoOfBytes": "1",
			"Offset": "43",
			"DataType": "RTCMV3_BIT1"
		},
		"GLOTauTb": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "RTCMV3_INTS22"
		},
		"GLOMDeltaTau": {
			"NoOfBytes": "1",
			"Offset": "48",
			"DataType": "RTCMV3_INTS5"
		},
		"GLOEn": {
			"NoOfBytes": "1",
			"Offset": "49",
			"DataType": "RTCMV3_UINT5"
		},
		"GLOMP4": {
			"NoOfBytes": "1",
			"Offset": "50",
			"DataType": "RTCMV3_BIT1"
		},
		"GLOMFt": {
			"NoOfBytes": "1",
			"Offset": "51",
			"DataType": "RTCMV3_UINT4"
		},
		"GLOMNt": {
			"NoOfBytes": "2",
			"Offset": "52",
			"DataType": "RTCMV3_UINT11"
		},
		"GLOMM": {
			"NoOfBytes": "1",
			"Offset": "54",
			"DataType": "RTCMV3_BIT2"
		},
		"GLOAvailability": {
			"NoOfBytes": "1",
			"Offset": "55",
			"DataType": "RTCMV3_BIT1"
		},
		"GLONa": {
			"NoOfBytes": "2",
			"Offset": "56",
			"DataType": "RTCMV3_UINT11"
		},
		"GLOTauC": {
			"NoOfBytes": "4",
			"Offset": "58",
			"DataType": "RTCMV3_INTS32"
		},
		"GLOMN4": {
			"NoOfBytes": "1",
			"Offset": "62",
			"DataType": "RTCMV3_UINT5"
		},
		"GLOMTauGPS": {
			"NoOfBytes": "4",
			"Offset": "63",
			"DataType": "RTCMV3_INTS22"
		},
		"GLOM1nFifthString": {
			"NoOfBytes": "1",
			"Offset": "67",
			"DataType": "RTCMV3_BIT1"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "68",
			"DataType": "RTCMV3_BIT7"
		}
	},
	"RTCM1020IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"GLOSatelliteID": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "RTCMV3_UINT6"
		},
		"GLOSatelliteFreqChanNumber": {
			"NoOfBytes": "1",
			"Offset": "3",
			"DataType": "RTCMV3_UINT5"
		},
		"GLOAlmanacHealth": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_BIT1"
		},
		"GLOAlmanacHealthAvailability": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "RTCMV3_BIT1"
		},
		"GLOP1": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "RTCMV3_BIT2"
		},
		"GLOTk": {
			"NoOfBytes": "2",
			"Offset": "7",
			"DataType": "RTCMV3_BIT12"
		},
		"GLOMSBBn": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_BIT1"
		},
		"GLOP2": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"GLOTb": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_UINT7"
		},
		"GLOXnTbFirstDerivative": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "RTCMV3_INTS24"
		},
		"GLOXnTb": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "RTCMV3_INTS27"
		},
		"GLOXnTbSecondDerivative": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "RTCMV3_INTS5"
		},
		"GLOYnTbFirstDerivative": {
			"NoOfBytes": "4",
			"Offset": "21",
			"DataType": "RTCMV3_INTS24"
		},
		"GLOYnTb": {
			"NoOfBytes": "4",
			"Offset": "25",
			"DataType": "RTCMV3_INTS27"
		},
		"GLOYnTbSecondDerivative": {
			"NoOfBytes": "1",
			"Offset": "29",
			"DataType": "RTCMV3_INTS5"
		},
		"GLOZnTbFirstDerivative": {
			"NoOfBytes": "4",
			"Offset": "30",
			"DataType": "RTCMV3_INTS24"
		},
		"GLOZnTb": {
			"NoOfBytes": "4",
			"Offset": "34",
			"DataType": "RTCMV3_INTS27"
		},
		"GLOZnTbSecondDerivative": {
			"NoOfBytes": "1",
			"Offset": "38",
			"DataType": "RTCMV3_INTS5"
		},
		"GLOP3": {
			"NoOfBytes": "1",
			"Offset": "39",
			"DataType": "RTCMV3_BIT1"
		},
		"GLOGammaTb": {
			"NoOfBytes": "2",
			"Offset": "40",
			"DataType": "RTCMV3_INTS11"
		},
		"GLOMP": {
			"NoOfBytes": "1",
			"Offset": "42",
			"DataType": "RTCMV3_BIT2"
		},
		"GLOM1ThirdString": {
			"NoOfBytes": "1",
			"Offset": "43",
			"DataType": "RTCMV3_BIT1"
		},
		"GLOTauTb": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "RTCMV3_INTS22"
		},
		"GLOMDeltaTau": {
			"NoOfBytes": "1",
			"Offset": "48",
			"DataType": "RTCMV3_INTS5"
		},
		"GLOEn": {
			"NoOfBytes": "1",
			"Offset": "49",
			"DataType": "RTCMV3_UINT5"
		},
		"GLOMP4": {
			"NoOfBytes": "1",
			"Offset": "50",
			"DataType": "RTCMV3_BIT1"
		},
		"GLOMFt": {
			"NoOfBytes": "1",
			"Offset": "51",
			"DataType": "RTCMV3_UINT4"
		},
		"GLOMNt": {
			"NoOfBytes": "2",
			"Offset": "52",
			"DataType": "RTCMV3_UINT11"
		},
		"GLOMM": {
			"NoOfBytes": "1",
			"Offset": "54",
			"DataType": "RTCMV3_BIT2"
		},
		"GLOAvailability": {
			"NoOfBytes": "1",
			"Offset": "55",
			"DataType": "RTCMV3_BIT1"
		},
		"GLONa": {
			"NoOfBytes": "2",
			"Offset": "56",
			"DataType": "RTCMV3_UINT11"
		},
		"GLOTauC": {
			"NoOfBytes": "4",
			"Offset": "58",
			"DataType": "RTCMV3_INTS32"
		},
		"GLOMN4": {
			"NoOfBytes": "1",
			"Offset": "62",
			"DataType": "RTCMV3_UINT5"
		},
		"GLOMTauGPS": {
			"NoOfBytes": "4",
			"Offset": "63",
			"DataType": "RTCMV3_INTS22"
		},
		"GLOM1nFifthString": {
			"NoOfBytes": "1",
			"Offset": "67",
			"DataType": "RTCMV3_BIT1"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "68",
			"DataType": "RTCMV3_BIT7"
		}
	},
	"RTCMDATA1009": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT27"
		},
		"GNSSMessageFlag": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"NumSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT5"
		},
		"SmoothingIndicator": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"SmoothingInterval": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_BIT3"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "RTCMV3_UINT6"
		},
		"L1CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"FreqChannelNumber": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_UINT5"
		},
		"L1PSR": {
			"NoOfBytes": "4",
			"Offset": "19",
			"DataType": "RTCMV3_UINT25"
		},
		"L1PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "23",
			"DataType": "RTCMV3_INT20"
		},
		"L1LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_UINT7"
		},
		"CABO": ["16"],
		"CAAO": ["12"]
	},
	"RTCMDATA1010": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT27"
		},
		"GNSSMessageFlag": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"NumSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT5"
		},
		"SmoothingIndicator": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"SmoothingInterval": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_BIT3"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "RTCMV3_UINT6"
		},
		"L1CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"FreqChannelNumber": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_UINT5"
		},
		"L1PSR": {
			"NoOfBytes": "4",
			"Offset": "19",
			"DataType": "RTCMV3_UINT25"
		},
		"L1PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "23",
			"DataType": "RTCMV3_INT20"
		},
		"L1LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_UINT7"
		},
		"IntegerL1PSRModulusAmb": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "RTCMV3_UINT7"
		},
		"L1CNR": {
			"NoOfBytes": "1",
			"Offset": "29",
			"DataType": "RTCMV3_UINT8"
		},
		"CABO": ["16"],
		"CAAO": ["14"]
	},
	"RTCMDATA1011": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT27"
		},
		"GNSSMessageFlag": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"NumSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT5"
		},
		"SmoothingIndicator": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"SmoothingInterval": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_BIT3"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "RTCMV3_UINT6"
		},
		"L1CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"FreqChannelNumber": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_UINT5"
		},
		"L1PSR": {
			"NoOfBytes": "4",
			"Offset": "19",
			"DataType": "RTCMV3_UINT25"
		},
		"L1PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "23",
			"DataType": "RTCMV3_INT20"
		},
		"L1LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_UINT7"
		},
		"L2CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "RTCMV3_BIT2"
		},
		"L1L2PSRDiff": {
			"NoOfBytes": "2",
			"Offset": "29",
			"DataType": "RTCMV3_INT14"
		},
		"L2PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "31",
			"DataType": "RTCMV3_INT20"
		},
		"L2LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "35",
			"DataType": "RTCMV3_UINT7"
		},
		"CABO": ["16"],
		"CAAO": ["20"]
	},
	"RTCMDATA1012": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT27"
		},
		"GNSSMessageFlag": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"NumSignals": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT5"
		},
		"SmoothingIndicator": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"SmoothingInterval": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_BIT3"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "RTCMV3_UINT6"
		},
		"L1CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"FreqChannelNumber": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_UINT5"
		},
		"L1PSR": {
			"NoOfBytes": "4",
			"Offset": "19",
			"DataType": "RTCMV3_UINT25"
		},
		"L1PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "23",
			"DataType": "RTCMV3_INT20"
		},
		"L1LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_UINT7"
		},
		"IntegerL1PSRModulusAmb": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "RTCMV3_UINT7"
		},
		"L1CNR": {
			"NoOfBytes": "1",
			"Offset": "29",
			"DataType": "RTCMV3_UINT8"
		},
		"L2CodeIndicator": {
			"NoOfBytes": "1",
			"Offset": "30",
			"DataType": "RTCMV3_BIT2"
		},
		"L1L2PSRDiff": {
			"NoOfBytes": "2",
			"Offset": "31",
			"DataType": "RTCMV3_INT14"
		},
		"L2PhaseRangeMinusL1PSR": {
			"NoOfBytes": "4",
			"Offset": "33",
			"DataType": "RTCMV3_INT20"
		},
		"L2LockTimeIndicator": {
			"NoOfBytes": "1",
			"Offset": "37",
			"DataType": "RTCMV3_UINT7"
		},
		"L2CNR": {
			"NoOfBytes": "1",
			"Offset": "38",
			"DataType": "RTCMV3_UINT8"
		},
		"usReserved": {
			"NoOfBytes": "2",
			"Offset": "39",
			"DataType": "USHORT"
		},
		"CABO": ["16"],
		"CAAO": ["25"]
	},
	"RTCMDATA1019": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"GPSSatelliteID": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "RTCMV3_UINT6"
		},
		"GPSWeekNumber": {
			"NoOfBytes": "2",
			"Offset": "3",
			"DataType": "RTCMV3_UINT10"
		},
		"GPSSVAccuracy": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "RTCMV3_UINT4"
		},
		"GPSCodeOnL2": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "RTCMV3_BIT2"
		},
		"GPSIDOT": {
			"NoOfBytes": "2",
			"Offset": "7",
			"DataType": "RTCMV3_INT14"
		},
		"GPSIODE": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT8"
		},
		"GPSToc": {
			"NoOfBytes": "2",
			"Offset": "10",
			"DataType": "RTCMV3_UINT16"
		},
		"GPSAf2": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "RTCMV3_INT8"
		},
		"GPSAf1": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "RTCMV3_INT16"
		},
		"GPSAf0": {
			"NoOfBytes": "4",
			"Offset": "17",
			"DataType": "RTCMV3_INT22"
		},
		"GPSIODC": {
			"NoOfBytes": "2",
			"Offset": "21",
			"DataType": "RTCMV3_UINT10"
		},
		"GPSCrs": {
			"NoOfBytes": "4",
			"Offset": "23",
			"DataType": "RTCMV3_INT16"
		},
		"GPSDeltaN": {
			"NoOfBytes": "4",
			"Offset": "27",
			"DataType": "RTCMV3_INT16"
		},
		"GPSM0": {
			"NoOfBytes": "4",
			"Offset": "31",
			"DataType": "RTCMV3_INT32"
		},
		"GPSCuc": {
			"NoOfBytes": "4",
			"Offset": "35",
			"DataType": "RTCMV3_INT16"
		},
		"GPSEcc": {
			"NoOfBytes": "4",
			"Offset": "39",
			"DataType": "RTCMV3_UINT32"
		},
		"GPSCus": {
			"NoOfBytes": "4",
			"Offset": "43",
			"DataType": "RTCMV3_INT16"
		},
		"GPSSqrRootA": {
			"NoOfBytes": "4",
			"Offset": "47",
			"DataType": "RTCMV3_UINT32"
		},
		"GPSToe": {
			"NoOfBytes": "2",
			"Offset": "51",
			"DataType": "RTCMV3_UINT16"
		},
		"GPSCic": {
			"NoOfBytes": "4",
			"Offset": "53",
			"DataType": "RTCMV3_INT16"
		},
		"GPSOmega0": {
			"NoOfBytes": "4",
			"Offset": "57",
			"DataType": "RTCMV3_INT32"
		},
		"GPSCis": {
			"NoOfBytes": "4",
			"Offset": "61",
			"DataType": "RTCMV3_INT16"
		},
		"GPSI0": {
			"NoOfBytes": "4",
			"Offset": "65",
			"DataType": "RTCMV3_INT32"
		},
		"GPSCrc": {
			"NoOfBytes": "4",
			"Offset": "69",
			"DataType": "RTCMV3_INT16"
		},
		"GPSOmega": {
			"NoOfBytes": "4",
			"Offset": "73",
			"DataType": "RTCMV3_INT32"
		},
		"GPSOmegaDot": {
			"NoOfBytes": "4",
			"Offset": "77",
			"DataType": "RTCMV3_INT24"
		},
		"GPSTgd": {
			"NoOfBytes": "1",
			"Offset": "81",
			"DataType": "RTCMV3_INT8"
		},
		"GPSSVHealth": {
			"NoOfBytes": "1",
			"Offset": "82",
			"DataType": "RTCMV3_UINT6"
		},
		"GPSL2PDataFlag": {
			"NoOfBytes": "1",
			"Offset": "83",
			"DataType": "RTCMV3_BIT1"
		},
		"GPSFitInterval": {
			"NoOfBytes": "1",
			"Offset": "84",
			"DataType": "RTCMV3_BIT1"
		}
	},
	"RTCMDATA1020": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"GLOSatelliteID": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "RTCMV3_UINT6"
		},
		"GLOSatelliteFreqChanNumber": {
			"NoOfBytes": "1",
			"Offset": "3",
			"DataType": "RTCMV3_UINT5"
		},
		"GLOAlmanacHealth": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_BIT1"
		},
		"GLOAlmanacHealthAvailability": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "RTCMV3_BIT1"
		},
		"GLOP1": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "RTCMV3_BIT2"
		},
		"GLOTk": {
			"NoOfBytes": "2",
			"Offset": "7",
			"DataType": "RTCMV3_BIT12"
		},
		"GLOMSBBn": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_BIT1"
		},
		"GLOP2": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT1"
		},
		"GLOTb": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_UINT7"
		},
		"GLOXnTbFirstDerivative": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "RTCMV3_INTS24"
		},
		"GLOXnTb": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "RTCMV3_INTS27"
		},
		"GLOXnTbSecondDerivative": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "RTCMV3_INTS5"
		},
		"GLOYnTbFirstDerivative": {
			"NoOfBytes": "4",
			"Offset": "21",
			"DataType": "RTCMV3_INTS24"
		},
		"GLOYnTb": {
			"NoOfBytes": "4",
			"Offset": "25",
			"DataType": "RTCMV3_INTS27"
		},
		"GLOYnTbSecondDerivative": {
			"NoOfBytes": "1",
			"Offset": "29",
			"DataType": "RTCMV3_INTS5"
		},
		"GLOZnTbFirstDerivative": {
			"NoOfBytes": "4",
			"Offset": "30",
			"DataType": "RTCMV3_INTS24"
		},
		"GLOZnTb": {
			"NoOfBytes": "4",
			"Offset": "34",
			"DataType": "RTCMV3_INTS27"
		},
		"GLOZnTbSecondDerivative": {
			"NoOfBytes": "1",
			"Offset": "38",
			"DataType": "RTCMV3_INTS5"
		},
		"GLOP3": {
			"NoOfBytes": "1",
			"Offset": "39",
			"DataType": "RTCMV3_BIT1"
		},
		"GLOGammaTb": {
			"NoOfBytes": "2",
			"Offset": "40",
			"DataType": "RTCMV3_INTS11"
		},
		"GLOMP": {
			"NoOfBytes": "1",
			"Offset": "42",
			"DataType": "RTCMV3_BIT2"
		},
		"GLOM1ThirdString": {
			"NoOfBytes": "1",
			"Offset": "43",
			"DataType": "RTCMV3_BIT1"
		},
		"GLOTauTb": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "RTCMV3_INTS22"
		},
		"GLOMDeltaTau": {
			"NoOfBytes": "1",
			"Offset": "48",
			"DataType": "RTCMV3_INTS5"
		},
		"GLOEn": {
			"NoOfBytes": "1",
			"Offset": "49",
			"DataType": "RTCMV3_UINT5"
		},
		"GLOMP4": {
			"NoOfBytes": "1",
			"Offset": "50",
			"DataType": "RTCMV3_BIT1"
		},
		"GLOMFt": {
			"NoOfBytes": "1",
			"Offset": "51",
			"DataType": "RTCMV3_UINT4"
		},
		"GLOMNt": {
			"NoOfBytes": "2",
			"Offset": "52",
			"DataType": "RTCMV3_UINT11"
		},
		"GLOMM": {
			"NoOfBytes": "1",
			"Offset": "54",
			"DataType": "RTCMV3_BIT2"
		},
		"GLOAvailability": {
			"NoOfBytes": "1",
			"Offset": "55",
			"DataType": "RTCMV3_BIT1"
		},
		"GLONa": {
			"NoOfBytes": "2",
			"Offset": "56",
			"DataType": "RTCMV3_UINT11"
		},
		"GLOTauC": {
			"NoOfBytes": "4",
			"Offset": "58",
			"DataType": "RTCMV3_INTS32"
		},
		"GLOMN4": {
			"NoOfBytes": "1",
			"Offset": "62",
			"DataType": "RTCMV3_UINT5"
		},
		"GLOMTauGPS": {
			"NoOfBytes": "4",
			"Offset": "63",
			"DataType": "RTCMV3_INTS22"
		},
		"GLOM1nFifthString": {
			"NoOfBytes": "1",
			"Offset": "67",
			"DataType": "RTCMV3_BIT1"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "68",
			"DataType": "RTCMV3_BIT7"
		}
	},
	"RTCM59GLO": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ucMySubType": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "UCHAR"
		},
		"aclMyDiffData": {
			"NoOfBytes": "4",
			"Offset": "25",
			"DataType": "ClassArray"
		},
		"ulMyScale": {
			"NoOfBytes": "4",
			"Offset": "29",
			"DataType": "ULONG"
		},
		"ulMyUDRE": {
			"NoOfBytes": "4",
			"Offset": "33",
			"DataType": "ULONG"
		},
		"ulMySvPrn": {
			"NoOfBytes": "4",
			"Offset": "37",
			"DataType": "ULONG"
		},
		"iMyCor": {
			"NoOfBytes": "4",
			"Offset": "41",
			"DataType": "INT"
		},
		"iMyCorRate": {
			"NoOfBytes": "4",
			"Offset": "45",
			"DataType": "INT"
		},
		"ulMyChangeBit": {
			"NoOfBytes": "4",
			"Offset": "49",
			"DataType": "ULONG"
		},
		"ulMyTk": {
			"NoOfBytes": "4",
			"Offset": "53",
			"DataType": "ULONG"
		},
		"CABO": ["29"],
		"CAAO": ["28"]
	},
	"RTCM59GLOIN": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ucMySubtype": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "UCHAR"
		},
		"aclMyDiffData": {
			"NoOfBytes": "4",
			"Offset": "25",
			"DataType": "ClassArray"
		},
		"ulMyScale": {
			"NoOfBytes": "4",
			"Offset": "29",
			"DataType": "ULONG"
		},
		"ulMyUDRE": {
			"NoOfBytes": "4",
			"Offset": "33",
			"DataType": "ULONG"
		},
		"ulMySvPrn": {
			"NoOfBytes": "4",
			"Offset": "37",
			"DataType": "ULONG"
		},
		"iMyCor": {
			"NoOfBytes": "4",
			"Offset": "41",
			"DataType": "INT"
		},
		"iMyCorRate": {
			"NoOfBytes": "4",
			"Offset": "45",
			"DataType": "INT"
		},
		"ulMyChangeBit": {
			"NoOfBytes": "4",
			"Offset": "49",
			"DataType": "ULONG"
		},
		"ulMyTk": {
			"NoOfBytes": "4",
			"Offset": "53",
			"DataType": "ULONG"
		},
		"CABO": ["29"],
		"CAAO": ["28"]
	},
	"RTCMDATA59GLO": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ucMySubType": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "UCHAR"
		},
		"aclMyDiffData": {
			"NoOfBytes": "4",
			"Offset": "25",
			"DataType": "ClassArray"
		},
		"ulMyScale": {
			"NoOfBytes": "4",
			"Offset": "29",
			"DataType": "ULONG"
		},
		"ulMyUDRE": {
			"NoOfBytes": "4",
			"Offset": "33",
			"DataType": "ULONG"
		},
		"ulMySvPrn": {
			"NoOfBytes": "4",
			"Offset": "37",
			"DataType": "ULONG"
		},
		"iMyCor": {
			"NoOfBytes": "4",
			"Offset": "41",
			"DataType": "INT"
		},
		"iMyCorRate": {
			"NoOfBytes": "4",
			"Offset": "45",
			"DataType": "INT"
		},
		"ulMyChangeBit": {
			"NoOfBytes": "4",
			"Offset": "49",
			"DataType": "ULONG"
		},
		"ulMyTk": {
			"NoOfBytes": "4",
			"Offset": "53",
			"DataType": "ULONG"
		},
		"CABO": ["29"],
		"CAAO": ["28"]
	},
	"UNLOCKOUTSYSTEM": {
		"eMySystem": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SystemTypeEnum"
		}
	},
	"RTKTIMEOUT": {
		"ulMyRTKTimeOut": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"DIFFCODEBIASCONTROL": {
		"eMyEnableEnum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"SETMESSAGE": {
		"MessageName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"MessageID": {
			"NoOfBytes": "4",
			"Offset": "1",
			"DataType": "UINT"
		},
		"MessageType": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "DynamicMsgTypeEnum"
		},
		"NumSaveParams": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "UCHAR"
		},
		"MessageParams": {
			"NoOfBytes": "4",
			"Offset": "10",
			"DataType": "ClassArray"
		},
		"DataType": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "STRING"
		},
		"ConvertString": {
			"NoOfBytes": "1",
			"Offset": "47",
			"DataType": "STRING"
		},
		"ArraySize": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "UINT"
		},
		"MinValue": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "LONG"
		},
		"MaxValue": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "LONG"
		},
		"CABO": ["14"],
		"CAAO": ["46"]
	},
	"EXTREFSTATION": {
		"ulMyStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyGpsWeek": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyGPSSeconds": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"eMyRefType": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "RefStationEnum"
		},
		"acMyStationID": {
			"NoOfBytes": "1",
			"Offset": "44",
			"DataType": "STRING"
		},
		"fMyARPHeight": {
			"NoOfBytes": "4",
			"Offset": "45",
			"DataType": "FLOAT"
		},
		"eMySolutionStatus": {
			"NoOfBytes": "4",
			"Offset": "49",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "53",
			"DataType": "SolTypeEnum"
		},
		"fMyDifferentialAge": {
			"NoOfBytes": "4",
			"Offset": "57",
			"DataType": "FLOAT"
		},
		"ulMyReserved1": {
			"NoOfBytes": "4",
			"Offset": "61",
			"DataType": "ULONG"
		},
		"ulMyReserved2": {
			"NoOfBytes": "4",
			"Offset": "65",
			"DataType": "ULONG"
		}
	},
	"RTKNETWORK": {
		"eMyRTKNetwork": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RTKNetworkEnum"
		},
		"ulMyNetworkNumber": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"RTKDOP": {
		"fMyGDOP": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		},
		"fMyPDOP": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"fMyHDOP": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyHTDOP": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyTDOP": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyGPSElevMask": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"aulMySats": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "VariableULONGArray"
		}
	},
	"TUNNELESCAPE": {
		"eEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"aucTunnelEscape": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "VarHEXBYTEType"
		},
		"CABO": ["4"],
		"CAAO": ["5"]
	},
	"HWMONITOR": {
		"aclMyMeasurements": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"fMyValue": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"ulMyStatus": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "HEXULONG"
		}
	},
	"RTCMDATA22GG": {
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyZcount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySequenceNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"lMyL1AntDeltaX": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "LONG"
		},
		"lMyL1AntDeltaY": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "LONG"
		},
		"lMyL1AntDeltaZ": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "LONG"
		},
		"clMyRTCM22AntHgtL1": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ClassArray"
		},
		"ulSpareBits": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulMyConstellation": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulMyAntennaType": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMyAntennaRefPoint": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"bNoHeight": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "BOOL"
		},
		"ulAntennaPhaseHeight": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"clMyRTCM22AntInfL2": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ClassArray"
		},
		"lMyL2AntDeltaX": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "LONG"
		},
		"lMyL2AntDeltaY": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "LONG"
		},
		"lMyL2AntDeltaZ": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "LONG"
		},
		"CABO": ["68"],
		"CAAO": ["12"]
	},
	"ENCODERSETUP": {
		"ulMyEncoder": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyMode": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"eMyRange": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "EncoderRangeEnum"
		}
	},
	"PDPMODE": {
		"eMyMode": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PDPFilterModeEnum"
		},
		"eMyDynamics": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "PDPFilterDynamicsEnum"
		}
	},
	"HEADING": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"fMyBLength": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyHeading": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyPitch": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fFloat": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"fMyHeadingStdDev": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"fMyPitchStdDev": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "32",
			"DataType": "FixedCharArray"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "36",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "37",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "38",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "39",
			"DataType": "UCHAR"
		},
		"ucMyMeasurementSource": {
			"NoOfBytes": "1",
			"Offset": "40",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "41",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "42",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "43",
			"DataType": "UCHAR"
		}
	},
	"RAWSBASFRAME": {
		"iMyFrameDecoderNum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INT"
		},
		"ulMyPrn": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyWAASMsgId": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"aucMyRawFrameData": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "FixedHEXBYTEArray"
		},
		"ulMySignalChannelNum": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "ULONG"
		}
	},
	"RAWGLOFRAME": {
		"ulMyFrameNumber": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"usMySloto": {
			"NoOfBytes": "2",
			"Offset": "4",
			"DataType": "USHORT"
		},
		"usMyFreqo": {
			"NoOfBytes": "2",
			"Offset": "6",
			"DataType": "USHORT"
		},
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyFrameDecoderNumber": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMySignalChannelNumber": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"aclMyRawString": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ClassArray"
		},
		"aucMyString": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "FixedHEXBYTEArray"
		},
		"ucMyReserved": {
			"NoOfBytes": "1",
			"Offset": "39",
			"DataType": "UCHAR"
		},
		"CABO": ["28"],
		"CAAO": ["12"]
	},
	"RAWGLOSTRING": {
		"ucMySlot": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "UCHAR"
		},
		"cMyFreq": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "CHAR"
		},
		"aucMyString": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "FixedHEXBYTEArray"
		},
		"ucMyReserved": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "UCHAR"
		}
	},
	"SBAS0": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"SBAS1": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"aucMyPRNMask": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedHEXBYTEArray"
		},
		"ulMyIODP": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "ULONG"
		}
	},
	"SBAS10": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyBrrc": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyCltc_lsb": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyCltc_v1": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyIltc_v1": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyCltc_v0": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyIltc_v0": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMyCgeo_lsb": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyCgeo_v": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMyIgeo": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"ulMyCer": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulMyCiono_step": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulMyIiono": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMyCiono_ramp": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"ulMyRSSUDRE": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"ulMyRSSIono": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"aulMySpareBits": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"SBAS12": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMyA1": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyA0": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"ulMyt0t": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"usMyWN": {
			"NoOfBytes": "2",
			"Offset": "24",
			"DataType": "USHORT"
		},
		"sMyDtLS": {
			"NoOfBytes": "2",
			"Offset": "26",
			"DataType": "SHORT"
		},
		"usMyWNLSF": {
			"NoOfBytes": "2",
			"Offset": "28",
			"DataType": "USHORT"
		},
		"usMyDN": {
			"NoOfBytes": "2",
			"Offset": "30",
			"DataType": "USHORT"
		},
		"usMyDtLSF": {
			"NoOfBytes": "2",
			"Offset": "32",
			"DataType": "SHORT"
		},
		"usMyUTCID": {
			"NoOfBytes": "2",
			"Offset": "34",
			"DataType": "USHORT"
		},
		"ulMyGPSTOW": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"ulMyGPSWN": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"bMyGlonassIndicator": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "BOOL"
		},
		"aucMyReservedBits": {
			"NoOfBytes": "1",
			"Offset": "48",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"SBAS17": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"aclMyEntries": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ClassArray"
		},
		"usMyDataID": {
			"NoOfBytes": "2",
			"Offset": "8",
			"DataType": "USHORT"
		},
		"usMyPRN": {
			"NoOfBytes": "2",
			"Offset": "10",
			"DataType": "USHORT"
		},
		"usMyHealth": {
			"NoOfBytes": "2",
			"Offset": "12",
			"DataType": "USHORT"
		},
		"lMyX": {
			"NoOfBytes": "4",
			"Offset": "14",
			"DataType": "LONG"
		},
		"lMyY": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "LONG"
		},
		"lMyZ": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "LONG"
		},
		"lMyXVel": {
			"NoOfBytes": "4",
			"Offset": "26",
			"DataType": "LONG"
		},
		"lMyYVel": {
			"NoOfBytes": "4",
			"Offset": "30",
			"DataType": "LONG"
		},
		"lMyZVel": {
			"NoOfBytes": "4",
			"Offset": "34",
			"DataType": "LONG"
		},
		"ulMyt0": {
			"NoOfBytes": "4",
			"Offset": "38",
			"DataType": "ULONG"
		},
		"CABO": ["8"],
		"CAAO": ["34"]
	},
	"SBAS18": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyNumBands": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyBandNum": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyIODI": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"aucMyIGPMask": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "FixedHEXBYTEArray"
		},
		"ulMySpareBit": {
			"NoOfBytes": "4",
			"Offset": "17",
			"DataType": "ULONG"
		}
	},
	"SBAS2": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"IODF": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"IODP": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"alMyPRC": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FixedLONGArray"
		},
		"aulMyUDREI": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FixedULONGArray"
		}
	},
	"SBAS24": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"alMyPRC": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FixedLONGArray"
		},
		"aulMyUDREI": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FixedULONGArray"
		},
		"ulMyIODP": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "ULONG"
		},
		"ulMyBlockID": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyIODF": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMySpare": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "ULONG"
		},
		"ulMyVelocityCode": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyPRNMaskNumber1": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMyIODE1": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"lMyDX1": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "LONG"
		},
		"lMyDY1": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "LONG"
		},
		"lMyDZ1": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "LONG"
		},
		"lMyaF01": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "LONG"
		},
		"ulMyPRNMaskNumber2": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"ulMyIODE2": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"lMyDX2orDDX": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "LONG"
		},
		"lMyDY2orDDY": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "LONG"
		},
		"lMyDZ2orDDZ": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "LONG"
		},
		"lMyaF02oraF1": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "LONG"
		},
		"ulMyTOD": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "ULONG"
		}
	},
	"SBAS25": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyVelocityCode": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "ULONG"
		},
		"ulMyPRNMaskNumber1": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "ULONG"
		},
		"ulMyIODE1": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "ULONG"
		},
		"lMyDX1": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "LONG"
		},
		"lMyDY1": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "LONG"
		},
		"lMyDZ1": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "LONG"
		},
		"lMyaF01": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "LONG"
		},
		"ulMyPRNMaskNumber2": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "ULONG"
		},
		"ulMyIODE2": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "ULONG"
		},
		"lMyDX2orDDX": {
			"NoOfBytes": "4",
			"Offset": "104",
			"DataType": "LONG"
		},
		"lMyDY2orDDY": {
			"NoOfBytes": "4",
			"Offset": "108",
			"DataType": "LONG"
		},
		"lMyDZ2orDDZ": {
			"NoOfBytes": "4",
			"Offset": "112",
			"DataType": "LONG"
		},
		"lMyaF02oraF1": {
			"NoOfBytes": "4",
			"Offset": "116",
			"DataType": "LONG"
		},
		"ulMyTOD": {
			"NoOfBytes": "4",
			"Offset": "120",
			"DataType": "ULONG"
		},
		"ulMyIODP": {
			"NoOfBytes": "4",
			"Offset": "124",
			"DataType": "ULONG"
		},
		"ulMySpare": {
			"NoOfBytes": "4",
			"Offset": "128",
			"DataType": "ULONG"
		}
	},
	"SBAS26": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyBandNum": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyBlockID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"aclMyGridPointData": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"ulMyIGPVDE": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyGIVEI": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyIODI": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMySpareBits": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"CABO": ["16"],
		"CAAO": ["16"]
	},
	"SBAS27": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyIODS": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyNumServiceMsgs": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyServiceMsgNum": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyPriorityCode": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyUDREInside": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyUDREOutside": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"aclMyRegions": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ClassArray"
		},
		"lMyLat1": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "LONG"
		},
		"lMyLong1": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "LONG"
		},
		"lMyLat2": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "LONG"
		},
		"lMyLong2": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "LONG"
		},
		"ulMyShape": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMyt0": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"CABO": ["32"],
		"CAAO": ["24"]
	},
	"SBAS3": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"IODF": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"IODP": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"alMyPRC": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FixedLONGArray"
		},
		"aulMyUDREI": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FixedULONGArray"
		}
	},
	"SBAS32": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"IODP": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"alMyPRC": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FixedLONGArray"
		},
		"aulMyUDREI": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FixedULONGArray"
		}
	},
	"SBAS33": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"IODP": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"alMyPRC": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FixedLONGArray"
		},
		"aulMyUDREI": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FixedULONGArray"
		}
	},
	"SBAS34": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"IODP": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"alMyPRC": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FixedLONGArray"
		},
		"aulMyUDREI": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FixedULONGArray"
		}
	},
	"SBAS35": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"IODP": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"alMyPRC": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FixedLONGArray"
		},
		"aulMyUDREI": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FixedULONGArray"
		}
	},
	"SBAS4": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"IODF": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"IODP": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"alMyPRC": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FixedLONGArray"
		},
		"aulMyUDREI": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FixedULONGArray"
		}
	},
	"SBAS45": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyPRNMaskNumber": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulMyIODE": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"lMyDX": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "LONG"
		},
		"lMyDY": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "LONG"
		},
		"lMyDZ": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "LONG"
		},
		"lMyDDX": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "LONG"
		},
		"lMyDDY": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "LONG"
		},
		"lMyDDZ": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "LONG"
		},
		"lMyDAF0": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "LONG"
		},
		"ulMyTOD": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "ULONG"
		},
		"ulMyIODP": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "ULONG"
		}
	},
	"SBAS5": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"IODF": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"IODP": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"alMyPRC": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FixedLONGArray"
		},
		"aulMyUDREI": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FixedULONGArray"
		}
	},
	"SBAS6": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyIODF2": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyIODF3": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyIODF4": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyIODF5": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"aulMyUDREI": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FixedULONGArray"
		}
	},
	"SBAS7": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMySystemLatency": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyIODP": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySpareBits": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"aulMyDegradationFactor": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FixedULONGArray"
		}
	},
	"SBAS9": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyIODN": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyt0": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyURA": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyXVel": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMyYVel": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"dMyZVel": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		},
		"dMyXAccel": {
			"NoOfBytes": "8",
			"Offset": "64",
			"DataType": "DOUBLE"
		},
		"dMyYAccel": {
			"NoOfBytes": "8",
			"Offset": "72",
			"DataType": "DOUBLE"
		},
		"dMyZAccel": {
			"NoOfBytes": "8",
			"Offset": "80",
			"DataType": "DOUBLE"
		},
		"dMyaf0": {
			"NoOfBytes": "8",
			"Offset": "88",
			"DataType": "DOUBLE"
		},
		"dMyaf1": {
			"NoOfBytes": "8",
			"Offset": "96",
			"DataType": "DOUBLE"
		},
		"CABO": ["4"],
		"CAAO": ["104"]
	},
	"SBASCORR": {
		"aclMyEntries": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyIODE": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"fMyCorrection": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyStdDev": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		}
	},
	"SBASCORRECTION": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"eMyMode": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "LBandTestModeEnum"
		}
	},
	"SBASECUTOFF": {
		"fMyElevationCutoffAngle": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		}
	},
	"SBASTIMEOUT": {
		"eMyTimeOutEnum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "TimeOutEnum"
		},
		"dMyTimeOut": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dReserved": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		}
	},
	"CMRDATAGLOOBS": {
		"ulMyCMRSync": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyLength": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyVersion": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyStationID": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMessageType": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMyNumberofSv": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyEpochTime": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMyClockBiasValid": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"lMyClockOffset": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "LONG"
		},
		"aclMyCMRBody": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ClassArray"
		},
		"ulMySlotNumber": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"bMyCodeFlag": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "BOOL"
		},
		"bMyL1PhaseValid": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "BOOL"
		},
		"bMyIsL2Present": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "BOOL"
		},
		"ulMyL1Psr": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ULONG"
		},
		"lMyL1CarrierOffset": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "LONG"
		},
		"ulMyL1Snr": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "ULONG"
		},
		"ulMyL1SlipCount": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "ULONG"
		},
		"bMyIsL2Code": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "BOOL"
		},
		"bMyCodeType": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "BOOL"
		},
		"bMyIsL2CodeValid": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "BOOL"
		},
		"bMyIsL2PhaseValid": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "BOOL"
		},
		"bMyPhaseFull": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "BOOL"
		},
		"ulMyReserved": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "ULONG"
		},
		"lMyL2RangeOffset": {
			"NoOfBytes": "4",
			"Offset": "104",
			"DataType": "LONG"
		},
		"lMyL2CarrierOffset": {
			"NoOfBytes": "4",
			"Offset": "108",
			"DataType": "LONG"
		},
		"ulMyL2Snr": {
			"NoOfBytes": "4",
			"Offset": "112",
			"DataType": "ULONG"
		},
		"ulMyL2SlipCount": {
			"NoOfBytes": "4",
			"Offset": "116",
			"DataType": "ULONG"
		},
		"CABO": ["48"],
		"CAAO": ["72"]
	},
	"DLLTIMECONST": {
		"eMySignalType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SignalTypeEnum"
		},
		"ulMyTimeConstSec": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"RTCM1037": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"NetworkID": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "RTCMV3_UINT8"
		},
		"SubNetworkID": {
			"NoOfBytes": "1",
			"Offset": "3",
			"DataType": "RTCMV3_UINT4"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT20"
		},
		"MultipleMessageIndicator": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"MasterReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "9",
			"DataType": "RTCMV3_UINT12"
		},
		"AuxReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "11",
			"DataType": "RTCMV3_UINT12"
		},
		"NumSats": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "RTCMV3_UINT4"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "14",
			"DataType": "ClassArray"
		},
		"AmbiguityStatusFlag": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_BIT2"
		},
		"NonSyncCount": {
			"NoOfBytes": "1",
			"Offset": "19",
			"DataType": "RTCMV3_UINT3"
		},
		"IonoCarrierPhaseCorrDiff": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "RTCMV3_INT17"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "RTCMV3_UINT6"
		},
		"CABO": ["18"],
		"CAAO": ["7"]
	},
	"RTCM1037IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"NetworkID": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "RTCMV3_UINT8"
		},
		"SubNetworkID": {
			"NoOfBytes": "1",
			"Offset": "3",
			"DataType": "RTCMV3_UINT4"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT20"
		},
		"MultipleMessageIndicator": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"MasterReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "9",
			"DataType": "RTCMV3_UINT12"
		},
		"AuxReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "11",
			"DataType": "RTCMV3_UINT12"
		},
		"NumSats": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "RTCMV3_UINT4"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "14",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_UINT6"
		},
		"AmbiguityStatusFlag": {
			"NoOfBytes": "1",
			"Offset": "19",
			"DataType": "RTCMV3_BIT2"
		},
		"NonSyncCount": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "RTCMV3_UINT3"
		},
		"IonoCarrierPhaseCorrDiff": {
			"NoOfBytes": "4",
			"Offset": "21",
			"DataType": "RTCMV3_INT17"
		},
		"CABO": ["18"],
		"CAAO": ["7"]
	},
	"RTCM1038": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"NetworkID": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "RTCMV3_UINT8"
		},
		"SubNetworkID": {
			"NoOfBytes": "1",
			"Offset": "3",
			"DataType": "RTCMV3_UINT4"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT20"
		},
		"MultipleMessageIndicator": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"MasterReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "9",
			"DataType": "RTCMV3_UINT12"
		},
		"AuxReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "11",
			"DataType": "RTCMV3_UINT12"
		},
		"NumSats": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "RTCMV3_UINT4"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "14",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_UINT6"
		},
		"AmbiguityStatusFlag": {
			"NoOfBytes": "1",
			"Offset": "19",
			"DataType": "RTCMV3_BIT2"
		},
		"NonSyncCount": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "RTCMV3_UINT3"
		},
		"GeoCarrierPhaseCorrDiff": {
			"NoOfBytes": "4",
			"Offset": "21",
			"DataType": "RTCMV3_INT17"
		},
		"IODE": {
			"NoOfBytes": "1",
			"Offset": "25",
			"DataType": "RTCMV3_BIT8"
		},
		"CABO": ["18"],
		"CAAO": ["8"]
	},
	"RTCM1038IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"NetworkID": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "RTCMV3_UINT8"
		},
		"SubNetworkID": {
			"NoOfBytes": "1",
			"Offset": "3",
			"DataType": "RTCMV3_UINT4"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT20"
		},
		"MultipleMessageIndicator": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"MasterReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "9",
			"DataType": "RTCMV3_UINT12"
		},
		"AuxReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "11",
			"DataType": "RTCMV3_UINT12"
		},
		"NumSats": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "RTCMV3_UINT4"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "14",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_UINT6"
		},
		"AmbiguityStatusFlag": {
			"NoOfBytes": "1",
			"Offset": "19",
			"DataType": "RTCMV3_BIT2"
		},
		"NonSyncCount": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "RTCMV3_UINT3"
		},
		"GeoCarrierPhaseCorrDiff": {
			"NoOfBytes": "4",
			"Offset": "21",
			"DataType": "RTCMV3_INT17"
		},
		"IODE": {
			"NoOfBytes": "1",
			"Offset": "25",
			"DataType": "RTCMV3_BIT8"
		},
		"CABO": ["18"],
		"CAAO": ["8"]
	},
	"RTCM1039": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"NetworkID": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "RTCMV3_UINT8"
		},
		"SubNetworkID": {
			"NoOfBytes": "1",
			"Offset": "3",
			"DataType": "RTCMV3_UINT4"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT20"
		},
		"MultipleMessageIndicator": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"MasterReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "9",
			"DataType": "RTCMV3_UINT12"
		},
		"AuxReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "11",
			"DataType": "RTCMV3_UINT12"
		},
		"NumSats": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "RTCMV3_UINT4"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "14",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_UINT6"
		},
		"AmbiguityStatusFlag": {
			"NoOfBytes": "1",
			"Offset": "19",
			"DataType": "RTCMV3_BIT2"
		},
		"NonSyncCount": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "RTCMV3_UINT3"
		},
		"GeoCarrierPhaseCorrDiff": {
			"NoOfBytes": "4",
			"Offset": "21",
			"DataType": "RTCMV3_INT17"
		},
		"IODE": {
			"NoOfBytes": "1",
			"Offset": "25",
			"DataType": "RTCMV3_BIT8"
		},
		"IonoCarrierPhaseCorrDiff": {
			"NoOfBytes": "4",
			"Offset": "26",
			"DataType": "RTCMV3_INT17"
		},
		"CABO": ["18"],
		"CAAO": ["12"]
	},
	"RTCM1039IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"NetworkID": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "RTCMV3_UINT8"
		},
		"SubNetworkID": {
			"NoOfBytes": "1",
			"Offset": "3",
			"DataType": "RTCMV3_UINT4"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT20"
		},
		"MultipleMessageIndicator": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"MasterReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "9",
			"DataType": "RTCMV3_UINT12"
		},
		"AuxReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "11",
			"DataType": "RTCMV3_UINT12"
		},
		"NumSats": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "RTCMV3_UINT4"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "14",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_UINT6"
		},
		"AmbiguityStatusFlag": {
			"NoOfBytes": "1",
			"Offset": "19",
			"DataType": "RTCMV3_BIT2"
		},
		"NonSyncCount": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "RTCMV3_UINT3"
		},
		"GeoCarrierPhaseCorrDiff": {
			"NoOfBytes": "4",
			"Offset": "21",
			"DataType": "RTCMV3_INT17"
		},
		"IODE": {
			"NoOfBytes": "1",
			"Offset": "25",
			"DataType": "RTCMV3_BIT8"
		},
		"IonoCarrierPhaseCorrDiff": {
			"NoOfBytes": "4",
			"Offset": "26",
			"DataType": "RTCMV3_INT17"
		},
		"CABO": ["18"],
		"CAAO": ["12"]
	},
	"RTCM1015": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"NetworkID": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "RTCMV3_UINT8"
		},
		"SubNetworkID": {
			"NoOfBytes": "1",
			"Offset": "3",
			"DataType": "RTCMV3_UINT4"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT23"
		},
		"MultipleMessageIndicator": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"MasterReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "9",
			"DataType": "RTCMV3_UINT12"
		},
		"AuxReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "11",
			"DataType": "RTCMV3_UINT12"
		},
		"NumSats": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "RTCMV3_UINT4"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "14",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_UINT6"
		},
		"AmbiguityStatusFlag": {
			"NoOfBytes": "1",
			"Offset": "19",
			"DataType": "RTCMV3_BIT2"
		},
		"NonSyncCount": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "RTCMV3_UINT3"
		},
		"IonoCarrierPhaseCorrDiff": {
			"NoOfBytes": "4",
			"Offset": "21",
			"DataType": "RTCMV3_INT17"
		},
		"CABO": ["18"],
		"CAAO": ["7"]
	},
	"RTCM1015IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"NetworkID": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "RTCMV3_UINT8"
		},
		"SubNetworkID": {
			"NoOfBytes": "1",
			"Offset": "3",
			"DataType": "RTCMV3_UINT4"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT23"
		},
		"MultipleMessageIndicator": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"MasterReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "9",
			"DataType": "RTCMV3_UINT12"
		},
		"AuxReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "11",
			"DataType": "RTCMV3_UINT12"
		},
		"NumSats": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "RTCMV3_UINT4"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "14",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_UINT6"
		},
		"AmbiguityStatusFlag": {
			"NoOfBytes": "1",
			"Offset": "19",
			"DataType": "RTCMV3_BIT2"
		},
		"NonSyncCount": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "RTCMV3_UINT3"
		},
		"IonoCarrierPhaseCorrDiff": {
			"NoOfBytes": "4",
			"Offset": "21",
			"DataType": "RTCMV3_INT17"
		},
		"CABO": ["18"],
		"CAAO": ["7"]
	},
	"RTCM1016": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"NetworkID": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "RTCMV3_UINT8"
		},
		"SubNetworkID": {
			"NoOfBytes": "1",
			"Offset": "3",
			"DataType": "RTCMV3_UINT4"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT23"
		},
		"MultipleMessageIndicator": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"MasterReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "9",
			"DataType": "RTCMV3_UINT12"
		},
		"AuxReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "11",
			"DataType": "RTCMV3_UINT12"
		},
		"NumSats": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "RTCMV3_UINT4"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "14",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_UINT6"
		},
		"AmbiguityStatusFlag": {
			"NoOfBytes": "1",
			"Offset": "19",
			"DataType": "RTCMV3_BIT2"
		},
		"NonSyncCount": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "RTCMV3_UINT3"
		},
		"GeoCarrierPhaseCorrDiff": {
			"NoOfBytes": "4",
			"Offset": "21",
			"DataType": "RTCMV3_INT17"
		},
		"IODE": {
			"NoOfBytes": "1",
			"Offset": "25",
			"DataType": "RTCMV3_UINT8"
		},
		"CABO": ["18"],
		"CAAO": ["8"]
	},
	"RTCM1016IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"NetworkID": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "RTCMV3_UINT8"
		},
		"SubNetworkID": {
			"NoOfBytes": "1",
			"Offset": "3",
			"DataType": "RTCMV3_UINT4"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT23"
		},
		"MultipleMessageIndicator": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"MasterReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "9",
			"DataType": "RTCMV3_UINT12"
		},
		"AuxReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "11",
			"DataType": "RTCMV3_UINT12"
		},
		"NumSats": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "RTCMV3_UINT4"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "14",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_UINT6"
		},
		"AmbiguityStatusFlag": {
			"NoOfBytes": "1",
			"Offset": "19",
			"DataType": "RTCMV3_BIT2"
		},
		"NonSyncCount": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "RTCMV3_UINT3"
		},
		"GeoCarrierPhaseCorrDiff": {
			"NoOfBytes": "4",
			"Offset": "21",
			"DataType": "RTCMV3_INT17"
		},
		"IODE": {
			"NoOfBytes": "1",
			"Offset": "25",
			"DataType": "RTCMV3_UINT8"
		},
		"CABO": ["18"],
		"CAAO": ["8"]
	},
	"RTCM1017": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"NetworkID": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "RTCMV3_UINT8"
		},
		"SubNetworkID": {
			"NoOfBytes": "1",
			"Offset": "3",
			"DataType": "RTCMV3_UINT4"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT23"
		},
		"MultipleMessageIndicator": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"MasterReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "9",
			"DataType": "RTCMV3_UINT12"
		},
		"AuxReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "11",
			"DataType": "RTCMV3_UINT12"
		},
		"NumSats": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "RTCMV3_UINT4"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "14",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_UINT6"
		},
		"AmbiguityStatusFlag": {
			"NoOfBytes": "1",
			"Offset": "19",
			"DataType": "RTCMV3_BIT2"
		},
		"NonSyncCount": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "RTCMV3_UINT3"
		},
		"GeoCarrierPhaseCorrDiff": {
			"NoOfBytes": "4",
			"Offset": "21",
			"DataType": "RTCMV3_INT17"
		},
		"IODE": {
			"NoOfBytes": "1",
			"Offset": "25",
			"DataType": "RTCMV3_UINT8"
		},
		"IonoCarrierPhaseCorrDiff": {
			"NoOfBytes": "4",
			"Offset": "26",
			"DataType": "RTCMV3_INT17"
		},
		"CABO": ["18"],
		"CAAO": ["12"]
	},
	"RTCM1017IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"NetworkID": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "RTCMV3_UINT8"
		},
		"SubNetworkID": {
			"NoOfBytes": "1",
			"Offset": "3",
			"DataType": "RTCMV3_UINT4"
		},
		"EpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT23"
		},
		"MultipleMessageIndicator": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"MasterReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "9",
			"DataType": "RTCMV3_UINT12"
		},
		"AuxReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "11",
			"DataType": "RTCMV3_UINT12"
		},
		"NumSats": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "RTCMV3_UINT4"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "14",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_UINT6"
		},
		"AmbiguityStatusFlag": {
			"NoOfBytes": "1",
			"Offset": "19",
			"DataType": "RTCMV3_BIT2"
		},
		"NonSyncCount": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "RTCMV3_UINT3"
		},
		"GeoCarrierPhaseCorrDiff": {
			"NoOfBytes": "4",
			"Offset": "21",
			"DataType": "RTCMV3_INT17"
		},
		"IODE": {
			"NoOfBytes": "1",
			"Offset": "25",
			"DataType": "RTCMV3_UINT8"
		},
		"IonoCarrierPhaseCorrDiff": {
			"NoOfBytes": "4",
			"Offset": "26",
			"DataType": "RTCMV3_INT17"
		},
		"CABO": ["18"],
		"CAAO": ["12"]
	},
	"RTCM1036": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"NumGLOData": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_UINT4"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "ClassArray"
		},
		"GLOSatelliteID": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT6"
		},
		"GLOSubIOD": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT3"
		},
		"GLOCRC24": {
			"NoOfBytes": "4",
			"Offset": "11",
			"DataType": "RTCMV3_BIT24"
		},
		"CABO": ["9"],
		"CAAO": ["6"]
	},
	"RTCM1036IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"NumGLOData": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_UINT4"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "ClassArray"
		},
		"GLOSatelliteID": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT6"
		},
		"GLOSubIOD": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_BIT3"
		},
		"GLOCRC24": {
			"NoOfBytes": "4",
			"Offset": "11",
			"DataType": "RTCMV3_BIT24"
		},
		"CABO": ["9"],
		"CAAO": ["6"]
	},
	"RTCM1034": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"FKPEpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT20"
		},
		"NumSats": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_UINT5"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "RTCMV3_UINT6"
		},
		"IODE": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "RTCMV3_BIT8"
		},
		"NorthGeoGradient": {
			"NoOfBytes": "2",
			"Offset": "15",
			"DataType": "RTCMV3_INT12"
		},
		"EastGeoGradient": {
			"NoOfBytes": "2",
			"Offset": "17",
			"DataType": "RTCMV3_INT12"
		},
		"NorthIonoGradient": {
			"NoOfBytes": "2",
			"Offset": "19",
			"DataType": "RTCMV3_INT14"
		},
		"EastIonoGradient": {
			"NoOfBytes": "2",
			"Offset": "21",
			"DataType": "RTCMV3_INT14"
		},
		"CABO": ["13"],
		"CAAO": ["10"]
	},
	"RTCM1034IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"FKPEpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT20"
		},
		"NumSats": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_UINT5"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "RTCMV3_UINT6"
		},
		"IODE": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "RTCMV3_BIT8"
		},
		"NorthGeoGradient": {
			"NoOfBytes": "2",
			"Offset": "15",
			"DataType": "RTCMV3_INT12"
		},
		"EastGeoGradient": {
			"NoOfBytes": "2",
			"Offset": "17",
			"DataType": "RTCMV3_INT12"
		},
		"NorthIonoGradient": {
			"NoOfBytes": "2",
			"Offset": "19",
			"DataType": "RTCMV3_INT14"
		},
		"EastIonoGradient": {
			"NoOfBytes": "2",
			"Offset": "21",
			"DataType": "RTCMV3_INT14"
		},
		"CABO": ["13"],
		"CAAO": ["10"]
	},
	"RTCM1035": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"FKPEpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT17"
		},
		"NumSats": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_UINT5"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "RTCMV3_UINT6"
		},
		"IODE": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "RTCMV3_BIT8"
		},
		"NorthGeoGradient": {
			"NoOfBytes": "2",
			"Offset": "15",
			"DataType": "RTCMV3_INT12"
		},
		"EastGeoGradient": {
			"NoOfBytes": "2",
			"Offset": "17",
			"DataType": "RTCMV3_INT12"
		},
		"NorthIonoGradient": {
			"NoOfBytes": "2",
			"Offset": "19",
			"DataType": "RTCMV3_INT14"
		},
		"EastIonoGradient": {
			"NoOfBytes": "2",
			"Offset": "21",
			"DataType": "RTCMV3_INT14"
		},
		"CABO": ["13"],
		"CAAO": ["10"]
	},
	"RTCM1035IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"FKPEpochTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTCMV3_UINT17"
		},
		"NumSats": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_UINT5"
		},
		"aclBodyData": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "ClassArray"
		},
		"SatelliteID": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "RTCMV3_UINT6"
		},
		"IODE": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "RTCMV3_BIT8"
		},
		"NorthGeoGradient": {
			"NoOfBytes": "2",
			"Offset": "15",
			"DataType": "RTCMV3_INT12"
		},
		"EastGeoGradient": {
			"NoOfBytes": "2",
			"Offset": "17",
			"DataType": "RTCMV3_INT12"
		},
		"NorthIonoGradient": {
			"NoOfBytes": "2",
			"Offset": "19",
			"DataType": "RTCMV3_INT14"
		},
		"EastIonoGradient": {
			"NoOfBytes": "2",
			"Offset": "21",
			"DataType": "RTCMV3_INT14"
		},
		"CABO": ["13"],
		"CAAO": ["10"]
	},
	"CONFIGCODE": {
		"eConfigState": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SecurityEnum"
		},
		"acData1": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		},
		"acData2": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "STRING"
		},
		"acData3": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "STRING"
		},
		"acData4": {
			"NoOfBytes": "1",
			"Offset": "7",
			"DataType": "STRING"
		},
		"acData5": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "STRING"
		},
		"acDescription": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "STRING"
		}
	},
	"BLCONSTRAINT": {
		"eMyEnableConstraint": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"dMyBaselineLength": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyConstraintStdDev": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		}
	},
	"SATVIS2": {
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SystemTypeEnum"
		},
		"bMyIsSatVisValid": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "BOOL"
		},
		"bMyWasGNSSAlmanacUsed": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "BOOL"
		},
		"aclMySatVisList": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "SATELLITEID"
		},
		"ulMySatHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"dMyElevation": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyTrueDoppler": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMyApparentDoppler": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"CABO": ["16"],
		"CAAO": ["40"]
	},
	"GPHDT": {
		"eTalkerID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "NMEATalkerIDEnum"
		},
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SolTypeEnum"
		},
		"bMyOutputHDT": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "BOOL"
		},
		"fMyHeading": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "21",
			"DataType": "UCHAR"
		}
	},
	"HWCONFIGTABLE": {
		"ulMyNumClearedPackets": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyNumUnusedPackets": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"clMyHWConfigTableEntries": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ClassArray"
		},
		"acMyType": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "STRING"
		},
		"acMyData": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "STRING"
		},
		"CABO": ["12"],
		"CAAO": ["17"]
	},
	"DEBUGFIQ": {
		"fMyFIQAverageRunTimeUS": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		},
		"fMyFIQMaxRunTimeUS": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"fMyFIQRunTimeUS": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyFIQMaxPeriodUS": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyFIQPeriodUS": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		}
	},
	"GLORAWL2FRAME": {
		"ucMySlot": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "UCHAR"
		},
		"cMyFreq": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "CHAR"
		},
		"ulMySigChan": {
			"NoOfBytes": "4",
			"Offset": "2",
			"DataType": "ULONG"
		},
		"aucMyRawFrameData": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"RTCAREFEXT": {
		"ucMyNovAtelDesignator": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "UCHAR"
		},
		"ucMySubTypeIndicator": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "UCHAR"
		},
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "2",
			"DataType": "ULONG"
		},
		"dMyRTCATime": {
			"NoOfBytes": "8",
			"Offset": "6",
			"DataType": "DOUBLE"
		},
		"ucMySolStatus": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "UCHAR"
		},
		"ucMyPosType": {
			"NoOfBytes": "1",
			"Offset": "15",
			"DataType": "UCHAR"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyStdX": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMyStdY": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"dMyStdZ": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		},
		"dMyStdXY": {
			"NoOfBytes": "8",
			"Offset": "64",
			"DataType": "DOUBLE"
		},
		"dMyStdYZ": {
			"NoOfBytes": "8",
			"Offset": "72",
			"DataType": "DOUBLE"
		},
		"dMyStdZX": {
			"NoOfBytes": "8",
			"Offset": "80",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "FLOAT"
		},
		"ucMyNumSatsTracked": {
			"NoOfBytes": "1",
			"Offset": "92",
			"DataType": "UCHAR"
		},
		"ucMyNumSatsInSol": {
			"NoOfBytes": "1",
			"Offset": "93",
			"DataType": "UCHAR"
		},
		"ucMyNumHighSats": {
			"NoOfBytes": "1",
			"Offset": "94",
			"DataType": "UCHAR"
		},
		"ucMyNumHighL2Sats": {
			"NoOfBytes": "1",
			"Offset": "95",
			"DataType": "UCHAR"
		},
		"ucMyReserved": {
			"NoOfBytes": "1",
			"Offset": "96",
			"DataType": "UCHAR"
		}
	},
	"RTCAREFEXTIN": {
		"ulMessageIdentifier": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefStation": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMessageType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulReserved": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMessageLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ucMyNovAtelDesignator": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "UCHAR"
		},
		"ucMySubTypeIndicator": {
			"NoOfBytes": "1",
			"Offset": "21",
			"DataType": "UCHAR"
		},
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "ULONG"
		},
		"dMyRTCATime": {
			"NoOfBytes": "8",
			"Offset": "26",
			"DataType": "DOUBLE"
		},
		"ucMySolStatus": {
			"NoOfBytes": "1",
			"Offset": "34",
			"DataType": "UCHAR"
		},
		"ucMyPosType": {
			"NoOfBytes": "1",
			"Offset": "35",
			"DataType": "UCHAR"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyStdX": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyStdY": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyStdZ": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"dMyStdXY": {
			"NoOfBytes": "8",
			"Offset": "84",
			"DataType": "DOUBLE"
		},
		"dMyStdYZ": {
			"NoOfBytes": "8",
			"Offset": "92",
			"DataType": "DOUBLE"
		},
		"dMyStdZX": {
			"NoOfBytes": "8",
			"Offset": "100",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "108",
			"DataType": "FLOAT"
		},
		"ucMyNumSatsTracked": {
			"NoOfBytes": "1",
			"Offset": "112",
			"DataType": "UCHAR"
		},
		"ucMyNumSatsInSol": {
			"NoOfBytes": "1",
			"Offset": "113",
			"DataType": "UCHAR"
		},
		"ucMyNumHighSats": {
			"NoOfBytes": "1",
			"Offset": "114",
			"DataType": "UCHAR"
		},
		"ucMyNumHighL2Sats": {
			"NoOfBytes": "1",
			"Offset": "115",
			"DataType": "UCHAR"
		},
		"ucMyReserved": {
			"NoOfBytes": "1",
			"Offset": "116",
			"DataType": "UCHAR"
		}
	},
	"MASTERPOS": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"eMyDatumType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "DatumEnum"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "FixedCharArray"
		},
		"fFloat": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "66",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "67",
			"DataType": "UCHAR"
		},
		"ucMyMeasurementSource": {
			"NoOfBytes": "1",
			"Offset": "68",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "71",
			"DataType": "UCHAR"
		}
	},
	"ROVERPOS": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"eMyDatumType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "DatumEnum"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "FixedCharArray"
		},
		"fFloat": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "66",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "67",
			"DataType": "UCHAR"
		},
		"ucMyMeasurementSource": {
			"NoOfBytes": "1",
			"Offset": "68",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "71",
			"DataType": "UCHAR"
		}
	},
	"HEADINGDEBUG": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyBLength": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyHeading": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyPitch": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"fFloat": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"fMyHeadingStdDev": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"fMyPitchStdDev": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "36",
			"DataType": "FixedCharArray"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "40",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "41",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "42",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "43",
			"DataType": "UCHAR"
		},
		"ucMyMeasurementSource": {
			"NoOfBytes": "1",
			"Offset": "44",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "45",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "46",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "47",
			"DataType": "UCHAR"
		}
	},
	"HDTOUTTHRESHOLD": {
		"fMyHeadingStdThreshold": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		}
	},
	"RAWCNAVFRAME": {
		"ulMySigChanNum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyPrn": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyFrameId": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"aucMyRawFrameData": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"MARK1PVA": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "INSStatusEnum"
		}
	},
	"MARK2PVA": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "INSStatusEnum"
		}
	},
	"SETMARK1OFFSET": {
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "3",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"SETMARK2OFFSET": {
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "3",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"APPLYVEHICLEBODYROTATION": {
		"eMyTrigger": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"CONFIRMCODE": {
		"acConfirmationCode": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		}
	},
	"DEBUGTRACE": {
		"eMyOutputPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		},
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "EnableEnum"
		},
		"eMyCommand": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "TraceCommandEnum"
		},
		"ulMyParameter0": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyParameter1": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		}
	},
	"MARK3TIME": {
		"lMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "LONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyOffset": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyOffsetStd": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyUTCOffset": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ClockModelStatusEnum"
		}
	},
	"MARK4TIME": {
		"lMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "LONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyOffset": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyOffsetStd": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyUTCOffset": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ClockModelStatusEnum"
		}
	},
	"MFGTEST": {
		"eMyMfgTestType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "MfgTestTypeEnum"
		},
		"ulMyParam1": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyParam2": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"szParam3": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "STRING"
		},
		"CABO": ["4"],
		"CAAO": ["13"]
	},
	"MFGTESTRESULTS": {
		"MfgTestResultsList": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMyMfgTestType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "MfgTestTypeEnum"
		},
		"eMyTestResult": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "TestResultsEnum"
		},
		"szMyResult": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "STRING"
		},
		"CABO": ["4"],
		"CAAO": ["9"]
	},
	"SIGNALCONFIGURATION": {
		"aclSigConfig": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySignalType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SignalTypeEnum"
		},
		"fMyPLLBandwidth": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"ulMyDLLTimeConstSec": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"eMyCorrelatorType": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "CorrelatorTypeEnum"
		}
	},
	"RFBANDWIDTH": {
		"eMyRF1Bandwidth": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RFBandwidthEnum"
		},
		"eMyRF2Bandwidth": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RFBandwidthEnum"
		}
	},
	"HEADINGOFFSET": {
		"fMyHeadingOffset": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		},
		"fMyPitchOffset": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		}
	},
	"ASSIGNCW": {
		"svMyChan": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SVCHAN"
		},
		"eMyCWFrequency": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "CWFrequencyEnum"
		},
		"lMyDoppler": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "LONG"
		},
		"ulMyDopplerWindow": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		}
	},
	"PDPSTAT": {
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PDPFilterCommandEnum"
		},
		"eMyMode": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "PDPFilterModeEnum"
		},
		"eMyDynamics": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "PDPFilterDynamicsEnum"
		},
		"uiNumPsrUsed": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "UINT"
		},
		"uiNumPhaseUsed": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "UINT"
		},
		"dMySecondsContRelOp": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyEstimatedNorthing900SecStdDev": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyEstimatedEasting900SecStdDev": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		}
	},
	"SUPERAG": {
		"eMyCommand": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SuperAgCommandEnum"
		},
		"ulMyOffsetDeweight": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"SETCANNAME": {
		"ulManufacturerCode": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulIndustryGroup": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulDeviceClass": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulDeviceClassInstance": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulFunction": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulFunctionInstance": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulECUInstance": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulPreferredAddress": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"eCanPort": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "CanPortEnum"
		}
	},
	"MARK1COUNT": {
		"ulMyPeriod": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"usMyCount": {
			"NoOfBytes": "2",
			"Offset": "4",
			"DataType": "USHORT"
		}
	},
	"MARK2COUNT": {
		"ulMyPeriod": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"usMyCount": {
			"NoOfBytes": "2",
			"Offset": "4",
			"DataType": "USHORT"
		}
	},
	"MARK3COUNT": {
		"ulMyPeriod": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"usMyCount": {
			"NoOfBytes": "2",
			"Offset": "4",
			"DataType": "USHORT"
		}
	},
	"MARK4COUNT": {
		"ulMyPeriod": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"usMyCount": {
			"NoOfBytes": "2",
			"Offset": "4",
			"DataType": "USHORT"
		}
	},
	"RTCM1033": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"DescriptorCounter": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_UINT8"
		},
		"AntennaDescriptor": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		},
		"AntennaSetupID": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "RTCMV3_UINT8"
		},
		"SerialNumberCounter": {
			"NoOfBytes": "1",
			"Offset": "7",
			"DataType": "RTCMV3_UINT8"
		},
		"AntennaSerialNumber": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		},
		"ReceiverTypeDescriptorCounter": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT8"
		},
		"ReceiverTypeDescriptor": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		},
		"ReceiverFirmwareVersionCounter": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_UINT8"
		},
		"ReceiverFirmwareVersion": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		},
		"ReceiverSerialNumberCounter": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "RTCMV3_UINT8"
		},
		"ReceiverSerialNumber": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		}
	},
	"RTCM1033IN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"DescriptorCounter": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_UINT8"
		},
		"AntennaDescriptor": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		},
		"AntennaSetupID": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "RTCMV3_UINT8"
		},
		"SerialNumberCounter": {
			"NoOfBytes": "1",
			"Offset": "7",
			"DataType": "RTCMV3_UINT8"
		},
		"AntennaSerialNumber": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		},
		"ReceiverTypeDescriptorCounter": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT8"
		},
		"ReceiverTypeDescriptor": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		},
		"ReceiverFirmwareVersionCounter": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_UINT8"
		},
		"ReceiverFirmwareVersion": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		},
		"ReceiverSerialNumberCounter": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "RTCMV3_UINT8"
		},
		"ReceiverSerialNumber": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		}
	},
	"RTCMDATA1033": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"ReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"DescriptorCounter": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_UINT8"
		},
		"AntennaDescriptor": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		},
		"AntennaSetupID": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "RTCMV3_UINT8"
		},
		"SerialNumberCounter": {
			"NoOfBytes": "1",
			"Offset": "7",
			"DataType": "RTCMV3_UINT8"
		},
		"AntennaSerialNumber": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		},
		"ReceiverTypeDescriptorCounter": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "RTCMV3_UINT8"
		},
		"ReceiverTypeDescriptor": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		},
		"ReceiverFirmwareVersionCounter": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "RTCMV3_UINT8"
		},
		"ReceiverFirmwareVersion": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		},
		"ReceiverSerialNumberCounter": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "RTCMV3_UINT8"
		},
		"ReceiverSerialNumber": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		},
		"CABO": ["4"],
		"CAAO": ["15"]
	},
	"DLLINFO": {
		"aclMyDLLInfo": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"sigMyChan": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SIGCHAN"
		},
		"ulMyPeriodUS": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"dMyCodeError": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyCodeCorr": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"fMyCodeRate": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"fMyBandwidth": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyK0": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyK1": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		}
	},
	"CHANRESETEVENT": {
		"sigMyChan": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SIGCHAN"
		},
		"ulMySatelliteID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"eMyResetEvent": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SigChanEventEnum"
		},
		"CABO": ["4"],
		"CAAO": ["12"]
	},
	"PLLINFO": {
		"aclMyPLLInfo": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"sigMyChan": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SIGCHAN"
		},
		"ulMyPeriodUS": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"fMyPhaseError": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyDoppler": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyAcceleration": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"fMyBandwidth": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"fMyK0": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"fMyK1": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyK2": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"eMyLoopType": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "CarrierLoopTypeEnum"
		}
	},
	"GALECUTOFF": {
		"fMyElevationCutoffAngle": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		}
	},
	"SETMARK3OFFSET": {
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "3",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"SETMARK4OFFSET": {
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "3",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"MARK3PVA": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "INSStatusEnum"
		}
	},
	"MARK4PVA": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "INSStatusEnum"
		}
	},
	"GALALMANAC": {
		"ulMySatId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"bMyFNAVReceived": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "BOOL"
		},
		"bMyINAVReceived": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "BOOL"
		},
		"ucMyE1BHealth": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "UCHAR"
		},
		"ucMyE5aHealth": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "UCHAR"
		},
		"ucMyE5bHealth": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "UCHAR"
		},
		"ucMyReserved1": {
			"NoOfBytes": "1",
			"Offset": "15",
			"DataType": "UCHAR"
		},
		"ulMyIODa": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"dMyEcc": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyOmegaDot": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyOmega0": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyOmega": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyM0": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyAf0": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyAf1": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"dMyDeltaRootA": {
			"NoOfBytes": "8",
			"Offset": "84",
			"DataType": "DOUBLE"
		},
		"dMyDeltaI": {
			"NoOfBytes": "8",
			"Offset": "92",
			"DataType": "DOUBLE"
		}
	},
	"GALCLOCK": {
		"dMyA0": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyA1": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"lMyDeltaTls": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "LONG"
		},
		"ulMyTot": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyWNt": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMyWNlsf": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyDN": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"lMyDeltaTlsf": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "LONG"
		},
		"dMyA0g": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMyA1g": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"ulMyT0g": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"ulMyWN0g": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		}
	},
	"GALEPHEMERIS": {
		"ulMySatId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"bMyFNAVReceived": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "BOOL"
		},
		"bMyINAVReceived": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "BOOL"
		},
		"ucMyE1BHealth": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "UCHAR"
		},
		"ucMyE5aHealth": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "UCHAR"
		},
		"ucMyE5bHealth": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "UCHAR"
		},
		"ucMyE1BDVS": {
			"NoOfBytes": "1",
			"Offset": "15",
			"DataType": "UCHAR"
		},
		"ucMyE5aDVS": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "UCHAR"
		},
		"ucMyE5bDVS": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "UCHAR"
		},
		"ucMySISA": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "UCHAR"
		},
		"ucMyReserved1": {
			"NoOfBytes": "1",
			"Offset": "19",
			"DataType": "UCHAR"
		},
		"ulMyIODNav": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyT0e": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"dMyRootA": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyDeltaN": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyM0": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyEcc": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyOmega": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyCuc": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyCus": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"dMyCrc": {
			"NoOfBytes": "8",
			"Offset": "84",
			"DataType": "DOUBLE"
		},
		"dMyCrs": {
			"NoOfBytes": "8",
			"Offset": "92",
			"DataType": "DOUBLE"
		},
		"dMyCic": {
			"NoOfBytes": "8",
			"Offset": "100",
			"DataType": "DOUBLE"
		},
		"dMyCis": {
			"NoOfBytes": "8",
			"Offset": "108",
			"DataType": "DOUBLE"
		},
		"dMyI0": {
			"NoOfBytes": "8",
			"Offset": "116",
			"DataType": "DOUBLE"
		},
		"dMyIDot": {
			"NoOfBytes": "8",
			"Offset": "124",
			"DataType": "DOUBLE"
		},
		"dMyOmega0": {
			"NoOfBytes": "8",
			"Offset": "132",
			"DataType": "DOUBLE"
		},
		"dMyOmegaDot": {
			"NoOfBytes": "8",
			"Offset": "140",
			"DataType": "DOUBLE"
		},
		"ulMyFNAVT0c": {
			"NoOfBytes": "4",
			"Offset": "148",
			"DataType": "ULONG"
		},
		"dMyFNAVAf0": {
			"NoOfBytes": "8",
			"Offset": "152",
			"DataType": "DOUBLE"
		},
		"dMyFNAVAf1": {
			"NoOfBytes": "8",
			"Offset": "160",
			"DataType": "DOUBLE"
		},
		"dMyFNAVAf2": {
			"NoOfBytes": "8",
			"Offset": "168",
			"DataType": "DOUBLE"
		},
		"ulMyINAVT0c": {
			"NoOfBytes": "4",
			"Offset": "176",
			"DataType": "ULONG"
		},
		"dMyINAVAf0": {
			"NoOfBytes": "8",
			"Offset": "180",
			"DataType": "DOUBLE"
		},
		"dMyINAVAf1": {
			"NoOfBytes": "8",
			"Offset": "188",
			"DataType": "DOUBLE"
		},
		"dMyINAVAf2": {
			"NoOfBytes": "8",
			"Offset": "196",
			"DataType": "DOUBLE"
		},
		"dMyE1E5aBGD": {
			"NoOfBytes": "8",
			"Offset": "204",
			"DataType": "DOUBLE"
		},
		"dMyE1E5bBGD": {
			"NoOfBytes": "8",
			"Offset": "212",
			"DataType": "DOUBLE"
		}
	},
	"GALFNAVRAWALMANAC": {
		"ulMyIODa": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyWNa": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyT0a": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"aucMyRawData": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"GALFNAVRAWEPHEMERIS": {
		"ulMySatId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"aclMyRawPages": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"aucMyPage": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "FixedHEXBYTEArray"
		},
		"ucMyReserved": {
			"NoOfBytes": "1",
			"Offset": "43",
			"DataType": "UCHAR"
		},
		"CABO": ["16"],
		"CAAO": ["28"]
	},
	"GALINAVRAWALMANAC": {
		"ulMyIODa": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyWNa": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyT0a": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"aucMyRawData": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"GALINAVRAWEPHEMERIS": {
		"ulMySatId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"aclMyRawWords": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"aucMyWord": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "FixedHEXBYTEArray"
		},
		"CABO": ["16"],
		"CAAO": ["16"]
	},
	"GALIONO": {
		"dMyAi0": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyAi1": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyAi2": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"ucMySF1": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "UCHAR"
		},
		"ucMySF2": {
			"NoOfBytes": "1",
			"Offset": "25",
			"DataType": "UCHAR"
		},
		"ucMySF3": {
			"NoOfBytes": "1",
			"Offset": "26",
			"DataType": "UCHAR"
		},
		"ucMySF4": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "UCHAR"
		},
		"ucMySF5": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "UCHAR"
		}
	},
	"MARK1TIME": {
		"lMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "LONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyOffset": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyOffsetStd": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyUTCOffset": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ClockModelStatusEnum"
		}
	},
	"BASEANTENNAIN": {
		"ulMySourceMessage": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"acMyStationID": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"szMyModelName": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "STRING"
		},
		"szMySerialNumber": {
			"NoOfBytes": "1",
			"Offset": "37",
			"DataType": "STRING"
		},
		"ulMySetupID": {
			"NoOfBytes": "4",
			"Offset": "38",
			"DataType": "ULONG"
		}
	},
	"HEADINGEXT": {
		"ucMySolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "UCHAR"
		},
		"ucMySolutionType": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "UCHAR"
		},
		"fMyHeadingOffset": {
			"NoOfBytes": "4",
			"Offset": "2",
			"DataType": "FLOAT"
		},
		"fMyPitchOffset": {
			"NoOfBytes": "4",
			"Offset": "6",
			"DataType": "FLOAT"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "10",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "18",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "26",
			"DataType": "DOUBLE"
		},
		"dMyXVar": {
			"NoOfBytes": "8",
			"Offset": "34",
			"DataType": "DOUBLE"
		},
		"dMyYVar": {
			"NoOfBytes": "8",
			"Offset": "42",
			"DataType": "DOUBLE"
		},
		"dMyZVar": {
			"NoOfBytes": "8",
			"Offset": "50",
			"DataType": "DOUBLE"
		},
		"dMyXYVar": {
			"NoOfBytes": "8",
			"Offset": "58",
			"DataType": "DOUBLE"
		},
		"dMyYZVar": {
			"NoOfBytes": "8",
			"Offset": "66",
			"DataType": "DOUBLE"
		},
		"dMyZXVar": {
			"NoOfBytes": "8",
			"Offset": "74",
			"DataType": "DOUBLE"
		},
		"acMyMasterId": {
			"NoOfBytes": "1",
			"Offset": "82",
			"DataType": "FixedCharArray"
		},
		"acMyRoverId": {
			"NoOfBytes": "1",
			"Offset": "83",
			"DataType": "FixedCharArray"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "FLOAT"
		},
		"ucMyNumSatsTracked": {
			"NoOfBytes": "1",
			"Offset": "88",
			"DataType": "UCHAR"
		},
		"ucMyNumSatsInSol": {
			"NoOfBytes": "1",
			"Offset": "89",
			"DataType": "UCHAR"
		},
		"ucMyNumHighSats": {
			"NoOfBytes": "1",
			"Offset": "90",
			"DataType": "UCHAR"
		},
		"ucMyNumHighL2Sats": {
			"NoOfBytes": "1",
			"Offset": "91",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "92",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOFreqsInSol": {
			"NoOfBytes": "1",
			"Offset": "93",
			"DataType": "UCHAR"
		}
	},
	"HEADINGEXTIN": {
		"ucMySolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "UCHAR"
		},
		"ucMySolutionType": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "UCHAR"
		},
		"fMyHeadingOffset": {
			"NoOfBytes": "4",
			"Offset": "2",
			"DataType": "FLOAT"
		},
		"fMyPitchOffset": {
			"NoOfBytes": "4",
			"Offset": "6",
			"DataType": "FLOAT"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "10",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "18",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "26",
			"DataType": "DOUBLE"
		},
		"dMyXVar": {
			"NoOfBytes": "8",
			"Offset": "34",
			"DataType": "DOUBLE"
		},
		"dMyYVar": {
			"NoOfBytes": "8",
			"Offset": "42",
			"DataType": "DOUBLE"
		},
		"dMyZVar": {
			"NoOfBytes": "8",
			"Offset": "50",
			"DataType": "DOUBLE"
		},
		"dMyXYVar": {
			"NoOfBytes": "8",
			"Offset": "58",
			"DataType": "DOUBLE"
		},
		"dMyYZVar": {
			"NoOfBytes": "8",
			"Offset": "66",
			"DataType": "DOUBLE"
		},
		"dMyZXVar": {
			"NoOfBytes": "8",
			"Offset": "74",
			"DataType": "DOUBLE"
		},
		"acMyMasterId": {
			"NoOfBytes": "1",
			"Offset": "82",
			"DataType": "FixedCharArray"
		},
		"acMyRoverId": {
			"NoOfBytes": "1",
			"Offset": "83",
			"DataType": "FixedCharArray"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "FLOAT"
		},
		"ucMyNumSatsTracked": {
			"NoOfBytes": "1",
			"Offset": "88",
			"DataType": "UCHAR"
		},
		"ucMyNumSatsInSol": {
			"NoOfBytes": "1",
			"Offset": "89",
			"DataType": "UCHAR"
		},
		"ucMyNumHighSats": {
			"NoOfBytes": "1",
			"Offset": "90",
			"DataType": "UCHAR"
		},
		"ucMyNumHighL2Sats": {
			"NoOfBytes": "1",
			"Offset": "91",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "92",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOFreqsInSol": {
			"NoOfBytes": "1",
			"Offset": "93",
			"DataType": "UCHAR"
		}
	},
	"USEHPPRECONVERGED": {
		"eMyCommand": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "UseHPPreconvergedCommandEnum"
		}
	},
	"SETROVERID": {
		"sMyID": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		}
	},
	"GIOVEFNAVRAWFRAME": {
		"ulMySigChanNum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMySatId": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyFrameId": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"aucMyPage": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"GIOVEINAVRAWFRAME": {
		"ulMySigChanNum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMySatId": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyFrameId": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"eMySignalType": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "SignalTypeEnum"
		},
		"aucMyPage": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"GIOVEFNAVRAWEPHEMERIS": {
		"ulMySatId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"aclMyRawPages": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"aucMyPage": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "FixedHEXBYTEArray"
		},
		"CABO": ["16"],
		"CAAO": ["1"]
	},
	"GIOVEFNAVRAWALMANAC": {
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"aclMyRawPages": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ClassArray"
		},
		"aucMyPage": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "FixedHEXBYTEArray"
		},
		"CABO": ["12"],
		"CAAO": ["1"]
	},
	"GIOVEINAVRAWEPHEMERIS": {
		"ulMySatId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"aclMyRawPages": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"aucMyPage": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "FixedHEXBYTEArray"
		},
		"CABO": ["16"],
		"CAAO": ["1"]
	},
	"GIOVEINAVRAWALMANAC": {
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"aclMyRawPages": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ClassArray"
		},
		"aucMyPage": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "FixedHEXBYTEArray"
		},
		"CABO": ["12"],
		"CAAO": ["1"]
	},
	"OUTPUTUNDULATION": {
		"eMyUndulationType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "UndulationTypeEnum"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		}
	},
	"OUTPUTDATUM": {
		"eMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "DatumEnum"
		},
		"dMySemiMajorAxis": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyInverseFlattening": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyScale": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		}
	},
	"LOGFILESTATUS": {
		"eMyFileState": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PDC_FileActionEnum"
		},
		"szMyFileName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedUCHARArray"
		},
		"ulMyFileSize": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "ULONG"
		},
		"eMyStorageMedium": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "MassStorageDeviceEnum"
		},
		"ulMyMediaFreeSpace": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "ULONG"
		},
		"ulMyMediaCapacity": {
			"NoOfBytes": "4",
			"Offset": "17",
			"DataType": "ULONG"
		}
	},
	"CHANCONFIGLIST": {
		"SetInUse": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ChanCfgListArray": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ClassArray"
		},
		"clChanCfgListSysArray": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ClassArray"
		},
		"ulNumChans": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"eSignalType": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ChanConfigSignalEnum"
		},
		"CABO": ["12"],
		"CAAO": ["8"]
	},
	"SELECTCHANCONFIG": {
		"ulChanConfigSetting": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"SETUTCLEAPSECONDS": {
		"ulSeconds": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulFutureWeekNumber": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulFutureDayNumber": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulFutureSeconds": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		}
	},
	"RTCMDATAV3USER": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "RTCMV3_BIT4"
		},
		"Message4093Subtype": {
			"NoOfBytes": "1",
			"Offset": "3",
			"DataType": "RTCMV3_UINT8"
		},
		"UserDefinedData": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		}
	},
	"RTCMV3USER": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "RTCMV3_BIT4"
		},
		"Message4093Subtype": {
			"NoOfBytes": "1",
			"Offset": "3",
			"DataType": "RTCMV3_UINT8"
		},
		"UserDefinedData": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		}
	},
	"RTCMV3USERDATA": {
		"UserDefinedData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		}
	},
	"RTCMV3USERIN": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "RTCMV3_BIT4"
		},
		"Message4093Subtype": {
			"NoOfBytes": "1",
			"Offset": "3",
			"DataType": "RTCMV3_UINT8"
		},
		"UserDefinedData": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_VARCHAR8ARRAY"
		}
	},
	"SETRTCMV3USER": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VarHEXBYTEType"
		}
	},
	"SBASCORRECTIONS": {
		"ulMySourcePRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"eMyServiceProvider": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SBASServiceProviderEnum"
		},
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"aclMyCorrections": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "SATELLITEID"
		},
		"ulMyIODE": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyIODP": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMySlowClockCorrection": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyFastClockCorrection": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyCorrectionVariance": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"CABO": ["4"],
		"CAAO": ["64"]
	},
	"HASSSTATUS": {
		"aMyHLASSPosPoly": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"eMySystemVariant": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SystemVariantEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "SATELLITEID"
		},
		"ulMyIOD": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"bMyIsPolyComputable": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "BOOL"
		},
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"CABO": ["4"],
		"CAAO": ["28"]
	},
	"LASSSTATUS": {
		"aMyHLASSPosPoly": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"eMySystemVariant": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SystemVariantEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "SATELLITEID"
		},
		"ulMyIOD": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"bMyIsPolyComputable": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "BOOL"
		},
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		}
	},
	"RANGECORRECTIONS": {
		"eMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "DGPSTypeEnum"
		},
		"acMyStationID": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "ULONG"
		},
		"aclMyCorrections": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "17",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "21",
			"DataType": "SATELLITEID"
		},
		"ulMyIOD": {
			"NoOfBytes": "4",
			"Offset": "25",
			"DataType": "ULONG"
		},
		"fMyTotalCorrection": {
			"NoOfBytes": "4",
			"Offset": "29",
			"DataType": "FLOAT"
		},
		"fMyTotalCorrectionVariance": {
			"NoOfBytes": "4",
			"Offset": "33",
			"DataType": "FLOAT"
		},
		"fMyIonoCorrection": {
			"NoOfBytes": "4",
			"Offset": "37",
			"DataType": "FLOAT"
		},
		"CABO": ["17"],
		"CAAO": ["24"]
	},
	"CLOCKSTEERINGADJUSTMENT": {
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"eMyType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ClockAdjustType"
		},
		"dMyAdjustAmount": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyAdjustDriftAmount": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyAdjustDriftVarAmount": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"CABO": ["4"],
		"CAAO": ["36"]
	},
	"PACKAGEDOBSERVATIONS": {
		"aclMyObservationSets": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"ulMyIOD": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"bMyHasTropoCorr": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "BOOL"
		},
		"bMyHasKlobucharIonoCorr": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "BOOL"
		},
		"bMyHasDualFreqIonoCorr": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "BOOL"
		},
		"bMyHasGridIonoCorr": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "BOOL"
		},
		"bMySBASCorrectionIsValid": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "BOOL"
		},
		"bMyRangeCorrectionIsValid": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "BOOL"
		},
		"bMyAzimuthAndElevationAreValid": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "BOOL"
		},
		"fMyAzimuth": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"fMyElevation": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "FLOAT"
		}
	},
	"PSRSATS": {
		"aclMySatelliteEntries": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ObservationStatusEnum"
		},
		"ulMyStatusMask": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"PSRDOP2": {
		"fMyGDOP": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		},
		"fMyPDOP": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"fMyHDOP": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyVDOP": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"aclMyTDOPs": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ClassArray"
		},
		"eMySystem": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "TimingSystemEnum"
		},
		"fMyDOP": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"CABO": ["20"],
		"CAAO": ["8"]
	},
	"PSRTIME2": {
		"aclMySystemOffsets": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystem": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "TimingSystemEnum"
		},
		"dMyBias": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyBiasStdDev": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyRate": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyRateStdDev": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"CABO": ["4"],
		"CAAO": ["36"]
	},
	"FIXAUTO": {
		"dMyRateStdDev": {
			"NoOfBytes": "0",
			"Offset": "0",
			"DataType": ""
		}
	},
	"FIXHEIGHT": {
		"eMyHeightType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "HeightTypeEnum"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyStdDev": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		}
	},
	"UNFIX": {
		"dMyStdDev": {
			"NoOfBytes": "0",
			"Offset": "0",
			"DataType": ""
		}
	},
	"PROPAGATEDCLOCKMODEL2": {
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClockModelStatusEnum"
		},
		"aclMySystemBiases": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ClassArray"
		},
		"eMySystem": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "TimingSystemEnum"
		},
		"dMyBias": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyBiasStdDev": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyRate": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyRateStdDev": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"CABO": ["8"],
		"CAAO": ["36"]
	},
	"CLOCKMODEL2": {
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClockModelStatusEnum"
		},
		"dMyRate": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"aclMySystemBiases": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"eMySystem": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "TimingSystemEnum"
		},
		"dMyBias": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyBiasStdDev": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"CABO": ["4"],
		"CAAO": ["20"]
	},
	"PSRCHANNELSTATUS": {
		"aclMyEntries": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"sigMyChannel": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "SIGCHAN"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ObservationStatusEnum"
		},
		"dMyObsStdDev": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyResidual": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		}
	},
	"RTKDOP2": {
		"fMyGDOP": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		},
		"fMyPDOP": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"fMyHDOP": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyVDOP": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"aclMyTDOPs": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ClassArray"
		},
		"eMySystem": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "TimingSystemEnum"
		},
		"fMyDOP": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"CABO": ["20"],
		"CAAO": ["8"]
	},
	"SBASFAST": {
		"eMySourceSystemVariant": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SystemVariantEnum"
		},
		"ulMySourcePrn": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "30",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "34",
			"DataType": "ULONG"
		},
		"dMyFastTimeOut": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"aclMyFast": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ClassArray"
		},
		"usMyPRN": {
			"NoOfBytes": "2",
			"Offset": "28",
			"DataType": "USHORT"
		},
		"ulMyUDRE": {
			"NoOfBytes": "4",
			"Offset": "38",
			"DataType": "ULONG"
		},
		"CABO": ["28"],
		"CAAO": ["14"]
	},
	"RTKSATS": {
		"aclMySatelliteEntries": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ObservationStatusEnum"
		},
		"ulMyStatusMask": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"FIX2": {
		"eMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FixTypeEnum"
		},
		"dMyParam1": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyParam2": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyParam3": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyParam4": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyParam5": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyParam6": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyParam7": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyParam8": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyParam9": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		}
	},
	"MATCHEDSATS": {
		"aclMySatelliteEntries": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ObservationStatusEnum"
		},
		"ulMyStatusMask": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"PASHR": {
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INSStatusEnum"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dDouble": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "FixedDOUBLEArray"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "45",
			"DataType": "SolTypeEnum"
		}
	},
	"DEBUGETHERNUM": {
		"eMyAutoSetClear": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "AutoSetClearEnum"
		},
		"ulMyEtherNum": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"PSRINTEGRITYEVENT": {
		"ulMyRedundancy": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMyDesiredGlobalThreshold": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyRequiredGlobalThreshold": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyGlobalStatistic": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"aclMyEntries": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ClassArray"
		},
		"eMySystem": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "SATELLITEID"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ObservationStatusEnum"
		},
		"dMyResidual": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyResidualVariance": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"CABO": ["32"],
		"CAAO": ["28"]
	},
	"DEBUGETHER": {
		"ulMyEtherNum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"szMyEtherName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		},
		"ulMyNumPackets": {
			"NoOfBytes": "4",
			"Offset": "55",
			"DataType": "ULONG"
		},
		"ulMyPacketCap": {
			"NoOfBytes": "4",
			"Offset": "59",
			"DataType": "ULONG"
		},
		"aclMyEntries": {
			"NoOfBytes": "4",
			"Offset": "63",
			"DataType": "ClassArray"
		},
		"ulMyPacketPointer": {
			"NoOfBytes": "4",
			"Offset": "67",
			"DataType": "ULONG"
		},
		"dMyTime": {
			"NoOfBytes": "8",
			"Offset": "71",
			"DataType": "DOUBLE"
		},
		"ulMyTaskID": {
			"NoOfBytes": "4",
			"Offset": "79",
			"DataType": "ULONG"
		},
		"szMyTaskName": {
			"NoOfBytes": "1",
			"Offset": "83",
			"DataType": "STRING"
		},
		"CABO": ["67"],
		"CAAO": ["67"]
	},
	"DEBUGETHEREXCEEDED": {
		"ulMyEtherNum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"szMyEtherName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		},
		"ulMyNumPackets": {
			"NoOfBytes": "4",
			"Offset": "55",
			"DataType": "ULONG"
		},
		"ulMyPacketCap": {
			"NoOfBytes": "4",
			"Offset": "59",
			"DataType": "ULONG"
		},
		"aclMyEntries": {
			"NoOfBytes": "4",
			"Offset": "63",
			"DataType": "ClassArray"
		},
		"ulMyPacketPointer": {
			"NoOfBytes": "4",
			"Offset": "67",
			"DataType": "ULONG"
		},
		"dMyTime": {
			"NoOfBytes": "8",
			"Offset": "71",
			"DataType": "DOUBLE"
		},
		"ulMyTaskID": {
			"NoOfBytes": "4",
			"Offset": "79",
			"DataType": "ULONG"
		},
		"szMyTaskName": {
			"NoOfBytes": "1",
			"Offset": "83",
			"DataType": "STRING"
		},
		"CABO": ["67"],
		"CAAO": ["67"]
	},
	"SBASMASK": {
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyIODP": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyNumSats": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"aulMyPrnToSlot": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FixedULONGArray"
		},
		"CABO": ["4"],
		"CAAO": ["20"]
	},
	"DEBUGCHANMAP": {
		"aclMyDebugChanNums": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"svMyChan": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SVCHAN"
		},
		"sigMyChan": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SIGCHAN"
		},
		"ulMyMinosChan": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"eMyMeasurementSource": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "MeasurementSourceEnum"
		},
		"ulMySatID": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyIDNumber": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"eMySignalType": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "SignalTypeEnum"
		},
		"ulMyChannelType": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		}
	},
	"HEADINGUPDATE": {
		"dMyHeading": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyHeadingUncertainty": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyPitchUncertainty": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"ulMyGPSWeek": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"dMyGPSSeconds": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"eMyUpdateSource": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "HeadingUpdateSourceEnum"
		}
	},
	"ELEVCUTOFFDEBUG": {
		"fMyElevationCutoffAngle": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"CABO": ["4"],
		"CAAO": ["8"]
	},
	"SIMULATEDOBSERRORS": {
		"aclMyEntries": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySignalType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SignalTypeEnum"
		},
		"ulMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"eMyObservationType": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ObservationTypeEnum"
		},
		"dMyError": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		}
	},
	"SIMULATEOBSERROR": {
		"eMyCommand": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SetClearClearAllEnum"
		},
		"eMySignalType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SignalTypeEnum"
		},
		"ulMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"eMyObservationType": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ObservationTypeEnum"
		},
		"eMyTimeFrame": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "AbsoluteRelativeEnum"
		},
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"dMyDuration": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"eMyErrorType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "SimulatedErrorTypeEnum"
		},
		"adMyParameters": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "VariableDOUBLEArray"
		},
		"CABO": ["4"],
		"CAAO": ["48"]
	},
	"SIMULATEOBSERRORSTATUS": {
		"aclMyEntries": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySignalType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SignalTypeEnum"
		},
		"ulMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"eMyObservationType": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ObservationTypeEnum"
		},
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"dMyDuration": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"eMyErrorType": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "SimulatedErrorTypeEnum"
		}
	},
	"SBASSLOW": {
		"eMySourceSystemVariant": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SystemVariantEnum"
		},
		"ulMySourcePrn": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"aclMySlow": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ClassArray"
		},
		"usMyPRN": {
			"NoOfBytes": "2",
			"Offset": "12",
			"DataType": "USHORT"
		},
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "14",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "ULONG"
		},
		"ulMyIODE": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "ULONG"
		},
		"adMyXYZ": {
			"NoOfBytes": "8",
			"Offset": "26",
			"DataType": "FixedDOUBLEArray"
		},
		"CABO": ["12"],
		"CAAO": ["22"]
	},
	"RAWLBANDCOMDATA": {
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		},
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "VariableUcharArray"
		}
	},
	"GRIDIONO": {
		"ulMySourcePRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"bMyReceiverIsInGrid": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "BOOL"
		},
		"aclMyIonoCorrs": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "SATELLITEID"
		},
		"fMyDelay": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"fMyVariance": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"CABO": ["12"],
		"CAAO": ["16"]
	},
	"GPGSTDATA": {
		"eTalkerID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "NMEATalkerIDEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SolStatusEnum"
		},
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "FixedDOUBLEArray"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "21",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "22",
			"DataType": "UCHAR"
		},
		"aclMyEntries": {
			"NoOfBytes": "4",
			"Offset": "23",
			"DataType": "ClassArray"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "27",
			"DataType": "ObservationStatusEnum"
		},
		"dMyObsStdDev": {
			"NoOfBytes": "8",
			"Offset": "31",
			"DataType": "DOUBLE"
		},
		"CABO": ["27"],
		"CAAO": ["12"]
	},
	"BESTSATS": {
		"aclMySatelliteEntries": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ObservationStatusEnum"
		},
		"ulMyStatusMask": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"PSRRESIDUALS": {
		"aclMyEntries": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"dMyResidual": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyResidualStdDev": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"CABO": ["4"],
		"CAAO": ["24"]
	},
	"LBANDTRACKSTAT": {
		"aclMyLBandChanStates": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"szMyBeamName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"ulMyAssignedFrequency": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"usMyBaudRate": {
			"NoOfBytes": "2",
			"Offset": "16",
			"DataType": "USHORT"
		},
		"usMyServiceID": {
			"NoOfBytes": "2",
			"Offset": "18",
			"DataType": "USHORT"
		},
		"usMyTrackingStatus": {
			"NoOfBytes": "2",
			"Offset": "20",
			"DataType": "USHORT"
		},
		"usMyReserved": {
			"NoOfBytes": "2",
			"Offset": "22",
			"DataType": "USHORT"
		},
		"fMyDoppler": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"fMyCN0": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"fMyPhaseStdDev": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyLockTime": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"ulMyTotalUniqueWordBits": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulMyBadUniqueWordBits": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulMyBadUniqueWords": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMyTotalViterbiSymbols": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"ulMyCorrectedViterbiSyms": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"fMyBER": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		}
	},
	"EXTHDGOFFSET": {
		"dMyHeadingOffset": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyHeadingOffsetStdDev": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyPitchOffset": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyPitchOffsetStdDev": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		}
	},
	"SETIMUTOANTOFFSET2": {
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "3",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"PASSETH1": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PASSETH2": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PASSETH3": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"IONOTROPO2": {
		"bMyKlobucharModelIsDefault": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BOOL"
		},
		"ulMyKlobucharIODI": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"aclMyIonoTropo": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "SATELLITEID"
		},
		"fMyTropoCorr": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"fMyTropoCorrVar": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"bMyHasTropoCorr": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "BOOL"
		},
		"fMyDualFreqIonoCorr": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyDualFreqIonoCorrVar": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"bMyHasDualFreqIonoCorr": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "BOOL"
		},
		"fMyGridIonoCorr": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyGridIonoCorrVar": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"bMyHasGridIonoCorr": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "BOOL"
		},
		"fMyKlobucharIonoCorr": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMyKlobucharIonoCorrVar": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"bMyHasKlobucharIonoCorr": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "BOOL"
		},
		"CABO": ["12"],
		"CAAO": ["56"]
	},
	"SETBASEWEEK": {
		"ulMyBaseWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"ALIGNMENTMODE": {
		"eMyAlignmentMode": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "AlignmentModeEnum"
		}
	},
	"IONOCONDITION": {
		"eMyIonoCondition": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "IonoConditionEnum"
		}
	},
	"SETRTCMRXVERSION": {
		"eMyVersion": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RTCMVersionEnum"
		}
	},
	"FORCEGLOL2CODE": {
		"eMyL2CodeType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "L2CodeTypeEnum"
		}
	},
	"SOFTLOADDATA": {
		"ulMyOffset": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "VarHEXBYTEType"
		}
	},
	"SOFTLOADSETUP": {
		"eMySetupType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SoftLoadSetupEnum"
		},
		"szMySetupString": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		}
	},
	"TILTDATA": {
		"ulStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dXAccl": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dYAccl": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dAvgXIncl": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dXIncl": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dYIncl": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dAvgYIncl": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"ulMyReserved3": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		}
	},
	"TILTFILTER": {
		"ulSamplePeriod": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulAverageCount": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulSmoothingPeriodMs": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMeasurementPeriodMs": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		}
	},
	"TILTZERO": {
		"eTiltZeroAction": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "TiltZeroActionEnum"
		}
	},
	"COMPENSATION": {
		"eCompensationType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CompensationTypeEnum"
		},
		"dParam1": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dParam2": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dParam3": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dParam4": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dParam5": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dParam6": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		}
	},
	"COMPENSATIONCONTROL": {
		"eControl": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"ulTimeout": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"GPGGAPRECISION": {
		"ulApplicability": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulUTCPrecision": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulLatitudePrecision": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulLongitudePrecision": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"eGPSQualEnable": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "EnableEnum"
		},
		"eNumSatEnable": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "EnableEnum"
		},
		"eHDOPEnable": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "EnableEnum"
		},
		"ulHDOPPrecision": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"eAltitudeEnable": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "EnableEnum"
		},
		"ulAltitudePrecision": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"eAltitudeUnitsEnable": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "EnableEnum"
		},
		"eUndulationEnable": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "EnableEnum"
		},
		"ulUndulationPrecision": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"eUndulationUnitsEnable": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "EnableEnum"
		},
		"eAgeEnable": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "EnableEnum"
		},
		"eStnIdEnable": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "EnableEnum"
		},
		"eStnIdZeroPaddingEnable": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "EnableEnum"
		}
	},
	"GPVTGDATA": {
		"eTalkerID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "NMEATalkerIDEnum"
		},
		"eMyType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SolStatusEnum"
		},
		"dMyGroundTrack": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyHorizontalSpeed": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "29",
			"DataType": "UCHAR"
		},
		"fMyDeclination": {
			"NoOfBytes": "4",
			"Offset": "30",
			"DataType": "FLOAT"
		},
		"eMyNMEAVersion": {
			"NoOfBytes": "4",
			"Offset": "34",
			"DataType": "NMEAVersionEnum"
		}
	},
	"MAGNETICDECLINATION": {
		"fMyDeclination": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		},
		"fMyDeclinationStdDev": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		}
	},
	"PSRVEL2": {
		"eMyVelocityStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyVelocityType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyXStdDev": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyYStdDev": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyZStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "44",
			"DataType": "FixedCharArray"
		},
		"fMyLatency": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "53",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "54",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "55",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "58",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "57",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "59",
			"DataType": "UCHAR"
		}
	},
	"GPRMCDATA": {
		"eTalkerID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "NMEATalkerIDEnum"
		},
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"eMyVelocityStatus": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "SolStatusEnum"
		},
		"dMyHorizontalSpeed": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyGroundTrack": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "48",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "49",
			"DataType": "UCHAR"
		},
		"ucUTCDay": {
			"NoOfBytes": "1",
			"Offset": "50",
			"DataType": "UCHAR"
		},
		"ucUTCMonth": {
			"NoOfBytes": "1",
			"Offset": "51",
			"DataType": "UCHAR"
		},
		"ulUTCYear": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"UTCTimeStatus": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "UTCTimeStatus"
		},
		"fMyDeclination": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		}
	},
	"RTKVEL2": {
		"eMyVelocityStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyVelocityType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyXStdDev": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyYStdDev": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyZStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "44",
			"DataType": "FixedCharArray"
		},
		"fMyLatency": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "53",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "54",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "55",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "58",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "57",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "59",
			"DataType": "UCHAR"
		}
	},
	"BESTVEL2": {
		"eMyVelocityStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyVelocityType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyXStdDev": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyYStdDev": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyZStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "44",
			"DataType": "FixedCharArray"
		},
		"fMyLatency": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "53",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "54",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "55",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "58",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "57",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "59",
			"DataType": "UCHAR"
		}
	},
	"PDPVEL2": {
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyXStdDev": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyYStdDev": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyZStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "44",
			"DataType": "FixedCharArray"
		},
		"fMyLatency": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "53",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "54",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "55",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "56",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "57",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "58",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "59",
			"DataType": "UCHAR"
		}
	},
	"PDPSATS": {
		"aclMySatelliteEntries": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ObservationStatusEnum"
		},
		"ulMyStatusMask": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"SOFTLOADSTATUS": {
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SoftLoadStatusEnum"
		}
	},
	"SOFTLOADDEBUG": {
		"szMyDebugString": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		}
	},
	"SETTIMEBASE": {
		"eMyPrimarySystem": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "TimingSystemEnum"
		},
		"aclMyBackupSystem": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ClassArray"
		},
		"eMySystem": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "TimingSystemEnum"
		},
		"ulMyTimeOut": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"CABO": ["8"],
		"CAAO": ["8"]
	},
	"DEBUGIQDATA": {
		"sigMyChan": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SIGCHAN"
		},
		"ulMySatelliteID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"eMyIQType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "IQTypeEnum"
		},
		"aclMyIQAccums": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"lCarrierAccumI": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "LONG"
		},
		"lCarrierAccumQ": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "LONG"
		},
		"lCodeAccumI": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "LONG"
		},
		"lCodeAccumQ": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "LONG"
		},
		"lPunctualAccumI": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "LONG"
		},
		"lPunctualAccumQ": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "LONG"
		},
		"CABO": ["16"],
		"CAAO": ["24"]
	},
	"SETOPTIONBITS": {
		"ulMyOptionBits1": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyOptionBits2": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"RTKVERIFIEDQUALITY": {
		"eMyRTKVerifiedQualityLevel": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RTKVerifiedQualityLevelEnum"
		},
		"eMyRTKVerifiedQualityARC": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTKVerifiedQualityARCEnum"
		}
	},
	"RTKVERIFIEDONLY": {
		"eMyRTKVerifiedOnly": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"IPCONFIG": {
		"eMyInterface": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PhysicalInterfaceEnum"
		},
		"eMyMode": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "IPConfigModeEnum"
		},
		"sMyIPAddress": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "STRING"
		},
		"sMyNetmask": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "STRING"
		},
		"sMyGateway": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "STRING"
		},
		"CABO": ["4"],
		"CAAO": ["11"]
	},
	"DNSCONFIG": {
		"aclDNSServer": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"sIPAddress": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		}
	},
	"ETHCONFIG": {
		"eMyInterface": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PhysicalInterfaceEnum"
		},
		"eMySpeed": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "EthernetSpeedEnum"
		},
		"eMyDuplex": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "EthernetDuplexEnum"
		},
		"eMyCrossover": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "EthernetCrossoverEnum"
		},
		"eMyPowerMode": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "EthernetPowerModeEnum"
		}
	},
	"SERIALCONFIG": {
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		},
		"ulMyBaudRate": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"eMyParity": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "OEM4_ParityEnum"
		},
		"ulMyDataBits": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyStopBits": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"eMyHandShaking": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "HandShakeEnum"
		},
		"eMyBreaks": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "OnOffEnum"
		}
	},
	"ECHO": {
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		},
		"eMyEcho": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "OnOffEnum"
		}
	},
	"ICOMCONFIG": {
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		},
		"eMyProtocol": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "EthernetProtocolEnum"
		},
		"sMyEndpoint": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "STRING"
		},
		"eMyBindInterface": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "PhysicalInterfaceEnum"
		}
	},
	"NTRIPCONFIG": {
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		},
		"eMyType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "NTripTypeEnum"
		},
		"eMyProtocol": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "NTripProtocolEnum"
		},
		"sMyEndpoint": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "STRING"
		},
		"sMyMountpoint": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "STRING"
		},
		"sMyUsername": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "STRING"
		},
		"sMyPassword": {
			"NoOfBytes": "1",
			"Offset": "15",
			"DataType": "STRING"
		},
		"eMyBindInterface": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "PhysicalInterfaceEnum"
		}
	},
	"PASSICOM1": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PASSICOM2": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PASSICOM3": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PASSNCOM1": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PASSNCOM2": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PASSNCOM3": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"BESTLEVERARM2": {
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "3",
			"DataType": "FixedDOUBLEArray"
		},
		"iMyMapping": {
			"NoOfBytes": "4",
			"Offset": "6",
			"DataType": "INT"
		}
	},
	"TAGNEXTMARK": {
		"eMyMark": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "MarkEnum"
		},
		"ulMyTag": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"TAGGEDMARK1PVA": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "INSStatusEnum"
		},
		"ulMyTagID": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "ULONG"
		}
	},
	"TAGGEDMARK2PVA": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "INSStatusEnum"
		},
		"ulMyTagID": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "ULONG"
		}
	},
	"GENERATERTKCORRECTIONS": {
		"eMyCorrectionTypeEnum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RTKCorrectionSetEnum"
		},
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "CommPortEnum"
		}
	},
	"GLOFIXINGOPTION": {
		"eMyOption": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"eMyBaseRxType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "BaseReceiverTypeEnum"
		}
	},
	"GPGRSDATA": {
		"eTalkerID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "NMEATalkerIDEnum"
		},
		"aclMyEntries": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "SATELLITEID"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ObservationStatusEnum"
		},
		"dMyResidual": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"eMyNMEAVersion": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "NMEAVersionEnum"
		},
		"CABO": ["8"],
		"CAAO": ["24"]
	},
	"SETGALSATTYPE": {
		"ulMySatelliteID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"eMySatType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "GalileoSatTypeEnum"
		}
	},
	"DEBUGBUFFER": {
		"ulMySeqNo": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"szMyMessage": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		}
	},
	"RXSTATUSUPDATE": {
		"eMyRxStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RxStatusEnum"
		},
		"eMyRxStatusFlag": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RxStatusFlag"
		},
		"eMyRxStatusAuxiliary": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "RxStatusAuxiliary"
		}
	},
	"DDCDEBUGENABLE": {
		"bMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BOOL"
		},
		"CABO": ["4"],
		"CAAO": ["4"]
	},
	"DDCDEBUG": {
		"aclMyDDCs": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"ulMyEncoder": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"fMyNoiseFloor": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"eMyRange": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "EncoderRangeEnum"
		},
		"fMyDCOffset": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyPDFError": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"afMyPDF": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FixedFLOATArray"
		}
	},
	"IMUTOANTOFFSETS": {
		"iMyMapping": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INT"
		},
		"aclMyLeverArm": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ClassArray"
		},
		"eMyOffset": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "INSOffsetEnum"
		},
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "15",
			"DataType": "FixedDOUBLEArray"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "SourceStatusEnum"
		},
		"CABO": ["8"],
		"CAAO": ["14"]
	},
	"BASEIONO": {
		"eMyDGPSType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "DGPSTypeEnum"
		},
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"aclMyIonoCorrections": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "SATELLITEID"
		},
		"fMyIonoDelay": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"fMyIonoDelayRate": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"CABO": ["12"],
		"CAAO": ["16"]
	},
	"RANGECMP2": {
		"aucMyRangeData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VarHEXBYTEType"
		}
	},
	"RAIMMODE": {
		"eMyMode": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RAIMModeEnum"
		},
		"dMyHAL": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyVAL": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyPFA": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		}
	},
	"RAIMSTATUS": {
		"eMyMode": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RAIMModeEnum"
		},
		"eMyIntegrityStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RAIMIntegrityStatusEnum"
		},
		"eMyHPLStatus": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "RAIMProtectionLevelStatus"
		},
		"dMyHPL": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"eMyVPLStatus": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "RAIMProtectionLevelStatus"
		},
		"dMyVPL": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"aclMyRejectedSVs": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "SATELLITEID"
		},
		"CABO": ["4"],
		"CAAO": ["8"]
	},
	"ETHSTATUS": {
		"aclMyEthStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMyInterface": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "PhysicalInterfaceEnum"
		},
		"sMyMACAddress": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "STRING"
		},
		"eMyInterfaceConfig": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "EthernetInterfaceConfigEnum"
		},
		"CABO": ["4"],
		"CAAO": ["9"]
	},
	"IPSTATUS": {
		"aclMyIPStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMyInterface": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "PhysicalInterfaceEnum"
		},
		"sMyIPAddress": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "STRING"
		},
		"sMyNetmask": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "STRING"
		},
		"sMyGateway": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "STRING"
		},
		"aclMyDNSServer": {
			"NoOfBytes": "4",
			"Offset": "11",
			"DataType": "ClassArray"
		},
		"sIPAddress": {
			"NoOfBytes": "1",
			"Offset": "15",
			"DataType": "STRING"
		},
		"CABO": ["15"],
		"CAAO": ["16"]
	},
	"CREATEETHERLOG": {
		"szMyLogName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"eMyEtherId": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ucEtherCopy": {
			"NoOfBytes": "1",
			"Offset": "36",
			"DataType": "UCHAR"
		}
	},
	"INSZUPTCONTROL": {
		"eMyTrigger": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"SETIMUSPECS": {
		"ulMyDataRate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMyAccelBias": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyAccelVRW": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyGyroBias": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyGyroARW": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"ulMyAccelScaleFactorError": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"ulMyGyroScaleFactorError": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"dMyDataLatency": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"eMyScaleFactor": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ScaleFactorEnum"
		}
	},
	"GENERATEDIFFCORRECTIONS": {
		"eMyInterfaceModeEnum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "InterfaceModeEnum"
		},
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "CommPortEnum"
		}
	},
	"SOFTLOADFILE": {
		"eMyFileSystem": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "MassStorageDeviceEnum"
		},
		"szMyFileName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"eMyDestinationDevice": {
			"NoOfBytes": "4",
			"Offset": "132",
			"DataType": "EgressRoutingDestEnum"
		}
	},
	"IMURATEPVAS": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "INSStatusEnum"
		},
		"CABO": ["4"],
		"CAAO": ["88"]
	},
	"FRONTENDDATA": {
		"aclMyAGCFrontEndData": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"ulMyFrontEnd": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyTimeStamp": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"bMyCalibrated": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "BOOL"
		},
		"ulMyAdjustMode": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyAdjustRate": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyPulseWidth": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMyModulus": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyADCBottomBit": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"dMyDCOffset": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyPDFError": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"adMyPDF": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"DEBUGBUFFERCMP": {
		"ulMySeqNo": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"szMyMessage": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		}
	},
	"DEBUGETHERREQUESTORS": {
		"ulMyEtherNum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"szMyEtherName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		},
		"aclMyEntries": {
			"NoOfBytes": "4",
			"Offset": "55",
			"DataType": "ClassArray"
		},
		"ulMyPeriod": {
			"NoOfBytes": "4",
			"Offset": "59",
			"DataType": "ULONG"
		},
		"ulMyTrigger": {
			"NoOfBytes": "4",
			"Offset": "63",
			"DataType": "ULONG"
		},
		"ulMyTaskID": {
			"NoOfBytes": "4",
			"Offset": "67",
			"DataType": "ULONG"
		},
		"szMyTaskName": {
			"NoOfBytes": "1",
			"Offset": "71",
			"DataType": "STRING"
		},
		"CABO": ["59"],
		"CAAO": ["63"]
	},
	"GALINAVEPHEMERIS": {
		"ulMySatId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ucMyE5bHealth": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "UCHAR"
		},
		"ucMyE5bDVS": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "UCHAR"
		},
		"ucMyReserved1": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "UCHAR"
		},
		"ucMyReserved2": {
			"NoOfBytes": "1",
			"Offset": "7",
			"DataType": "UCHAR"
		},
		"ucMyE1bHealth": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "UCHAR"
		},
		"ucMyE1bDVS": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "UCHAR"
		},
		"ucMyReserved3": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "UCHAR"
		},
		"ucMyReserved4": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "UCHAR"
		},
		"usMyIODnav": {
			"NoOfBytes": "2",
			"Offset": "12",
			"DataType": "USHORT"
		},
		"ucMySISA": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "UCHAR"
		},
		"ucMyINAVSignalType": {
			"NoOfBytes": "1",
			"Offset": "15",
			"DataType": "UCHAR"
		},
		"ulMyTOE": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "UINT"
		},
		"ulMyTOC": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"dMyM0": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyDeltaN": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyEcc": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMyRootA": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"dMyI0": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		},
		"dMyIDot": {
			"NoOfBytes": "8",
			"Offset": "64",
			"DataType": "DOUBLE"
		},
		"dMyOmega0": {
			"NoOfBytes": "8",
			"Offset": "72",
			"DataType": "DOUBLE"
		},
		"dMyOmega": {
			"NoOfBytes": "8",
			"Offset": "80",
			"DataType": "DOUBLE"
		},
		"dMyOmegaDot": {
			"NoOfBytes": "8",
			"Offset": "88",
			"DataType": "DOUBLE"
		},
		"dMyCuc": {
			"NoOfBytes": "8",
			"Offset": "96",
			"DataType": "DOUBLE"
		},
		"dMyCus": {
			"NoOfBytes": "8",
			"Offset": "104",
			"DataType": "DOUBLE"
		},
		"dMyCrc": {
			"NoOfBytes": "8",
			"Offset": "112",
			"DataType": "DOUBLE"
		},
		"dMyCrs": {
			"NoOfBytes": "8",
			"Offset": "120",
			"DataType": "DOUBLE"
		},
		"dMyCic": {
			"NoOfBytes": "8",
			"Offset": "128",
			"DataType": "DOUBLE"
		},
		"dMyCis": {
			"NoOfBytes": "8",
			"Offset": "136",
			"DataType": "DOUBLE"
		},
		"dMyAf0": {
			"NoOfBytes": "8",
			"Offset": "144",
			"DataType": "DOUBLE"
		},
		"dMyAf1": {
			"NoOfBytes": "8",
			"Offset": "152",
			"DataType": "DOUBLE"
		},
		"dMyAf2": {
			"NoOfBytes": "8",
			"Offset": "160",
			"DataType": "DOUBLE"
		},
		"dMyE1E5aBGD": {
			"NoOfBytes": "8",
			"Offset": "168",
			"DataType": "DOUBLE"
		},
		"dMyE1E5bBGD": {
			"NoOfBytes": "8",
			"Offset": "176",
			"DataType": "DOUBLE"
		}
	},
	"GALFNAVEPHEMERIS": {
		"ulMySatId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ucMyE5aHealth": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "UCHAR"
		},
		"ucMyE5aDVS": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "UCHAR"
		},
		"ucMyReserved1": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "UCHAR"
		},
		"ucMyReserved2": {
			"NoOfBytes": "1",
			"Offset": "7",
			"DataType": "UCHAR"
		},
		"usMyIODnav": {
			"NoOfBytes": "2",
			"Offset": "8",
			"DataType": "USHORT"
		},
		"ucMySISA": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "UCHAR"
		},
		"ucMyReserved3": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "UCHAR"
		},
		"ulMyTOE": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "UINT"
		},
		"ulMyTOC": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"dMyM0": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyDeltaN": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyEcc": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyRootA": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyI0": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyIDot": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyOmega0": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyOmega": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"dMyOmegaDot": {
			"NoOfBytes": "8",
			"Offset": "84",
			"DataType": "DOUBLE"
		},
		"dMyCuc": {
			"NoOfBytes": "8",
			"Offset": "92",
			"DataType": "DOUBLE"
		},
		"dMyCus": {
			"NoOfBytes": "8",
			"Offset": "100",
			"DataType": "DOUBLE"
		},
		"dMyCrc": {
			"NoOfBytes": "8",
			"Offset": "108",
			"DataType": "DOUBLE"
		},
		"dMyCrs": {
			"NoOfBytes": "8",
			"Offset": "116",
			"DataType": "DOUBLE"
		},
		"dMyCic": {
			"NoOfBytes": "8",
			"Offset": "124",
			"DataType": "DOUBLE"
		},
		"dMyCis": {
			"NoOfBytes": "8",
			"Offset": "132",
			"DataType": "DOUBLE"
		},
		"dMyAf0": {
			"NoOfBytes": "8",
			"Offset": "140",
			"DataType": "DOUBLE"
		},
		"dMyAf1": {
			"NoOfBytes": "8",
			"Offset": "148",
			"DataType": "DOUBLE"
		},
		"dMyAf2": {
			"NoOfBytes": "8",
			"Offset": "156",
			"DataType": "DOUBLE"
		},
		"dMyE1E5aBGD": {
			"NoOfBytes": "8",
			"Offset": "164",
			"DataType": "DOUBLE"
		}
	},
	"SETIMUPROTOCOL": {
		"eMyPortProtocol": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PortProtocolEnum"
		},
		"ulMyBaudRate": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"eMyParity": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "OEM4_ParityEnum"
		},
		"ulMyDataBits": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyStopBits": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"eMyHandShaking": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "HandShakeEnum"
		},
		"eMyTimeMessage": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "TimeMessageEnum"
		}
	},
	"ALIGNBSLNXYZ": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyXStdDev": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyYStdDev": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyZStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"acMyRoverID": {
			"NoOfBytes": "1",
			"Offset": "44",
			"DataType": "FixedCharArray"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "45",
			"DataType": "FixedCharArray"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "49",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "50",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "51",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "UCHAR"
		},
		"ucMyMeasurementSource": {
			"NoOfBytes": "1",
			"Offset": "53",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "54",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "55",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "56",
			"DataType": "UCHAR"
		}
	},
	"ALIGNBSLNENU": {
		"eMySolutionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMySolutionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"acMyRoverID": {
			"NoOfBytes": "1",
			"Offset": "44",
			"DataType": "FixedCharArray"
		},
		"acMyMasterID": {
			"NoOfBytes": "1",
			"Offset": "45",
			"DataType": "FixedCharArray"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "49",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "50",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "51",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "UCHAR"
		},
		"ucMyMeasurementSource": {
			"NoOfBytes": "1",
			"Offset": "53",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "54",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "55",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "56",
			"DataType": "UCHAR"
		}
	},
	"HEADINGSATS": {
		"aclMySatelliteEntries": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ObservationStatusEnum"
		},
		"ulMyStatusMask": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"INPUTGIMBALANGLE": {
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "3",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"SETGIMBALORIENTATION": {
		"iMyOrientation": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INT"
		}
	},
	"GIMBALSPANROTATION": {
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "3",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"VARIABLELEVERARM": {
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "3",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"GIMBALLEDPVA": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "INSStatusEnum"
		}
	},
	"SETRTCMTXVERSION": {
		"eMyVersion": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RTCMVersionEnum"
		}
	},
	"ALIGNAUTOMATION": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "CommPortEnum"
		},
		"ulMyBaudRate": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyReqRateInHz": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"eMySendHeadingExt": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "OnOffEnum"
		},
		"eMyInterfaceMode": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "InterfaceModeEnum"
		}
	},
	"PDPVELOCITYOUT": {
		"eMyPDPVelocityOutCmd": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PDPVelocityOutEnum"
		}
	},
	"REFSTATIONINFO": {
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"eMyDatum": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "DatumEnum"
		},
		"fMyARPHeight": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"eMyRefType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "RefStationEnum"
		},
		"acMyStationID": {
			"NoOfBytes": "1",
			"Offset": "40",
			"DataType": "STRING"
		},
		"acMyAntennaModel": {
			"NoOfBytes": "1",
			"Offset": "41",
			"DataType": "STRING"
		},
		"acMyAntennaSerial": {
			"NoOfBytes": "1",
			"Offset": "42",
			"DataType": "STRING"
		}
	},
	"TRACKSV": {
		"eMySystem": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SystemTypeEnum"
		},
		"ulMySatID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"eMyCondition": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "TrackSVEnum"
		}
	},
	"TAGGEDMARK3PVA": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "INSStatusEnum"
		},
		"ulMyTagID": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "ULONG"
		}
	},
	"TAGGEDMARK4PVA": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "INSStatusEnum"
		},
		"ulMyTagID": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "ULONG"
		},
		"CABO": ["4"],
		"CAAO": ["92"]
	},
	"MODELFEATURES": {
		"aclFeatures": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eFeatureStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FeatureStatusEnum"
		},
		"eFeature": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FeatureEnum"
		}
	},
	"QZSSRAWSUBFRAME": {
		"ulMySatelliteID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMySubFrameID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"aucMyRawSubFrameData": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "FixedHEXBYTEArray"
		},
		"ulMySignalChannelNumber": {
			"NoOfBytes": "4",
			"Offset": "38",
			"DataType": "ULONG"
		}
	},
	"QZSSRAWEPHEM": {
		"ulMySatelliteID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyTOE": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"aucMySubframe1": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "FixedHEXBYTEArray"
		},
		"aucMySubframe2": {
			"NoOfBytes": "1",
			"Offset": "42",
			"DataType": "FixedHEXBYTEArray"
		},
		"aucMySubframe3": {
			"NoOfBytes": "1",
			"Offset": "43",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"ALIGNDOP": {
		"fMyGDOP": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		},
		"fMyPDOP": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"fMyHDOP": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyHTDOP": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyTDOP": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyGPSElevMask": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"aulMySats": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "VariableULONGArray"
		}
	},
	"SETUPSENSOR": {
		"eSensorId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SensorEnum"
		},
		"eSpanEventOut": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "MarkEnum"
		},
		"eSpanEvtOutPolarity": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "PolarityEnum"
		},
		"ulSpanEvtOutActivePulseMS": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"eSpanEventIn": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "MarkEnum"
		},
		"eSpanEvtInEnableDisable": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "EventInEnableEnum"
		},
		"eSpanEvtInPolarity": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "PolarityEnum"
		},
		"lSpanEvtInTimeBiasNS": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "LONG"
		},
		"ulSpanEvtInTimeGuardMS": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		}
	},
	"HEADING2": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"fMyBLength": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyHeading": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyPitch": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fFloat": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"fMyHeadingStdDev": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"fMyPitchStdDev": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"acMyRoverID": {
			"NoOfBytes": "1",
			"Offset": "32",
			"DataType": "FixedCharArray"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "33",
			"DataType": "FixedCharArray"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "37",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "38",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "39",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "40",
			"DataType": "UCHAR"
		},
		"ucMyMeasurementSource": {
			"NoOfBytes": "1",
			"Offset": "41",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "42",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "43",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "44",
			"DataType": "UCHAR"
		}
	},
	"QZSSEPHEMERIS": {
		"ulMySatelliteID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMyTOW": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"ulMyHealth6": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyIODE1": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyIODE2": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyWN": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulMyZWN": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"dMyTOE": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyA": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMyDeltaN": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"dMyM0": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		},
		"dMyEcc": {
			"NoOfBytes": "8",
			"Offset": "64",
			"DataType": "DOUBLE"
		},
		"dMyOmega": {
			"NoOfBytes": "8",
			"Offset": "72",
			"DataType": "DOUBLE"
		},
		"dMyCuc": {
			"NoOfBytes": "8",
			"Offset": "80",
			"DataType": "DOUBLE"
		},
		"dMyCus": {
			"NoOfBytes": "8",
			"Offset": "88",
			"DataType": "DOUBLE"
		},
		"dMyCrc": {
			"NoOfBytes": "8",
			"Offset": "96",
			"DataType": "DOUBLE"
		},
		"dMyCrs": {
			"NoOfBytes": "8",
			"Offset": "104",
			"DataType": "DOUBLE"
		},
		"dMyCic": {
			"NoOfBytes": "8",
			"Offset": "112",
			"DataType": "DOUBLE"
		},
		"dMyCis": {
			"NoOfBytes": "8",
			"Offset": "120",
			"DataType": "DOUBLE"
		},
		"dMyI0": {
			"NoOfBytes": "8",
			"Offset": "128",
			"DataType": "DOUBLE"
		},
		"dMyIDot": {
			"NoOfBytes": "8",
			"Offset": "136",
			"DataType": "DOUBLE"
		},
		"dMyOmega0": {
			"NoOfBytes": "8",
			"Offset": "144",
			"DataType": "DOUBLE"
		},
		"dMyOmegaDot": {
			"NoOfBytes": "8",
			"Offset": "152",
			"DataType": "DOUBLE"
		},
		"ulMyIODC": {
			"NoOfBytes": "4",
			"Offset": "160",
			"DataType": "ULONG"
		},
		"dMyTOC": {
			"NoOfBytes": "8",
			"Offset": "164",
			"DataType": "DOUBLE"
		},
		"dMyTGD": {
			"NoOfBytes": "8",
			"Offset": "172",
			"DataType": "DOUBLE"
		},
		"dMyAf0": {
			"NoOfBytes": "8",
			"Offset": "180",
			"DataType": "DOUBLE"
		},
		"dMyAf1": {
			"NoOfBytes": "8",
			"Offset": "188",
			"DataType": "DOUBLE"
		},
		"dMyAf2": {
			"NoOfBytes": "8",
			"Offset": "196",
			"DataType": "DOUBLE"
		},
		"bMyAntiSpoofing": {
			"NoOfBytes": "4",
			"Offset": "204",
			"DataType": "BOOL"
		},
		"dMyN": {
			"NoOfBytes": "8",
			"Offset": "208",
			"DataType": "DOUBLE"
		},
		"dMyEphVar": {
			"NoOfBytes": "8",
			"Offset": "216",
			"DataType": "DOUBLE"
		},
		"ucMyFitInterval": {
			"NoOfBytes": "1",
			"Offset": "224",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "227",
			"DataType": "UCHAR"
		}
	},
	"TIMEDEVENTPULSE": {
		"lSelectedSensors": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "LONG"
		},
		"ulTargetWeek": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"dTargetSeconds": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"ulTag": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		}
	},
	"RTCAOBS3": {
		"NovAtelDesignator": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "UCHAR"
		},
		"SubtypeIndicator": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "UCHAR"
		},
		"bMyMovingBase": {
			"NoOfBytes": "4",
			"Offset": "2",
			"DataType": "BOOL"
		},
		"dMyRefX": {
			"NoOfBytes": "8",
			"Offset": "6",
			"DataType": "DOUBLE"
		},
		"dMyRefY": {
			"NoOfBytes": "8",
			"Offset": "14",
			"DataType": "DOUBLE"
		},
		"dMyRefZ": {
			"NoOfBytes": "8",
			"Offset": "22",
			"DataType": "DOUBLE"
		},
		"Seconds": {
			"NoOfBytes": "4",
			"Offset": "30",
			"DataType": "FLOAT"
		},
		"ReceiverTimeBias": {
			"NoOfBytes": "8",
			"Offset": "34",
			"DataType": "DOUBLE"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "70",
			"DataType": "UCHAR"
		},
		"Transmitter2Data": {
			"NoOfBytes": "4",
			"Offset": "46",
			"DataType": "ClassArray"
		},
		"TransmitterID": {
			"NoOfBytes": "1",
			"Offset": "50",
			"DataType": "UCHAR"
		},
		"FreqAvail": {
			"NoOfBytes": "1",
			"Offset": "51",
			"DataType": "UCHAR"
		},
		"L1ADROffset": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"L1PsrOffset": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"CodeType": {
			"NoOfBytes": "1",
			"Offset": "68",
			"DataType": "UCHAR"
		},
		"L1LockTime": {
			"NoOfBytes": "1",
			"Offset": "69",
			"DataType": "UCHAR"
		},
		"L2ADROffset": {
			"NoOfBytes": "8",
			"Offset": "71",
			"DataType": "DOUBLE"
		},
		"L2PsrOffset": {
			"NoOfBytes": "8",
			"Offset": "79",
			"DataType": "DOUBLE"
		},
		"CodeType2": {
			"NoOfBytes": "1",
			"Offset": "87",
			"DataType": "UCHAR"
		},
		"L2LockTime": {
			"NoOfBytes": "1",
			"Offset": "88",
			"DataType": "UCHAR"
		},
		"Reserved2": {
			"NoOfBytes": "1",
			"Offset": "89",
			"DataType": "UCHAR"
		},
		"CABO": ["50"],
		"CAAO": ["40"]
	},
	"RTCAOBS3IN": {
		"ulMessageIdentifier": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefStation": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMessageType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulReserved": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMessageLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"NovAtelDesignator": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "UCHAR"
		},
		"SubtypeIndicator": {
			"NoOfBytes": "1",
			"Offset": "21",
			"DataType": "UCHAR"
		},
		"bMyMovingBase": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "BOOL"
		},
		"dMyRefX": {
			"NoOfBytes": "8",
			"Offset": "26",
			"DataType": "DOUBLE"
		},
		"dMyRefY": {
			"NoOfBytes": "8",
			"Offset": "34",
			"DataType": "DOUBLE"
		},
		"dMyRefZ": {
			"NoOfBytes": "8",
			"Offset": "42",
			"DataType": "DOUBLE"
		},
		"Seconds": {
			"NoOfBytes": "4",
			"Offset": "50",
			"DataType": "FLOAT"
		},
		"ReceiverTimeBias": {
			"NoOfBytes": "8",
			"Offset": "54",
			"DataType": "DOUBLE"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "90",
			"DataType": "UCHAR"
		},
		"Transmitter2Data": {
			"NoOfBytes": "4",
			"Offset": "66",
			"DataType": "ClassArray"
		},
		"TransmitterID": {
			"NoOfBytes": "1",
			"Offset": "70",
			"DataType": "UCHAR"
		},
		"FreqAvail": {
			"NoOfBytes": "1",
			"Offset": "71",
			"DataType": "UCHAR"
		},
		"L1ADROffset": {
			"NoOfBytes": "8",
			"Offset": "72",
			"DataType": "DOUBLE"
		},
		"L1PsrOffset": {
			"NoOfBytes": "8",
			"Offset": "80",
			"DataType": "DOUBLE"
		},
		"CodeType": {
			"NoOfBytes": "1",
			"Offset": "88",
			"DataType": "UCHAR"
		},
		"L1LockTime": {
			"NoOfBytes": "1",
			"Offset": "89",
			"DataType": "UCHAR"
		},
		"L2ADROffset": {
			"NoOfBytes": "8",
			"Offset": "91",
			"DataType": "DOUBLE"
		},
		"L2PsrOffset": {
			"NoOfBytes": "8",
			"Offset": "99",
			"DataType": "DOUBLE"
		},
		"CodeType2": {
			"NoOfBytes": "1",
			"Offset": "107",
			"DataType": "UCHAR"
		},
		"L2LockTime": {
			"NoOfBytes": "1",
			"Offset": "108",
			"DataType": "UCHAR"
		},
		"Reserved2": {
			"NoOfBytes": "1",
			"Offset": "109",
			"DataType": "UCHAR"
		},
		"CABO": ["70"],
		"CAAO": ["40"]
	},
	"PASSTHROUGH": {
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		},
		"acMyBuffer": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "VariableCHARArray"
		}
	},
	"NTRIPSOURCETABLE": {
		"sMyEndpoint": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"ulMyReserved1": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "ULONG"
		},
		"ulMyReserved2": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "ULONG"
		}
	},
	"SOURCETABLE": {
		"sMyEndpoint": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"ulMyReserved1": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "ULONG"
		},
		"ulMyReserved2": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "ULONG"
		},
		"sMyEntryData": {
			"NoOfBytes": "1",
			"Offset": "88",
			"DataType": "STRING"
		}
	},
	"QZSSRAWALMANAC": {
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"aclMySubFramePages": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ClassArray"
		},
		"usSVID": {
			"NoOfBytes": "2",
			"Offset": "12",
			"DataType": "USHORT"
		},
		"aucMyPageRawData": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "FixedHEXBYTEArray"
		},
		"CABO": ["4"],
		"CAAO": ["32"]
	},
	"QZSSALMANAC": {
		"aclMySVAlmData": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"ulPRN": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyWn": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"dMyTOA": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyEcc": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyOmegaDot": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyOmega0": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyOmega": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyMo": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyAf0": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyAf1": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyN": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"dMyA": {
			"NoOfBytes": "8",
			"Offset": "84",
			"DataType": "DOUBLE"
		},
		"dMyDi": {
			"NoOfBytes": "8",
			"Offset": "92",
			"DataType": "DOUBLE"
		},
		"ulMyHealth6": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "ULONG"
		},
		"ulMyHealth8": {
			"NoOfBytes": "4",
			"Offset": "104",
			"DataType": "ULONG"
		}
	},
	"QZSSIONUTC": {
		"dMyA0": {
			"NoOfBytes": "8",
			"Offset": "72",
			"DataType": "DOUBLE"
		},
		"dMyA1": {
			"NoOfBytes": "8",
			"Offset": "80",
			"DataType": "DOUBLE"
		},
		"dMyA2": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyA3": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyB0": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyB1": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMyB2": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"dMyB3": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		},
		"ulMyWNt": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ULONG"
		},
		"ulMyTot": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "ULONG"
		},
		"ulMyWNlsf": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "ULONG"
		},
		"ulMyDN": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "ULONG"
		},
		"lMyDeltaTls": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "LONG"
		},
		"lMyDeltaTlsf": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "LONG"
		},
		"ulMyDeltaTUTC": {
			"NoOfBytes": "4",
			"Offset": "104",
			"DataType": "ULONG"
		}
	},
	"AUTHCODES": {
		"eSignatureStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SignatureStatus"
		},
		"clMyAuthCodes": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ClassArray"
		},
		"eMyType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "PlatformAuthCodeTypeEnum"
		},
		"bMyValid": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "BOOL"
		},
		"aszMyAuthCode": {
			"NoOfBytes": "1",
			"Offset": "92",
			"DataType": "STRING"
		},
		"CABO": ["8"],
		"CAAO": ["85"]
	},
	"GENERATEALIGNCORRECTIONS": {
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		},
		"ulMyBaudRate": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyObsRateInHz": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyRefRateInHz": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"eMyCorrectionInterface": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "InterfaceModeEnum"
		}
	},
	"QZSSECUTOFF": {
		"fMyElevationCutoffAngle": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		}
	},
	"RTKTRACKINGCONTROL": {
		"eMyMode": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RTKTrackingControlEnum"
		}
	},
	"SETIMUTOGIMBALOFFSET": {
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "3",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"GLODECODEKSAT": {
		"bMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BOOL"
		}
	},
	"DOSCMD": {
		"eMyDosCommand": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "DosCommandEnum"
		},
		"szMyStringField1": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		},
		"szMyStringField2": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "STRING"
		}
	},
	"DUALANTENNAPORTCONFIG": {
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		}
	},
	"SBASHANDLERSSTATUS": {
		"ulMyActiveHandlerPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"aclMyEntries": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ClassArray"
		},
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"eMyServiceProvider": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "SBASServiceProviderEnum"
		},
		"bMyIsTestMode": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "BOOL"
		},
		"ulMyIODP": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyIODI": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"fMyElevationInDegrees": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"fMyLockTime": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"CABO": ["8"],
		"CAAO": ["36"]
	},
	"SBASHANDLEREVENT": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"eMyType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SBASHandlerEventEnum"
		}
	},
	"IMURATECORRIMUS": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyLateral": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyLongitudinal": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyVertical": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		}
	},
	"ASYNCHINSLOGGING": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"IQLOGCONFIG": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"sigMyChan": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SIGCHAN"
		},
		"eMyIQType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "IQTypeEnum"
		}
	},
	"RTCM4093TYPE0": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM4093IN": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VarHEXBYTEType"
		}
	},
	"RTCM4093TYPE1": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM4093TYPE2": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM4093TYPE3": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM4093TYPE4": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"INSUPDATEDEBUG": {
		"eMyPosType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolTypeEnum"
		},
		"iMyGNSSPosRejectCode": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "INT"
		}
	},
	"RTCMV3REFINFO": {
		"szMyReceiverSerialNumDescriptor": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		},
		"szMyReceiverTypeDescriptor": {
			"NoOfBytes": "1",
			"Offset": "31",
			"DataType": "VariableCHARArray"
		},
		"szMyReceiverFirmwareVersionDescriptor": {
			"NoOfBytes": "1",
			"Offset": "32",
			"DataType": "VariableCHARArray"
		},
		"szMyAntennaSerialNumDescriptor": {
			"NoOfBytes": "1",
			"Offset": "33",
			"DataType": "VariableCHARArray"
		},
		"szMyAntennaTypeDescriptor": {
			"NoOfBytes": "1",
			"Offset": "34",
			"DataType": "VariableCHARArray"
		},
		"ucMyAntennaSetupID": {
			"NoOfBytes": "1",
			"Offset": "35",
			"DataType": "UCHAR"
		}
	},
	"SETBASERECEIVERTYPE": {
		"eMyReceiverType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BaseReceiverTypeEnum"
		}
	},
	"POWERTYPE": {
		"eMyPowerType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PowerTypeEnum"
		},
		"CABO": ["4"],
		"CAAO": ["4"]
	},
	"RTKATMOSPHEREDELAYS": {
		"aclMyAtmosphereDelays": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"fMyL1Iono": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyTropo": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"RTKAMBIGUITIES": {
		"aclMyAmbiguities": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"eMyFrequency": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FreqIndexEnum"
		},
		"eMyAmbiguityStatus": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "AmbiguityStatusEnum"
		},
		"fMyAmbiguity": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"fMyAmbiguityStdDev": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"fMyResidual": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		}
	},
	"MOTION": {
		"eMyMotion": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "MotionEnum"
		},
		"dMySpeed": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		}
	},
	"HEAVE": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyHeave": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		}
	},
	"SETHEAVEWINDOW": {
		"iMyHeaveWindow": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INT"
		}
	},
	"PASSCOM4": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"ISMTECCALIBRATION": {
		"eMySignalCombination": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SignalCombinationEnum"
		},
		"dMyTECCalibration": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		}
	},
	"ISMRAWOBS": {
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SystemTypeEnum"
		},
		"aclMyRawObservationEntries": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ClassArray"
		},
		"ucMySVID": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "UCHAR"
		},
		"cMyFrequency": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "CHAR"
		},
		"ucMySignalType": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "UCHAR"
		},
		"ucMyReserved1": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "UCHAR"
		},
		"dMyFirstADR": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"ulMyFirstPower": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"aulMyScintObservations": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FixedULONGArray"
		},
		"CABO": ["4"],
		"CAAO": ["20"]
	},
	"ISMRAWTEC": {
		"aclMyRawTECEntries": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"ucMySVID": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "UCHAR"
		},
		"cMyFrequency": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "CHAR"
		},
		"ucMySatelliteSystem": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "UCHAR"
		},
		"ucMyPrimarySignal": {
			"NoOfBytes": "1",
			"Offset": "7",
			"DataType": "UCHAR"
		},
		"ucMySecondarySignal": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "UCHAR"
		},
		"ucMyReserved1": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "UCHAR"
		},
		"ucMyReserved2": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "UCHAR"
		},
		"ucMyReserved3": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "UCHAR"
		},
		"fMyTEC": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyDeltaTEC": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		}
	},
	"ISMBANDWIDTH": {
		"dMyPhaseBandWidth": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyAmplitudeBandWidth": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"ISMREDOBS": {
		"aclMyReducedObsEntries": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"ucMySVID": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "UCHAR"
		},
		"cMyFrequency": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "CHAR"
		},
		"ucMySatelliteSystem": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "UCHAR"
		},
		"ucMySignalType": {
			"NoOfBytes": "1",
			"Offset": "7",
			"DataType": "UCHAR"
		},
		"fMyAzimuth": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyElevation": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyCNo": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyLockTime": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"fMyCMCAverage": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"fMyCMCStdDev": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"fMyS4": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyS4Correction": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyPhase1SecStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyPhase3SecStdDev": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyPhase10SecStdDev": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"fMyPhase30SecStdDev": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "FLOAT"
		},
		"fMyPhase60SecStdDev": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"CABO": ["4"],
		"CAAO": ["56"]
	},
	"ISMREDTEC": {
		"aclMyReducedTECEntries": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"ucMySVID": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "UCHAR"
		},
		"cMyFrequency": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "CHAR"
		},
		"ucMySatelliteSystem": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "UCHAR"
		},
		"ucMyPrimarySignal": {
			"NoOfBytes": "1",
			"Offset": "7",
			"DataType": "UCHAR"
		},
		"ucMySecondarySignal": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "UCHAR"
		},
		"ucMyReserved1": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "UCHAR"
		},
		"ucMyReserved2": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "UCHAR"
		},
		"ucMyReserved3": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "UCHAR"
		},
		"fMyAzimuth": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyElevation": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMySecondaryLockTime": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"fMySecondaryCNo": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"fMyTEC15": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"fMyDeltaTEC15": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyTEC30": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyDeltaTEC30": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyTEC45": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyDeltaTEC45": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"fMyTECTOW": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "FLOAT"
		},
		"fMyDeltaTECTOW": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		}
	},
	"ISMDETOBS": {
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SystemTypeEnum"
		},
		"aclMyDetrendedEntries": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ClassArray"
		},
		"ucMySVID": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "UCHAR"
		},
		"cMyFrequency": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "CHAR"
		},
		"ucMySignalType": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "UCHAR"
		},
		"ucMyReserved1": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "UCHAR"
		},
		"dMyFirstADR": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"ulMyFirstPower": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"aulMyScintObservations": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FixedULONGArray"
		},
		"CABO": ["8"],
		"CAAO": ["20"]
	},
	"OBSDECORRELATION": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"SETALIGNMENTVEL": {
		"dMyMinVelocity": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		}
	},
	"ISMSIGNALCONTROL": {
		"eMySignalType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SignalTypeEnum"
		},
		"eMyEnableObs": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "EnableEnum"
		},
		"eMyEnableTEC": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "EnableEnum"
		}
	},
	"SETIMUSCALE": {
		"dMyAccelScale": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyGyroScale": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		}
	},
	"SETIMUTOEXTANTOFFSET": {
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "3",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"EXTERNALPOS": {
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyLatitudeStdDev": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyLongitudeStdDev": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyHeightStdDev": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"ulMyUpdateType": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "HEXULONG"
		}
	},
	"DECODEDBASESTATIONOBS": {
		"eMyMessageEnum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BaseStationMessageEnum"
		},
		"acMyDiffStationID": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"aclMyObs": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "ClassArray"
		},
		"usMySvPrn": {
			"NoOfBytes": "2",
			"Offset": "9",
			"DataType": "USHORT"
		},
		"usMySvFreq": {
			"NoOfBytes": "2",
			"Offset": "11",
			"DataType": "USHORT"
		},
		"dMyPsr": {
			"NoOfBytes": "8",
			"Offset": "13",
			"DataType": "DOUBLE"
		},
		"fMySDPsr": {
			"NoOfBytes": "4",
			"Offset": "21",
			"DataType": "FLOAT"
		},
		"dMyAdr": {
			"NoOfBytes": "8",
			"Offset": "25",
			"DataType": "DOUBLE"
		},
		"fMySDAdr": {
			"NoOfBytes": "4",
			"Offset": "33",
			"DataType": "FLOAT"
		},
		"fMyDop": {
			"NoOfBytes": "4",
			"Offset": "37",
			"DataType": "FLOAT"
		},
		"fMyUserCNo": {
			"NoOfBytes": "4",
			"Offset": "41",
			"DataType": "FLOAT"
		},
		"fMyLockTime": {
			"NoOfBytes": "4",
			"Offset": "45",
			"DataType": "FLOAT"
		},
		"ulMyCStatus": {
			"NoOfBytes": "4",
			"Offset": "49",
			"DataType": "HEXULONG"
		},
		"CABO": ["9"],
		"CAAO": ["44"]
	},
	"ISMCALIBRATE": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"ulMyStartDelaySec": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyDurationSec": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"fMyElevationCutoff": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		}
	},
	"ISMCALIBRATIONSTATUS": {
		"ulMyCalibrationTimeSec": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"aclMyCalibrationStatuses": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ClassArray"
		},
		"eMySignalCombination": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SignalCombinationEnum"
		},
		"ulMyNumSamples": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"fMyTECCalibration": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyTECStdDev": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"CABO": ["8"],
		"CAAO": ["16"]
	},
	"PROFILE": {
		"eMyProfileOption": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ProfileOptionEnum"
		},
		"sMyProfileName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		},
		"sMyCommand": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "STRING"
		}
	},
	"PROFILEINFO": {
		"sMyProfileName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"ulMyStatus": {
			"NoOfBytes": "4",
			"Offset": "1",
			"DataType": "HEXULONG"
		},
		"aclMyProfileInfoCommand": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "ClassArray"
		},
		"sMyCommand": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "STRING"
		},
		"CABO": ["9"],
		"CAAO": ["201"]
	},
	"GALFNAVRAWPAGE": {
		"ulMySigChanNum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMySatId": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"aucMyRawFrameData": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"GALINAVRAWWORD": {
		"ulMySigChanNum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMySatId": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"eMySignalType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SignalTypeEnum"
		},
		"aucMyRawFrameData": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"BASEANTENNAPCO": {
		"eMyFrequency": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FrequencyEnum"
		},
		"arMyOffset": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "FixedDOUBLEArray"
		},
		"eMyCorrType ": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "DGPSTypeEnum"
		},
		"szMyStationId": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "FixedCharArray"
		}
	},
	"BASEANTENNAPCV": {
		"eMyFrequency": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FrequencyEnum"
		},
		"arMyPCV": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "FixedDOUBLEArray"
		},
		"eMyCorrType ": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "DGPSTypeEnum"
		},
		"szMyStationId": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "FixedCharArray"
		}
	},
	"THISANTENNAPCO": {
		"eMyFrequency": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FrequencyEnum"
		},
		"arMyOffset": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"THISANTENNAPCV": {
		"eMyFrequency": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FrequencyEnum"
		},
		"arMyPCV": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"BASEANTENNATYPE": {
		"eMyAntennaType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "AntennaModelEnum"
		},
		"eMyAntennaRaydom": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "AntennaRaydomTypeEnum"
		},
		"eMyCorrType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "DGPSTypeEnum"
		},
		"szMyStationId": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "FixedCharArray"
		}
	},
	"THISANTENNATYPE": {
		"eMyAntennaType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "AntennaModelEnum"
		},
		"eMyAntennaRaydom": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "AntennaRaydomTypeEnum"
		}
	},
	"THISANTENNAIN": {
		"acMyStationID": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		},
		"szMyModelName": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "STRING"
		},
		"szMySerialNumber": {
			"NoOfBytes": "1",
			"Offset": "33",
			"DataType": "STRING"
		},
		"ulMySetupID": {
			"NoOfBytes": "4",
			"Offset": "34",
			"DataType": "ULONG"
		}
	},
	"BASEANTENNAPCCORRECTION": {
		"acMyDiffStationID": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		},
		"eMyCorrType ": {
			"NoOfBytes": "4",
			"Offset": "1",
			"DataType": "DGPSTypeEnum"
		},
		"adMyPhaseCenterXYZOffSet": {
			"NoOfBytes": "8",
			"Offset": "5",
			"DataType": "FixedDOUBLEArray"
		},
		"adMyPhaseCenterENUOffset": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "FixedDOUBLEArray"
		},
		"aclMyPhaseCenterVariationCorrection": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ClassArray"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "SATELLITEID"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "SystemTypeEnum"
		},
		"eFrequency": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FrequencyEnum"
		},
		"dPSRCorrection": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dADRCorrection": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"CABO": ["20"],
		"CAAO": ["28"]
	},
	"THISANTENNAPCCORRECTION": {
		"acMyDiffStationID": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		},
		"eMyCorrType ": {
			"NoOfBytes": "4",
			"Offset": "1",
			"DataType": "DGPSTypeEnum"
		},
		"adMyPhaseCenterXYZOffSet": {
			"NoOfBytes": "8",
			"Offset": "5",
			"DataType": "FixedDOUBLEArray"
		},
		"adMyPhaseCenterENUOffset": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "FixedDOUBLEArray"
		},
		"aclMyPhaseCenterVariationCorrection": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ClassArray"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "SATELLITEID"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "SystemTypeEnum"
		},
		"eFrequency": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FrequencyEnum"
		},
		"dPSRCorrection": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dADRCorrection": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"CABO": ["20"],
		"CAAO": ["28"]
	},
	"GL1DEINITIALIZATIONPERIOD": {
		"dMyWaitDuration": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		}
	},
	"SBASALMANAC": {
		"ulMySatelliteID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"eMySystemVariant": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemVariantEnum"
		},
		"ulMyt0": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"usMyDataID": {
			"NoOfBytes": "2",
			"Offset": "12",
			"DataType": "USHORT"
		},
		"usMyHealth": {
			"NoOfBytes": "2",
			"Offset": "14",
			"DataType": "USHORT"
		},
		"lMyX": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "LONG"
		},
		"lMyY": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "LONG"
		},
		"lMyZ": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "LONG"
		},
		"lMyXVel": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "LONG"
		},
		"lMyYVel": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "LONG"
		},
		"lMyZVel": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "LONG"
		},
		"CABO": ["4"],
		"CAAO": ["40"]
	},
	"CORRECTIONSTATS": {
		"aclMyCorrectionMessage": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "CommPortEnum"
		},
		"ulMyUnknownBytes": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"eMyType": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "InterfaceModeEnum"
		},
		"ulMyInvalidCount": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"acMyID": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "FixedCharArray"
		},
		"ulMyType": {
			"NoOfBytes": "4",
			"Offset": "21",
			"DataType": "ULONG"
		},
		"ulMySubType": {
			"NoOfBytes": "4",
			"Offset": "25",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "29",
			"DataType": "ULONG"
		},
		"ulMyCount": {
			"NoOfBytes": "4",
			"Offset": "33",
			"DataType": "ULONG"
		}
	},
	"HEAVEFILTER": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"CONNECTIMU": {
		"eMyIMUPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "IMUPortEnum"
		},
		"eMyIMUType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "IMUTypeEnum"
		}
	},
	"BESTGNSSPOS": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"eMyDatumType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "DatumEnum"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "FixedCharArray"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "66",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "67",
			"DataType": "UCHAR"
		},
		"ucMyMeasurementSource": {
			"NoOfBytes": "1",
			"Offset": "68",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "69",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "70",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "71",
			"DataType": "UCHAR"
		}
	},
	"BESTGNSSVEL": {
		"eMyVelocityStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyVelocityType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"fMyLatency": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"dMyHorizontalSpeed": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyGroundTrack": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"fFloat": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		}
	},
	"RAWIMUCOMDATAS": {
		"eMyIMUIFType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "InterfaceModeEnum"
		},
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "CommPortEnum"
		},
		"ucMyMsgID": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "UCHAR"
		},
		"ucMyPacketCount": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "UCHAR"
		},
		"ucMyReserved1": {
			"NoOfBytes": "1",
			"Offset": "10",
			"DataType": "UCHAR"
		},
		"ucMyReserved2": {
			"NoOfBytes": "1",
			"Offset": "11",
			"DataType": "UCHAR"
		},
		"aucMyRawData": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "VariableUcharArray"
		}
	},
	"SYNCTIMETRIGGER": {
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"SETTROPOMODEL": {
		"eMyModel": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "TropoModelEnum"
		}
	},
	"RTKAGE": {
		"eMyAgeType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RTKAgeEnum"
		}
	},
	"SERIALPROTOCOL": {
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		},
		"eMyProtocol": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "PortProtocolEnum"
		}
	},
	"RTKSOURCETIMEOUT": {
		"eMySetting": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CorrectionsTimeOutEnum"
		},
		"ulMyTimeOut": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"RELINSPVA": {
		"eMyRelINSOutput": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RelINSOutputEnum"
		},
		"dMyDeltaPosN": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyDeltaPosE": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyDeltaPosU": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyDeltaVelN": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyDeltaVelE": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyDeltaVelU": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyDeltaRoll": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyDeltaPitch": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyDeltaHeading": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "FLOAT"
		},
		"acMyRoverID": {
			"NoOfBytes": "1",
			"Offset": "80",
			"DataType": "FixedCharArray"
		},
		"eMyRoverINSStatus": {
			"NoOfBytes": "4",
			"Offset": "81",
			"DataType": "INSStatusEnum"
		},
		"acMyMasterID": {
			"NoOfBytes": "1",
			"Offset": "85",
			"DataType": "FixedCharArray"
		},
		"eMyMasterINSStatus": {
			"NoOfBytes": "4",
			"Offset": "86",
			"DataType": "INSStatusEnum"
		},
		"eMyRTKBaselineStatus": {
			"NoOfBytes": "4",
			"Offset": "90",
			"DataType": "SolTypeEnum"
		},
		"ulMyExtendedSolStat": {
			"NoOfBytes": "4",
			"Offset": "94",
			"DataType": "HEXULONG"
		}
	},
	"RTKMATCHEDTIMEOUT": {
		"ulMyTimeout": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"INSTHRESHOLDS": {
		"eMyINSThresholds": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INSThresholdsEnum"
		},
		"dMyReserved1Threshold": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyReserved2Threshold": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyReserved3Threshold": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		}
	},
	"PSRDIFFSOURCETIMEOUT": {
		"eMySetting": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CorrectionsTimeOutEnum"
		},
		"ulMyTimeOut": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"PSRDIFFTIMEOUT": {
		"ulMyTimeOut": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"CABO": ["4"],
		"CAAO": ["4"]
	},
	"SATXYZ2": {
		"aclMySats": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyRB": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyIonoCorr": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyTropoCorr": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyDummy": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		}
	},
	"STEADYLINE": {
		"eMyCommand": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SteadyLineCommandEnum"
		},
		"lMyOffsetDeweight": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "LONG"
		}
	},
	"RTKNETWORKGEOMETRICDELAYS": {
		"eMyNetworkType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RTKNetworkEnum"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"aclMyEntries": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "SATELLITEID"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "17",
			"DataType": "ULONG"
		},
		"dMyGeometricDelay": {
			"NoOfBytes": "8",
			"Offset": "21",
			"DataType": "DOUBLE"
		},
		"ulMyIODE": {
			"NoOfBytes": "4",
			"Offset": "29",
			"DataType": "ULONG"
		},
		"CABO": ["9"],
		"CAAO": ["24"]
	},
	"RTKNETWORKIONOSPHERICDELAYS": {
		"eMyNetworkType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RTKNetworkEnum"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"aclMyEntries": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "SATELLITEID"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "17",
			"DataType": "ULONG"
		},
		"dMyIonosphericDelay": {
			"NoOfBytes": "8",
			"Offset": "21",
			"DataType": "DOUBLE"
		},
		"CABO": ["9"],
		"CAAO": ["20"]
	},
	"MACNETWORK": {
		"ulMyNetworkID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMySubnetworkID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyMasterReferenceID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"aclMyStations": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"ulMyStationID": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"dMyLatitudeInDegrees": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyLongitudeInDegrees": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"CABO": ["16"],
		"CAAO": ["28"]
	},
	"TSS1": {
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INSStatusEnum"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyHeave": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		}
	},
	"INSATTX": {
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INSStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyRollStdDev": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyPitchStdDev": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyAzimuthStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"ulMyExtendedSolStat": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "HEXULONG"
		},
		"usMyTimeSincePosUpt": {
			"NoOfBytes": "2",
			"Offset": "48",
			"DataType": "USHORT"
		}
	},
	"INSVELX": {
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INSStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyXStdDev": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyYStdDev": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyZStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"ulMyExtendedSolStat": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "HEXULONG"
		},
		"usMyTimeSincePosUpt": {
			"NoOfBytes": "2",
			"Offset": "48",
			"DataType": "USHORT"
		}
	},
	"INSPOSX": {
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INSStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"ulMyExtendedSolStat": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "HEXULONG"
		},
		"usMyTimeSincePosUpt": {
			"NoOfBytes": "2",
			"Offset": "52",
			"DataType": "USHORT"
		}
	},
	"RTKCONSERVEIDLE": {
		"eMyCommand": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RTKConserveIdleEnum"
		}
	},
	"RAWIMUX": {
		"ucMyIMUStatusInfo": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "UCHAR"
		},
		"ucMyIMUType": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "UCHAR"
		},
		"usMyGPSWeek": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "USHORT"
		},
		"dMyGPSSeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"ulMyIMUStatus": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "HEXULONG"
		},
		"lMyDelVelBodyZ": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "LONG"
		},
		"lMyDelVelBodyY": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "LONG"
		},
		"lMyDelVelBodyX": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "LONG"
		},
		"lMyDelAngBodyZ": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "LONG"
		},
		"lMyDelAngBodyY": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "LONG"
		},
		"lMyDelAngBodyX": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "LONG"
		}
	},
	"RAWIMUSX": {
		"ucMyIMUStatusInfo": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "UCHAR"
		},
		"ucMyIMUType": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "UCHAR"
		},
		"usMyGPSWeek": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "USHORT"
		},
		"dMyGPSSeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"ulMyIMUStatus": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "HEXULONG"
		},
		"lMyDelVelBodyZ": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "LONG"
		},
		"lMyDelVelBodyY": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "LONG"
		},
		"lMyDelVelBodyX": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "LONG"
		},
		"lMyDelAngBodyZ": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "LONG"
		},
		"lMyDelAngBodyY": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "LONG"
		},
		"lMyDelAngBodyX": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "LONG"
		}
	},
	"EXTERNALPVAS": {
		"dMyPosition1": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyPosition2": {
			"NoOfBytes": "8",
			"Offset": "3",
			"DataType": "DOUBLE"
		},
		"fMyPosition3": {
			"NoOfBytes": "4",
			"Offset": "11",
			"DataType": "FLOAT"
		},
		"fMyVelocity1": {
			"NoOfBytes": "4",
			"Offset": "15",
			"DataType": "FLOAT"
		},
		"fMyVelocity2": {
			"NoOfBytes": "4",
			"Offset": "19",
			"DataType": "FLOAT"
		},
		"fMyVelocity3": {
			"NoOfBytes": "4",
			"Offset": "23",
			"DataType": "FLOAT"
		},
		"fMyAttitude1": {
			"NoOfBytes": "4",
			"Offset": "27",
			"DataType": "FLOAT"
		},
		"fMyAttitude2": {
			"NoOfBytes": "4",
			"Offset": "31",
			"DataType": "FLOAT"
		},
		"fMyAttitude3": {
			"NoOfBytes": "4",
			"Offset": "35",
			"DataType": "FLOAT"
		},
		"fMyPositionStdDev1": {
			"NoOfBytes": "4",
			"Offset": "39",
			"DataType": "FLOAT"
		},
		"fMyPositionStdDev2": {
			"NoOfBytes": "4",
			"Offset": "43",
			"DataType": "FLOAT"
		},
		"fMyPositionStdDev3": {
			"NoOfBytes": "4",
			"Offset": "47",
			"DataType": "FLOAT"
		},
		"fMyVelocityStdDev1": {
			"NoOfBytes": "4",
			"Offset": "51",
			"DataType": "FLOAT"
		},
		"fMyVelocityStdDev2": {
			"NoOfBytes": "4",
			"Offset": "55",
			"DataType": "FLOAT"
		},
		"fMyVelocityStdDev3": {
			"NoOfBytes": "4",
			"Offset": "59",
			"DataType": "FLOAT"
		},
		"fMyAttitudeStdDev1": {
			"NoOfBytes": "4",
			"Offset": "63",
			"DataType": "FLOAT"
		},
		"fMyAttitudeStdDev2": {
			"NoOfBytes": "4",
			"Offset": "67",
			"DataType": "FLOAT"
		},
		"fMyAttitudeStdDev3": {
			"NoOfBytes": "4",
			"Offset": "71",
			"DataType": "FLOAT"
		},
		"ulMyUpdateType": {
			"NoOfBytes": "4",
			"Offset": "75",
			"DataType": "HEXULONG"
		},
		"ulMyOptions": {
			"NoOfBytes": "4",
			"Offset": "79",
			"DataType": "HEXULONG"
		}
	},
	"RTKFIXEDSTDLIMIT": {
		"fMySTDLimit": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		}
	},
	"INSPVAX": {
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INSStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "FLOAT"
		},
		"fMyXStdDev": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "FLOAT"
		},
		"fMyYStdDev": {
			"NoOfBytes": "4",
			"Offset": "100",
			"DataType": "FLOAT"
		},
		"fMyZStdDev": {
			"NoOfBytes": "4",
			"Offset": "104",
			"DataType": "FLOAT"
		},
		"fMyRollStdDev": {
			"NoOfBytes": "4",
			"Offset": "108",
			"DataType": "FLOAT"
		},
		"fMyPitchStdDev": {
			"NoOfBytes": "4",
			"Offset": "112",
			"DataType": "FLOAT"
		},
		"fMyAzimuthStdDev": {
			"NoOfBytes": "4",
			"Offset": "116",
			"DataType": "FLOAT"
		},
		"ulMyExtendedSolStat": {
			"NoOfBytes": "4",
			"Offset": "120",
			"DataType": "HEXULONG"
		},
		"usMyTimeSincePosUpt": {
			"NoOfBytes": "2",
			"Offset": "124",
			"DataType": "USHORT"
		},
		"CABO": ["4"],
		"CAAO": ["126"]
	},
	"INSLEVERARMS": {
		"aclMyLeverArm": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"iMyMapping": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "INT"
		},
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "11",
			"DataType": "FixedDOUBLEArray"
		},
		"eMyOffset": {
			"NoOfBytes": "4",
			"Offset": "14",
			"DataType": "INSOffsetEnum"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "SourceStatusEnum"
		}
	},
	"INSOFFSETS": {
		"iMyMapping": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INT"
		},
		"iMyGimbalMapping": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "INT"
		},
		"bMyApplyRbvRotation": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "BOOL"
		},
		"bMyHaveDualAntenna": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "BOOL"
		},
		"bMyIsGimballed": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "BOOL"
		},
		"aclMyLeverArm": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ClassArray"
		},
		"eMyOffset": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "INSOffsetEnum"
		},
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "83",
			"DataType": "FixedDOUBLEArray"
		},
		"eMyInputFrame": {
			"NoOfBytes": "4",
			"Offset": "86",
			"DataType": "INSOffsetFrameEnum"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "90",
			"DataType": "SourceStatusEnum"
		},
		"ulExtendedStatus": {
			"NoOfBytes": "4",
			"Offset": "94",
			"DataType": "ULONG"
		},
		"aclMySolutionTranslation": {
			"NoOfBytes": "4",
			"Offset": "46",
			"DataType": "ClassArray"
		},
		"aclMyEulerSolutionRotation": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "ClassArray"
		},
		"CABO": ["76"],
		"CAAO": ["22"]
	},
	"SETLEVERARM": {
		"eMyOffset": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INSOffsetEnum"
		},
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "7",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"SETINSOFFSETS": {
		"eMyOffset": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INSOffsetEnum"
		},
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "7",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"INSVARIABLELEVERARMS": {
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "3",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"RTKGLOBIASOPTION": {
		"eMyOption": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RTKGLOBiasOptionEnum"
		},
		"ulMyInput": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"RTCM1071": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1072": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1073": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1074": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1075": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1076": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1077": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1081": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1082": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1083": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1084": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1085": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1086": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1087": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1091": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1092": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1093": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1094": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1095": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1096": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1097": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTKLOGGINGLEVEL": {
		"eMyLevel": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RTKLoggingLevelEnum"
		}
	},
	"MATCHEDRESET": {
		"szMyCause": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		}
	},
	"EXTERNALCLOCKSYNC": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"RTKGLOBIAS": {
		"acMyEngine": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		},
		"eMyReceiverType": {
			"NoOfBytes": "4",
			"Offset": "2",
			"DataType": "BaseReceiverTypeEnum"
		},
		"eMyBiasType": {
			"NoOfBytes": "4",
			"Offset": "6",
			"DataType": "RTKGLOBiasOptionEnum"
		},
		"dMyBias": {
			"NoOfBytes": "8",
			"Offset": "10",
			"DataType": "DOUBLE"
		},
		"dMyMeanBias": {
			"NoOfBytes": "8",
			"Offset": "18",
			"DataType": "DOUBLE"
		},
		"dMySampleSTD": {
			"NoOfBytes": "8",
			"Offset": "26",
			"DataType": "DOUBLE"
		},
		"ulMySampleCount": {
			"NoOfBytes": "4",
			"Offset": "34",
			"DataType": "ULONG"
		}
	},
	"RFATTENUATION": {
		"ulMyRFPath": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyAttenuation": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"LEDCONFIG": {
		"eMyLedID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "LEDIDEnum"
		},
		"lMyArg1": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "LONG"
		},
		"lMyArg2": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "LONG"
		},
		"CABO": ["4"],
		"CAAO": ["12"]
	},
	"LEDSTATES": {
		"aclMyLedStates": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMyLedID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "LEDIDEnum"
		},
		"eMyLedPatternState": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "LEDPatternEnum"
		}
	},
	"GPSCNAVEPHEM": {
		"ulMySatelliteID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMyTOW": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"bMyAlert": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "BOOL"
		},
		"ulMyWNe": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"dMyTOp": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"lMyURAedIndex": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "LONG"
		},
		"dMyTOe": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyDeltaA": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyAdot": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyDeltaN": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyDeltaNDot": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyM0": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"dMyEcc": {
			"NoOfBytes": "8",
			"Offset": "84",
			"DataType": "DOUBLE"
		},
		"dMyOmega": {
			"NoOfBytes": "8",
			"Offset": "92",
			"DataType": "DOUBLE"
		},
		"ucMyISFlag": {
			"NoOfBytes": "1",
			"Offset": "100",
			"DataType": "UCHAR"
		},
		"ucMyL2CPhasing": {
			"NoOfBytes": "1",
			"Offset": "101",
			"DataType": "UCHAR"
		},
		"dMyOmega0": {
			"NoOfBytes": "8",
			"Offset": "102",
			"DataType": "DOUBLE"
		},
		"dMyI0": {
			"NoOfBytes": "8",
			"Offset": "110",
			"DataType": "DOUBLE"
		},
		"dMyDOD": {
			"NoOfBytes": "8",
			"Offset": "118",
			"DataType": "DOUBLE"
		},
		"dMyIDot": {
			"NoOfBytes": "8",
			"Offset": "126",
			"DataType": "DOUBLE"
		},
		"dMyCis": {
			"NoOfBytes": "8",
			"Offset": "134",
			"DataType": "DOUBLE"
		},
		"dMyCic": {
			"NoOfBytes": "8",
			"Offset": "142",
			"DataType": "DOUBLE"
		},
		"dMyCrs": {
			"NoOfBytes": "8",
			"Offset": "150",
			"DataType": "DOUBLE"
		},
		"dMyCrc": {
			"NoOfBytes": "8",
			"Offset": "158",
			"DataType": "DOUBLE"
		},
		"dMyCus": {
			"NoOfBytes": "8",
			"Offset": "166",
			"DataType": "DOUBLE"
		},
		"dMyCuc": {
			"NoOfBytes": "8",
			"Offset": "174",
			"DataType": "DOUBLE"
		},
		"lMyURAnedIndex": {
			"NoOfBytes": "4",
			"Offset": "182",
			"DataType": "LONG"
		},
		"ulMyURAned1Index": {
			"NoOfBytes": "8",
			"Offset": "186",
			"DataType": "DOUBLE"
		},
		"ulMyURAned2Index": {
			"NoOfBytes": "8",
			"Offset": "194",
			"DataType": "DOUBLE"
		},
		"dMyTOc": {
			"NoOfBytes": "8",
			"Offset": "202",
			"DataType": "DOUBLE"
		},
		"dMyAf0": {
			"NoOfBytes": "8",
			"Offset": "210",
			"DataType": "DOUBLE"
		},
		"dMyAf1": {
			"NoOfBytes": "8",
			"Offset": "218",
			"DataType": "DOUBLE"
		},
		"dMyAf2": {
			"NoOfBytes": "8",
			"Offset": "226",
			"DataType": "DOUBLE"
		}
	},
	"GPSRAWCNAVEPHEM": {
		"ulMySignalChannelNumber": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMySatelliteID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyWNe": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"dMyTOp": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyTOe": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyTOc": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"aucMyMessage10": {
			"NoOfBytes": "1",
			"Offset": "36",
			"DataType": "FixedHEXBYTEArray"
		},
		"aucMyMessage11": {
			"NoOfBytes": "1",
			"Offset": "74",
			"DataType": "FixedHEXBYTEArray"
		},
		"aucMyMessageClock": {
			"NoOfBytes": "1",
			"Offset": "75",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"GPSCNAVMIDIALM": {
		"ulMyTransmittingPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyPRNa": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyWNa": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"dMyTOa": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"dMyEcc": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyDeltaI": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyOmegaDot": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMySqrtA": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"dMyOmega0": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		},
		"dMyOmega": {
			"NoOfBytes": "8",
			"Offset": "64",
			"DataType": "DOUBLE"
		},
		"dMyM0": {
			"NoOfBytes": "8",
			"Offset": "72",
			"DataType": "DOUBLE"
		},
		"dMyAf0": {
			"NoOfBytes": "8",
			"Offset": "80",
			"DataType": "DOUBLE"
		},
		"dMyAf1": {
			"NoOfBytes": "8",
			"Offset": "88",
			"DataType": "DOUBLE"
		}
	},
	"GPSRAWCNAVMIDIALM": {
		"ulMyTransmittingPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyPRNa": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyWNa": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"dMyTOa": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"aucMyMessageMidiALM": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"GPSCNAVREDUCEDALM": {
		"ulMyTransmittingPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyPRNa": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyWNa": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"dMyTOa": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyDeltaA": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyOmega0": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyPhi0": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		}
	},
	"GPSRAWCNAVREDUCEDALM": {
		"ulMyTransmittingPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyPRNa": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyWNa": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"dMyTOa": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"aucMyMessageReducedALM": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"GPSCNAVIONO": {
		"ulMySatelliteID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyWNop": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyTop": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"dMyAlpha0": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyAlpha1": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyAlpha2": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyAlpha3": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyBeeta0": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyBeeta1": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyBeeta2": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyBeeta3": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		}
	},
	"GPSCNAVGROUPDELAY": {
		"ulMySatelliteID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyWNop": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyTop": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"dMyTgd": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyISCl1ca": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyISCl2c": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyISCl5i5": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyISCl5q5": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		}
	},
	"GPSCNAVUTC": {
		"ulMySatelliteID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMyA0": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyA1": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyA2": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"lMyDeltaTls": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "LONG"
		},
		"ulMyTot": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulMyWNot": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"ulMyWNlsf": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulMyDN": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"lMyDeltaTlsf": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "LONG"
		}
	},
	"GPSCNAVEOP": {
		"ulMySatelliteID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyTeop": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"dMyPMx": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyPMxdot": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyPMy": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyPMydot": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyDeltaUT1": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMyDeltaUT1dot": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		}
	},
	"GPSCNAVGGTO": {
		"ulMySatelliteID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyTggto": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyWNggto": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyGNSSTypeID": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"dMyA0GGTO": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyA1GGTO": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyA2GGTO": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		}
	},
	"GPSRAWCNAVMESSAGE": {
		"ulMySigChanNum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyPrn": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyFrameId": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"aucMyRawFrameData": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"DOPPLERWINDOW": {
		"eMySystem": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "AssignSystemEnum"
		},
		"eMySetting": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "DopplerWindowModeEnum"
		},
		"ulMyDopplerWindow": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"lMyCenterFrequency": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "LONG"
		}
	},
	"APPROXPOSTIMEOUT": {
		"ulMyTimeoutSec": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"CELLINFO": {
		"szMyMake": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"szMyManufacturer": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "STRING"
		},
		"szMySerialNumber": {
			"NoOfBytes": "1",
			"Offset": "21",
			"DataType": "STRING"
		},
		"szMySoftwareVersion": {
			"NoOfBytes": "1",
			"Offset": "22",
			"DataType": "STRING"
		},
		"szMyMobileNumber": {
			"NoOfBytes": "1",
			"Offset": "23",
			"DataType": "STRING"
		},
		"szMyMobileSubscriberId": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "STRING"
		},
		"szMyAccessPointName": {
			"NoOfBytes": "1",
			"Offset": "25",
			"DataType": "STRING"
		},
		"szMyUsername": {
			"NoOfBytes": "1",
			"Offset": "26",
			"DataType": "STRING"
		},
		"szMyPassword": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "STRING"
		}
	},
	"CELLSTATUS": {
		"eMyModemStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RilPowerStateEnum"
		},
		"eMyNetStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "CellNetRegistrationStatusEnum"
		},
		"szMyIpAddress": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "STRING"
		},
		"iMySignal": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "INT"
		},
		"iMyRssi": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "INT"
		},
		"szMyNetwork": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "STRING"
		},
		"uiMyCellId": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "UINT"
		},
		"iMyModemTemperature": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "INT"
		},
		"szMyLastError": {
			"NoOfBytes": "1",
			"Offset": "26",
			"DataType": "STRING"
		}
	},
	"CELLCONFIG": {
		"eMyCellCfg": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CellularConfigurationEnum"
		},
		"szMyArg1": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		},
		"szMyArg2": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "STRING"
		}
	},
	"CAKEPOS": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"eMyDatumType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "DatumEnum"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "FixedCharArray"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "66",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "67",
			"DataType": "UCHAR"
		},
		"ucMyMeasurementSource": {
			"NoOfBytes": "1",
			"Offset": "68",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "69",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "70",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "71",
			"DataType": "UCHAR"
		}
	},
	"CAKEXYZ": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyXStdDev": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyYStdDev": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyZStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		}
	},
	"CAKESATS": {
		"aclMySatelliteEntries": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ObservationStatusEnum"
		},
		"ulMyStatusMask": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"CAKETIME": {
		"aclMySystemOffsets": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystem": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "TimingSystemEnum"
		},
		"dMyBias": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyBiasStdDev": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"CABO": ["4"],
		"CAAO": ["20"]
	},
	"CAKEVEL2": {
		"eMyVelocityStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyVelocityType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyXStdDev": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyYStdDev": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyZStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "44",
			"DataType": "FixedCharArray"
		},
		"fMyLatency": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "53",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "54",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "55",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "56",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "57",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "58",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "59",
			"DataType": "UCHAR"
		}
	},
	"CAKEVEL": {
		"eMyVelocityStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyVelocityType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"fMyLatency": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"dMyHorizontalSpeed": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyGroundTrack": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"lMyRsvdFieldForVelocityLogs": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "LONG"
		}
	},
	"CLOCKSTEERINGSOURCE": {
		"eMySource": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClockSteeringSourceEnum"
		}
	},
	"CLOCKSTEERINGBIASTOLERANCE": {
		"fMyThreshold": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		},
		"CABO": ["4"],
		"CAAO": ["4"]
	},
	"SINGLEPOINTRESIDUALS": {
		"aclMyResiduals": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"ulMyChannel": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"fMyResidual": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyResidualStdDev": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		}
	},
	"SINGLEPOINTLOGGINGLEVEL": {
		"eMyLevel": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "LoggingLevelEnum"
		},
		"CABO": ["4"],
		"CAAO": ["4"]
	},
	"SINGLEPOINTOUTLIERS": {
		"aclMyOutliers": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"ulMyChannel": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"fMyMisclosure": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyStdDev": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		}
	},
	"CAKELOG": {
		"szMyMessage": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		}
	},
	"QZSSRAWCNAVMESSAGE": {
		"ulMySigChanNum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyPrn": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyMessageId": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"aucMyRawFrameData": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"MODULEPOWER": {
		"eMyExtModule": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ExtModuleEnum"
		},
		"eMyOnOff": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "OnOffEnum"
		}
	},
	"DATADECODESIGNAL": {
		"eMySignalType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SignalTypeEnum"
		},
		"eMyDataDecodeMode": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "EnableEnum"
		}
	},
	"GPSNAVCDC": {
		"ulMyTransmittingPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyWNopd": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyTopd": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyTod": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyDataType": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyPRNa": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"dMyDeltaAf0": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyDeltaAf1": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyUDRA": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		}
	},
	"GPSNAVEDC": {
		"ulMyTransmittingPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyWNopd": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyTopd": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyTod": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyDataType": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyPRNa": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"dMyDeltaAlpha": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyDeltaBeta": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyDeltaGamma": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMyDeltaI": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"dMyDeltaOmega": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		},
		"dMyDeltaA": {
			"NoOfBytes": "8",
			"Offset": "64",
			"DataType": "DOUBLE"
		},
		"dMyDotUDRA": {
			"NoOfBytes": "8",
			"Offset": "72",
			"DataType": "DOUBLE"
		}
	},
	"ENCLOSUREWHEELSENSOR": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"eMyWheelSensorDataRate": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "WheelSensorDataRateEnum"
		}
	},
	"ENCLOSURECOMSELECT": {
		"eMyEnclosureCom": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnclosureComSelectEnum"
		}
	},
	"FAULT": {
		"szMyMessage": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		}
	},
	"PPPPOS": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"eMyDatumType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "DatumEnum"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "FixedCharArray"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "66",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "67",
			"DataType": "UCHAR"
		},
		"ucMyMeasurementSource": {
			"NoOfBytes": "1",
			"Offset": "68",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "69",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "70",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "71",
			"DataType": "UCHAR"
		},
		"CABO": ["4"],
		"CAAO": ["72"]
	},
	"PPPSATELLITEBIASES": {
		"aclMySatelliteBiases": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"fMyBias": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyBiasStdDev": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		}
	},
	"PPPDATAFILE": {
		"szMyPath": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"eMyType": {
			"NoOfBytes": "4",
			"Offset": "1024",
			"DataType": "PPPDataFileTypeEnum"
		},
		"ulMyParam1": {
			"NoOfBytes": "4",
			"Offset": "1028",
			"DataType": "ULONG"
		}
	},
	"PPPSATS": {
		"aclMySatelliteEntries": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ObservationStatusEnum"
		},
		"ulMyStatusMask": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"PPPRESET": {
		"eMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PPPResetType"
		}
	},
	"PPPXYZ": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"fMyXStdDev": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "FLOAT"
		},
		"fMyYStdDev": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "FLOAT"
		},
		"fMyZStdDev": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "FLOAT"
		},
		"eMyVelocityStatus": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "SolStatusEnum"
		},
		"eMyVelocityType": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "SolTypeEnum"
		}
	},
	"PPPSEED": {
		"eMyMode": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PPPSeedModeEnum"
		},
		"dMyLatitudeInDegrees": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyLongitudeInDegrees": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"fMyNorthingStdDev": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"fMyEastingStdDev": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyHeightStdDev": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		}
	},
	"PPPUSEPSEUDORANGES": {
		"bMyIsSet": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BOOL"
		}
	},
	"PPPDOP2": {
		"fMyGDOP": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		},
		"fMyPDOP": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"fMyHDOP": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyVDOP": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"aclMyTDOPs": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ClassArray"
		},
		"eMySystem": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "TimingSystemEnum"
		},
		"fMyDOP": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"CABO": ["20"],
		"CAAO": ["8"]
	},
	"PPPEARTHTIDESMODEL": {
		"eMyModel": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EarthTidesModelEnum"
		}
	},
	"ORBITANDCLOCKCORRECTIONS": {
		"eMySource": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "OrbitAndClockCorrectionsSourceEnum"
		},
		"szMyID": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"ulMySolutionID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMySSRIOD": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"aclMyEntries": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "SATELLITEID"
		},
		"ulMyIODE": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"fMyXCorrection": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyYCorrection": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyZCorrection": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyXCorrectionVelocity": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"fMyYCorrectionVelocity": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "FLOAT"
		},
		"fMyZCorrectionVelocity": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMyClockCorrection": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "FLOAT"
		},
		"fMyClockCorrectionVelocity": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "FLOAT"
		},
		"fMyRangeStdDev": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "FLOAT"
		},
		"CABO": ["20"],
		"CAAO": ["56"]
	},
	"PPPAPPLYDCBS": {
		"bMyApplyDCBs": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BOOL"
		}
	},
	"PPPLOGGINGLEVEL": {
		"eMyLevel": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "LoggingLevelEnum"
		}
	},
	"PPPDYNAMICS": {
		"eMyDynamics": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PPPDynamicsEnum"
		}
	},
	"PPPINTEGRITYMONITORING": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"PPPFILTERINTERVAL": {
		"dMyInterval": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"eMyIntervalType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "PPPProcessingIntervalEnum"
		}
	},
	"PPPFILTERPOS": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"eMyDatumType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "DatumEnum"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "FixedCharArray"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "66",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "67",
			"DataType": "UCHAR"
		},
		"ucMyMeasurementSource": {
			"NoOfBytes": "1",
			"Offset": "68",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "69",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "70",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "71",
			"DataType": "UCHAR"
		}
	},
	"PPPELEVMASK": {
		"fMyMaskAngleInDegrees": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		}
	},
	"PPPEARTHTIDES": {
		"dMyModel": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EarthTidesModelEnum"
		},
		"dMyEastingCorrection": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyNorthingCorrection": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyHeightCorrection": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"CABO": ["4"],
		"CAAO": ["28"]
	},
	"PPPFASTRESIDUALS": {
		"aclMyDeltaPhaseResiduals": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"fMyResidual": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyVariance": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		}
	},
	"PPPRESIDUALS": {
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SystemTypeEnum"
		},
		"eMyObservationType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "PPPObservationTypeEnum"
		},
		"dMyVarianceComponent": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"aclMyResiduals": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ClassArray"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "SATELLITEID"
		},
		"fMyResidual": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"CABO": ["20"],
		"CAAO": ["8"]
	},
	"PPPFASTLOGGINGLEVEL": {
		"eMyLevel": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "LoggingLevelEnum"
		}
	},
	"PPPTIMEOUT": {
		"ulMyTimeOut": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"PPPCORRECTIONSDELAY": {
		"dMyDelay": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"CABO": ["4"],
		"CAAO": ["8"]
	},
	"PPPSYSTEMBIASES": {
		"aclMySystemBiases": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystem": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"fMyBias": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyBiasStdDev": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		}
	},
	"PPPINTEGRITYEVENT": {
		"fMyGlobalThreshold": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"fMyGlobalStatistic": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"aclMyEntries": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "SATELLITEID"
		},
		"eMyType": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "PPPObservationTypeEnum"
		},
		"fMyResidual": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyStandardizedResidual": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"CABO": ["4"],
		"CAAO": ["20"]
	},
	"PPPOUTLIERS": {
		"aclMyEntries": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"eMyType": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "PPPObservationTypeEnum"
		},
		"fMyMisclosure": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"GROUPDELAYS": {
		"aMyHLASSPosPoly": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"ulMyIOD": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"dMyTGD": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		}
	},
	"PPPCONVERGEDCRITERIA": {
		"eMyCriteria": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PPPConvergedCriteriaEnum"
		},
		"fMyThreshold": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		}
	},
	"PPPLOG": {
		"szMyMessage": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		}
	},
	"ASSIGNBIT": {
		"svMyChan": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SVCHAN"
		},
		"eMyAssignType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "AssignBITEnum"
		},
		"eMyFrequency": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "CWFrequencyEnum"
		},
		"ulMySatId": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"lMyDoppler": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "LONG"
		},
		"ulMyDopplerWindow": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		}
	},
	"BDSB1RAWNAVSUBFRAME": {
		"ulMySignalChannelNumber": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMySatelliteID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMySubframeID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"aucMyRawSubframeData": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"RTCAREFPVA": {
		"ucMyNovAtelDesignator": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "UCHAR"
		},
		"ucMySubTypeIndicator": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "UCHAR"
		},
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "2",
			"DataType": "ULONG"
		},
		"dMyRTCATime": {
			"NoOfBytes": "8",
			"Offset": "6",
			"DataType": "DOUBLE"
		},
		"dMyUserPosX": {
			"NoOfBytes": "8",
			"Offset": "14",
			"DataType": "DOUBLE"
		},
		"dMyUserPosY": {
			"NoOfBytes": "8",
			"Offset": "22",
			"DataType": "DOUBLE"
		},
		"dMyUserPosZ": {
			"NoOfBytes": "8",
			"Offset": "30",
			"DataType": "DOUBLE"
		},
		"dMyUserVelE": {
			"NoOfBytes": "8",
			"Offset": "38",
			"DataType": "DOUBLE"
		},
		"dMyUserVelN": {
			"NoOfBytes": "8",
			"Offset": "46",
			"DataType": "DOUBLE"
		},
		"dMyUserVelU": {
			"NoOfBytes": "8",
			"Offset": "54",
			"DataType": "DOUBLE"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "62",
			"DataType": "DOUBLE"
		},
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "70",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "78",
			"DataType": "DOUBLE"
		},
		"ucMyVelType": {
			"NoOfBytes": "1",
			"Offset": "86",
			"DataType": "UCHAR"
		},
		"ucMyINSStatus": {
			"NoOfBytes": "1",
			"Offset": "87",
			"DataType": "UCHAR"
		},
		"ucMyReserved": {
			"NoOfBytes": "1",
			"Offset": "88",
			"DataType": "UCHAR"
		}
	},
	"RTCAREFPVAIN": {
		"ulMessageIdentifier": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulRefStation": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMessageType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulReserved": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMessageLength": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ucMyNovAtelDesignator": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "UCHAR"
		},
		"ucMySubTypeIndicator": {
			"NoOfBytes": "1",
			"Offset": "21",
			"DataType": "UCHAR"
		},
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "ULONG"
		},
		"dMyRTCATime": {
			"NoOfBytes": "8",
			"Offset": "26",
			"DataType": "DOUBLE"
		},
		"dMyUserPosX": {
			"NoOfBytes": "8",
			"Offset": "34",
			"DataType": "DOUBLE"
		},
		"dMyUserPosY": {
			"NoOfBytes": "8",
			"Offset": "42",
			"DataType": "DOUBLE"
		},
		"dMyUserPosZ": {
			"NoOfBytes": "8",
			"Offset": "50",
			"DataType": "DOUBLE"
		},
		"dMyUserVelE": {
			"NoOfBytes": "8",
			"Offset": "58",
			"DataType": "DOUBLE"
		},
		"dMyUserVelN": {
			"NoOfBytes": "8",
			"Offset": "66",
			"DataType": "DOUBLE"
		},
		"dMyUserVelU": {
			"NoOfBytes": "8",
			"Offset": "74",
			"DataType": "DOUBLE"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "82",
			"DataType": "DOUBLE"
		},
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "90",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "98",
			"DataType": "DOUBLE"
		},
		"ucMyVelType": {
			"NoOfBytes": "1",
			"Offset": "106",
			"DataType": "UCHAR"
		},
		"ucMyINSStatus": {
			"NoOfBytes": "1",
			"Offset": "107",
			"DataType": "UCHAR"
		},
		"ucMyReserved": {
			"NoOfBytes": "1",
			"Offset": "108",
			"DataType": "UCHAR"
		}
	},
	"RELINSPVAIN": {
		"eMyRelINSOutput": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RelINSOutputEnum"
		},
		"dMyDeltaPosN": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyDeltaPosE": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyDeltaPosU": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyDeltaVelN": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyDeltaVelE": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyDeltaVelU": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyDeltaRoll": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyDeltaPitch": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyDeltaHeading": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "FLOAT"
		},
		"acMyRoverID": {
			"NoOfBytes": "1",
			"Offset": "80",
			"DataType": "FixedCharArray"
		},
		"eMyRoverINSStatus": {
			"NoOfBytes": "4",
			"Offset": "81",
			"DataType": "INSStatusEnum"
		},
		"acMyMasterID": {
			"NoOfBytes": "1",
			"Offset": "85",
			"DataType": "FixedCharArray"
		},
		"eMyMasterINSStatus": {
			"NoOfBytes": "4",
			"Offset": "86",
			"DataType": "INSStatusEnum"
		},
		"eMyRTKBaselineStatus": {
			"NoOfBytes": "4",
			"Offset": "90",
			"DataType": "SolTypeEnum"
		},
		"ulMyExtendedSolStat": {
			"NoOfBytes": "4",
			"Offset": "94",
			"DataType": "HEXULONG"
		}
	},
	"SETLOGGINGDEVICE": {
		"eMyStorageMedium": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "MassStorageDeviceEnum"
		}
	},
	"NMEAVERSION": {
		"eMyNMEAVersion": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "NMEAVersionEnum"
		}
	},
	"IPSERVICE": {
		"eMyINetPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "IPServiceEnum"
		},
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "EnableEnum"
		}
	},
	"PASSCOM5": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PASSCOM6": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PASSBT1": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"SETADMINPASSWORD": {
		"szMyOldPassword": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"szMyNewPassword": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "STRING"
		}
	},
	"USERACCOUNTS": {
		"szMyUserName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		}
	},
	"SETFILECOPYMODE": {
		"eMyFileCopyMode": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FileCopyModeEnum"
		},
		"eMyFileCopyOptions": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FileCopyOptionsEnum"
		}
	},
	"BDSECUTOFF": {
		"fMyElevationCutoffAngle": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		}
	},
	"BDSB1EPHEMERIS": {
		"ulMySatelliteID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyWN": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"dMyURA": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"ulMySatH1": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"dMyTGD1": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"ulMyIODC": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulMyTOC": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"dMyA0": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyA1": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyA2": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"ulMyIODE": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"ulMyTOE": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ULONG"
		},
		"dMyRootA": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyEccentricity": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"dMyOmega": {
			"NoOfBytes": "8",
			"Offset": "84",
			"DataType": "DOUBLE"
		},
		"dMyDeltaN": {
			"NoOfBytes": "8",
			"Offset": "92",
			"DataType": "DOUBLE"
		},
		"dMyM0": {
			"NoOfBytes": "8",
			"Offset": "100",
			"DataType": "DOUBLE"
		},
		"dMyOmega0": {
			"NoOfBytes": "8",
			"Offset": "108",
			"DataType": "DOUBLE"
		},
		"dMyOmegaDot": {
			"NoOfBytes": "8",
			"Offset": "116",
			"DataType": "DOUBLE"
		},
		"dMyI0": {
			"NoOfBytes": "8",
			"Offset": "124",
			"DataType": "DOUBLE"
		},
		"dMyIDot": {
			"NoOfBytes": "8",
			"Offset": "132",
			"DataType": "DOUBLE"
		},
		"dMyCuc": {
			"NoOfBytes": "8",
			"Offset": "140",
			"DataType": "DOUBLE"
		},
		"dMyCus": {
			"NoOfBytes": "8",
			"Offset": "148",
			"DataType": "DOUBLE"
		},
		"dMyCrc": {
			"NoOfBytes": "8",
			"Offset": "156",
			"DataType": "DOUBLE"
		},
		"dMyCrs": {
			"NoOfBytes": "8",
			"Offset": "164",
			"DataType": "DOUBLE"
		},
		"dMyCic": {
			"NoOfBytes": "8",
			"Offset": "172",
			"DataType": "DOUBLE"
		},
		"dMyCis": {
			"NoOfBytes": "8",
			"Offset": "180",
			"DataType": "DOUBLE"
		}
	},
	"BDSALMANAC": {
		"ulMySatelliteID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyWN": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyTOA": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"dMyRootA": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyEccentricity": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyOmega": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyM0": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyOmega0": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyOmegaDot": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyDeltaI": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyA0": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyA1": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"ulMyHealth": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "HEXULONG"
		}
	},
	"BDSALMANACHEALTH": {
		"ulMySourceSatelliteID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyWN": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyTOA": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"aclMyHealths": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"usMySatelliteID": {
			"NoOfBytes": "2",
			"Offset": "16",
			"DataType": "USHORT"
		},
		"usMyHealth": {
			"NoOfBytes": "2",
			"Offset": "18",
			"DataType": "USHORT"
		},
		"CABO": ["16"],
		"CAAO": ["4"]
	},
	"BDSIONO": {
		"ulMyTransmittingSatelliteID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMyAlpha0": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyAlpha1": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyAlpha2": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyAlpha3": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyBeta0": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyBeta1": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyBeta2": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyBeta3": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		}
	},
	"RTCM4093TYPE5": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1121": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1122": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1123": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1124": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1125": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1126": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1127": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"NOVATELXGPSOBS": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"NOVATELXGLOOBS": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"NOVATELXSBASOBS": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"NOVATELXGALOBS": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"NOVATELXQZSSOBS": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"NOVATELXBDSOBS": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"SETIONOMODEL": {
		"eMyModel": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "IonoModelEnum"
		}
	},
	"BDSCLOCK": {
		"dMyA0UTC": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyA1UTC": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"sMyDeltaTls": {
			"NoOfBytes": "2",
			"Offset": "16",
			"DataType": "SHORT"
		},
		"usMyWNlsf": {
			"NoOfBytes": "2",
			"Offset": "18",
			"DataType": "USHORT"
		},
		"usMyDN": {
			"NoOfBytes": "2",
			"Offset": "20",
			"DataType": "USHORT"
		},
		"sMyDeltaTlsf": {
			"NoOfBytes": "2",
			"Offset": "22",
			"DataType": "SHORT"
		},
		"dMyA0GPS": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyA1GPS": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyA0Gal": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMyA1Gal": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"dMyA0GLO": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		},
		"dMyA1GLO": {
			"NoOfBytes": "8",
			"Offset": "64",
			"DataType": "DOUBLE"
		}
	},
	"BLUETOOTHSTATUS": {
		"eMyBluetoothStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BluetoothStatusEnum"
		},
		"sMyBluetoothInfo": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		},
		"sMyBluetoothInfo1": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "STRING"
		},
		"sMyBluetoothInfo2": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "STRING"
		}
	},
	"BLUETOOTHCONFIG": {
		"eMyBTCommand": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BluetoothConfigurationEnum"
		},
		"szMyArg1": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		},
		"szMyArg2": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "STRING"
		}
	},
	"PROGRAMSYNTH": {
		"ulMySynth": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMyFreq": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		}
	},
	"WIFICLISTATUS": {
		"eMyState": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "WifiClientStateEnum"
		},
		"sMyMacAddress": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		},
		"bMyIsScanInProgresss": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "BOOL"
		},
		"fMyLinkSpeed": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "FLOAT"
		},
		"fMyLinkSpeedMax": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "FLOAT"
		},
		"eMyNetworkId": {
			"NoOfBytes": "4",
			"Offset": "17",
			"DataType": "WIfiNetworkIdEnum"
		},
		"sMySSID": {
			"NoOfBytes": "1",
			"Offset": "21",
			"DataType": "STRING"
		},
		"sMyBSSID": {
			"NoOfBytes": "1",
			"Offset": "57",
			"DataType": "STRING"
		},
		"sMyFrequencyBand": {
			"NoOfBytes": "1",
			"Offset": "58",
			"DataType": "STRING"
		},
		"uiMyChannel": {
			"NoOfBytes": "4",
			"Offset": "59",
			"DataType": "UINT"
		},
		"iMyRSSI": {
			"NoOfBytes": "4",
			"Offset": "63",
			"DataType": "INT"
		},
		"eMyError": {
			"NoOfBytes": "4",
			"Offset": "67",
			"DataType": "WifiClientErrorEnum"
		},
		"ulMyErrorCode": {
			"NoOfBytes": "4",
			"Offset": "71",
			"DataType": "ULONG"
		}
	},
	"WIFICLICONFIG": {
		"eMyWifiNetworkId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "WIfiNetworkIdEnum"
		},
		"eMyWifiConfig": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "WifiNetworkConfigurationEnum"
		},
		"sMyWifiConfigValue": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "STRING"
		}
	},
	"WIFICLICONTROL": {
		"eMyCommand": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "WifiClientControlEnum"
		},
		"sMyArgument": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		},
		"CABO": ["4"],
		"CAAO": ["5"]
	},
	"WIFICLISCANRESULTS": {
		"aclMyNetworks": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMyBssType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "WifiBSSTypeEnum"
		},
		"sMySSID": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "STRING"
		},
		"sMyBSSID": {
			"NoOfBytes": "1",
			"Offset": "44",
			"DataType": "STRING"
		},
		"sMyAuthenticationType": {
			"NoOfBytes": "1",
			"Offset": "45",
			"DataType": "STRING"
		},
		"sMyEncryptionProtocol": {
			"NoOfBytes": "1",
			"Offset": "46",
			"DataType": "STRING"
		},
		"sMyFrequencyBand": {
			"NoOfBytes": "1",
			"Offset": "47",
			"DataType": "STRING"
		},
		"uiMyChannel": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "UINT"
		},
		"usMyNonHtRates": {
			"NoOfBytes": "2",
			"Offset": "52",
			"DataType": "USHORT"
		},
		"aulMyHtRates": {
			"NoOfBytes": "4",
			"Offset": "54",
			"DataType": "FixedULONGArray"
		},
		"iMyRSSI": {
			"NoOfBytes": "4",
			"Offset": "58",
			"DataType": "INT"
		}
	},
	"WIFICONFIG": {
		"eMyConfiguration": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "WifiConfigurationEnum"
		},
		"szMyParameter": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		},
		"szMyParameter1": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "STRING"
		}
	},
	"NOVATELXOBS": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"NOVATELXOBSIN": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"NOVATELXREF": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"NOVATELXREFIN": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		},
		"CABO": ["4"],
		"CAAO": ["800"]
	},
	"PPPTROPODELAYS": {
		"aclMyTroposphereDelays": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"fMyDelay": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyDelayStdDev": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		}
	},
	"SETNOVATELXOBSFORMAT": {
		"ulMyNoOfSats": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"eMyMeas1": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "MeasurementEnum"
		},
		"eMyMeas2": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "MeasurementEnum"
		},
		"eMyMeas3": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "MeasurementEnum"
		},
		"eMyMeas4": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "MeasurementEnum"
		}
	},
	"DEBUGDATA": {
		"aucBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		}
	},
	"MATCHEDLINEARCOMBINATION": {
		"eMySystemofLinearCombination": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SystemTypeEnum"
		},
		"eMyPrimaryLinearCombination": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "LinearCombinationEnum"
		},
		"eMySecondaryLinearCombination": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "LinearCombinationEnum"
		},
		"eMyTertiaryLinearCombination": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "LinearCombinationEnum"
		},
		"eMyQuaternaryLinearCombination": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "LinearCombinationEnum"
		}
	},
	"USERACCURACYLEVEL": {
		"eMySolTypeDef": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolTypeEnum"
		},
		"dMyStatisticUpperBound": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		}
	},
	"UALCONTROL": {
		"eMyUserAccuracyLevelAction": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "UserAccuracyLevelControlEnum"
		},
		"dMyUserAccuracyLevel1UpperBound": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyUserAccuracyLevel2UpperBound": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		}
	},
	"STICKYETHERPROXY_PRIV": {
		"ulMyValue1": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"NOVATELXREFTEMP": {
		"MessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"NovatelXStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"ITRFRealizationYear": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_UINT6"
		},
		"GPSIndicator": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "RTCMV3_BIT1"
		},
		"GLONASSIndicator": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "RTCMV3_BIT1"
		},
		"GalileoIndicator": {
			"NoOfBytes": "1",
			"Offset": "7",
			"DataType": "RTCMV3_BIT1"
		},
		"ReferenceStationIndicator": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "RTCMV3_BIT1"
		},
		"ECEFX": {
			"NoOfBytes": "8",
			"Offset": "9",
			"DataType": "RTCMV3_INT38"
		},
		"SingleReceiverOscIndicator": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "RTCMV3_BIT1"
		},
		"Reserved": {
			"NoOfBytes": "1",
			"Offset": "18",
			"DataType": "RTCMV3_BIT1"
		},
		"ECEFY": {
			"NoOfBytes": "8",
			"Offset": "19",
			"DataType": "RTCMV3_INT38"
		},
		"QuarterCycleIndicator": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "RTCMV3_BIT2"
		},
		"ECEFZ": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "RTCMV3_INT38"
		},
		"AntennaHeight": {
			"NoOfBytes": "2",
			"Offset": "36",
			"DataType": "RTCMV3_UINT16"
		}
	},
	"RTCM1104BDS": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"ENCRYPTIONKEY": {
		"eMyEncryptionKeyMode": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EncryptionKeyModeEnum"
		},
		"szMyEncryptionKey": {
			"NoOfBytes": "1",
			"Offset": "25",
			"DataType": "FixedCharArray"
		}
	},
	"AMBIGUITYSEARCHLIMIT": {
		"uiMyMaxAmbiguitiesToSearch": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "UINT"
		}
	},
	"EVENTOUTCONTROL": {
		"eMyMark": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "MarkEnum"
		},
		"eMyEnableDisable": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "EnableEnum"
		},
		"eMyPolarity": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "PolarityEnum"
		},
		"ulMyActivePeriod": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyNotActivePeriod": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		}
	},
	"EVENTINCONTROL": {
		"eMyMark": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "MarkEnum"
		},
		"eMyEventInEnable": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "EventInEnableEnum"
		},
		"eMyPolarity": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "PolarityEnum"
		},
		"lMyTimeBias": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "LONG"
		},
		"ulMyTimeGuard": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		}
	},
	"CELLCONTROL": {
		"eMyCellCtrl": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CellularControlEnum"
		},
		"szMyArg1": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		},
		"szMyArg2": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "STRING"
		}
	},
	"DUALANTENNAPOWER": {
		"eDualAntennaPower": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "DualAntennaPowerEnum"
		}
	},
	"GPIOCONFIG": {
		"ulMyGPIOPin": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"eMyGPIOPinLevel": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "GPIOLevelEnum"
		}
	},
	"RTCM1101": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1102": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1103": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1104": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1105": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1106": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1107": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1111": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1112": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1113": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1114": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1115": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1116": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1117": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"RTCM1230": {
		"uiMyMessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_UINT12"
		},
		"uiMyReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"ucMyGLOCPBiasIndicator": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_BIT1"
		},
		"ucMyReserved": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "RTCMV3_BIT3"
		},
		"ucMySignalMask": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "RTCMV3_BIT4"
		},
		"sMyL1CABias": {
			"NoOfBytes": "4",
			"Offset": "7",
			"DataType": "RTCMV3_INT16"
		},
		"sMyL1PBias": {
			"NoOfBytes": "4",
			"Offset": "11",
			"DataType": "RTCMV3_INT16"
		},
		"sMyL2CABias": {
			"NoOfBytes": "4",
			"Offset": "15",
			"DataType": "RTCMV3_INT16"
		},
		"sMyL2PBias": {
			"NoOfBytes": "4",
			"Offset": "19",
			"DataType": "RTCMV3_INT16"
		}
	},
	"RTCM1230IN": {
		"ulMyMessageNumber": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "RTCMV3_INT12"
		},
		"uiMyReferenceStationID": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "RTCMV3_UINT12"
		},
		"ucMyGLOCPBiasIndicator": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "RTCMV3_BIT1"
		},
		"ucMyReserved": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "RTCMV3_BIT3"
		},
		"ucMySignalMask": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "RTCMV3_BIT4"
		},
		"sMyL1CABias": {
			"NoOfBytes": "4",
			"Offset": "7",
			"DataType": "RTCMV3_INT16"
		},
		"sMyL1PBias": {
			"NoOfBytes": "4",
			"Offset": "11",
			"DataType": "RTCMV3_INT16"
		},
		"sMyL2CABias": {
			"NoOfBytes": "4",
			"Offset": "15",
			"DataType": "RTCMV3_INT16"
		},
		"sMyL2PBias": {
			"NoOfBytes": "4",
			"Offset": "19",
			"DataType": "RTCMV3_INT16"
		}
	},
	"HEADING3": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"fMyBLength": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyHeading": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyPitch": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"fMyHeadingStdDev": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"fMyPitchStdDev": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "32",
			"DataType": "FixedCharArray"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "36",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "37",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "38",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "39",
			"DataType": "UCHAR"
		},
		"ucMyMeasurementSource": {
			"NoOfBytes": "1",
			"Offset": "40",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "41",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "42",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "43",
			"DataType": "UCHAR"
		}
	},
	"RFINPUTGAIN": {
		"eMyAntennaPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RFInputGainPortEnum"
		},
		"eMyFrequency": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RFInputGainFrequencyEnum"
		},
		"eMyMode": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "RFInputGainModeEnum"
		},
		"fMyGain": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		}
	},
	"DEBUGVAS": {
		"ulMyRestartCount": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"szMyAsName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		},
		"szMyTaskName": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "STRING"
		},
		"lMyErr": {
			"NoOfBytes": "4",
			"Offset": "6",
			"DataType": "LONG"
		},
		"lMyLineNumber": {
			"NoOfBytes": "4",
			"Offset": "10",
			"DataType": "LONG"
		},
		"ulMyPC": {
			"NoOfBytes": "4",
			"Offset": "14",
			"DataType": "ULONG"
		}
	},
	"DUALCARDCONFIG": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"ulMyRateInHz": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"HEADINGEXT2": {
		"acMyRoverId": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		},
		"acMyMasterId": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "FixedCharArray"
		},
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "VariableUcharArray"
		}
	},
	"HEADINGEXT2IN": {
		"acMyRoverId": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		},
		"acMyMasterId": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "FixedCharArray"
		},
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "2",
			"DataType": "VariableUcharArray"
		}
	},
	"IOCONFIG": {
		"eMyPMUX": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FpgaPMUXEnum"
		},
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "EnableEnum"
		},
		"eMyControl": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "USERIO2ControlEnum"
		}
	},
	"REVIVE": {
		"PortName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		}
	},
	"WIFIAPCONFIG": {
		"eMyApId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "WifiApIdEnum"
		},
		"eMyConfiguration": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "WifiApConfigurationEnum"
		},
		"sMyValue": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "STRING"
		}
	},
	"WIFIAPSTATUS": {
		"eMyState": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "WifiApStateEnum"
		},
		"sMyBSSID": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		},
		"eMyApId": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "WifiApIdEnum"
		},
		"aclMyStationInfo": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "ClassArray"
		},
		"sMyMacAddress": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "STRING"
		},
		"fMyLinkSpeed": {
			"NoOfBytes": "4",
			"Offset": "33",
			"DataType": "FLOAT"
		},
		"CABO": ["13"],
		"CAAO": ["24"]
	},
	"BESTPOSIN": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"eMyDatumType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "DatumEnum"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "FixedCharArray"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "66",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "67",
			"DataType": "UCHAR"
		},
		"ucMyMeasurementSource": {
			"NoOfBytes": "1",
			"Offset": "68",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "69",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "70",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "71",
			"DataType": "UCHAR"
		}
	},
	"HWCONFIGTABLERAW": {
		"ulMyNumClearedPackets": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyNumUnusedPackets": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"clMyHWConfigTableEntries": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ClassArray"
		},
		"usMyType": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "HEXBYTE"
		},
		"usMyData": {
			"NoOfBytes": "2",
			"Offset": "13",
			"DataType": "USHORT"
		},
		"CABO": ["4"],
		"CAAO": ["3"]
	},
	"IPSTATS": {
		"aclMyIpInterfaceStatistics": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMyPhysicalInterface": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "PhysicalInterfaceEnum"
		},
		"ulMyConnectionDuration": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyRxCount": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyTxCount": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		}
	},
	"PCAPLOGCONFIG": {
		"eMyPhysicalInterface": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PhysicalInterfaceEnum"
		},
		"eMyDestination": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "DebugLogDestinationEnum"
		},
		"iMySnapshotLength": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "INT"
		},
		"sMyDestinationPath": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "STRING"
		},
		"iMyMaxLogFileLength": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "INT"
		},
		"iMaxLogFileNumber": {
			"NoOfBytes": "4",
			"Offset": "17",
			"DataType": "INT"
		}
	},
	"LOGIN": {
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		},
		"szMyUsername": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		},
		"szMyPassword": {
			"NoOfBytes": "1",
			"Offset": "36",
			"DataType": "STRING"
		}
	},
	"LOGOUT": {
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		}
	},
	"SETWIFIREGULATORYDOMAIN": {
		"eMyRegulatoryDomain": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "WifiRegulatoryDomainEnum"
		},
		"iMyRfPathGaindBm": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "INT"
		}
	},
	"AIRPLANEMODE": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"BLUETOOTHDATA": {
		"aucBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"PPPTROPOMODEL": {
		"fMyZenithTropoTotalDelay": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		},
		"fMyZenithTropoResidualDelay": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"fMyZenithTropoResidualDelayStdDev": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		}
	},
	"PPPTROPOMODELCONFIG": {
		"eMyModel": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "TroposphereModelEnum"
		},
		"fMyInitialStdDev": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"fMySpectralDensity": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		}
	},
	"BESTVELTYPE": {
		"eMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BestVelTypeEnum"
		}
	},
	"SAVEETHERNETDATA": {
		"eMyInterface": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PhysicalInterfaceEnum"
		}
	},
	"CELLULARCONFIG": {
		"eMyCellCfg": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CellularConfigurationEnum"
		},
		"szMyArg1": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		},
		"szMyArg2": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "STRING"
		}
	},
	"CELLULARCONTROL": {
		"eMyCellCtrl": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CellularControlEnum"
		},
		"szMyArg1": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		},
		"szMyArg2": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "STRING"
		}
	},
	"CELLULARSTATUS": {
		"eMyModemStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RilPowerStateEnum"
		},
		"eMyNetStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "CellNetRegistrationStatusEnum"
		},
		"szMyIpAddress": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "STRING"
		},
		"iMySignal": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "INT"
		},
		"iMyRssi": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "INT"
		},
		"szMyNetwork": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "STRING"
		},
		"uiMyCellId": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "UINT"
		},
		"iMyModemTemperature": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "INT"
		},
		"szMyLastError": {
			"NoOfBytes": "1",
			"Offset": "26",
			"DataType": "STRING"
		}
	},
	"CELLULARINFO": {
		"szMyMake": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"szMyManufacturer": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "STRING"
		},
		"szMySerialNumber": {
			"NoOfBytes": "1",
			"Offset": "21",
			"DataType": "STRING"
		},
		"szMySoftwareVersion": {
			"NoOfBytes": "1",
			"Offset": "22",
			"DataType": "STRING"
		},
		"szMyMobileNumber": {
			"NoOfBytes": "1",
			"Offset": "23",
			"DataType": "STRING"
		},
		"szMyMobileSubscriberId": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "STRING"
		}
	},
	"SETPREFERREDNETIF": {
		"eMyPreferredNetIfMode": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "NetIfPreferredInterfaceModeEnum"
		},
		"eMyPrimaryNetIf": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "PhysicalInterfaceEnum"
		},
		"eMySecondaryNetIf": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "PhysicalInterfaceEnum"
		},
		"eMyTertiaryNetIf": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "PhysicalInterfaceEnum"
		},
		"eMyQuaternaryNetIf": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "PhysicalInterfaceEnum"
		},
		"eMyQuinaryNetIf": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "PhysicalInterfaceEnum"
		},
		"eMySenaryNetIf": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "PhysicalInterfaceEnum"
		},
		"eMySeptenaryNetIf": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "PhysicalInterfaceEnum"
		},
		"eMyOctonaryNetIf": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "PhysicalInterfaceEnum"
		},
		"eMyNonaryNetIf": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "PhysicalInterfaceEnum"
		},
		"eMyDenaryNetIf": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "PhysicalInterfaceEnum"
		}
	},
	"BLUETOOTHDISCOVERABILITY": {
		"eMyDiscoverabilityOn": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "OnOffEnum"
		},
		"ulMyTimeoutPeriod": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"BDSTGD2FROMRESERVEDBITS": {
		"bMyIsEnabled": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BOOL"
		}
	},
	"BDSRAWNAVSUBFRAME": {
		"ulMySignalChannelNumber": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMySatelliteID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"eMyBDSDataSource": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "BDSDataSourceEnum"
		},
		"ulMySubframeID": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"aucMyRawSubframeData": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "FixedHEXBYTEArray"
		}
	},
	"BDSEPHEMERIS": {
		"ulMySatelliteID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyWN": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"dMyURA": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"ulMySatH1": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"dMyTGD1": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyTGD2": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"ulMyIODC": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"ulMyTOC": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"dMyA0": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyA1": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyA2": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"ulMyIODE": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "ULONG"
		},
		"ulMyTOE": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "ULONG"
		},
		"dMyRootA": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"dMyEccentricity": {
			"NoOfBytes": "8",
			"Offset": "84",
			"DataType": "DOUBLE"
		},
		"dMyOmega": {
			"NoOfBytes": "8",
			"Offset": "92",
			"DataType": "DOUBLE"
		},
		"dMyDeltaN": {
			"NoOfBytes": "8",
			"Offset": "100",
			"DataType": "DOUBLE"
		},
		"dMyM0": {
			"NoOfBytes": "8",
			"Offset": "108",
			"DataType": "DOUBLE"
		},
		"dMyOmega0": {
			"NoOfBytes": "8",
			"Offset": "116",
			"DataType": "DOUBLE"
		},
		"dMyOmegaDot": {
			"NoOfBytes": "8",
			"Offset": "124",
			"DataType": "DOUBLE"
		},
		"dMyI0": {
			"NoOfBytes": "8",
			"Offset": "132",
			"DataType": "DOUBLE"
		},
		"dMyIDot": {
			"NoOfBytes": "8",
			"Offset": "140",
			"DataType": "DOUBLE"
		},
		"dMyCuc": {
			"NoOfBytes": "8",
			"Offset": "148",
			"DataType": "DOUBLE"
		},
		"dMyCus": {
			"NoOfBytes": "8",
			"Offset": "156",
			"DataType": "DOUBLE"
		},
		"dMyCrc": {
			"NoOfBytes": "8",
			"Offset": "164",
			"DataType": "DOUBLE"
		},
		"dMyCrs": {
			"NoOfBytes": "8",
			"Offset": "172",
			"DataType": "DOUBLE"
		},
		"dMyCic": {
			"NoOfBytes": "8",
			"Offset": "180",
			"DataType": "DOUBLE"
		},
		"dMyCis": {
			"NoOfBytes": "8",
			"Offset": "188",
			"DataType": "DOUBLE"
		}
	},
	"DEBUGROUTETABLE": {
		"szRouteTable": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		}
	},
	"HEADINGRATE": {
		"eMySolutionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMySolutionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"fMyLatency": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyBLength": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyHeading": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyPitch": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"fMyBLengthStdDev": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"fMyHeadingStdDev": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"fMyPitchStdDev": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fFloat": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"acMyRoverID": {
			"NoOfBytes": "1",
			"Offset": "40",
			"DataType": "FixedCharArray"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "41",
			"DataType": "FixedCharArray"
		},
		"ucMyMeasurementSource": {
			"NoOfBytes": "1",
			"Offset": "45",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "48",
			"DataType": "UCHAR"
		}
	},
	"ALCRESOLUTION": {
		"eAction": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"GENERATEDEBUGLOGS": {
		"eMyDebugLoggingType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "DebugLogTypeEnum"
		},
		"dMyInterval": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"eMyPortAddress": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "CommPortEnum"
		},
		"eMyLoggingLevel": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "DebugLogLevelEnum"
		},
		"eMyLogFormat": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "DebugLogFormatEnum"
		}
	},
	"PASSCOM7": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PASSCOM8": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PASSCOM9": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PASSCOM10": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PPPESTIMATEWIDELANE": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "AutoEnableDisableEnum"
		}
	},
	"PPPESTIMATEIONOSPHERE": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "AutoEnableDisableEnum"
		}
	},
	"PPPSOURCE": {
		"eMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "OrbitAndClockCorrectionsSourceEnum"
		}
	},
	"SYNCHEAVE": {
		"dMyHeave": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyHeaveStdev": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		}
	},
	"DELAYEDHEAVE": {
		"dMyHeave": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyHeaveStdev": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		}
	},
	"DHCPCONFIG": {
		"eMyInterface": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PhysicalInterfaceEnum"
		},
		"eMyEnabled": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "EnableEnum"
		},
		"ulMyStartAddress": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyLeaseTime": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		}
	},
	"VERIPOSDEBUGSTATE": {
		"ulMyState": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"VERIPOSDEBUGDATA": {
		"acMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PPPAPPLYSATELLITEPCO": {
		"bMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BOOL"
		}
	},
	"PPPSEEDSTORE": {
		"dMyLatitudeInDegrees": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyLongitudeInDegrees": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyEllipsoidalHeight": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyNorthingStdDev": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyEastingStdDev": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"dMyHeightStdDev": {
			"NoOfBytes": "8",
			"Offset": "40",
			"DataType": "DOUBLE"
		},
		"dMyNorthingEastingCovariance": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"dMyNorthingHeightCovariance": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		},
		"dMyEastingHeightCovariance": {
			"NoOfBytes": "8",
			"Offset": "64",
			"DataType": "DOUBLE"
		}
	},
	"RTCMV2DATAIN": {
		"aucMyVariableMessage": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VarHEXBYTEType"
		}
	},
	"RTCMV3DATAIN": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VarHEXBYTEType"
		}
	},
	"NOVATELXRTCMV3SSRIN": {
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VarHEXBYTEType"
		},
		"CABO": ["4"],
		"CAAO": ["1024"]
	},
	"LBANDBEAMTABLE": {
		"aclMyEntries": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"szMyName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"szMyRegionID": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "FixedCharArray"
		},
		"ulMyFrequencyInHz": {
			"NoOfBytes": "4",
			"Offset": "6",
			"DataType": "ULONG"
		},
		"ulMyBaudRate": {
			"NoOfBytes": "4",
			"Offset": "10",
			"DataType": "ULONG"
		},
		"fMyLongitude": {
			"NoOfBytes": "4",
			"Offset": "14",
			"DataType": "FLOAT"
		},
		"ulMyBeamAccess": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "ULONG"
		}
	},
	"TERRASTARINFO": {
		"szMyPAC": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "FixedCharArray"
		},
		"eMyOnshoreMode": {
			"NoOfBytes": "4",
			"Offset": "1",
			"DataType": "VeriposOnshoreOperatingModeEnum"
		},
		"ulMyOnshoreSubscriptionDetails": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "ULONG"
		},
		"ulMyContractEndDayOfYear": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "ULONG"
		},
		"ulMyContractEndYear": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "ULONG"
		},
		"ulMyTimedEnablePeriod": {
			"NoOfBytes": "4",
			"Offset": "17",
			"DataType": "ULONG"
		},
		"eMyRegionRestriction": {
			"NoOfBytes": "4",
			"Offset": "21",
			"DataType": "VeriposRegionRestrictionEnum"
		},
		"fMyLocalAreaCenterPointLatitude": {
			"NoOfBytes": "4",
			"Offset": "25",
			"DataType": "FLOAT"
		},
		"fMyLocalAreaCenterPointLongitude": {
			"NoOfBytes": "4",
			"Offset": "29",
			"DataType": "FLOAT"
		},
		"ulMyLocalAreaRadius": {
			"NoOfBytes": "4",
			"Offset": "33",
			"DataType": "ULONG"
		}
	},
	"DBGTTCP": {
		"iMyTestId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INT"
		},
		"bMyUseTcp": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "BOOL"
		},
		"bMyTx": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "BOOL"
		},
		"iMyBufLen": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "INT"
		},
		"iMyBufNum": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "INT"
		},
		"szMyIpAddress": {
			"NoOfBytes": "1",
			"Offset": "20",
			"DataType": "STRING"
		},
		"iMyIpPort": {
			"NoOfBytes": "4",
			"Offset": "21",
			"DataType": "INT"
		},
		"bMyDisableNagle": {
			"NoOfBytes": "4",
			"Offset": "25",
			"DataType": "BOOL"
		},
		"iMyTaskPriority": {
			"NoOfBytes": "4",
			"Offset": "29",
			"DataType": "INT"
		}
	},
	"PPPFILTERSATS": {
		"aclMySatelliteEntries": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ObservationStatusEnum"
		},
		"ulMyStatusMask": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"SETWHEELSOURCE": {
		"eMyWheelSensorInput": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "WheelSensorInputEnum"
		},
		"eMyPolarity": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "PolarityEnum"
		},
		"eMyReserved": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		}
	},
	"VERIPOSMESSAGE": {
		"szMyMessage": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"VERIPOSRTCMDATA": {
		"ulMyStream": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "HEXULONG"
		},
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "VarHEXBYTEType"
		}
	},
	"VERIPOSMESSAGETYPES": {
		"aulMyAllowedMessageTypes": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "VariableULONGArray"
		},
		"CABO": ["4"],
		"CAAO": ["4"]
	},
	"LBANDSTATIONLIST": {
		"aclMyStations": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"ulMyID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"fMyLatitude": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyLongitude": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"eMyHealth": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "VeriposStationHealthEnum"
		}
	},
	"VERIPOSINFO": {
		"ulMySerialNumber": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"eMyOffshoreMode": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "VeriposOffshoreOperatingModeEnum"
		},
		"ulMyOffshoreSubscriptionDetails": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"szMyServiceCode": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "FixedCharArray"
		}
	},
	"TERRASTARSTATUS": {
		"eMyAccessStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"eMyDecoderSyncState": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "VeriposDecoderSyncStateEnum"
		},
		"ulMyTimedEnableRemainingTime": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"eMyLocalAreaStatus": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "VeriposLocalAreaStatusEnum"
		},
		"eMyGeogatingStatus": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "VeriposGeogatingStatusEnum"
		}
	},
	"VERIPOSSTATUS": {
		"eMyAccessStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"eMyDecoderSyncState": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "VeriposDecoderSyncStateEnum"
		}
	},
	"VERIPOSEXTENDEDINFO": {
		"szMyDecoderVersion": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"ulMySerialNumber": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"szMyPAC": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "FixedCharArray"
		},
		"szMyString": {
			"NoOfBytes": "1",
			"Offset": "25",
			"DataType": "STRING"
		}
	},
	"DEBUGTXBUFFERS": {
		"eMyPortId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		},
		"ulMyLowBufferSpaceLeft": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyLowSpaceLeftMinimum": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyHighBufferSpaceLeft": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyHighSpaceLeftMinimum": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		}
	},
	"ASSIGNLBANDBEAM": {
		"eMyAssignMode": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "LBandAssignEnum"
		},
		"szMyBeamName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"ulMyFrequency": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "ULONG"
		},
		"ulMyBaudRate": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "ULONG"
		},
		"ulMyDopplerWindow": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "ULONG"
		}
	},
	"RANGECMP3": {
		"aucMyRangeData": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VarHEXBYTEType"
		}
	},
	"ELEVATIONCUTOFF": {
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SystemTypeEnum"
		},
		"fMyElevationCutoffAngle": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"ulMyReserved": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		}
	},
	"VERIPOSBUBBLE": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"VERIPOSNVMDATA": {
		"ucMyBlockId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INT"
		},
		"iMyLength": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "INT"
		},
		"aucMyBuf": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "FixedUCHARArray"
		}
	},
	"MARK3POS": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"eMyDatumType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "DatumEnum"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "FixedCharArray"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "66",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "67",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "70",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "69",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "71",
			"DataType": "UCHAR"
		}
	},
	"MARK4POS": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"eMyDatumType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "DatumEnum"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "FixedCharArray"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "66",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "67",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "70",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "69",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "71",
			"DataType": "UCHAR"
		}
	},
	"PPSCONTROL2": {
		"eMyEnableDisable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PPSEnableEnum"
		},
		"eMyPolarity": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "PolarityEnum"
		},
		"dMyRate": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"ulMyPulseWidth": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"lMyEstimatedErrorLimit": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "LONG"
		}
	},
	"ALLOWUNHEALTHYALM": {
		"eMySystem": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SystemTypeEnum"
		},
		"bMyEnable": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "BOOL"
		}
	},
	"SYNCRELINSPVA": {
		"eMyRelINSOutput": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RelINSOutputEnum"
		},
		"dMyDeltaPosN": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyDeltaPosE": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyDeltaPosU": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyDeltaVelN": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyDeltaVelE": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyDeltaVelU": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyDeltaRoll": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyDeltaPitch": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyDeltaHeading": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "FLOAT"
		},
		"acMyRoverID": {
			"NoOfBytes": "1",
			"Offset": "80",
			"DataType": "FixedCharArray"
		},
		"eMyRoverINSStatus": {
			"NoOfBytes": "4",
			"Offset": "81",
			"DataType": "INSStatusEnum"
		},
		"acMyMasterID": {
			"NoOfBytes": "1",
			"Offset": "85",
			"DataType": "FixedCharArray"
		},
		"eMyMasterINSStatus": {
			"NoOfBytes": "4",
			"Offset": "86",
			"DataType": "INSStatusEnum"
		},
		"eMyRTKBaselineStatus": {
			"NoOfBytes": "4",
			"Offset": "90",
			"DataType": "SolTypeEnum"
		},
		"ulMyExtendedSolStat": {
			"NoOfBytes": "4",
			"Offset": "94",
			"DataType": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["98"]
	},
	"DEBUGPROCESSRUNTIMES": {
		"aclMyRunTimes": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"ulMyProcessID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"szMyProcessName": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "STRING"
		},
		"ulMyRunTimeCount": {
			"NoOfBytes": "4",
			"Offset": "9",
			"DataType": "ULONG"
		},
		"fMyRunTimePercent": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "FLOAT"
		}
	},
	"IMUCONFIGURATION": {
		"eMyIMUType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "IMUTypeEnum"
		}
	},
	"DYNAMICCHANCONFIG": {
		"bMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BOOL"
		}
	},
	"SETSIGNALINDEPENDENT": {
		"eMySignal": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SignalTypeEnum"
		},
		"eMyAcqIndependent": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "IndependentStatusEnum"
		},
		"eMyTrackingIndependent": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "IndependentStatusEnum"
		}
	},
	"EM3000": {
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INSStatusEnum"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyHeave": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		}
	},
	"TERRASTARPAYG": {
		"bMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"VERIPOSSIMULATEDPOSITION": {
		"dMyLatitudeInDegrees": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyLongitudeInDegrees": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		}
	},
	"VERIPOSSIMULATEDINITIALTIME": {
		"ulMyYear": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyMonth": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyDay": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyHour": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyMinute": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMySeconds": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		}
	},
	"TRACKSUMMARY": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"ulMyTotalSatsTracked": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"aclMyTrackedGNSS": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "SystemTypeEnum"
		},
		"ulMyNumTracked": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"CABO": ["4"],
		"CAAO": ["8"]
	},
	"PPPSEEDSIGNALS": {
		"aclMyDeltaPhaseSeedSignals": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"dMyPseudorange": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyPhaseRange": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"fMyLockTime": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"ulMyCStatus": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"eMySignal": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "SignalTypeEnum"
		}
	},
	"PPPDETECTEDDYNAMICS": {
		"eMyDetectedDynamics": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "MotionEnum"
		},
		"fMyHorizontalSpeed": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"fMyVerticalSpeed": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"bMyIsCreepDetected": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "BOOL"
		}
	},
	"PPPFASTLOG": {
		"szMyMessage": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"CABO": ["4"],
		"CAAO": ["1024"]
	},
	"PPPFASTGROSSOUTLIERS": {
		"aclMyGrossOutlierSatelliteIDs": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		}
	},
	"PPPVEL": {
		"eMyVelocityStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyVelocityType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"fMyLatency": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"dMyHorizontalSpeed": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyGroundTrack": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"fFloat": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		}
	},
	"PPPVEL2": {
		"eMyVelocityStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyVelocityType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyXStdDev": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"fMyYStdDev": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"fMyZStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "44",
			"DataType": "FixedCharArray"
		},
		"fMyLatency": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "53",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "54",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "55",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "56",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "57",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "58",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "59",
			"DataType": "UCHAR"
		}
	},
	"GLIDEINITIALIZATIONPERIOD": {
		"dMyWaitDuration": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		}
	},
	"DUALANTENNAALIGN": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"ulMyObsRateHz": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyPosRateHz": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		}
	},
	"DEBUGPROCESSMEMUSAGE": {
		"ulMyProcessID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyNumAllocations": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyNumDeallocations": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyTotalMemRequested": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyTotalMemDeallocated": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulMyTotalMemAllocated": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulMyMaxMemAllocated": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"szMyProcessName": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "STRING"
		}
	},
	"RELINSAUTOMATION": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "CommPortEnum"
		},
		"ulMyBaudRate": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyReqRateInHz": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"eMySendHeadingExt": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "OnOffEnum"
		},
		"eMyInterfaceMode": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "InterfaceModeEnum"
		}
	},
	"GENERATEINSALIGNCORRECTIONS": {
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		},
		"ulMyBaudRate": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyObsRateInHz": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyRefRateInHz": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"eMyCorrectionInterface": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "InterfaceModeEnum"
		}
	},
	"SINGLEPOINTINTEGRITYCONFIG": {
		"ulMyIndividualIsolationAttempts": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"aclMyOrderedSystemIsolationsEntries": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SystemTypeEnum"
		},
		"CABO": ["8"],
		"CAAO": ["4"]
	},
	"PPPCLOCKINTERPOLATOR": {
		"eMyInterpolator": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PPPClockInterpolatorEnum"
		}
	},
	"SETIMUPORTPROTOCOL": {
		"eMyPortProtocol": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PortProtocolEnum"
		}
	},
	"GPHCD": {
		"eTalkerID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "NMEATalkerIDEnum"
		},
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SolTypeEnum"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "UCHAR"
		},
		"ucUTCDay": {
			"NoOfBytes": "1",
			"Offset": "14",
			"DataType": "UCHAR"
		},
		"ucUTCMonth": {
			"NoOfBytes": "1",
			"Offset": "15",
			"DataType": "UCHAR"
		},
		"ulUTCYear": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"fMyHeading": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"fMyPitch": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"dMyHorizontalSpeed": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyEasting": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyNorthing": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"ulMyGGAQuality": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "ULONG"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "80",
			"DataType": "UCHAR"
		}
	},
	"BDXT1": {
		"ulUTCYear": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ucUTCMonth": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "UCHAR"
		},
		"ucUTCDay": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "UCHAR"
		},
		"dMyNorthing": {
			"NoOfBytes": "8",
			"Offset": "6",
			"DataType": "DOUBLE"
		},
		"dMyEasting": {
			"NoOfBytes": "8",
			"Offset": "14",
			"DataType": "DOUBLE"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "FLOAT"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "26",
			"DataType": "DOUBLE"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "55",
			"DataType": "UCHAR"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "39",
			"DataType": "SolTypeEnum"
		},
		"fMyBLength": {
			"NoOfBytes": "4",
			"Offset": "43",
			"DataType": "FLOAT"
		},
		"fMyHeading": {
			"NoOfBytes": "4",
			"Offset": "47",
			"DataType": "FLOAT"
		},
		"fMyPitch": {
			"NoOfBytes": "4",
			"Offset": "51",
			"DataType": "FLOAT"
		},
		"dMyHorizontalSpeed": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		},
		"dMyGroundTrack": {
			"NoOfBytes": "8",
			"Offset": "64",
			"DataType": "DOUBLE"
		}
	},
	"PTNL": {
		"ucUTCDay": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "UCHAR"
		},
		"ucUTCMonth": {
			"NoOfBytes": "1",
			"Offset": "1",
			"DataType": "UCHAR"
		},
		"ulUTCYear": {
			"NoOfBytes": "4",
			"Offset": "2",
			"DataType": "ULONG"
		},
		"dMyNorthing": {
			"NoOfBytes": "8",
			"Offset": "6",
			"DataType": "DOUBLE"
		},
		"dMyEasting": {
			"NoOfBytes": "8",
			"Offset": "14",
			"DataType": "DOUBLE"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "SolTypeEnum"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "26",
			"DataType": "UCHAR"
		},
		"fMyHDOP": {
			"NoOfBytes": "4",
			"Offset": "27",
			"DataType": "FLOAT"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "31",
			"DataType": "DOUBLE"
		}
	},
	"GPTRA": {
		"eTalkerID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "NMEATalkerIDEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SolStatusEnum"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "UCHAR"
		},
		"fMyHeading": {
			"NoOfBytes": "4",
			"Offset": "14",
			"DataType": "FLOAT"
		},
		"fMyPitch": {
			"NoOfBytes": "4",
			"Offset": "18",
			"DataType": "FLOAT"
		},
		"ulMyGGAQuality": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "ULONG"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "26",
			"DataType": "UCHAR"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "27",
			"DataType": "FixedCharArray"
		}
	},
	"GPNTR": {
		"eTalkerID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "NMEATalkerIDEnum"
		},
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SolTypeEnum"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "13",
			"DataType": "UCHAR"
		},
		"dMyEast": {
			"NoOfBytes": "8",
			"Offset": "14",
			"DataType": "DOUBLE"
		},
		"dMyNorthing": {
			"NoOfBytes": "8",
			"Offset": "22",
			"DataType": "DOUBLE"
		},
		"dMyUp": {
			"NoOfBytes": "8",
			"Offset": "30",
			"DataType": "DOUBLE"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "38",
			"DataType": "FixedCharArray"
		},
		"ulMyGGAQuality": {
			"NoOfBytes": "4",
			"Offset": "42",
			"DataType": "ULONG"
		}
	},
	"UNASSIGN2": {
		"eMySystem": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SystemTypeEnum"
		},
		"ulPrn": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "PRN"
		},
		"lMyIDNumber": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "LONG"
		}
	},
	"ASSIGN2": {
		"eMySystem": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SystemTypeEnum"
		},
		"ulPrn": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "PRN"
		},
		"lMyIDNumber": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "LONG"
		},
		"lDoppler": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "LONG"
		},
		"ulDopplerWindow": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		}
	},
	"SETRELINSOUTPUTFRAME": {
		"eMyRelINSOutput": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "RelINSOutputEnum"
		},
		"bMyFromMaster": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "BOOL"
		}
	},
	"IMUTIMINGMETHOD": {
		"eMyIMUTimingMethod": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "IMUTimingMethodEnum"
		}
	},
	"UPTIME": {
		"ulMyUptime": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		}
	},
	"IMURATEPVA": {
		"ulMyWeek": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"dMySeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "44",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "52",
			"DataType": "DOUBLE"
		},
		"dMyRoll": {
			"NoOfBytes": "8",
			"Offset": "60",
			"DataType": "DOUBLE"
		},
		"dMyPitch": {
			"NoOfBytes": "8",
			"Offset": "68",
			"DataType": "DOUBLE"
		},
		"dMyAzimuth": {
			"NoOfBytes": "8",
			"Offset": "76",
			"DataType": "DOUBLE"
		},
		"eMyINSStatus": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "INSStatusEnum"
		}
	},
	"RTKFASTLOGGINGLEVEL": {
		"eMyLevel": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "LoggingLevelEnum"
		}
	},
	"RTKFASTLOG": {
		"szMyMessage": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		}
	},
	"BESTSEEDPOS": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"eMyDatumType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "DatumEnum"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "FixedCharArray"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "66",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "67",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "68",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "69",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "70",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "71",
			"DataType": "UCHAR"
		}
	},
	"STEADYLINEINTRATRANSITION": {
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "64",
			"DataType": "DOUBLE"
		},
		"dMyTransitionTime": {
			"NoOfBytes": "8",
			"Offset": "72",
			"DataType": "DOUBLE"
		},
		"bMyIsInTransition": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "BOOL"
		}
	},
	"STEADYLINEINTERNALTRANSITION": {
		"dMyX": {
			"NoOfBytes": "8",
			"Offset": "48",
			"DataType": "DOUBLE"
		},
		"dMyY": {
			"NoOfBytes": "8",
			"Offset": "56",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "64",
			"DataType": "DOUBLE"
		},
		"dMyTransitionTime": {
			"NoOfBytes": "8",
			"Offset": "72",
			"DataType": "DOUBLE"
		},
		"bMyIsInTransition": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "BOOL"
		}
	},
	"SIGNAL2": {
		"eMyBlock": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SignalBlockEnum"
		},
		"eMySignalBlockType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SignalBlockTypeEnum"
		},
		"aulMyData": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "VariableULONGArray"
		}
	},
	"DEBUGCONTEXTSWITCH": {
		"ulMySwitchCount": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMySwitchAverageTicks": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyFIQDuringCB": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyIRQDuringCB": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		}
	},
	"PPPESTIMATETROPOGRADIENTS": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"RTCMV3USECNESPHASEBIASES": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"PPPPLUS": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"PPPARSECONDARYSOLUTIONCHECK": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"PPPARFASTRECONVERGENCE": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"PPPARCONFIG": {
		"usMinNarrowLaneGroupSize": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "USHORT"
		},
		"usTimeWindowLenght ": {
			"NoOfBytes": "2",
			"Offset": "2",
			"DataType": "USHORT"
		},
		"fPPPARElevationMask": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"dConfidenceLevelInitially": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dConfidenceLevel": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dConfidenceLevelReconvergence": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dConfidenceLevelWidelaneReconvergence": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"usInitialConvergenceLenght": {
			"NoOfBytes": "2",
			"Offset": "40",
			"DataType": "USHORT"
		},
		"CABO": ["4"],
		"CAAO": ["42"]
	},
	"PPPARSATS": {
		"aclMySatelliteEntries": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"ulMyStatusMask": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "HEXULONG"
		}
	},
	"AUTOSURVEY": {
		"eMySwitch": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"ulMyMaxTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"fMyAccuracy": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyHorizTol": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"ulMyReserved": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		}
	},
	"SETINSROTATION_LEGACY": {
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "FixedDOUBLEArray"
		}
	},
	"RELINSCONFIG": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"eMyRelINSRx": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RelINSRxEnum"
		},
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "CommPortEnum"
		},
		"ulMyBaudRate": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyReqRateInHz": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		}
	},
	"ALIGNSTATS": {
		"eMySolutionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMySolutionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"acMyRoverID": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "FixedCharArray"
		},
		"acMyMasterID": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "FixedCharArray"
		},
		"fMyUnitVariance": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "FLOAT"
		},
		"fMyMaxExternalReliability": {
			"NoOfBytes": "4",
			"Offset": "17",
			"DataType": "FLOAT"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "21",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "25",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "29",
			"DataType": "FLOAT"
		},
		"dMyLatitudeLongitudeCovariance": {
			"NoOfBytes": "8",
			"Offset": "33",
			"DataType": "DOUBLE"
		},
		"dMyLatitudeUpCovariance": {
			"NoOfBytes": "8",
			"Offset": "41",
			"DataType": "DOUBLE"
		},
		"dMyLongitudeUpCovariance": {
			"NoOfBytes": "8",
			"Offset": "49",
			"DataType": "DOUBLE"
		},
		"ucMyMeasurementSource": {
			"NoOfBytes": "1",
			"Offset": "57",
			"DataType": "UCHAR"
		},
		"fFloat": {
			"NoOfBytes": "4",
			"Offset": "58",
			"DataType": "FLOAT"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "UCHAR"
		}
	},
	"SETRELIABILITYPARAMETERS": {
		"dMyAlpha": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyBeta": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		}
	},
	"SETMAXALIGNMENTTIME": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"ulMyMaxAlignSeconds": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"PAVCONFIG": {
		"eMyStateSwitch": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PAVStateEnum"
		},
		"eMyPAVPort": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "CommPortEnum"
		},
		"eMyPAVEventOut": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "MarkEnum"
		},
		"ulMyPAVBaudRate": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyPAVUpdateRate": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		}
	},
	"PAVSTATUS": {
		"eTaskStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PAVTaskStatusEnum"
		},
		"ePAVRollStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "PAVAttitudeStatusEnum"
		},
		"ePAVPitchStatus": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "PAVAttitudeStatusEnum"
		},
		"ePAVAzimuthStatus": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "PAVAttitudeStatusEnum"
		},
		"ePAVTrackStatus": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "PAVAttitudeStatusEnum"
		},
		"bPAVReceiveGimbalData": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "BOOL"
		},
		"CABO": ["4"],
		"CAAO": ["24"]
	},
	"RTKSEEDSIGNALS": {
		"aclMyDeltaPhaseSeedSignals": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"dMyPseudorange": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyPhaseRange": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"fMyLockTime": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"ulMyCStatus": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"CABO": ["4"],
		"CAAO": ["32"]
	},
	"RTKFASTRESIDUALS": {
		"aclMyDeltaPhaseResiduals": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"fMyResidual": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyVariance": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"RTKFASTIONO": {
		"aclMyDeltaPhaseIonosphereFilters": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"fMyIonosphereRate": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyIonosphereRateVariance": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyObservedIonosphereRate": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		}
	},
	"RTKBASELOGGINGLEVEL": {
		"eMyLevel": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "LoggingLevelEnum"
		},
		"CABO": ["4"],
		"CAAO": ["4"]
	},
	"RTKBASEIONO": {
		"aclMyDeltaPhaseIonosphereFilters": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"fMyIonosphereRate": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyIonosphereRateVariance": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyObservedIonosphereRate": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		},
		"CABO": ["4"],
		"CAAO": ["20"]
	},
	"RTKBASESATELLITECLOCKS": {
		"aclMySatelliteClockRates": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"fMyFilteredRate": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyFilteredRateStdDev": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyObservedRate": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		}
	},
	"RTKBASELOG": {
		"szMyMessage": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		}
	},
	"PDPFASTLOGGINGLEVEL": {
		"eMyLevel": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "LoggingLevelEnum"
		}
	},
	"PDPFASTLOG": {
		"szMyMessage": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"CABO": ["4"],
		"CAAO": ["1024"]
	},
	"PDPFASTIONO": {
		"aclMyDeltaPhaseIonosphereFilters": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"fMyIonosphereRate": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyIonosphereRateVariance": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyObservedIonosphereRate": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		}
	},
	"PDPFILTERPOS": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"eMyDatumType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "DatumEnum"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "FixedCharArray"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "UCHAR"
		},
		"cCharAsInt": {
			"NoOfBytes": "1",
			"Offset": "67",
			"DataType": "UCHAR"
		},
		"ucMyMeasurementSource": {
			"NoOfBytes": "1",
			"Offset": "68",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "69",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "70",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "71",
			"DataType": "UCHAR"
		},
		"CABO": ["4"],
		"CAAO": ["72"]
	},
	"PDPFASTRESIDUALS": {
		"aclMyDeltaPhaseResiduals": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"fMyResidual": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyVariance": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		}
	},
	"PDPFILTERSATS": {
		"aclMySatelliteEntries": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ObservationStatusEnum"
		},
		"ulMyStatusMask": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "HEXULONG"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"CANCONFIGRATE": {
		"eMyCanRate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CanOutputRateEnum"
		}
	},
	"CELLULARACTIVATE": {
		"szMyOperator": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"szMyReserved1": {
			"NoOfBytes": "1",
			"Offset": "32",
			"DataType": "STRING"
		},
		"iMyReserved2": {
			"NoOfBytes": "4",
			"Offset": "33",
			"DataType": "INT"
		}
	},
	"CELLULARACTIVATESTATUS": {
		"szMyStatus": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"szMyError": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "STRING"
		},
		"szMyReserved": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "STRING"
		}
	},
	"CELLULARIPSTATUS": {
		"ulMyNetworkId": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "HEXULONG"
		},
		"eMyDataRegStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "CellNetRegistrationStatusEnum"
		},
		"bMyIPConn": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "BOOL"
		},
		"eMyAccessTechnology": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "CellularAccessTechnologyEnum"
		},
		"uiMyCellID": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "UINT"
		},
		"iMyRac": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "INT"
		},
		"uiMyCDMADataRetryCount": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "UINT"
		},
		"szMyIpAddress": {
			"NoOfBytes": "1",
			"Offset": "28",
			"DataType": "STRING"
		},
		"szMyNetmask": {
			"NoOfBytes": "1",
			"Offset": "29",
			"DataType": "STRING"
		},
		"szMyGateway": {
			"NoOfBytes": "1",
			"Offset": "30",
			"DataType": "STRING"
		},
		"szMyDns1": {
			"NoOfBytes": "1",
			"Offset": "31",
			"DataType": "STRING"
		},
		"szMyDns2": {
			"NoOfBytes": "1",
			"Offset": "32",
			"DataType": "STRING"
		},
		"uiMyTxBytes": {
			"NoOfBytes": "4",
			"Offset": "33",
			"DataType": "UINT"
		},
		"uiMyRxBytes": {
			"NoOfBytes": "4",
			"Offset": "37",
			"DataType": "UINT"
		},
		"ulNoOfIpDisconnections": {
			"NoOfBytes": "4",
			"Offset": "41",
			"DataType": "ULONG"
		},
		"iMyReserved1": {
			"NoOfBytes": "4",
			"Offset": "45",
			"DataType": "INT"
		},
		"iMyReserved2": {
			"NoOfBytes": "4",
			"Offset": "49",
			"DataType": "INT"
		},
		"fMyReserved3": {
			"NoOfBytes": "4",
			"Offset": "53",
			"DataType": "FLOAT"
		},
		"fMyReserved4": {
			"NoOfBytes": "4",
			"Offset": "57",
			"DataType": "FLOAT"
		},
		"fMyReserved5": {
			"NoOfBytes": "4",
			"Offset": "61",
			"DataType": "FLOAT"
		},
		"ulMyReserved6": {
			"NoOfBytes": "4",
			"Offset": "65",
			"DataType": "HEXULONG"
		},
		"ulMyReserved7": {
			"NoOfBytes": "4",
			"Offset": "69",
			"DataType": "HEXULONG"
		},
		"ulMyReserved8": {
			"NoOfBytes": "4",
			"Offset": "73",
			"DataType": "HEXULONG"
		},
		"ulMyReserved9": {
			"NoOfBytes": "4",
			"Offset": "77",
			"DataType": "HEXULONG"
		}
	},
	"SETINSUPDATE": {
		"eMyINSUpdate": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INSUpdateEnum"
		},
		"eMyTrigger": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "EnableEnum"
		}
	},
	"POSAVEUPDATEINTERVAL": {
		"eMyCommandType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PosAveIntervalTypeEnum"
		},
		"ulMyUpdateInterval": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"PDPFILTERSTAT": {
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PDPFilterCommandEnum"
		},
		"eMyMode": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "PDPFilterModeEnum"
		},
		"eMyDynamics": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "PDPFilterDynamicsEnum"
		},
		"uiNumPsrUsed": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "UINT"
		},
		"uiNumPhaseUsed": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "UINT"
		},
		"dMySecondsContRelOp": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyEstimatedNorthing900SecStdDev": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		},
		"dMyEstimatedEasting900SecStdDev": {
			"NoOfBytes": "8",
			"Offset": "36",
			"DataType": "DOUBLE"
		}
	},
	"PDPFILTERVEL": {
		"eMyVelocityStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyVelocityType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"fMyLatency": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"dMyHorizontalSpeed": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyGroundTrack": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"lMyRsvdFieldForVelocityLogs": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "LONG"
		}
	},
	"INSUPDATESTATUS": {
		"eMyPosType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolTypeEnum"
		},
		"iMyNumPSR": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "INT"
		},
		"iMyNumPhase": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "INT"
		},
		"iMyNumDOP": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "INT"
		},
		"eMyWheelStatus": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "WheelStatusEnum"
		},
		"eMyHeadingUpdateStatus": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "HeadingUpdateStatusEnum"
		},
		"ulMyExtSolutionStatus": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "HEXULONG"
		},
		"ulMyINSUpdateOptions": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "HEXULONG"
		}
	},
	"PDPINTEGRITYMONITORING": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"fMyPFA": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		}
	},
	"PDPDETECTEDDYNAMICS": {
		"eMyDetectedDynamics": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "MotionEnum"
		},
		"fMyHorizontalSpeed": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"fMyVerticalSpeed": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"bMyIsCreepDetected": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "BOOL"
		}
	},
	"SETINSSMOOTH": {
		"eMyINSSmooth": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INSSmoothEnum"
		},
		"eMyTrigger": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "EnableEnum"
		},
		"ulMySmoothSec": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		}
	},
	"DECODEDBASESTATIONREF": {
		"eMyMessageEnum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BaseStationMessageEnum"
		},
		"acMyDiffStationID": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "5",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "13",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "21",
			"DataType": "DOUBLE"
		}
	},
	"PDPDELTAPHASEVEL": {
		"eMyVelocityStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyVelocityType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"fMyLatency": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"dMyHorizontalSpeed": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyGroundTrack": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"dMyZ": {
			"NoOfBytes": "8",
			"Offset": "32",
			"DataType": "DOUBLE"
		},
		"lMyRsvdFieldForVelocityLogs": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "LONG"
		}
	},
	"LIMITCHANNEL": {
		"aulMyChannelNum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "VariableULONGArray"
		}
	},
	"GLIDERECOVERY": {
		"eMyTimeMode": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PDPGlideRecoveryTimeEnum"
		},
		"ulMyTime": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"PPPFASTFEEDBACK": {
		"eMyDetectedDynamics": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "MotionEnum"
		},
		"fMyHorizontalSpeed": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"fMyVerticalSpeed": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"bMyIsCreepDetected": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "BOOL"
		},
		"aclMyGrossOutlierSatelliteIDs": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "SATELLITEID"
		},
		"CABO": ["20"],
		"CAAO": ["8"]
	},
	"BLOCKSKY": {
		"eMyBlock": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SignalBlockEnum"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"fMyAzimuthLowerLimit": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"fMyAzimuthUpperLimit": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyElevationLowerLimit": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyElevationUpperLimit": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		}
	},
	"GPRMCALTITUDE": {
		"eMyEnableGPRMCAltitude": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"VERIPOSSTANDARDCONFIG": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"fMyMaximumDistance": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"ulMyMaximumNumberOfStations": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyTimeOut": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		}
	},
	"DECODEDDIFFERENTIALCORRECTIONS": {
		"eMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "DGPSTypeEnum"
		},
		"szMyID": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"bMyIsPartialSet": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "BOOL"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "SystemTypeEnum"
		},
		"aclMyCorrections": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ClassArray"
		},
		"ulMySystemID": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"fMyCorrection": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FLOAT"
		},
		"fMyCorrectionStdDev": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"ulMyIODE": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"CABO": ["20"],
		"CAAO": ["16"]
	},
	"DECODEDBASESTATION": {
		"eMyMessageEnum": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BaseStationMessageEnum"
		},
		"acMyDiffStationID": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "5",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "13",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "21",
			"DataType": "DOUBLE"
		}
	},
	"PSRDIFFCONFIG": {
		"eMyMode": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "DifferentialModeEnum"
		},
		"fMyMaximumDistance": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"ulMyMaximumNumberOfStations": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		}
	},
	"NMEAFORMAT": {
		"eMyField": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "NMEAField"
		},
		"szMyFormat": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"CABO": ["4"],
		"CAAO": ["5"]
	},
	"VERIPOSPERSISTENTSTATIONS": {
		"aclMyStations": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"usMyStationID": {
			"NoOfBytes": "2",
			"Offset": "4",
			"DataType": "USHORT"
		},
		"usMyWeek": {
			"NoOfBytes": "2",
			"Offset": "6",
			"DataType": "USHORT"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"lMyScaledXCoordinate": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "LONG"
		},
		"lMyScaledYCoordinate": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "LONG"
		},
		"lMyScaledZCoordinate": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "LONG"
		}
	},
	"PSRDIFFSTATIONS": {
		"eMyType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "DGPSTypeEnum"
		},
		"acMyStationID": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "FixedCharArray"
		},
		"aclMyStations": {
			"NoOfBytes": "4",
			"Offset": "5",
			"DataType": "ClassArray"
		},
		"szMyID": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "FixedCharArray"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "13",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "21",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "29",
			"DataType": "DOUBLE"
		},
		"fMyDistance": {
			"NoOfBytes": "4",
			"Offset": "37",
			"DataType": "FLOAT"
		},
		"CABO": ["9"],
		"CAAO": ["32"]
	},
	"VERIPOSRTCMPORTDATA": {
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		},
		"aucMyData": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "VarHEXBYTEType"
		}
	},
	"VERIPOSDECODERMODE": {
		"eMyMode": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "VeriposDecoderModeEnum"
		}
	},
	"PSRELEVMASK": {
		"fMyMaskAngleInDegrees": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "FLOAT"
		}
	},
	"ORBITANDCLOCKCORRECTIONSINFO": {
		"eMySource": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "OrbitAndClockCorrectionsSourceEnum"
		},
		"ulMySolutionID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		}
	},
	"RTKPERMISSIVEMODE": {
		"eAction": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"GPGNS": {
		"eTalkerID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "NMEATalkerIDEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "FLOAT"
		},
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "SolTypeEnum"
		},
		"aclMySatelliteEntries": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "SATELLITEID"
		},
		"eMyStatus": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ObservationStatusEnum"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "56",
			"DataType": "UCHAR"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "57",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "61",
			"DataType": "FixedCharArray"
		},
		"fMyHDOP": {
			"NoOfBytes": "4",
			"Offset": "65",
			"DataType": "FLOAT"
		},
		"eMyNMEAVersion": {
			"NoOfBytes": "4",
			"Offset": "69",
			"DataType": "NMEAVersionEnum"
		},
		"CABO": ["44"],
		"CAAO": ["29"]
	},
	"NMEAINCLUDESBAS": {
		"eMyIncludeSBAS": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"NMEASATELLITESOURCE": {
		"eMySource": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "NMEASatelliteSourceEnum"
		}
	},
	"SAMPLEBUFFERREQUEST": {
		"eMyDataType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "MinosSampleBufferTypeEnum"
		},
		"ulMySource": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyNumSamples": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		}
	},
	"SAMPLEBUFFERDATA": {
		"ulMySeqNumber": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"asMyData": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "VariableSHORTArray"
		}
	},
	"HIGHRESBINCONFIG": {
		"bMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BOOL"
		},
		"ulMyADC": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulMyBottomBit": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"bMyDPBEnable": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "BOOL"
		},
		"eMyDPBMode": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "MinosDPBModeEnum"
		}
	},
	"HIGHRESBINDATA": {
		"ausMyBins": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "FixedUSHORTArray"
		},
		"CABO": ["4"],
		"CAAO": ["64"]
	},
	"CORRECTIONSQUALITY": {
		"clMyCorrectionQualityEntry": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMyCorrectionSource": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "CorrectionSourceEnum"
		},
		"eMyInterfaceMode": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "InterfaceModeEnum"
		},
		"szMyStationID": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "FixedCharArray"
		},
		"fMyQuality": {
			"NoOfBytes": "4",
			"Offset": "13",
			"DataType": "FLOAT"
		},
		"fMyLatency": {
			"NoOfBytes": "4",
			"Offset": "17",
			"DataType": "FLOAT"
		}
	},
	"RADARSTATUS": {
		"hulMyStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "HEXULONG"
		},
		"eMySolutionStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolStatusEnum"
		},
		"eMySolutionType": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SolTypeEnum"
		},
		"dMyHorizontalSpeedMps": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMySmoothedHorizontalSpeedMps": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		},
		"dMyFrequency": {
			"NoOfBytes": "8",
			"Offset": "28",
			"DataType": "DOUBLE"
		}
	},
	"RADARCONFIG": {
		"eMySwitch": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"dMyFrequencyStepHzPerKph": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"eMyUpdateRate": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "EmulatedRadarUpdateRateEnum"
		},
		"eMyResponseMode": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "EmulatedRadarResponseModeEnum"
		},
		"dMyResponseThresholdKph": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		}
	},
	"PPPMODE": {
		"eMyMode": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PPPModeEnum"
		}
	},
	"CANDATA": {
		"bMyIsExtended": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BOOL"
		},
		"ulMyMessageID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"aucMyCANData": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "FixedUCHARArray"
		}
	},
	"COARSETIMEOFFSET": {
		"ulMyWeeks": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"bMyIsNegative": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "BOOL"
		}
	},
	"INSCALIBRATE": {
		"eMyOffset": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INSOffsetEnum"
		},
		"eMyTrigger": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "INSCalibrateTriggerEnum"
		},
		"fMyStdevThreshold": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "FLOAT"
		},
		"CABO": ["4"],
		"CAAO": ["12"]
	},
	"PPPFASTIONO": {
		"aclMyDeltaPhaseIonosphereFilters": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "SATELLITEID"
		},
		"fMyIonosphereRate": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "FLOAT"
		},
		"fMyIonosphereRateVariance": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FLOAT"
		},
		"fMyObservedIonosphereRate": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FLOAT"
		}
	},
	"PGN129025": {
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		}
	},
	"PGN129026": {
		"dMyGroundTrack": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyHorizontalSpeed": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "SolTypeEnum"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		}
	},
	"PGN129027": {
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "0",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "SolTypeEnum"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		}
	},
	"PGN129029": {
		"ulMyGGAQuality": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "SolTypeEnum"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "40",
			"DataType": "FixedCharArray"
		},
		"fMyHDOP": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyPDOP": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "UCHAR"
		},
		"bMyHasGPS": {
			"NoOfBytes": "4",
			"Offset": "53",
			"DataType": "BOOL"
		},
		"bMyHasSBAS": {
			"NoOfBytes": "4",
			"Offset": "57",
			"DataType": "BOOL"
		},
		"bMyHasGLONASS": {
			"NoOfBytes": "4",
			"Offset": "61",
			"DataType": "BOOL"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "65",
			"DataType": "ULONG"
		}
	},
	"PGN126992": {
		"ulUTCYear": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ucUTCMonth": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "UCHAR"
		},
		"ucUTCHour": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "UCHAR"
		},
		"ucUTCDay": {
			"NoOfBytes": "1",
			"Offset": "6",
			"DataType": "UCHAR"
		},
		"ucUTCMinute": {
			"NoOfBytes": "1",
			"Offset": "7",
			"DataType": "UCHAR"
		},
		"ulUTCMillisecond": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"UTCTimeStatus": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "UTCTimeStatus"
		},
		"bMyHasGPS": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "BOOL"
		},
		"bMyHasGLONASS": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "BOOL"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "SolTypeEnum"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		}
	},
	"INSPVACMP": {
		"ulMyWeekMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ULONG"
		},
		"ucMyINSStatus": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "UCHAR"
		},
		"ucMyGNSSPositionType": {
			"NoOfBytes": "1",
			"Offset": "5",
			"DataType": "UCHAR"
		},
		"llMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "6",
			"DataType": "LONGLONG"
		},
		"llMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "14",
			"DataType": "LONGLONG"
		},
		"lMyHeight": {
			"NoOfBytes": "4",
			"Offset": "22",
			"DataType": "LONG"
		},
		"sMyVelocityNorth": {
			"NoOfBytes": "2",
			"Offset": "26",
			"DataType": "SHORT"
		},
		"sMyVelocityEast": {
			"NoOfBytes": "2",
			"Offset": "28",
			"DataType": "SHORT"
		},
		"sMyVelocityUp": {
			"NoOfBytes": "2",
			"Offset": "30",
			"DataType": "SHORT"
		},
		"sMyRoll": {
			"NoOfBytes": "2",
			"Offset": "32",
			"DataType": "SHORT"
		},
		"sMyPitch": {
			"NoOfBytes": "2",
			"Offset": "34",
			"DataType": "SHORT"
		},
		"sMyAzimuth": {
			"NoOfBytes": "2",
			"Offset": "36",
			"DataType": "SHORT"
		},
		"sMyAzimuthRate": {
			"NoOfBytes": "2",
			"Offset": "38",
			"DataType": "SHORT"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		}
	},
	"INSPVASDCMP": {
		"usMyWeek": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "USHORT"
		},
		"ulMyWeekMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "2",
			"DataType": "ULONG"
		},
		"usMyLatitudeStdDev": {
			"NoOfBytes": "2",
			"Offset": "6",
			"DataType": "USHORT"
		},
		"usMyLongitudeStdDev": {
			"NoOfBytes": "2",
			"Offset": "8",
			"DataType": "USHORT"
		},
		"usMyHeightStdDev": {
			"NoOfBytes": "2",
			"Offset": "10",
			"DataType": "USHORT"
		},
		"usMyVelocityNorthStdDev": {
			"NoOfBytes": "2",
			"Offset": "12",
			"DataType": "USHORT"
		},
		"usMyVelocityEastStdDev": {
			"NoOfBytes": "2",
			"Offset": "14",
			"DataType": "USHORT"
		},
		"usMyVelocityUpStdDev": {
			"NoOfBytes": "2",
			"Offset": "16",
			"DataType": "USHORT"
		},
		"usMyRollStdDev": {
			"NoOfBytes": "2",
			"Offset": "18",
			"DataType": "USHORT"
		},
		"usMyPitchStdDev": {
			"NoOfBytes": "2",
			"Offset": "20",
			"DataType": "USHORT"
		},
		"usMyAzimuthStdDev": {
			"NoOfBytes": "2",
			"Offset": "22",
			"DataType": "USHORT"
		},
		"ucMyTimeSincePosUpdate": {
			"NoOfBytes": "1",
			"Offset": "24",
			"DataType": "UCHAR"
		},
		"ucMyGNSSPositionUpdateType": {
			"NoOfBytes": "1",
			"Offset": "25",
			"DataType": "UCHAR"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "26",
			"DataType": "ULONG"
		}
	},
	"PGNCONFIG": {
		"ulMyMessageID": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "MessageIdType"
		},
		"ulMyPGN": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ucMyPriority": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "UCHAR"
		}
	},
	"PASSCCOM1": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PASSCCOM2": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PASSCCOM3": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"DEBUGPOOLSTATISTICS": {
		"ulMySize": {
			"NoOfBytes": "4",
			"Offset": "112",
			"DataType": "ULONG"
		},
		"ulMyHighWaterMark": {
			"NoOfBytes": "4",
			"Offset": "116",
			"DataType": "ULONG"
		},
		"CABO": ["4"],
		"CAAO": ["120"]
	},
	"DEBUGEXHAUSTEDBROKERS": {
		"aclMyBrokerIds": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"szMyPacketName": {
			"NoOfBytes": "1",
			"Offset": "4",
			"DataType": "STRING"
		},
		"ulMySibling": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "ULONG"
		},
		"ulMyDomain": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "ULONG"
		}
	},
	"DEBUGBROKER": {
		"szMyPacketName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"ulMySibling": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "ULONG"
		},
		"ulMyDomain": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "ULONG"
		}
	},
	"DEBUGPACKETPOOL": {
		"szMyPacketName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"ulMySibling": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "ULONG"
		},
		"ulMyDomain": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "ULONG"
		},
		"ulMySize": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "ULONG"
		},
		"ulMyHighWaterMark": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "ULONG"
		},
		"ulMyCurrentUsage": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "ULONG"
		}
	},
	"DEBUGBROKERINFO": {
		"szMyPacketName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"ulMySibling": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "ULONG"
		},
		"ulMyDomain": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "ULONG"
		},
		"szMyPacketType": {
			"NoOfBytes": "1",
			"Offset": "88",
			"DataType": "STRING"
		},
		"bMyIsCollection": {
			"NoOfBytes": "4",
			"Offset": "89",
			"DataType": "BOOL"
		},
		"szMyName": {
			"NoOfBytes": "1",
			"Offset": "161",
			"DataType": "STRING"
		},
		"aclMySubscribers": {
			"NoOfBytes": "4",
			"Offset": "157",
			"DataType": "ClassArray"
		},
		"CABO": ["161"],
		"CAAO": ["32"]
	},
	"DEBUGPACKETUSAGE": {
		"szMyPacketName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"ulMySibling": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "ULONG"
		},
		"ulMyDomain": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "ULONG"
		},
		"aclMyUsageRecords": {
			"NoOfBytes": "4",
			"Offset": "88",
			"DataType": "ClassArray"
		},
		"ulMyPacketIndex": {
			"NoOfBytes": "4",
			"Offset": "92",
			"DataType": "ULONG"
		},
		"aclMyUsers": {
			"NoOfBytes": "4",
			"Offset": "96",
			"DataType": "ClassArray"
		},
		"szMyName": {
			"NoOfBytes": "1",
			"Offset": "100",
			"DataType": "STRING"
		},
		"CABO": ["100"],
		"CAAO": ["32"]
	},
	"CCOMCONFIG": {
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		},
		"eMyNode": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "J1939NodeEnum"
		},
		"eMyProtocol": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "CanProtocolEnum"
		},
		"ulMyPGN": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ucMyPriority": {
			"NoOfBytes": "1",
			"Offset": "16",
			"DataType": "UCHAR"
		},
		"ucMyAddress": {
			"NoOfBytes": "1",
			"Offset": "17",
			"DataType": "UCHAR"
		}
	},
	"J1939CONFIG": {
		"eMyJ1939Node": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "J1939NodeEnum"
		},
		"eCanPort": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "CanPortEnum"
		},
		"ulPreferredAddress": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulMyAlternateAddressRangeStart": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulMyAlternateAddressRangeEnd": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulManufacturerCode": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulIndustryGroup": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulDeviceClass": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulDeviceClassInstance": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulFunction": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"ulFunctionInstance": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulECUInstance": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		}
	},
	"PPPFASTSEEDPOS": {
		"eMyPositionStatus": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolStatusEnum"
		},
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SolTypeEnum"
		},
		"dMyLatitude": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "DOUBLE"
		},
		"dMyLongitude": {
			"NoOfBytes": "8",
			"Offset": "16",
			"DataType": "DOUBLE"
		},
		"dMyHeight": {
			"NoOfBytes": "8",
			"Offset": "24",
			"DataType": "DOUBLE"
		},
		"fMyUndulation": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "FLOAT"
		},
		"eMyDatumType": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "DatumEnum"
		},
		"fMyLatStdDev": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "FLOAT"
		},
		"fMyLongStdDev": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"fMyHgtStdDev": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "FLOAT"
		},
		"acMyBaseID": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "FixedCharArray"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "FLOAT"
		},
		"fMySolutionAge": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "FLOAT"
		},
		"ucMyNumTracked": {
			"NoOfBytes": "1",
			"Offset": "64",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolution": {
			"NoOfBytes": "1",
			"Offset": "65",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionSingleFreq": {
			"NoOfBytes": "1",
			"Offset": "66",
			"DataType": "UCHAR"
		},
		"ucMyNumInSolutionDualFreq": {
			"NoOfBytes": "1",
			"Offset": "67",
			"DataType": "UCHAR"
		},
		"ucMyMeasurementSource": {
			"NoOfBytes": "1",
			"Offset": "68",
			"DataType": "UCHAR"
		},
		"ucMyExtendedSolutionStatus": {
			"NoOfBytes": "1",
			"Offset": "69",
			"DataType": "UCHAR"
		},
		"ucMyGALandBDSSignals": {
			"NoOfBytes": "1",
			"Offset": "70",
			"DataType": "UCHAR"
		},
		"ucMyGPSandGLOSignals": {
			"NoOfBytes": "1",
			"Offset": "71",
			"DataType": "UCHAR"
		}
	},
	"INITIALINSSTATEINFO": {
		"bMyIsValid": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BOOL"
		},
		"bMySaveNVM": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "BOOL"
		},
		"adMyLLH": {
			"NoOfBytes": "8",
			"Offset": "8",
			"DataType": "FixedDOUBLEArray"
		},
		"afMyAtt": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "FixedFLOATArray"
		},
		"afMyGyroBiases": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "FixedFLOATArray"
		},
		"afMyAccelBiases": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "FixedFLOATArray"
		}
	},
	"INSSEED": {
		"eMyEnabled": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"eMyActivity": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "InitialINSStateEnum"
		}
	},
	"J1939STATUS": {
		"eMyJ1939Node": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "J1939NodeEnum"
		},
		"eMyJ1939NodeStatus": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "J1939NodeStatusEnum"
		},
		"ulMyAddressClaimCount": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ucMyClaimedAddress": {
			"NoOfBytes": "1",
			"Offset": "12",
			"DataType": "HEXBYTE"
		}
	},
	"STEADYLINENUDGE": {
		"eMyNudgeFrame": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SteadylineNudgeFrame"
		},
		"dMyNudgeValue1": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyNudgeValue2": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyNudgeValue3": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		}
	},
	"PDPLOGGINGLEVEL": {
		"eMyLevel": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "LoggingLevelEnum"
		}
	},
	"PDPLOG": {
		"szMyMessage": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		}
	},
	"SATELLITEPCV": {
		"eMySystemType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SystemTypeEnum"
		},
		"idMyID": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SATELLITEID"
		},
		"eMyFrequency": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ANTEXFrequencyEnum"
		},
		"afMyPCV": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "VariableFLOATArray"
		},
		"CABO": ["4"],
		"CAAO": ["16"]
	},
	"DEBUGMEMUSAGE": {
		"aclAddressSpaceMemStats": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"ulOSPoolSizePages": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "ULONG"
		},
		"ulOSPoolFreePages": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		},
		"ulReserved0": {
			"NoOfBytes": "4",
			"Offset": "12",
			"DataType": "ULONG"
		},
		"ulReserved1": {
			"NoOfBytes": "4",
			"Offset": "16",
			"DataType": "ULONG"
		},
		"ulReserved2": {
			"NoOfBytes": "4",
			"Offset": "20",
			"DataType": "ULONG"
		},
		"ulHeapSizeBytes": {
			"NoOfBytes": "4",
			"Offset": "24",
			"DataType": "ULONG"
		},
		"ulTotalNumAllocations": {
			"NoOfBytes": "4",
			"Offset": "28",
			"DataType": "ULONG"
		},
		"ulTotalNumDeallocations": {
			"NoOfBytes": "4",
			"Offset": "32",
			"DataType": "ULONG"
		},
		"ulTotalBytesRequested": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ULONG"
		},
		"ulTotalBytesDeallocated": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"ulCurrBytesAllocated": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "ULONG"
		},
		"ulMaxBytesAllocated": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"szAddressSpaceName": {
			"NoOfBytes": "1",
			"Offset": "52",
			"DataType": "STRING"
		}
	},
	"DEBUGIDLESTATS": {
		"fMyIdlePercent": {
			"NoOfBytes": "4",
			"Offset": "44",
			"DataType": "FLOAT"
		},
		"ulMySpare1": {
			"NoOfBytes": "4",
			"Offset": "48",
			"DataType": "ULONG"
		},
		"ulMySpare2": {
			"NoOfBytes": "4",
			"Offset": "52",
			"DataType": "ULONG"
		},
		"ulMySapre3": {
			"NoOfBytes": "4",
			"Offset": "56",
			"DataType": "ULONG"
		},
		"ulMySpare4": {
			"NoOfBytes": "4",
			"Offset": "60",
			"DataType": "ULONG"
		},
		"ulMySpare5": {
			"NoOfBytes": "4",
			"Offset": "64",
			"DataType": "ULONG"
		},
		"ulMySpare6": {
			"NoOfBytes": "4",
			"Offset": "68",
			"DataType": "ULONG"
		},
		"ulMySpare7": {
			"NoOfBytes": "4",
			"Offset": "72",
			"DataType": "ULONG"
		},
		"ulMySpare8": {
			"NoOfBytes": "4",
			"Offset": "76",
			"DataType": "ULONG"
		},
		"aclMyPerCoreIdleStats": {
			"NoOfBytes": "4",
			"Offset": "36",
			"DataType": "ClassArray"
		},
		"ulMyCoreIndex": {
			"NoOfBytes": "4",
			"Offset": "40",
			"DataType": "ULONG"
		},
		"CABO": ["40"],
		"CAAO": ["40"]
	},
	"DEBUGBROKEREVENTS": {
		"szMyPacketName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"ulMySibling": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "ULONG"
		},
		"ulMyDomain": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "ULONG"
		}
	},
	"DEBUGCOLLABEVENTS": {
		"szMyCollaboratorName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		}
	},
	"DEBUGEVENTSCONFIG": {
		"eMyEnabled": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		},
		"eMyEventType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "CCFEventTypeEnum"
		},
		"szMyCollaboratorName": {
			"NoOfBytes": "1",
			"Offset": "8",
			"DataType": "STRING"
		},
		"szMyPacketName": {
			"NoOfBytes": "1",
			"Offset": "9",
			"DataType": "STRING"
		},
		"ulMySibling": {
			"NoOfBytes": "4",
			"Offset": "89",
			"DataType": "ULONG"
		},
		"ulMyDomain": {
			"NoOfBytes": "4",
			"Offset": "93",
			"DataType": "ULONG"
		}
	},
	"DEBUGEVENTS": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"DEBUGEVENTTYPE": {
		"eMyEventType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CCFEventTypeEnum"
		}
	},
	"DEBUGGERMODE": {
		"eMyEnable": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "EnableEnum"
		}
	},
	"SETINSTRANSLATION": {
		"eMyOffset": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INSOffsetEnum"
		},
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "7",
			"DataType": "FixedDOUBLEArray"
		},
		"eMyInputFrame": {
			"NoOfBytes": "4",
			"Offset": "10",
			"DataType": "INSOffsetFrameEnum"
		}
	},
	"SETINSROTATION": {
		"eMyOffset": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INSOffsetEnum"
		},
		"adMyElements": {
			"NoOfBytes": "8",
			"Offset": "7",
			"DataType": "FixedDOUBLEArray"
		},
		"ulReserved": {
			"NoOfBytes": "4",
			"Offset": "10",
			"DataType": "ULONG"
		}
	},
	"DEBUGPROVIDERINFO": {
		"szMyPacketName": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		},
		"ulMySibling": {
			"NoOfBytes": "4",
			"Offset": "80",
			"DataType": "ULONG"
		},
		"ulMyDomain": {
			"NoOfBytes": "4",
			"Offset": "84",
			"DataType": "ULONG"
		},
		"szMyName": {
			"NoOfBytes": "1",
			"Offset": "132",
			"DataType": "STRING"
		},
		"ulMyProviderPeriod": {
			"NoOfBytes": "4",
			"Offset": "120",
			"DataType": "ULONG"
		},
		"ulMyProviderMinimumPeriod": {
			"NoOfBytes": "4",
			"Offset": "124",
			"DataType": "ULONG"
		},
		"aclMyRequestList": {
			"NoOfBytes": "4",
			"Offset": "128",
			"DataType": "ClassArray"
		},
		"ulMyRequestedPeriod": {
			"NoOfBytes": "4",
			"Offset": "164",
			"DataType": "ULONG"
		},
		"ulMyRequestedOffset": {
			"NoOfBytes": "4",
			"Offset": "168",
			"DataType": "ULONG"
		},
		"bMyUseMinimum": {
			"NoOfBytes": "4",
			"Offset": "172",
			"DataType": "BOOL"
		},
		"CABO": ["132"],
		"CAAO": ["44"]
	},
	"PGN129551": {
		"eMyPositionType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SolTypeEnum"
		},
		"fMyDifferentialLag": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "FLOAT"
		},
		"ulMyMilliseconds": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		}
	},
	"TRACKSTACKHWM": {
		"bMyTrackStackHWM": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BOOL"
		}
	},
	"PASSCCOM4": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		},
		"CABO": ["4"],
		"CAAO": ["80"]
	},
	"SORTEDSIGCHANMAP": {
		"aclMySigChanGroups": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "ClassArray"
		},
		"eMyMeasurementSource": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "MeasurementSourceEnum"
		},
		"aulMySigChans": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "VariableULONGArray"
		}
	},
	"INSSEEDOPTIONS": {
		"bMyCheckPosition": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "BOOL"
		},
		"bMyCheckVelocity": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "BOOL"
		},
		"bMyCheckAttitude": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "BOOL"
		}
	},
	"LBANDDECODEDFRAME": {
		"usServiceID": {
			"NoOfBytes": "2",
			"Offset": "0",
			"DataType": "USHORT"
		},
		"ucSpare": {
			"NoOfBytes": "1",
			"Offset": "504",
			"DataType": "UCHAR"
		},
		"aucUserData": {
			"NoOfBytes": "1",
			"Offset": "505",
			"DataType": "VariableUcharArray"
		}
	},
	"LBANDENCODEDFRAME": {
		"aucFrame": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"LBANDSOFTSYMFRAME": {
		"aucFrame": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableUcharArray"
		}
	},
	"PASSCCOM5": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PASSCCOM6": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PASSCCOM7": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"PASSCCOM8": {
		"szBuffer": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "VariableCHARArray"
		}
	},
	"DEBUGPHASE": {
		"ulMyPRN": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "PRN"
		},
		"eMySignalType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "SignalTypeEnum"
		},
		"ulMyIDNumber": {
			"NoOfBytes": "4",
			"Offset": "8",
			"DataType": "ULONG"
		}
	},
	"FORCECHANNELTYPE": {
		"eMySignalType": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "SignalTypeEnum"
		},
		"eMyHWChannelType": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "HWChannelTypeEnum"
		}
	},
	"CLOCKSTEERINGINPUT": {
		"eMyLastSystem": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "TimingSystemEnum"
		},
		"dMyLastOffsetSeconds": {
			"NoOfBytes": "8",
			"Offset": "4",
			"DataType": "DOUBLE"
		},
		"dMyLastOffsetStdDevSeconds": {
			"NoOfBytes": "8",
			"Offset": "12",
			"DataType": "DOUBLE"
		},
		"dMyLastRateSeconds": {
			"NoOfBytes": "8",
			"Offset": "20",
			"DataType": "DOUBLE"
		}
	},
	"RTKPORTMODE": {
		"eMyPort": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "CommPortEnum"
		},
		"eMyPortMode": {
			"NoOfBytes": "4",
			"Offset": "4",
			"DataType": "RTKPortModeEnum"
		}
	},
	"PDPVELLOG": {
		"szMyMessage": {
			"NoOfBytes": "1",
			"Offset": "0",
			"DataType": "STRING"
		}
	},
	"INSUPDATESOURCE": {
		"eMySource": {
			"NoOfBytes": "4",
			"Offset": "0",
			"DataType": "INSUpdateSourceEnum"
		}
	}
};