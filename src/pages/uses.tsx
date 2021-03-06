import React from 'react';
import styled from 'styled-components';

import SEO from 'Molecules/Seo';
import Container from 'Atoms/Container';

interface IProps {
  href: string;
  children: React.ReactNode;
}

const Link = ({ href, children }: IProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const Uses = () => (
  <>
    <SEO title="Uses" />
    <Container>
      <Title>Jacob uses</Title>
      <p>
        Welcome to my &quot;Uses&quot; page, that lists some of the hardware and
        software I use on a daily basis.
      </p>

      <h2>Development Tools</h2>
      <List>
        <li>
          <strong>
            <Link href="https://code.visualstudio.com/">VS Code</Link>
          </strong>{' '}
          with the{' '}
          <strong>
            <Link href="https://marketplace.visualstudio.com/items?itemName=sdras.night-owl">
              Night Owl
            </Link>
          </strong>{' '}
          theme and{' '}
          <strong>
            <Link href="https://www.typography.com/fonts/operator/styles/operatormono">
              Operator Mono
            </Link>
          </strong>{' '}
          font
        </li>
        <li>
          <strong>
            <Link href="https://www.iterm2.com/">iTerm 2</Link>
          </strong>{' '}
          Terminal
        </li>
        <li>
          <strong>
            <Link href="https://www.sourcetreeapp.com/">Sourcetree</Link>
          </strong>{' '}
          for version control beyond the command line
        </li>
        <li>
          <strong>
            <Link href="https://insomnia.rest/">Insomnia</Link>
          </strong>{' '}
          to test REST API's
        </li>
      </List>

      <h2>Design Tools</h2>
      <List>
        <li>
          <strong>
            <Link href="https://www.sketch.com/">Sketch</Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link href="https://www.figma.com/">Figma</Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link href="https://affinity.serif.com/en-gb/photo/">
              Affinity Photo
            </Link>
          </strong>
          ,{' '}
          <strong>
            <Link href="https://affinity.serif.com/en-gb/designer/">
              Affinity Designer
            </Link>
          </strong>
          ,{' '}
          <strong>
            <Link href="https://affinity.serif.com/en-gb/publisher/">
              Affinity Publisher
            </Link>
          </strong>
        </li>
      </List>

      <h2>Productivity</h2>
      <List>
        <li>
          <strong>
            <Link href="https://www.notion.so/?r=008f1f1395694a2594659c43f8d666d8">
              Notion
            </Link>
          </strong>{' '}
          for notes and to-do lists
        </li>
        <li>
          <strong>
            <Link href="https://www.atlassian.com/software/jira">Jira</Link>
          </strong>{' '}
          for project management
        </li>
        <li>
          <strong>
            <Link href="https://slack.com/">Slack</Link>
          </strong>{' '}
          for communication
        </li>
        <li>
          <strong>
            <Link href="https://gsuite.google.com/">G-Suite</Link>
          </strong>{' '}
          for email, calendars and Google Drive
        </li>
      </List>

      <h2>Various other software</h2>
      <List>
        <li>
          <strong>
            <Link href="https://www.google.com/chrome/canary/">
              Google Chrome
            </Link>
          </strong>{' '}
          (Canary) for development
        </li>
        <li>
          <strong>
            <Link href="https://1password.com/">1Password</Link>
          </strong>{' '}
          as my password manager
        </li>
        <li>
          <strong>
            <Link href="https://www.backblaze.com/">Backblaze</Link>
          </strong>{' '}
          for constant backups of my machines
        </li>
        <li>
          <strong>
            <Link href="https://magnet.crowdcafe.com/">Magnet</Link>
          </strong>{' '}
          to manage windows
        </li>
      </List>

      <h2>Hardware</h2>
      <List>
        <li>
          <strong>
            <Link href="https://www.apple.com/macbook-pro/">
              Macbook Pro 15"
            </Link>
          </strong>{' '}
          (2.9 GHz i7, 16 GB 2133 MHz LPDDR3)
        </li>
        <li>
          <strong>
            <Link href="https://www.apple.com/uk/shop/product/MLA22B/A/magic-keyboard-british-english">
              Apple Magic Keyboard 2
            </Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link href="https://www.apple.com/uk/shop/product/MJ2R2Z/A/magic-trackpad-2-silver">
              Apple Magic Trackpad 2
            </Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link href="https://www.amazon.co.uk/LG-27UK850-Adjustable-DisplayPort-Freesync/dp/B07BJ9PL6H/ref=sr_1_1?dchild=1&keywords=LG+27UK850&qid=1587592902&sr=8-1">
              LG 27UK850
            </Link>
          </strong>{' '}
          4K monitor
        </li>
        <li>
          <strong>
            <Link href="https://www.amazon.co.uk/Rain-Design-mStand-Laptop-Stand/dp/B01F01DRW6/ref=sr_1_1?dchild=1&keywords=Rain+Design+mstand&qid=1587592918&sr=8-1">
              Rain Design mStand
            </Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link href="https://www.apple.com/uk/iphone-11-pro/">
              iPhone 11 Pro
            </Link>
          </strong>{' '}
          (256 GB)
        </li>
        <li>
          <strong>
            <Link href="https://www.bose.co.uk/en_gb/products/headphones/noise_cancelling_headphones/noise-cancelling-headphones-700.html#v=noise_cancelling_headphones_700_soapstone">
              Bose 700
            </Link>
          </strong>{' '}
          headphones
        </li>
        <li>
          <strong>
            <Link href="https://store.google.com/product/nest_wifi">
              Nest Wifi
            </Link>
          </strong>{' '}
          Mesh Network
        </li>
        <li>
          <strong>
            <Link href="https://store.google.com/product/google_home">
              Google Home
            </Link>
          </strong>{' '}
          to manage my smart home
        </li>
      </List>
    </Container>
  </>
);

export default Uses;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;

  @media print {
    font-size: 22pt;
  }
`;

const List = styled.ul`
  padding: 0 1rem;
  margin: 0;
  list-style: square;

  &:last-of-type {
    margin-bottom: 3rem;
  }
`;
