const initialState = {
  products: [
    {
      price: 15.79,
      weight: 0.61949822,
      name: "A3 Magnetic Dry Wipe Weekly Planner Whiteboard for Fridge - Handy Week Calendar Organiser by Plan Smart - Bonus: 3 Quality Dry Erase Markers with Eraser Included",
      link: "https:www.amazon.co.ukMagnetic-Weekly-Planner-Whiteboard-FridgedpB0721KZHWTref=sr_1_17?ie=UTF8&qid=1537981729&sr=8-17&keywords=fridge+organisers",
      bsr_category: "Home & Kitchen",
      brand: "Plan Smart"
    },
    {
      price: 16.99,
      name: "RoLightic 5M Waterproof Led Strip Light, Multi-Color,SMD 5050 150LEDs Color Changing Flexible Led Strip Kit with 44 key Remote Controller + Power Adapter for Home Kitchen Cabinet Car TV Lighting Decoration",
      link: "https:www.amazon.co.ukgpslredirectpicassoRedirect.htmlref=pa_sp_atf_lighting_sr_pg1_2?ie=UTF8&adId=A01824483VTZ2HHF39SU6&url=https%3A%2F%2Fwww.amazon.co.uk%2FRoLightic-Waterproof-Multi-Color-Controller-Decoration%2Fdp%2FB01HI4E470%2Fref%3Dsr_1_2_sspa%3Fs%3Dlighting%26ie%3DUTF8%26qid%3D1537967510%26sr%3D1-2-spons%26keywords%3Dled%2Bstrip%26psc%3D1&qualifier=1537967510&id=4099832295186390&widgetName=sp_atf",
      bsr_category: "Home & Kitchen",
      brand: "RoLightic"
    },
    {
      price: 20.99,
      name: "IPX7 Waterproof Bike Light Set-1000 Lumen Mini Bicycle Headlight Free Rear Light-USB Fast Charge High Performance Rechargeable Battery Easy Install & Universal Fit Mount",  
      link: "https:www.amazon.co.ukgpslredirectpicassoRedirect.htmlref=pa_sp_btf_sports_sr_pg1_1?ie=UTF8&adId=A0688997GO4UK6T1XGAE&url=https%3A%2F%2Fwww.amazon.co.uk%2FWaterproof-Headlight-Light-USB-Performance-Rechargeable%2Fdp%2FB078PG3PLC%2Fref%3Dsr_1_55_sspa%3Fs%3Dsports%26ie%3DUTF8%26qid%3D1537972102%26sr%3D1-55-spons%26keywords%3Dmagnetic%2Bbike%2Blight%26psc%3D1&qualifier=1537972101&id=5895937329954661&widgetName=sp_btf",
      bsr_category: "Sports & Outdoors",
      brand: "uelfbaby"
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
};
