import React from 'react';

export const FormTambahHasilLabPasien = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Tambah Hasil Lab Pasien {props.pasien.nama}</h2>
            <div className="form-group">
                <label>Jenis</label>
                <input type="text" className="form-control" name="jenis"/>
            </div>
            <div className="form-group">
                <label>Hasil Lab</label>
                <input type="text" className="form-control" name="hasil"/>
            </div>
            <div className="form-group">
                <label>Tanggal Pengajuan</label>
                <input type="date" className="form-control" name="tanggalPengajuan"/>
            </div>
            <div className="form-group">
                <input type="hidden" name="pasien.id" value={props.pasien.id}/>
            </div>
            <button className="btn btn-success" value="submit">Tambah</button>
        </form>
    )
}