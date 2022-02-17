export const MEDICATIONS =[{
    "resourceType": "Medication",
    "id": "med0301",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative</b></p><div><p>Resource &quot;med0301&quot; </p></div><p><b>identifier</b>: id: ?ngen-9?</p><p><b>code</b>: Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE) <span> (<a>National drug codes</a>#0409-6531-02)</span></p><p><b>status</b>: active</p><p><b>marketingAuthorizationHolder</b>: <a> </a></p><blockquote><div><p>Resource &quot;mmanu&quot; </p></div><p><b>name</b>: Medication Manufacturer</p></blockquote><p><b>doseForm</b>: Injection Solution (qualifier value) <span> (<a>SNOMED CT</a>#385219001)</span></p><blockquote><p><b>ingredient</b></p><p><b>isActive</b>: true</p><p><b>strength</b>: 500 mg<span> (Details: UCUM code mg = 'mg')</span>/10 mL<span> (Details: UCUM code mL = 'mL')</span></p></blockquote><h3>Batches</h3><table><tr><td>-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td>*</td><td>9494788</td><td>2017-05-22</td></tr></table></div>"
    },
    "contained": [
      {
        "resourceType": "Organization",
        "id": "mmanu",
        "name": "Medication Manufacturer"
      }
    ],
    "identifier": [
      {
        "id": "123456789"
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://hl7.org/fhir/sid/ndc",
          "code": "0409-6531-02",
          "display": "Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE)"
        }
      ]
    },
    "status": "active",
    "marketingAuthorizationHolder": {
      "reference": "#mmanu"
    },
    "doseForm": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "385219001",
          "display": "Injection Solution (qualifier value)"
        }
      ]
    },
    "ingredient": [
      {
        "item": {
          "concept": {
            "coding": [
              {
                "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                "code": "66955",
                "display": "Vancomycin Hydrochloride"
              }
            ]
          }
        },
        "isActive": true,
        "strengthRatio": {
          "numerator": {
            "value": 500,
            "system": "http://unitsofmeasure.org",
            "code": "mg"
          },
          "denominator": {
            "value": 10,
            "system": "http://unitsofmeasure.org",
            "code": "mL"
          }
        }
      }
    ],
    "batch": {
      "lotNumber": "9494788",
      "expirationDate": "2017-05-22"
    }
}];
