const ShowInfo = ({ item, sidepane }) => {
  return (
    <div className="py-3">
      <div className="item-details-page">
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-2 gap-6">
            <div className="font-medium col-span-1">
              <div className="pb-2 text-sm">Item Type</div>
              <div className="pb-2 text-sm">Unit</div>
              <div className="pb-2 text-sm">Created Source</div>
              <div className="pb-6 text-sm">Inventory Account</div>
              <div className="pb-6 text-base">Purchase Information</div>
              <div className="pb-2 text-sm">Cost Price</div>
              <div className="pb-2 text-sm">Purchase Account</div>
              <div className="pb-6 text-sm">Description</div>
              <div className="pb-6 text-base">Sales Information</div>
              <div className="pb-2 text-sm">Selling Price</div>
              <div className="pb-2 text-sm">Sales Account</div>
              <div className="pb-2 text-sm">Description</div>
            </div>
            <div className="col-span-2">
              <div className="pb-2 text-sm">Inventory Items</div>
              <div className="pb-2 text-sm">{item?.sku || "-"}</div>
              <div className="pb-2 text-sm">User</div>

              <div className="pb-6 text-sm">
                {item?.inventory_account || "-"}
              </div>
              <div className="pb-6 text-sm">-</div>
              <div className="pb-2 text-sm">₹{item?.rate || 0}</div>
              <div className="pb-2 text-sm">Cost of Goods Sold</div>
              <div className="pb-6 text-break">des</div>
              <div className="pb-6 text-sm">-</div>
              <div className="pb-2 text-sm">₹1,00,000.00</div>
              <div className="pb-2 text-sm">Sales</div>
              <div className="pb-2 text-break">des</div>
            </div>
          </div>
          {sidepane && (
            <div className="flex flex-col items-end">
              <div className="pb-2">
                <div className="font-medium">Opening Stock</div>
                <div className="font-semibold">{item?.opening_stock}</div>
              </div>
              <div className="pb-2">
                <div className="font-medium">Stock on Hand</div>
                <div className="font-semibold"> {item?.stock_in_hand}</div>
              </div>
              <div className="pt-6">
                <div className="font-medium">Committed Stock</div>
                <div className="font-semibold">0.00</div>
              </div>
              <div className="pt-2">
                <div className="font-medium">Available for Sale</div>
                <div className="font-semibold"> {item?.stock_in_hand}</div>
              </div>
              <div className="flex space-x-4 pt-6">
                <div className="qty-summary-card p-2 border border-gray-200 flex-1 text-center">
                  <div className="text-2xl font-light">0</div>
                  <div className="text-xs text-gray-500">
                    Qty To be Invoiced
                  </div>
                </div>
                <div className="qty-summary-card p-2 border border-gray-200 flex-1 text-center">
                  <div className="text-2xl font-light">0</div>
                  <div className="text-xs text-gray-500">Qty To be Billed</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ShowInfo.defaultProps = {
  sidepane: false,
};

export default ShowInfo;
