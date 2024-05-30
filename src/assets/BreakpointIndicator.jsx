
export const BreakpointIndicator = () => {
  return (
    <>
      <div className="d-block d-sm-none">Current Breakpoint: xs (extra-small)</div>
      <div className="d-none d-sm-block d-md-none">Current Breakpoint: sm (small)</div>
      <div className="d-none d-md-block d-lg-none">Current Breakpoint: md (medium)</div>
      <div className="d-none d-lg-block d-xl-none">Current Breakpoint: lg (large)</div>
      <div className="d-none d-xl-block d-xxl-none">Current Breakpoint: xl (extra-large)</div>
      <div className="d-none d-xxl-block">Current Breakpoint: xxl (extra-extra-large)</div>
    </>
  )
}
