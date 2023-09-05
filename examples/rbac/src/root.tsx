// @refresh reload
import './root.css'
import { Suspense } from 'solid-js'
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  Link,
} from 'solid-start'
import { SessionProvider, createSession } from '@solid-mediakit/auth/client'
import { AbilityProvider } from '../../../packages/casl'
import { getAbilityFromSession } from './roles'

export default function Root() {
  return (
    <Html lang='en'>
      <Head>
        <Title>Create JD App</Title>
        <Meta charset='utf-8' />
        <Meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta name='theme-color' content='#026d56' />
        <Meta name='description' content='Generated by create-jd-app' />
        <Link rel='icon' href='/favicon.ico' />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <SessionProvider>
              <AbilityProvider
                getAbility={() => {
                  const session = createSession()
                  console.log(session())
                  return getAbilityFromSession(session())
                }}
              >
                <Routes>
                  <FileRoutes />
                </Routes>
              </AbilityProvider>
            </SessionProvider>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  )
}
