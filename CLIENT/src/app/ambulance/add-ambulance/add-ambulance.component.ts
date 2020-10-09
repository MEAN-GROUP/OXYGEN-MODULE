import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {ServiceService} from '../../service.service';

@Component({
  selector: 'app-add-ambulance',
  templateUrl: './add-ambulance.component.html',
  styleUrls: ['./add-ambulance.component.scss']
})
export class AddAmbulanceComponent implements OnInit {

  hospitalId: string;
  hospitalName: string;
  ambulanceNo: string;
  ambulanceType: string;
  status: string;
  addAmbulance: FormGroup;
  sessionValues: any;
  ambulanceList: any;
  selectedAmb: any;
  selectedupdateAmb: any;
  indexOfDeleteAmb: any;
  isUpdate: any;

  constructor(  private service: ServiceService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.ambulanceList = []
    this.selectedAmb = {}
    this.isUpdate = false;
    this.sessionValues = {
      hospitalId: 'HOS16',
      hospitalName: "AMRI",
      ambCoordinatorId: 'COR45',
      ambCoordinatorName: 'M.S. DHONI'
    }
    this.service.getAmbulanceList(this.sessionValues.hospitalId, this.sessionValues.ambCoordinatorId).subscribe( result => {
      this.ambulanceList = result;
    }, err => {
      console.error(err);
    })


    this.addAmbulance = new FormGroup({
      hospitalId: new FormControl(this.sessionValues.hospitalId, [Validators.required]),
      hospitalName: new FormControl(this.sessionValues.hospitalName, [Validators.required]),
      ambCoordinatorId: new FormControl(this.sessionValues.ambCoordinatorId, [Validators.required]),
      ambCoordinatorName: new FormControl(this.sessionValues.ambCoordinatorName, [Validators.required]),
      ambulanceNo: new FormControl("", [Validators.required]),
      ambulanceType: new FormControl("", [Validators.required]),
      status: new FormControl("", []),
      remark: new FormControl("", [])
    });
  }

  insertData() {
   if(this.addAmbulance.valid) {
      this.service.addAmbulance(this.addAmbulance.value).subscribe( result => {
        if(result.success == 1) {
          this.ambulanceList.push(result.value)
          this.addAmbulance.patchValue({ambulanceType: '', ambulanceNo: '' })
        }
     }, error => {
          console.error('Error', error);
          alert(error.statusText);
         }
       )
   } else {
      alert("Error Enter valid data.");
   }
  }
  removeAmbulanceModal(index, x) {
    this.selectedAmb = x;
    this.indexOfDeleteAmb = index;
  }
  removeAmbulance() {
    this.service.deleteAmbulance(this.selectedAmb.ambulanceId).subscribe( result => {
      if(result.success == 1) {
        this.ambulanceList.splice(this.indexOfDeleteAmb, 1)
      }
    }, error => {
        console.error('Error', error);
        alert(error.statusText);
       }
    )
  }
  editAmbulanceModal(index, x) {
    if(this.selectedupdateAmb) {
      this.ambulanceList.push(this.selectedupdateAmb)
    }
    this.selectedupdateAmb = x;
    this.isUpdate = true;
    console.log(x)
    this.addAmbulance.patchValue({ambulanceType: x.ambulanceType, ambulanceNo: x.ambulanceNo, status: x.status, remark: x.remark })
    this.ambulanceList.splice(index, 1)
  }
  cancel() {
    this.ambulanceList.push(this.selectedupdateAmb)
    this.addAmbulance.patchValue({ambulanceType: '', ambulanceNo: '', status: '', remark: '' })
    this.isUpdate = false;
  }
  updateAmbulanceDetail() {
    let updateValue = {
      ambulanceType: this.addAmbulance.controls['ambulanceType'].value,
      ambulanceNo: this.addAmbulance.controls['ambulanceNo'].value,
      status: this.addAmbulance.controls['status'].value,
      remark: this.addAmbulance.controls['remark'].value
    }
    this.service.updateAmbulanceDetail(this.selectedupdateAmb.ambulanceId, updateValue).subscribe( result => {
      if(result.success == 1) {
        this.ambulanceList.push(this.addAmbulance.value)
        this.addAmbulance.patchValue({ambulanceType: '', ambulanceNo: '', status: '', remark: '' })
        this.isUpdate = false;
      }
    }, error => {
        console.error(error);
        alert(`${error.status}: ${error.statusText}`);
       }
    )
  }


}