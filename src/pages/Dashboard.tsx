import React from 'react';
import {
  Page,
  Layout,
  Card,
  TextStyle,
  ProgressBar,
  Button,
  DataTable,
} from '@shopify/polaris';
import { AlertTriangle } from 'lucide-react';

export default function Dashboard() {
  const lowStockItems = [
    ['White T-Shirt', '5', '50', 'Critical'],
    ['Blue Jeans', '8', '40', 'Warning'],
    ['Red Sneakers', '10', '30', 'Warning'],
  ];

  return (
    <Page title="Dashboard">
      <Layout>
        <Layout.Section oneHalf>
          <Card title="Inventory Overview">
            <Card.Section>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <TextStyle variation="strong">Sync Status</TextStyle>
                    <TextStyle variation="positive">Active</TextStyle>
                  </div>
                  <ProgressBar progress={100} size="small" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <TextStyle variation="strong">Last Sync</TextStyle>
                    <TextStyle>2 minutes ago</TextStyle>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <TextStyle variation="strong">Total Products</TextStyle>
                    <TextStyle>1,234</TextStyle>
                  </div>
                </div>
              </div>
            </Card.Section>
          </Card>
        </Layout.Section>

        <Layout.Section oneHalf>
          <Card title="Live Stream Status">
            <Card.Section>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <TextStyle variation="strong">Current Status</TextStyle>
                  <Button primary>Start Live</Button>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <TextStyle variation="strong">Today's Sales</TextStyle>
                    <TextStyle>$12,345</TextStyle>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <TextStyle variation="strong">Active Viewers</TextStyle>
                    <TextStyle>0</TextStyle>
                  </div>
                </div>
              </div>
            </Card.Section>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Card title="Low Stock Alerts">
            <Card.Section>
              <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
                <TextStyle variation="strong">3 products require attention</TextStyle>
              </div>
              <DataTable
                columnContentTypes={['text', 'numeric', 'numeric', 'text']}
                headings={['Product', 'Current Stock', 'Threshold', 'Status']}
                rows={lowStockItems}
              />
            </Card.Section>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}