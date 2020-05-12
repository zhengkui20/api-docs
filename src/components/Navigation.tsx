import React from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'

/**
* TODO: Fix the nav here to match regular dev docs
*/
export const Navigation = () => {
  console.log('location rendered')
  return (
    <Location>
      {({ location }) => {
        const isActiveSubNavTab = (path: string) => {
          return location.pathname === path || location.pathname.indexOf(path) === 0
        }
        const isActiveRootTab = () => location.pathname === '/api/'
        return (
          <div className="navigation">
            <a href="https://cloudflare.com">
              <div className="logo">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 50 1074.3 293.7"  transform="scale(1.15)" xmlSpace="preserve">
                <style type="text/css">
                  {`.st0{fill:#404041;}`}
                  {`.st1{fill:#FFFFFF;}`}
                  {`.st2{fill:#F38020;}`}
                  {`.st3{fill:#FAAE40;}`}
                </style>
                <g>
                  <path class="st0" d="M790.6,271.9c-3.4,0-6.1-2.7-6.1-6.1c0-3.3,2.7-6.1,6.1-6.1c3.3,0,6.1,2.7,6.1,6.1
                    C796.7,269.1,793.9,271.9,790.6,271.9 M790.6,260.9c-2.7,0-4.9,2.2-4.9,4.9c0,2.7,2.2,4.9,4.9,4.9c2.7,0,4.9-2.2,4.9-4.9
                    C795.5,263.1,793.3,260.9,790.6,260.9 M793.7,269h-1.4l-1.2-2.3h-1.6v2.3h-1.3v-6.7h3.2c1.4,0,2.3,0.9,2.3,2.2c0,1-0.6,1.7-1.4,2
                    L793.7,269z M791.3,265.5c0.5,0,1-0.3,1-1c0-0.8-0.4-1-1-1h-2v2L791.3,265.5L791.3,265.5z"/>
                  <polygon class="st0" points="155.1,259.1 170.7,259.1 170.7,301.6 197.8,301.6 197.8,315.2 155.1,315.2  "/>
                  <path class="st0" d="M213.9,287.3v-0.2c0-16.1,13-29.2,30.3-29.2s30.1,12.9,30.1,29v0.2c0,16.1-13,29.2-30.3,29.2
                    C226.7,316.3,213.9,303.4,213.9,287.3 M258.5,287.3v-0.2c0-8.1-5.8-15.1-14.4-15.1c-8.5,0-14.2,6.9-14.2,15v0.2
                    c0,8.1,5.8,15.1,14.3,15.1C252.8,302.3,258.5,295.4,258.5,287.3"/>
                  <path class="st0" d="M293.4,290.6v-31.5h15.8v31.2c0,8.1,4.1,11.9,10.3,11.9s10.3-3.7,10.3-11.5v-31.6h15.8v31.1
                    c0,18.1-10.3,26-26.3,26C303.4,316.2,293.4,308.2,293.4,290.6"/>
                  <path class="st0" d="M369.4,259.1H391c20,0,31.7,11.5,31.7,27.7v0.2c0,16.2-11.8,28.2-32,28.2h-21.3L369.4,259.1L369.4,259.1z
                     M391.3,301.4c9.3,0,15.5-5.1,15.5-14.2v-0.2c0-9-6.2-14.2-15.5-14.2H385v28.5H391.3z"/>
                  <polygon class="st0" points="445.3,259.1 490.2,259.1 490.2,272.7 460.8,272.7 460.8,282.3 487.4,282.3 487.4,295.2 460.8,295.2 
                    460.8,315.2 445.3,315.2   "/>
                  <polygon class="st0" points="511.8,259.1 527.3,259.1 527.3,301.6 554.5,301.6 554.5,315.2 511.8,315.2  "/>
                  <path class="st0" d="M595.1,258.7h15l23.9,56.5h-16.7l-4.1-10h-21.6l-4,10h-16.3L595.1,258.7z M608.8,293.1l-6.2-15.9l-6.3,15.9
                    H608.8z"/>
                  <path class="st0" d="M654,259.1h26.5c8.6,0,14.5,2.2,18.3,6.1c3.3,3.2,5,7.5,5,13.1v0.2c0,8.6-4.6,14.3-11.5,17.2l13.4,19.6h-18
                    l-11.3-17h-6.8v17H654L654,259.1L654,259.1z M679.8,286c5.3,0,8.3-2.6,8.3-6.6v-0.2c0-4.4-3.2-6.6-8.4-6.6h-10.2V286L679.8,286
                    L679.8,286z"/>
                  <polygon class="st0" points="726.2,259.1 771.3,259.1 771.3,272.3 741.6,272.3 741.6,280.8 768.5,280.8 768.5,293.1 741.6,293.1 
                    741.6,302 771.7,302 771.7,315.2 726.2,315.2   "/>
                  <path class="st0" d="M121.1,293.9c-2.2,4.9-6.8,8.4-12.8,8.4c-8.5,0-14.3-7.1-14.3-15.1V287c0-8.1,5.7-15,14.2-15
                    c6.4,0,11.3,3.9,13.3,9.3h16.4c-2.6-13.4-14.4-23.3-29.6-23.3c-17.3,0-30.3,13.1-30.3,29.2v0.2c0,16.1,12.8,29,30.1,29
                    c14.8,0,26.4-9.6,29.4-22.4L121.1,293.9L121.1,293.9z"/>
                  <g>
                    <polygon class="st1" points="752.9,169.6 710,145 702.6,141.8 527.1,143 527.1,232.1 752.9,232.1    "/>
                    <path class="st2" d="M674.8,223.9c2.1-7.2,1.3-13.8-2.2-18.7c-3.2-4.5-8.6-7.1-15.1-7.4l-123.1-1.6c-0.8,0-1.5-0.4-1.9-1
                      c-0.4-0.6-0.5-1.4-0.3-2.2c0.4-1.2,1.6-2.1,2.9-2.2l124.2-1.6c14.7-0.7,30.7-12.6,36.3-27.2l7.1-18.5c0.3-0.8,0.4-1.6,0.2-2.4
                      c-8-36.2-40.3-63.2-78.9-63.2c-35.6,0-65.8,23-76.6,54.9c-7-5.2-15.9-8-25.5-7.1c-17.1,1.7-30.8,15.4-32.5,32.5
                      c-0.4,4.4-0.1,8.7,0.9,12.7c-27.9,0.8-50.2,23.6-50.2,51.7c0,2.5,0.2,5,0.5,7.5c0.2,1.2,1.2,2.1,2.4,2.1l227.2,0
                      c1.3,0,2.5-0.9,2.9-2.2L674.8,223.9z"/>
                    <path class="st3" d="M714,144.8c-1.1,0-2.3,0-3.4,0.1c-0.8,0-1.5,0.6-1.8,1.4l-4.8,16.7c-2.1,7.2-1.3,13.8,2.2,18.7
                      c3.2,4.5,8.6,7.1,15.1,7.4l26.2,1.6c0.8,0,1.5,0.4,1.9,1c0.4,0.6,0.5,1.5,0.3,2.2c-0.4,1.2-1.6,2.1-2.9,2.2l-27.3,1.6
                      c-14.8,0.7-30.7,12.6-36.3,27.2l-2,5.1c-0.4,1,0.3,2,1.4,2h93.8c1.1,0,2.1-0.7,2.4-1.8c1.6-5.8,2.5-11.9,2.5-18.2
                      C781.3,175,751.1,144.8,714,144.8"/>
                  </g>
                </g>
                </svg>

              </div>
            </a>
            <a href="https://developers.cloudflare.com">
              <span>Developers</span>
            </a>
            <Link
              to="/api/"
              className={'navigation-link' + (isActiveRootTab() ? ' active' : '')}
            >
              <span>Docs</span>
            </Link>
            <a href="https://developers.cloudflare.com/sponsorships/">
              <span>Sponsorships</span>
            </a>
            <a href="https://cloudflare.github.io/">
              <span>Open Source</span>
            </a>
            <a href="https://blog.cloudflare.com/serverlist/">
              <span>Serverlist Newsletter</span>
            </a>
          </div>
        )
      }}
    </Location>
  )
}