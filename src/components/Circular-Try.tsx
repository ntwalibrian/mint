import { useState } from 'react';

const logos = [
  {
    url: "https://gdfbbwwoargbwviquznn.supabase.co/storage/v1/object/sign/stock_logo/banner1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdG9ja19sb2dvL2Jhbm5lcjEucG5nIiwiaWF0IjoxNzM4NjY1NzU4LCJleHAiOjE3NzAyMDE3NTh9.qtBtj0-Z3cZFkfTBHfl6zlS-UM1721Fen6qrke_5GCA",
    alt: "IMR Logo",
  },
  {
    url: "https://gdfbbwwoargbwviquznn.supabase.co/storage/v1/object/sign/stock_logo/bk_icon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdG9ja19sb2dvL2JrX2ljb24uanBnIiwiaWF0IjoxNzM4NjY1ODA4LCJleHAiOjE3NzAyMDE4MDh9.AfXHfxjIYmbZxqUjoiCezngEWXN7-XwkKDbLKza1vwg",
    alt: "BK Icon",
  },
  {
    url: "https://gdfbbwwoargbwviquznn.supabase.co/storage/v1/object/sign/stock_logo/bralirwa_plc_logo.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdG9ja19sb2dvL2JyYWxpcndhX3BsY19sb2dvLmpwZWciLCJpYXQiOjE3Mzg2NjU4MjgsImV4cCI6MTc3MDIwMTgyOH0.v_z_EjJGwt7k8biiApSWWtPYhd-M6gHVsISMgRIHUzc",
    alt: "Bralirwa PLC Logo",
  },
  {
    url: "https://gdfbbwwoargbwviquznn.supabase.co/storage/v1/object/sign/stock_logo/cimerwappc_logo.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdG9ja19sb2dvL2NpbWVyd2FwcGNfbG9nby5qcGciLCJpYXQiOjE3Mzg2NjU4MzksImV4cCI6MTc3MDIwMTgzOX0.n8Bsu7ubMAXND14sLpqQRHg0ZpQnVntRBCbs990P2W0",
    alt: "Cimerwa PPC Logo",
  },
  {
    url: "https://gdfbbwwoargbwviquznn.supabase.co/storage/v1/object/sign/stock_logo/Equity.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdG9ja19sb2dvL0VxdWl0eS5wbmciLCJpYXQiOjE3Mzg2NjU4NjgsImV4cCI6MTc3MDIwMTg2OH0.3qjWBbW8EcJ0OR5WnrU1JoyVAC64-WywXwxqX2cWu20",
    alt: "Equity Bank Logo",
  },
  {
    url: "https://gdfbbwwoargbwviquznn.supabase.co/storage/v1/object/sign/stock_logo/kcb-group-plc-logo-png_seeklogo-392008.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdG9ja19sb2dvL2tjYi1ncm91cC1wbGMtbG9nby1wbmdfc2Vla2xvZ28tMzkyMDA4LnBuZyIsImlhdCI6MTczODY2NTg4MiwiZXhwIjoxNzcwMjAxODgyfQ.hIsKzghLACOksktWZctEAYBeg_PDjjFjM_hruNBj5mM",
    alt: "KCB Group PLC Logo",
  },
  {
    url: "https://gdfbbwwoargbwviquznn.supabase.co/storage/v1/object/sign/stock_logo/New-mtn-logo.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdG9ja19sb2dvL05ldy1tdG4tbG9nby5qcGciLCJpYXQiOjE3Mzg2NjU5MDIsImV4cCI6MTc3MDIwMTkwMn0.PFn25zG1R30QVjJos0aGufRoH2Dj0uC2F0h9Mm3nqt0",
    alt: "MTN Logo",
  },{
    url:"https://gdfbbwwoargbwviquznn.supabase.co/storage/v1/object/sign/stock_logo/csm_14553-1508_company_import_b4a6409cb1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdG9ja19sb2dvL2NzbV8xNDU1My0xNTA4X2NvbXBhbnlfaW1wb3J0X2I0YTY0MDljYjEuanBnIiwiaWF0IjoxNzM4NzM5MzkxLCJleHAiOjE3NzAyNzUzOTF9.gLOXcjulC06S4m8trmRkHMGSFMHGgSiimnlicbyLb04",
    alt:"NMG Logo",
},{
    url:"https://gdfbbwwoargbwviquznn.supabase.co/storage/v1/object/sign/stock_logo/RH-Logo-small-540x416.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdG9ja19sb2dvL1JILUxvZ28tc21hbGwtNTQweDQxNi5wbmciLCJpYXQiOjE3Mzg3Mzk1MzcsImV4cCI6MTc3MDI3NTUzN30.tD7mrz5HcaVm_JzVWUsVx-5AEPyr3DRpygqAiQ2qmWo",
    alt:"RH Logo",
},{
    url:"https://gdfbbwwoargbwviquznn.supabase.co/storage/v1/object/sign/stock_logo/rw-usl-logo-min.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdG9ja19sb2dvL3J3LXVzbC1sb2dvLW1pbi53ZWJwIiwiaWF0IjoxNzM4NzM5NjM3LCJleHAiOjE3NzAyNzU2Mzd9.letoJ0LpnM1vHGGQzmsDTyNm1kjK1iGLml62wAlIUKc",
    alt:"RW-USL Logo",
}

];

const CircularLogoAnimation = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Split logos into two rows
  const half = Math.ceil(logos.length / 2);
  const firstRow = logos.slice(0, half);
  const secondRow = logos.slice(half);

  return (
    <div className="relative w-96 h-96 p-4 rounded-lg bg-white/5 overflow-hidden">
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* First Row - Moves Left to Right */}
        <div className="flex justify-center space-x-4 mb-4 animate-moveLeftToRight">
          {firstRow.map((logo, index) => (
            <div
              key={index}
              className="w-16 h-16 transition-transform duration-800 ease-in-out"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`w-full h-full rounded-full bg-white p-1 transition-all duration-300 
                  ${hoveredIndex === index ? 'scale-120 shadow-lg shadow-indigo-500/40' : ''}`}
              >
                <img
                  src={logo.url}
                  alt={logo.alt}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - Moves Right to Left */}
        <div className="flex justify-center space-x-4 animate-moveRightToLeft">
          {secondRow.map((logo, index) => (
            <div
              key={index + firstRow.length}
              className="w-16 h-16 transition-transform duration-800 ease-in-out"
              onMouseEnter={() => setHoveredIndex(index + firstRow.length)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`w-full h-full rounded-full bg-white p-1 transition-all duration-300 
                  ${hoveredIndex === index + firstRow.length ? 'scale-120 shadow-lg shadow-indigo-500/40' : ''}`}
              >
                <img
                  src={logo.url}
                  alt={logo.alt}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CircularLogoAnimation;